import { useState, useEffect } from 'react';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';

import {firebase} from '../../firebase';

// export default function playSound(audioName) {
//   const [sound, setSound] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//  // const [duration, setDuration] = useState(null);
//   const [position, setPosition] = useState(null);
//   const storageRef = firebase.storage().ref();
//   const audioRef = storageRef.child(`testAudios/${audioName}`);

//   useEffect(() => {
//     async function loadSound() {
//       try {
//         const downloadURL = await audioRef.getDownloadURL();
//         const downloadFile = await FileSystem.downloadAsync(downloadURL, FileSystem.documentDirectory + 'audio.mp3');
//         const { sound } = await Audio.Sound.createAsync({ uri: downloadFile.uri });
//         setSound(sound);
//         //setDuration(await sound.getDurationAsync());
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     loadSound();
//     return () => {
//       if (sound) {
//         sound.unloadAsync();
//       }
//     };
//   }, []);
  

//   async function play() {
//     if (sound) {
//       await sound.playAsync();
//       setIsPlaying(true);
//     }
//   }

//  /* async function pause() {
//     if (sound) {
//       await sound.pauseAsync();
//       setIsPlaying(false);
//     }
//   }*/

//   async function stop() {
//     if (sound) {
//       await sound.stopAsync();
//       setIsPlaying(false);
//       setPosition(0);
//     }
//   }

//   async function setPositionAsync(pos) {
//     if (sound) {
//       await sound.setPositionAsync(pos * 1000);
//       setPosition(pos);
//     }
//   }

//  /* async function getPositionAsync() {
//     if (sound) {
//       const pos = await sound.getPositionAsync();
//       setPosition(pos);
//       return pos;
//     }
//   }*/

//   return {
//     play,
//   //  pause,
//     stop,
//     //setPosition: setPositionAsync,
//     //getPosition: getPositionAsync,
//     isPlaying,
//    // duration,
//    // position,
//   };
// }


const playSound = (fileName) => {
 if(fileName === 'No Sound') return;
  const storageRef = firebase.storage().ref();
  const fileRef = storageRef.child(`testAudios/${fileName}`);

  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  async function play() {
    try {
      const downloadURL = await fileRef.getDownloadURL();
      const { sound } = await Audio.Sound.createAsync(
        { uri: /*`https://firebasestorage.googleapis.com/v0/b/breakyourblocks-1.appspot.com/o/testAudios%2F${fileName}?alt=media` */ downloadURL},
        { shouldPlay: true }
      );
      setSound(sound);
      setIsPlaying(true);
    } catch (error) {
      console.log('Error playing sound:', error);
    }
  }

  async function stop() {
    try {
     // if (sound && sound.status === "loaded") {
        await sound.stopAsync();
        setIsPlaying(false);
    //  }
      
    } catch (error) {
      console.log('Error stopping sound:', error);
    }
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return {
    play,
    stop,
    isPlaying //: !!sound,
  };
};

export default playSound;

