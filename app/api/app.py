from flask import Flask, jsonify
from flask import request
from flask_cors import CORS
import json

from preprocessing.extract_clips import *
from preprocessing.noise_removal import *
from preprocessing.extract_spectrogram import *
from preprocessing.convert_to_wav import *
from preprocessing.file_name_converter import *
from preprocessing.download_audio_from_storage import *
from model.load_model_and_predict import *

app = Flask(__name__)
CORS(app)

@app.route('/audio', methods = ['POST'])
def process_user_audio():
    obj = request.get_json()

    # dumps the json object into an element
    json_str = json.dumps(obj)

    # load the json to a string
    data = json.loads(json_str)

    # get firebase storage url of audio, testID, userID, test date
    string_parameter = data['parameter']
    testId = data['testID']
    userId = data['userID']
    testCompletitionTime = data['testCompletitionTime']

    string_parameter_formatted  = string_parameter.replace("%2F", "/")

    formattedFileName = convert_file_name(string_parameter_formatted)

    user_test_audio_path = get_audio_from_storage(formattedFileName, testCompletitionTime)

    print("USER TEST AUDIO PATH : " + user_test_audio_path)

    ###

    # CONVERT AUDIO TO WAV
    input_wav_file = convert_to_wav(user_test_audio_path, formattedFileName, testCompletitionTime)

    # EXTRACT CLIPS
    clipped_wav_path = split_wav_file(input_wav_file, formattedFileName, testCompletitionTime)

    # REMOVE NOICE
    noise_removed_clips = remove_noice_from_clips(clipped_wav_path, formattedFileName)

    # EXTRACT SPECTROGRAMS
    spectrogram_dir = extract_spectrograms(noise_removed_clips, formattedFileName)

    print("PREPROCESSING IS COMPLETED!")

    load_model_and_predict(spectrogram_dir, testId, userId, testCompletitionTime)

    print("PREDICTION IS COMPLETED!")

    ###

    return json.dumps({ "text": "Audio successfully processed!" }), 200

if __name__ == "__main__":
    config_path = os.path.join('.', 'app', 'config.json')
    with open(config_path) as file:
        config = json.load(file)
    ipAddr = config['ipAddress']
    app.run(host=ipAddr, port=3000, debug=True) # ipv4 address of the machine
