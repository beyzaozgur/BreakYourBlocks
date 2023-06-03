# import pyrebase

# pip3 install pyrebase4 (other ways throws error)

# config = {
#   "apiKey": "AIzaSyBAhuVjZppmTSrCSBjVAojgPxVeW_m5HbQ",
#   "authDomain": "breakyourblocks-1.firebaseapp.com",
#   "databaseURL": "https://breakyourblocks-1-default-rtdb.firebaseio.com",
#   "projectId": "breakyourblocks-1",
#   "storageBucket": "breakyourblocks-1.appspot.com",
#   "messagingSenderId": "1080025825392",
#   "appId": "1:1080025825392:web:3c619bd0225c35486d34b5"
# }

# firebase = pyrebase.initialize_app(config)
# storage = firebase.storage()

# path_on_cloud = "images/foo.jpg"
# path_local = "app/api/preprocessing/BreakYourBlockLogo.jpeg"
# storage.child(path_on_cloud).put(path_local)

import os
import firebase_admin
from firebase_admin import credentials
from firebase_admin import storage

def get_audio_from_storage(formattedAudioFileName, testCompletitionTime):
    if not firebase_admin._apps: # code to prevent the following error : ValueError: The default Firebase app already exists.
        cred = credentials.Certificate('app/api/preprocessing/FirebaseAdminFile.json')
        firebase_admin.initialize_app(cred, {'storageBucket' : "breakyourblocks-1.appspot.com"})

    fileName = "userAudioRecordings/" + formattedAudioFileName + ".mp3"
    bucket = storage.bucket()
    blob = bucket.blob(fileName)

    download_file_path = "D:/MLIntegrationData/user-test-audio/" + formattedAudioFileName + '/' + testCompletitionTime
    parent_directory = os.path.dirname(download_file_path)
    os.makedirs(parent_directory, exist_ok=True)
    download_file = download_file_path + ".mp3"
    blob.download_to_filename(download_file)

    blob.make_public()

    print("your file url", blob.public_url)

    return download_file

