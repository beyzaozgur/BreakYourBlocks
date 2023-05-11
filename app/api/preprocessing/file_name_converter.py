import re

# string = "https://firebasestorage.googleapis.com/v0/b/breakyourblocks-1.appspot.com/o/userAudioRecordings/L9MzdrJSYFdXaFiXSfV9WdJmnCp1/7lTyvWSzBIJFF5QRiUqK/BEYZA.mp3?alt=media&token=58c55f03-8ad8-4265-ae38-1ae437fd4b61"

def convert_file_name(fileName):
    # Extract the part between "userAudioRecordings/" and ".mp3"
    result = re.search(r'userAudioRecordings/(.*?)\.mp3', fileName)

    extracted_part = result.group(1)
    print("EXTRACTED PART : " + extracted_part)
    return extracted_part