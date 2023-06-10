import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './AnalysesListCard.styles';


const AnalysesListCard = props => {

    console.log("Test Date : " + props.test.testDate);

    function formatDate(dateTimeParameter) {
        const dateTime = dateTimeParameter;
        const onlyDate = dateTime.split("-")[0];
        return onlyDate;
    }

    function navigateToDetailedAnalysisPage() {
        props.test.navigation.navigate('TestAnalyseScreen', {testDate: props.test.testDate, testID: props.test.testID, testNo: props.testNo});
    }

    return (
        <View>
            <TouchableOpacity onPress={navigateToDetailedAnalysisPage}>
                <View style={styles.square} >
                    <View style={styles.inner_container}>
                        <Text style={styles.title} >{'Date: ' + formatDate(props.test.testDate) }</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default AnalysesListCard;