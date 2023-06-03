import React from "react";
import { View, Text, ScrollView } from "react-native";

import Button from "../../../components/Button";
import styles from './TestInformation.style';


const TestInformation = ({ route, navigation }) => {

    function navigateToTestsScreen() {
        navigation.navigate('TestsScreen', {testContent: route.params.testContent, duration: route.params.duration, sound: route.params.sound, key:route.params.key, testNo:route.params.testNo});
    }

    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Information</Text>
            </View>
            <View style={styles.frame}>
                <ScrollView>
                    <Text style={styles.testContent}>- Test is going to start immediately after you press the "Start" button.{"\n"}{"\n"}
                    - You need to read the entire script in the given time.{"\n"}{"\n"}
                    - You cannot pause recording.{"\n"}{"\n"}
                    - You can exit the test by pressing "Do Not Save" button, but no data will be saved.{"\n"}{"\n"}
                    - The test will be automatically saved after the given time is finished.{"\n"}{"\n"}
                    - You need to wear headphones to get the best results.{"\n"}{"\n"}
                    - You have {route.params.duration} seconds to finish this test.{"\n"}{"\n"}</Text>
                </ScrollView>
            </View>
            <View style={styles.buttonContainer}>
                <Button text = 'Start' onPress={navigateToTestsScreen}/>
            </View>
        </View>
    )
}

export default TestInformation;

