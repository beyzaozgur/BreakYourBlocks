import React, { useState } from 'react';
import { Text, View } from 'react-native';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
//import {firebase} from '../../../../firebase';
import useAudioUploader from '../../../hooks/useAudioUploader';
import colors from '../../../styles/colors';

const AddAudio = () => {
   
    const {
      selectedFile,
      uploadProgress,
      uploadError,
      isUploadSucceed,
      setUploadError,
      setIsUploadSucceed,
      selectFile,
      uploadFile,
      } = useAudioUploader();
    const [fileName, setFileName] = useState('');
    const handleFileNameChange = (fileName) => {
      setFileName(fileName);
    };
    
      return (
        <View style={{ padding: 50, backgroundColor:colors.darkgreen, flex:1 }}>
          <View style={{ padding: 50, backgroundColor:colors.green, flex:1, borderWidth:2, borderColor:colors.grayish, borderRadius:5 }}>
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
        </View>
      );
    };
    


export default AddAudio;