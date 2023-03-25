import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './AnalysisCard.styles';


const AnalysisCard = props => {
    return (
        <View>
            { props.test.isCompleted === 1 ?
            <TouchableOpacity>
                <View style={styles.square} >
                    <View style={styles.inner_container}>
                        <Text style={styles.title} >{'Test ' + props.test.id + '\nAnalysis'}</Text>
                        <Text><Text style={styles.subtitle}>Level:</Text> {props.test.level}</Text>
                        <Text><Text style={styles.subtitle}>Duration:</Text> {props.test.duration} seconds</Text>
                    </View>
                </View>
            </TouchableOpacity> : <View></View>}
        </View>
    )
}

export default AnalysisCard;