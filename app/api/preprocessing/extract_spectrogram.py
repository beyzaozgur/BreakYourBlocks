import os
import matplotlib.pyplot as plt
import numpy as np
import librosa
import librosa.display

def extract_spectrograms(noise_removed_clips, formattedFileName):

    spectrogram_dir = 'D:/MLIntegrationData/spectrograms/' + formattedFileName + '/'
    os.makedirs(spectrogram_dir, exist_ok=True)

    # Loop through the folder and subfolders containing the files to remove noise
    for root, dirs, files in os.walk(noise_removed_clips):
        for filename in files:
            # Path to the file
            file_path = os.path.join(root, filename)
            if os.path.isfile(file_path) and file_path.endswith(".wav"):
                # Get the relative path of the file
                relative_path = os.path.relpath(file_path, noise_removed_clips)
                # Construct the path to output the spectrogram file
                output_spec_path = os.path.join(spectrogram_dir, os.path.splitext(relative_path)[0] + '_spec.png')
                # Check if the spectrogram file already exists
                if os.path.exists(output_spec_path):
                    continue
                # Read the WAV file and convert it to mono
                waveform, sample_rate = librosa.load(file_path, mono=True)
                # Generate the spectrogram
                spectrogram = librosa.feature.melspectrogram(y=waveform, sr=sample_rate)
                spectrogram_db = librosa.power_to_db(spectrogram, ref=np.max)
                # Plot and save the spectrogram
                plt.figure(figsize=(10, 4))
                librosa.display.specshow(spectrogram_db, sr=sample_rate, x_axis='time', y_axis='mel')
                plt.colorbar(format='%+2.0f dB')
                plt.title('Spectrogram')
                plt.tight_layout()
                plt.savefig(output_spec_path)
                plt.close()

    return spectrogram_dir
