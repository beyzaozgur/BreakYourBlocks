import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './TestStartCard.styles';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const TestStartCard = props => {
    return(
        <TouchableOpacity>
            <View style={[styles.square, props.test.isCompleted === 1 ? styles.squareWithIcon : styles.squareWithoutIcon]} >
                <View style={styles.inner_container}>
                    { props.test.isCompleted === 1 ? <MaterialIcons name='done-outline' size={35} color={'green'}></MaterialIcons> : <View></View>}
                    <Text style={styles.title} >Test {props.test.id}</Text>
                    <Text><Text style={styles.subtitle}>Level:</Text> {props.test.level}</Text>
                    <Text><Text style={styles.subtitle}>Duration:</Text> {props.test.duration} seconds</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default TestStartCard;