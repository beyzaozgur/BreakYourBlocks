import React, { useState, useEffect } from 'react';
import {Text, View, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Audio } from 'expo-av';
import * as Sharing from 'expo-sharing';
import Svg, { Path, LinearGradient, Stop, Defs } from 'react-native-svg';
import { useCountdown } from 'react-native-countdown-circle-timer';
import * as FileSystem from 'expo-file-system';

import styles from './Tests.style';
import playSound from '../../../hooks/playSound';
import useAudioUploader from '../../../hooks/useAudioUploader';
import { firebase } from '../../../../firebase';
import Button from '../../../components/Button';

const Tests = ({ route, navigation }) =>  {
  const [recording, setRecording] = useState();
  // const [recordings, setRecordings] = useState([]);
  const [recordContinues, setRecordingContinues] = useState();
  const [recordingContent, setRecordingContent] = useState([]);
  const [message, setMessage] = useState("");
  const [audioURI, setAudioURI] = useState(null);
  const [audioName, setAudioName] = useState(null);
  const [recordingStatus, setRecordingStatus] = useState(null);
  const [isPlayed, setIsPlayed] = useState(false);

  const duration = route.params.duration;
  const audio = route.params.sound;
  const key = route.params.key;
  
  const randomTime = Math.floor(Math.random() * duration); // [0, duration)

  const executeOnLoad = () => {
    stopRecording();
    startRecording();
  };

  const {
    path,
    pathLength,
    stroke,
    strokeDashoffset,
    remainingTime,
    elapsedTime,
    size,
    strokeWidth,
  } = useCountdown({ isPlaying: true, duration, colors: 'url(#linearGradientId)' });

  const {
    play, 
    stop,
    isPlaying,

} = playSound(audio);

const {
  selectedFile,
  uploadProgress,
  uploadError,
  selectFile,
  uploadFile,
} = useAudioUploader();


  useEffect(() => {
    // const unsubscribe = navigation.addListener('blur', () => {      
    //   stopRecording();
    // });

    const unsubscribeBlur = navigation.addListener('blur', () => {
      stopRecording();
    });
    const unsubscribeFocus = navigation.addListener('focus', () => {
      stopRecording();
    });

    let formattedElapsedTime = parseFloat(elapsedTime.toFixed(0));
    if (formattedElapsedTime == duration) {
      stopRecording();
    }

    return () => {
      unsubscribeBlur();
      unsubscribeFocus();
    };

   // return unsubscribe;
  }, [elapsedTime, duration, navigation]);

  
  useEffect(() => {
     
     if(!isPlayed){
      if(randomTime == parseFloat((elapsedTime).toFixed(0))){
      
       setIsPlayed(true);
         play();
      }
     }
     
  }, [elapsedTime]);


  async function startRecording() {
    try {
            
      setRecordingContinues(true);

      const permission = await Audio.requestPermissionsAsync();

      if (permission.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true
        });

        const { recording } = await Audio.Recording.createAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );

        setRecording(recording);
      

      } else {
        setMessage("Please grant permission to app to access microphone.");
      }
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }


 
  async function stopRecording() {
  if(recording){
    stop();
    setRecordingContinues(false);

    if(recordingStatus){
      return;
    }
    
      setRecordingStatus(await recording.stopAndUnloadAsync());
    
    
    
    const { sound, status } = await recording.createNewLoadedSoundAsync();
 
    const name =/* `${Date.now()}aaaa`;*/ 'myyyy';
   
      setAudioURI(recording.getURI());
      setAudioName(name);
      setRecordingContent({
      sound: sound,
      duration: getDurationFormatted(status.durationMillis),
      file: recording.getURI()
    });
    }
  }

  function getDurationFormatted(millis) {
    const minutes = millis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesDisplay) * 60);
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesDisplay}:${secondsDisplay}`;
  }


///// This code snippet plays the user recorded audio from db - start
// For now we do not upload audios of users to db as .mp3 but we can handle it when downloading
/*const [sound, setSound] = useState();
async function playFromFireBase(){
  try {
    // Download the audio file from Firebase Storage
    const downloadUrl = await firebase.storage().ref('userAudioRecordings/vjeCNeaUzlWKbrFBC7vW0v66r8v1/yFQg2ausnzq4jTFFjvwi/myyyy.mp3').getDownloadURL();
    const downloadFile = await FileSystem.downloadAsync(downloadUrl, FileSystem.documentDirectory + 'audio.mp3');
    // Create a new sound instance from the downloaded file
    const { sound } = await Audio.Sound.createAsync({ uri: downloadFile.uri });
    setSound(sound);
  } catch (error) {
    console.log('Error loading sound:', error);
  }

  try {
    // Play the sound
    await sound.playAsync();
  } catch (error) {
    console.log('Error playing sound:', error);
  }
}*/
//////////// end

  function getRecordingLines() {
    const folder = `userAudioRecordings/${firebase.auth().currentUser.uid}/${key}`;
       
   
    
    return (
      <View style={styles.row}>
        <Text style={styles.fill}>Recording - {recordingContent.duration}</Text>
        <Button theme='little' onPress={() => recordingContent.sound.replayAsync()} text="Play"></Button>
        <Button theme='little' onPress={() => uploadFile({audioURI: audioURI , folder: folder,fileName:audioName})} text="Save"></Button>
      </View>
    );
  }

  return (
    <View style={styles.container} onLayout={executeOnLoad}>
      <View style={styles.timerContainer}>
        <View style={{ width: 65, height: 65, position: 'relative' }}>
          <Svg width={size} height={size} preserveAspectRatio="xMinYMin slice" viewBox="0 0 500 500">
            <Defs>
              <LinearGradient id="linearGradientId" x1="1" y1="0" x2="0" y2="0">
                <Stop offset="5%" stopColor="gold" />
                <Stop offset="95%" stopColor="red" />
              </LinearGradient>
            </Defs>
            <Path
              d={path}
              fill="none"
              stroke="#d9d9d9"
              strokeWidth={strokeWidth}
            />
            {recordContinues && elapsedTime !== duration && (
              <Path
                d={path}
                fill="none"
                stroke={stroke}
                strokeLinecap="butt"
                strokeWidth={strokeWidth}
                strokeDasharray={pathLength}
                strokeDashoffset={strokeDashoffset}
              />
            )}
          </Svg>
          <View style={styles.time}>
            <Text style={{ fontSize: 25 }}>{recordContinues ? remainingTime : 0}</Text>
          </View>
        </View>
      </View>
      
      <Text style={styles.testTitle}>Test 10</Text>
      <View style={styles.testBox}>
        <Text style={styles.testContent}>{route.params.testContent}
        </Text>
      </View>
      <Text>{message}</Text>
      <View style={styles.buttonContainer}>
      <Button onPress={stopRecording} text={'Complete Test'}></Button>
      </View>
      {!recordContinues ? getRecordingLines() : null}
      <StatusBar style="auto" />
    </View>
  );
}

export default Tests;

