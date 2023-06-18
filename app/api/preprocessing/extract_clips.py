import os
import wave
import math
import json

def split_wav_file(input_file, formattedFileName, testCompletitionTime):
    config_path = os.path.join('.', 'app', 'config.json')
    with open(config_path) as file:
        config = json.load(file)
    extracted_clips_path = config['extactedClipsPath']
    output_file_prefix = extracted_clips_path + formattedFileName + '/' + testCompletitionTime
    parent_directory = os.path.dirname(output_file_prefix)
    os.makedirs(parent_directory, exist_ok=True)

    # Open the input WAV file
    with wave.open(input_file, 'rb') as wav_file:
        # Get the number of frames and frame rate
        num_frames = wav_file.getnframes()
        frame_rate = wav_file.getframerate()

        # Calculate the duration of each clip in frames
        clip_duration = int(frame_rate * num_frames)

        # Calculate the total number of clips
        num_clips = math.ceil(num_frames / clip_duration)

        # Iterate over each clip
        for clip_index in range(num_clips):
            # Calculate the start and end frames for the current clip
            start_frame = clip_index * clip_duration
            end_frame = min(start_frame + clip_duration, num_frames)

            # Set the position of the input file to the start frame
            wav_file.setpos(start_frame)

            # Read the frames for the current clip
            frames = wav_file.readframes(end_frame - start_frame)
            # Create the output file name for the current clip

            output_file = f"{output_file_prefix}_{clip_index}.wav"

            # Open the output WAV file for writing
            with wave.open(output_file, 'wb') as output_wav:
                # Set the parameters for the output file
                output_wav.setparams(wav_file.getparams())

                # Write the frames to the output file
                output_wav.writeframes(frames)

            print(f"Clip {clip_index+1} saved as {output_file}.")

    print(parent_directory)
    return parent_directory