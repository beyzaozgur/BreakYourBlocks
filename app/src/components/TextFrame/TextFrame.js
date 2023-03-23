import React from "react";
import { TouchableOpacity, Text } from 'react-native';

import styles from './TextFrame.styles';


const TextFrame = props => {

    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: props.bgColorCode }]} onPress={props.onClick}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default TextFrame;