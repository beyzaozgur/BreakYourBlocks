import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import styles from './TestStartCard.styles';


const TestStartCard = props => {

    function navigateToTestInformationScreen() {
        props.test.navigation.navigate('TestInformationScreen', {testContent: props.test.testContent, duration: props.test.duration, sound:props.test.sound, key:props.test.key});
    }

    return(
        <TouchableOpacity onPress={navigateToTestInformationScreen}>
            <View style={[styles.square, props.test.isCompleted === 1 ? styles.squareWithIcon : styles.squareWithoutIcon]} >
                <View style={styles.inner_container}>
                    { props.test.isCompleted === 1 ? <MaterialIcons name='done-outline' size={35} color={'green'}></MaterialIcons> : <View></View>}
                    <Text style={styles.title} >Test {props.test.testNo}</Text>
                    <Text><Text style={styles.subtitle}>Level:</Text> {props.test.level}</Text>
                    <Text><Text style={styles.subtitle}>Duration:</Text> {props.test.duration} </Text>
                    <Text><Text style={styles.subtitle}>Sound:</Text> {props.test.sound} </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default TestStartCard;