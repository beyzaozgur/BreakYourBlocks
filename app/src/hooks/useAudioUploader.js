import { useState } from 'react';
import * as DocumentPicker from 'expo-document-picker';
import {firebase} from '../../firebase';

const useAudioUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState(null);
  const [uri, setUri] = useState(null);

  // Function to select an audio file from the device
  const selectFile = async () => {
    try {
      const type = DocumentPicker.types?.audio || 'audio/*';
      const file = await DocumentPicker.getDocumentAsync({ type });

      setSelectedFile(file);
      setUri(file.uri);
    } catch (error) {
      setUploadError(error);
      console.log(error);
    }
  };

  // Function to upload the selected file to Firebase storage
   const uploadFile = async ({audioURI=null, folder, fileName}) => {
    
try{
   // console.log(folder);
   // console.log(fileName);
    const storageRef = firebase.storage().ref();
   
    
    if (!selectedFile) {
      if(audioURI!==null){
        // console.log(recording);
        // setSelectedFile(recording);
        
        setUri(audioURI);
     //    console.log(uri);
        }
    }
   
   // console.log(uri);

const fileRef = storageRef.child(`${folder}/${fileName}.mp3`);


const metadata = {
  contentType: 'audio/mpeg' // Set the content type to MPEG audio
};

const response = await fetch(uri);
const blob = await response.blob();

const uploadTask = fileRef.put(blob, metadata);

uploadTask.on('state_changed', 
  (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    setUploadProgress(progress);
  }, 
  (error) => {
    setUploadError(error);
    console.error(error);
  }, 
 async () => {
    const downloadUrl = await uploadTask.snapshot.ref.getDownloadURL();
      setSelectedFile(null);
      setUploadProgress(0);
      console.log('File uploaded to Firebase storage:', downloadUrl);
    console.log('File uploaded successfully');
  }
);
}catch (error) {
  setUploadError(error);
  console.log(error);
}

   };
  return {
    selectedFile,
    uploadProgress,
    uploadError,
    selectFile,
    uploadFile,
  };
};

export default useAudioUploader;