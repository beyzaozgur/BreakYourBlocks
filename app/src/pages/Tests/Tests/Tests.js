import React, { useState, useEffect } from 'react';
import { Button, Text, View, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Audio } from 'expo-av';
import * as Sharing from 'expo-sharing';
import Svg, { Path, LinearGradient, Stop, Defs } from 'react-native-svg';
import { useCountdown } from 'react-native-countdown-circle-timer';

import styles from './Tests.style';


const Tests = ({ route, navigation }) =>  {
  const [recording, setRecording] = useState();
  // const [recordings, setRecordings] = useState([]);
  const [recordContinues, setRecordingContinues] = useState();
  const [recordingContent, setRecordingContent] = useState([]);
  const [message, setMessage] = useState("");

  const duration = route.params.duration;

  const executeOnLoad = () => {
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


  useEffect(() => {
    if (elapsedTime === duration) {
      stopRecording();
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


  // async function stopRecording() {

  //   setRecording(undefined);
  //   await recording.stopAndUnloadAsync();

  //   let updatedRecordings = [...recordings];
  //   const { sound, status } = await recording.createNewLoadedSoundAsync();
  //   updatedRecordings.push({
  //     sound: sound,
  //     duration: getDurationFormatted(status.durationMillis),
  //     file: recording.getURI()
  //   });

  //   setRecordings(updatedRecordings);
  // }


  async function stopRecording() {

    setRecordingContinues(false);

    await recording.stopAndUnloadAsync();

    const { sound, status } = await recording.createNewLoadedSoundAsync();

    setRecordingContent({
      sound: sound,
      duration: getDurationFormatted(status.durationMillis),
      file: recording.getURI()
    });

  }

  function getDurationFormatted(millis) {
    const minutes = millis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesDisplay) * 60);
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesDisplay}:${secondsDisplay}`;
  }

  // function getRecordingLines() {
  //   return recordings.map((recordingLine, index) => {
  //     return (
  //       <View key={index} style={styles.row}>
  //         <Text style={styles.fill}>Recording {index + 1} - {recordingLine.duration}</Text>
  //         <Button style={styles.button} onPress={() => recordingLine.sound.replayAsync()} title="Play"></Button>
  //         <Button style={styles.button} onPress={() => Sharing.shareAsync(recordingLine.file)} title="Share"></Button>
  //       </View>
  //     );
  //   });
  // }

  function getRecordingLines() {

    return (
      <View style={styles.row}>
        <Text style={styles.fill}>Recording - {recordingContent.duration}</Text>
        <Button style={styles.button} onPress={() => recordingContent.sound.replayAsync()} title="Play"></Button>
        <Button style={styles.button} onPress={() => Sharing.shareAsync(recordingContent.file)} title="Share"></Button>
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
        <Pressable style={styles.startStopButton} onPress={stopRecording}>
          <Text style={styles.buttonText}>Complete Test</Text>
        </Pressable>
      </View>
      {!recordContinues ? getRecordingLines() : null}
      <StatusBar style="auto" />
    </View>
  );
}

export default Tests;