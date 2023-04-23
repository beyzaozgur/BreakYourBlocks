import React, { useState } from 'react';
import { Text, View } from 'react-native';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
//import {firebase} from '../../../../firebase';
import useAudioUploader from '../../../hooks/useAudioUploader';

const AddAudio = () => {
   
    const {
        selectedFile,
        uploadProgress,
        uploadError,
        selectFile,
        uploadFile,
      } = useAudioUploader();
    const [fileName, setFileName] = useState('');
    const handleFileNameChange = (fileName) => {
      setFileName(fileName);
    };
    
      return (
        <View style={{ padding: 50 }}>
          <Button text="Select Audio File" onPress={selectFile} />
          {selectedFile && (
            <View style={{ marginTop: 20 }}>
              <Text>Selected File: {selectedFile.name}</Text>
              <Input placeholder={'File Name'} value={fileName} onChangeText={handleFileNameChange}></Input>
              <Text>Progress: {uploadProgress.toFixed(2)}%</Text>
              {uploadError && <Text style={{ color: 'red' }}>{uploadError.message}</Text>}
              <Button text="Upload File" onPress={() => uploadFile({folder:'testAudios',fileName:fileName})} />
            </View>
          )}
          
        </View>
      );
    };
    


export default AddAudio;