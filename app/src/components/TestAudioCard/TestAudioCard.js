import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import styles from './TestAudioCard.style';
import colors from "../../styles/colors";
import {firebase} from "../../../firebase";
import playSound from '../../hooks/playSound';


const TestAudioCard = props => {

    const {
        play,
      //  pause,
        stop,
      //  setPosition,
        //getPosition: getPositionAsync,
        isPlaying,
       // duration,
       // position,

    } = playSound(props.audio.name);

    useEffect(() => {
      return () => {
        stop();
      };
    }, []);

   // const [isPlaying, setIsPlaying] = useState(isPlaying_)

    function handleSoundPlay() {
            if (isPlaying) {
               stop();
            } else {
              // Play the sound if it's not currently playing
                play();
            }
          //  setIsPlaying(!isPlaying); // Toggle the "isPlaying" state
         
    }

    function deleteAudio() {
        const audioRef = firebase.storage().ref().child(`testAudios/${props.audio.name}`);
        audioRef.delete()
        .then(() => {
          console.log('Audio file deleted successfully!');
        })
        .catch((error) => {
          console.log('Error deleting audio file:', error);
        });
    }


    return(
        <TouchableOpacity  onPress={handleSoundPlay}>
            <View style={styles.square} >
            
                <View style={styles.inner_container}>        
                    <Text style={styles.title} >{props.audio.name}</Text>                   
                    {/* <Text><Text style={styles.subtitle} numberOfLines={2} ellipsizeMode="tail">Name:</Text> {props.audio.name}</Text> */}
                    {/* <Text><Text style={styles.subtitle} numberOfLines={2} ellipsizeMode="tail">Content Type:</Text> {props.audio.contentType} </Text> */}
                </View>
                <View style={styles.buttonsLocation}>                                                   
                    {/* <FontAwesome.Button style={styles.buttonContainer} name='edit' size={25} backgroundColor={colors.warning} *//*onPress={navigateToUpdateTestScreen}*//*/> */}
                    <FontAwesome.Button style={styles.buttonContainer} name='trash' size={20} backgroundColor={colors.danger} onPress={deleteAudio}/>
                </View>             
                
            </View>
        </TouchableOpacity>
    )
}

export default TestAudioCard;