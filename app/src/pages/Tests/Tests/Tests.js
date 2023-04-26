import React, { useState, useEffect } from 'react';
import { Text, View, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Audio } from 'expo-av';
import * as Sharing from 'expo-sharing';
import Svg, { Path, LinearGradient, Stop, Defs } from 'react-native-svg';
import { useCountdown } from 'react-native-countdown-circle-timer';
import { useToast } from "react-native-toast-notifications";
import { useIsFocused } from '@react-navigation/native';


import styles from './Tests.style';
import playSound from '../../../hooks/playSound';
import useAudioUploader from '../../../hooks/useAudioUploader';
import { firebase } from '../../../../firebase';
import Button from '../../../components/Button';

const Tests = ({ route, navigation }) => {

  const isFocused = useIsFocused();

  const [recording, setRecording] = useState();
  const [recordEndedSuccessfully, setRecordEndedSuccessfully] = useState(false);
  const [unsuccessfulRecord, setUnsuccessfulRecord] = useState(false);
  const [recordContinues, setRecordingContinues] = useState();

  const [recordingContent, setRecordingContent] = useState([]);
  /* const [message, setMessage] = useState("");*/
  const [audioURI, setAudioURI] = useState(null);
  const [audioName, setAudioName] = useState(null);

  const [isPlayed, setIsPlayed] = useState(false);
  const [isAutoSave, setAutoSave] = useState(false);

  const toast = useToast();

  const duration = route.params.duration;
  const audio = route.params.sound;
  const key = route.params.key;
  const [testDuration, setTestDuration] = useState();

  const userId = route.params.userID;
  const testId = key;


  const randomTime = Math.floor(Math.random() * duration);
  const folder = `userAudioRecordings/${firebase.auth().currentUser.uid}/${key}`; // userAudioRecordings/user/test


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
    isUploadSucceed,
    setUploadError,
    setIsUploadSucceed,
    selectFile,
    uploadFile,
    uploadRecording
  } = useAudioUploader();

  const executeOnLoad = () => {
    //  stopRecording();
    startRecording();
  };

  useEffect(() => {


    const unsubscribeBlur = navigation.addListener('blur', () => {
      stopRecording();
     // setUnsuccessfulRecord(true);
      toast.show('Unsuccessful recording!');
    });
   /* const unsubscribeFocus = navigation.addListener('focus', () => {
      stopRecording();
      //  setUnsuccessfulRecord(true);
      //  toast.show('Unsuccessful recording!');
    });*/

  /*  if(!isFocused){
      stopRecording();
      toast.show('Unsuccessful recording!');
    }*/


    if (Math.trunc(elapsedTime) == duration && recordContinues) {
      
         completeTest();
         uploadRecording({ audioURI: audioURI, folder: folder, fileName: audioName })
         .then((downloadUrl) => {
           toast.show("Successfully uploaded!", { type: 'success' }); 
           console.log('Upload successful, download URL:', downloadUrl);
         })
         .catch((error) => {
           console.error('Error uploading file:', error);
           toast.show(ErrorMessageParser(error.code), { type: 'normal' }); 
         })   
         setAutoSave(true);   
     
    }

    return () => {
      unsubscribeBlur();
    //  unsubscribeFocus();
    };

    // return unsubscribe;
  }, [elapsedTime, duration, navigation]);

 /* useEffect(() => {
    
  }, [uploadError]);*/

  useEffect(() => {

    if (!isPlayed) {
      if (randomTime == parseFloat((elapsedTime).toFixed(0))) {
        setIsPlayed(true);
        play();
      }
    }

  }, [elapsedTime]);


  function addCompletedTest() {
    firebase
      .firestore()
      .collection('completedTestUserMapping')
      .add({
        userID: userId,
        testID: testId,
        // sound: recordingContent.sound,
        testDuration: elapsedTime.toFixed(2),
        file: recording.getURI(),
        completitionDate: firebase.firestore.FieldValue.serverTimestamp()
      });
  }



  function getDateAndTime() {
    const currentDate = new Date(); // create a new Date object with the current date and time
    const currentYear = currentDate.getFullYear(); // get the current year (4 digits)
    const currentMonth = currentDate.getMonth() + 1; // get the current month (1-12) - note that months are zero-indexed, so we add 1
    const currentDay = currentDate.getDate(); // get the current day of the month (1-31)
    const currentHour = currentDate.getHours(); // get the current hour (0-23)
    const currentMinute = currentDate.getMinutes(); // get the current minute (0-59)
    const currentSecond = currentDate.getSeconds(); // get the current second (0-59)

    return currentDay + "." + currentMonth + "." + currentYear + " " + currentHour + "." + currentMinute + "." + currentSecond
  }


  async function startRecording() {
    try {

      setRecordingContinues(true);

      const permission = await Audio.requestPermissionsAsync();

      if (permission.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true
        });

        const { recording} = await Audio.Recording.createAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );

        setRecording(recording);


      } else {
        //  setMessage("Please grant permission to app to access microphone.");
        toast.show('Please grant permission to app to access microphone.', { type: 'danger' });
      }
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function completeTest() {
    setRecordEndedSuccessfully(true);
    stopRecording(); 
  }

  async function stopRecording() {
    try{
    setIsPlayed(true);
    if (recording) {
      stop();
      setRecordingContinues(false);

      await recording.stopAndUnloadAsync();


      const { sound, status } = await recording.createNewLoadedSoundAsync();

      //const name =/* `${Date.now()}aaaa`;*/ 'myyyy';

      setAudioURI(recording.getURI());
      setAudioName(getDateAndTime());
      setRecordingContent({
        sound: sound,
        duration: status.durationMillis / 1000, // test duration in seconds
        file: recording.getURI()
      });
      setRecording(null);
      setTestDuration(status.durationMillis / 1000);
      addCompletedTest();

      console.log("TEST ADDED");
    }
  } catch (error) {
  console.error('Failed to stop recording:', error);
}}


/*  function getRecordingLines() {

    return (
      
    );
  }*/

 

  return (
    <View style={styles.container} onLayout={executeOnLoad}>
      <View style={styles.timerContainer}>
        <View style={{ width: 65, height: 65, position: 'relative' }}>
          {recordContinues && Math.trunc(elapsedTime) !== duration && (
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

              <Path
                d={path}
                fill="none"
                stroke={stroke}
                strokeLinecap="butt"
                strokeWidth={strokeWidth}
                strokeDasharray={pathLength}
                strokeDashoffset={strokeDashoffset}
              />

            </Svg>
          )}
          <View style={styles.time}>
            <Text style={{ fontSize: 25 }}>{recordContinues ? remainingTime : 0}</Text>
          </View>
        </View>
      </View>

      <Text style={styles.testTitle}>Test {route.params.testNo}</Text>
      <View style={styles.testBox}>
        <Text style={styles.testContent}>{route.params.testContent}
        </Text>
      </View>
      {recordContinues ?
        <View style={styles.buttonContainer}>
          <Button onPress={completeTest} text={'Complete Test'}></Button>
        </View>
        : 
        <View style={styles.row}>
        <Text style={styles.fill}>Recording - {recordingContent.duration}</Text>
        {recordEndedSuccessfully ?
        <>
        <Button theme='little' onPress={() => recordingContent.sound.replayAsync()} text="Play"></Button>
        {!isAutoSave ?
        <Button theme='little' onPress={() => 
        
        uploadRecording({ audioURI: audioURI, folder: folder, fileName: audioName })
        .then((downloadUrl) => {
          toast.show("Successfully uploaded!", { type: 'success' }); 
          console.log('Upload successful, download URL:', downloadUrl);
        })
        .catch((error) => {
          console.error('Error uploading file:', error);
          toast.show(ErrorMessageParser(error.code), { type: 'normal' }); 
        })
        
        } text="Save"></Button>:null}
        </>
         : null}
      </View>
        
        
        }
      {/**<Text>{message}</Text> */}

      <StatusBar style="auto" />
    </View>
  );
}

export default Tests;

