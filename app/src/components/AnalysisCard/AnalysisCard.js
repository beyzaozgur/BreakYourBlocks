import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './AnalysisCard.styles';


const AnalysisCard = (data) => {
    return (
        <View>
            { 
            <TouchableOpacity>
                <View style={styles.square} >
                    <View style={styles.inner_container}>
                        <Text style={styles.title} >{'Test ' + data[0].test.testNo+ '\nAnalysis'}</Text>
                        <Text><Text style={styles.subtitle}>Level:</Text> {data[0].test.level}</Text>
                        <Text><Text style={styles.subtitle}>Duration:</Text> {data[0].test.duration} seconds</Text>
                    </View>
                </View>
            </TouchableOpacity>}
        </View>
    )
}

export default AnalysisCard;