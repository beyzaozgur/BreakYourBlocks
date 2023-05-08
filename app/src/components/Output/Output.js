import React from "react";
import { View, Text } from "react-native";

import styles from './Output.style';
import { tail } from "underscore";

// Custom component to show output/value to user
// takes label parameter initialized with empty string
// takes value parameter
// takes align paramter to determine how to align label and value
const Output = ({ label = '', value, align = 'center' }) => {
    return (
        <View style={styles[align].container}><Text style={styles[align].text}>{label}</Text>
            <Text style={styles[align].text}>{value}</Text></View>
    )
}

export default Output;