import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './AnalysesListCard.styles';


const AnalysesListCard = props => {
    return (
        <View>
            { props.test.isCompleted === 1 ?
            <TouchableOpacity  >
                <View style={styles.square} >
                    <View style={styles.inner_container}>
                        <Text style={styles.title} >{'Date: ' + props.test.creationDate }</Text>
                    </View>
                </View>
            </TouchableOpacity> : <View></View>}
        </View>
    )
}

export default AnalysesListCard;