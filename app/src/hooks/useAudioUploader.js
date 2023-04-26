import { useState } from 'react';
import * as DocumentPicker from 'expo-document-picker';
import {firebase} from '../../firebase';

import ErrorMessageParser from '../utils/ErrorMessageParser';
import { useToast } from "react-native-toast-notifications";

const useAudioUploader = () => {
  const toast = useToast();

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState(null);
  const [isUploadSucceed, setIsUploadSucceed]=useState(false);
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
  const uploadFile = async ({folder, fileName }) => {

    try {
      const storageRef = firebase.storage().ref();

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
          // toast.show(ErrorMessageParser(error.code), { type: 'normal' }); 
        },
        async () => {
          const downloadUrl = await uploadTask.snapshot.ref.getDownloadURL();
          setSelectedFile(null);
          setUploadProgress(0);
          console.log('File uploaded to Firebase storage:', downloadUrl);
          console.log('File uploaded successfully');
          setIsUploadSucceed(true);
          // toast.show("Successfully uploaded!", { type: 'success' }); 
        },
      );
    } catch (error) {
      setUploadError(error);
      console.log(error);
      // toast.show(ErrorMessageParser(error.code), { type: 'normal' }); 
    }

  };

  const uploadRecording = async ({ audioURI, folder, fileName }) => {

    try {
      const storageRef = firebase.storage().ref();

          setUri(audioURI);


      const fileRef = storageRef.child(`${folder}/${fileName}.mp3`);


      const metadata = {
        contentType: 'audio/mpeg' // Set the content type to MPEG audio
      };

      const response = await fetch(uri);
      const blob = await response.blob();

      return new Promise((resolve, reject) => {

     const uploadTask = fileRef.put(blob, metadata);

      uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        reject(error);
      },
      async () => {
        const downloadUrl = await uploadTask.snapshot.ref.getDownloadURL();
        console.log('File uploaded to Firebase storage:', downloadUrl);
        resolve(downloadUrl);
      }
    );  });     
      
    } catch (error) {
      console.log(error);
    }

  };





  return {
    selectedFile,
    uploadProgress,
    uploadError,
    isUploadSucceed,
    setUploadError,
    setIsUploadSucceed,
    selectFile,
    uploadFile,
    uploadRecording
  };
};

export default useAudioUploader;