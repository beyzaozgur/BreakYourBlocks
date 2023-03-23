import React from "react";
import { View, Text } from "react-native";

import styles from './Output.style';


const Output = ({ label = '', value, align = 'center' }) => {
    return (
        <View style={styles[align].container}><Text style={styles[align].text}>{label}</Text>
            <Text style={styles[align].text}>{'\n' + value}</Text></View>
    )
}

export default Output;