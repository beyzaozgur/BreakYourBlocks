import os
import pydub

def convert_to_wav(uri, formattedFileName):
    print("URI : " + uri)
    audio = pydub.AudioSegment.from_file(uri)

    output_path = 'C:/MLIntegrationData/wav-audio/' + formattedFileName
    parent_directory = os.path.dirname(output_path)
    os.makedirs(parent_directory, exist_ok=True)

    output_file = output_path + ".wav"

    audio.export(output_file, format='wav')
    
    print("COVERT TO WAV OUTPUT FILE : " + output_file)
    return output_file
