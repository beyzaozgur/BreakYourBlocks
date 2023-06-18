import os
import pydub
import json

def convert_to_wav(uri, formattedFileName, testCompletitionTime):
    print("URI : " + uri)
    audio = pydub.AudioSegment.from_file(uri)

    config_path = os.path.join('.', 'app', 'config.json')
    with open(config_path) as file:
        config = json.load(file)
    wav_path = config['wavPath']
    output_path = wav_path + formattedFileName + '/' + testCompletitionTime
    parent_directory = os.path.dirname(output_path)
    os.makedirs(parent_directory, exist_ok=True)

    output_file = output_path + ".wav"

    audio.export(output_file, format='wav')
    
    print("COVERT TO WAV OUTPUT FILE : " + output_file)
    return output_file
