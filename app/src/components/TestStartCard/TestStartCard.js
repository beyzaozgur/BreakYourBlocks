import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useToast } from "react-native-toast-notifications";

import styles from './TestStartCard.styles';
import { firebase } from '../../../firebase';


const TestStartCard = props => {
    const toast = useToast();

    const [testCompletitionDate, setTestCompletitionDate] = useState('');

    useEffect(() => {
        firebase.firestore()
        .collection('completedTestUserMapping')
        .where('userID', '==', firebase.auth().currentUser.uid)
        .where('testID', '==', props.test.key)
        .orderBy('completitionDate', 'desc')
        .limit(1).onSnapshot(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {
                console.log(documentSnapshot.data().completitionDate);
                setTestCompletitionDate(documentSnapshot.data().completitionDate)
            });
        });
    }, []);

    const todaysDate = new Date();

    function testCompletitionDays() {

         // check if there is no record in database (if the test is not solved before), return a number greater than 7 to navigate test information screen
        if(testCompletitionDate != null) {

            const userTestDate = new Date(
                testCompletitionDate.seconds * 1000 + testCompletitionDate.nanoseconds / 1000000,
            );
        
            const diffTime = Math.abs(todaysDate - userTestDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

            if(isNaN(diffDays)) {
                return 8;
            }

            return diffDays;

        } else {
            return 8;
        }
    }

    function navigateToTestInformationScreen() {
        props.test.navigation.navigate('TestInformationScreen', {testContent: props.test.testContent, duration: props.test.duration, sound:props.test.sound, key:props.test.key, testNo:props.test.testNo});
    }

    function warningPopup(daysDiff) {
        toast.show('7 days must pass from the date you last took the test. ' + (7-daysDiff) + ' days left.', { type: 'warning' });
    }

    return(
        <TouchableOpacity onPress={() => {
            if (testCompletitionDays() > 7) {
                navigateToTestInformationScreen();
            } else {
              warningPopup(testCompletitionDays());
            }
          }}>
            <View style={[styles.square, props.test.isCompleted === 1 ? styles.squareWithIcon : styles.squareWithoutIcon]} >
                <View style={styles.inner_container}>
                    { testCompletitionDays() < 7 ? <MaterialIcons name='done-outline' size={35} color={'green'}></MaterialIcons> : <View></View>}
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