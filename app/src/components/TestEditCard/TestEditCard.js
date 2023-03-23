import React from "react";
import { View, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import styles from './TestEditCard.styles';
import colors from '../../styles/colors';

import { firebase } from "../../../firebase";

const TestEditCard = props => {

    function navigateToUpdateTestScreen() {
        props.test.navigation.navigate('AddUpdateTestScreen', {key: props.test.key});
    }

    function deleteTest() {
        firebase
        .firestore()
        .collection('tests')
        .doc(props.test.key)
        .delete()
        .then(() => {
            console.log('Test deleted!');
            console.log(props.test.key);
        });
    }

    // Convert firebase timestamp object to datetime string - creation date
    if(props.test.creationDate != null) {
        var creationDateFirebase = props.test.creationDate;
    
        const fireBaseTime = new Date(
            creationDateFirebase.seconds * 1000 + creationDateFirebase.nanoseconds / 1000000,
        );
        const date = fireBaseTime.toDateString();
        const atTime = fireBaseTime.toLocaleTimeString();

        var creationDate = date + " " + atTime;
    }

    // Convert firebase timestamp object to datetime string - update date
    if(props.test.updateDate != null) {
        var updateDateFirebase = props.test.updateDate;
    
        const fireBaseTimeUpdate = new Date(
            updateDateFirebase.seconds * 1000 + updateDateFirebase.nanoseconds / 1000000,
        );
        const dateUpdate = fireBaseTimeUpdate.toDateString();
        const atTimeUpdate = fireBaseTimeUpdate.toLocaleTimeString();

        var updateDate = dateUpdate + " " + atTimeUpdate;
    }


    return(
        <View style={styles.container} >
            <View style={styles.inner_container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.title} >Test {props.test.testNo}</Text>
                    <View style={styles.buttonsLocation}>
                        <FontAwesome.Button style={styles.buttonContainer} name='edit' size={25} backgroundColor={colors.warning} onPress={navigateToUpdateTestScreen}/>
                        <FontAwesome.Button style={styles.buttonContainer} name='trash' size={25} backgroundColor={colors.danger} onPress={deleteTest}/>
                    </View>
                </View>
                <Text><Text style={styles.subtitle}>Level:</Text> {props.test.level}</Text>
                <Text><Text style={styles.subtitle}>Duration:</Text> {props.test.duration} seconds</Text>
                <Text><Text style={styles.subtitle}>Sound:</Text> {props.test.sound}</Text>
                <Text><Text style={styles.subtitle}>Creation Date:</Text> {creationDate}</Text>
                <Text><Text style={styles.subtitle}>Update Date:</Text> {updateDate}</Text>
                <Text numberOfLines={2}><Text style={styles.subtitle}>Content:</Text> {props.test.testContent} ...</Text>
            </View>
        </View>
    )
}

export default TestEditCard;