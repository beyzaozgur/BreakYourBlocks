import { useEffect, useState } from 'react';
import * as DocumentPicker from 'expo-document-picker';
import { firebase } from '../../firebase';
import { useToast } from "react-native-toast-notifications";
import ErrorMessageParser from '../utils/ErrorMessageParser';

const useAudioUploader = () => { // a hook to upload recordings and (admin) voice files
  const toast = useToast(); // toast object to show notifications

  const [selectedFile, setSelectedFile] = useState(null); // if admin uploads voice file, it is the selected file (from device)
  const [uploadProgress, setUploadProgress] = useState(0); // upload progress of 
  const [uploadError, setUploadError] = useState(null); // if there is an error while uploading, to show user
  const [uri, setUri] = useState(null); // uri of recording or file
  const [fileRef, setFileRef] = useState(null); // to upload db
  const [metadata, setMetadata] = useState(null); // metadata of file or recording

  const [testId, setTestId] = useState();
  const [userId, setUserId] = useState();
  const [fileName, setFileName] = useState(null);

  const FLASK_API_BACKEND = "http://192.168.1.106:3000/audio"; // ipv4 address for api connection

  useEffect(() => {
    if (uri) { // if uri is truthy, call fetchFile function
      fetchFile();
    }

  }, [uri, fileRef, metadata, testId, userId]); // dependencies of the effect, determines when to  rerun

  // Function to select an audio file from the device
  const selectFile = async () => {
    try {
      const type = DocumentPicker.types?.audio || 'audio/*'; // If DocumentPicker.types.audio is undefined, it sets type to 'audio/*'
      const file = await DocumentPicker.getDocumentAsync({ type }); // file that is selected
      // setting global variables
      setSelectedFile(file);
      setUri(file.uri);
    } catch (error) {
      setUploadError(error);
      console.log(error); // debugging purpose
    }
  };


  const fetchFile = async () => { // to fetch file to db
    
    try {
      const response = await fetch(uri); // that allows making network requests
      const blob = await response.blob(); // convert to a blob that is binary data of an audio file
      //Firebase storage location where the file should be uploaded is obtained using the fileRef object
      // put uploads to firebase and returns uploadTask
      const uploadTask = fileRef.put(blob, metadata); // blob and metadata is passed as parameters

      uploadTask.on('state_changed', //event listener for the upload state change
        (snapshot) => { // function takes a snapshot of the upload progress 
          // and calculates the percentage of the file that has been uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress); // set upload progress to global variable
        },
        (error) => { // function is triggered if an error occurs
          setUploadError(error); // set error to global variable
          console.error(error); // debugging purpose
          // toast.show(ErrorMessageParser(error.code), { type: 'normal' }); 
        },
        async () => { //  function is triggered when the upload is complete
          // gets the download URL of the uploaded file from the Firebase storage and set the global downloadURL
          const downloadUrl = await uploadTask.snapshot.ref.getDownloadURL();
          setSelectedFile(null);  // reset the selected file state using setSelectedFile
          setUploadProgress(0); // since upload is complete, set to 0
          console.log('File uploaded to Firebase storage:', downloadUrl); // debugging purpose
          console.log('File uploaded successfully'); // debugging purpose
          try {
            console.log("downloadUrl: " + downloadUrl);
            var obj = {
              parameter: downloadUrl.toString(),
              testID: testId,
              userID: userId,
              testCompletitionTime: fileName
            };
            const response =  await fetch(FLASK_API_BACKEND, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(obj), // firebase storage url of audio file is being sent to api as a parameter
            });

            if (response.ok) {
              console.log('Request successful');
            } else {
              console.error('Request failed:', response.status);
            }
            console.log("RESPONSE : " + JSON.stringify(response))
          } catch (err) {
            console.error(err);
          }
        }
      );
    } catch (error) {
      console.log(error); // debugging purpose
    }
  }

  // Function to upload the selected file to Firebase storage
  const uploadFile = async ({ audioURI = null, folder, fileName, testId, userId }) => {

    try {
      const storageRef = firebase.storage().ref(); // firebase storage ref
       //Firebase storage location where the file should be uploaded 
      const fileRef_ = storageRef.child(`${folder}/${fileName}.mp3`); 
      setTestId(testId);
      setUserId(userId);
      setFileName(fileName);
      setFileRef(fileRef_) // setting global variable
      if (!selectedFile && !!audioURI) { // if there is no selected file that means it is a recording and audioURI is truthy
        setUri(audioURI); // set global uri variable
      }

      const metadata_ = { // metadata that is information about file
        contentType: 'audio/mp3' // Set the content type to MP3 audio
      };
      setMetadata(metadata_);

    } catch (error) {
      setUploadError(error);
      console.log(error);
      //  toast.show(ErrorMessageParser(error.code), { type: 'normal' }); 
    }

  };
  return { // return functions and attributes to use anywhere
    selectedFile,
    uploadProgress,
    uploadError,
    selectFile,
    uploadFile,
  };
};

export default useAudioUploader;