import React, {useState, useEffect} from "react";
import {View, Text} from "react-native"
import styles from './AddUpdateTest.style';
import TestInputBox from "../../../components/TestInputBox";
import Button from "../../../components/Button";
import Dropdown from "../../../components/Dropdown";
import { firebase } from "../../../../firebase";
import addTest from "../../../hooks/addTest";
import updateTest from "../../../hooks/updateTest";
import getAudioNameList from '../../../hooks/getAudioNameList';

function AddUpdateTest({ route, navigation })  {

    const testKey = route.params.key;
    const audioNameList = getAudioNameList();

    console.log('TEST KEY: ' +  testKey);

    const [soundValue, setSoundValue] = useState('');
    const [durationValue, setDurationValue] = useState('');
    const [levelValue, setLevelValue] = useState('');
    const [testContent, setTestContent] = useState('');

    function deleteTestContent() {
        setTestContent('');
    };

    function navigateToTestEditListScreen() {
        navigation.navigate('TestEditListScreen');
    }

    function add() {
        addTest(soundValue, durationValue, levelValue, testContent);
        navigateToTestEditListScreen();
    }

    function update() {
        updateTest(testKey, soundValue, durationValue, levelValue, testContent);
        navigateToTestEditListScreen();
    }

    useEffect(() => {
        if(testKey != null) {
            firebase.firestore()
            .collection('tests')
            .doc(testKey)
            .onSnapshot(documentSnapshot => {
              setSoundValue(documentSnapshot.data().sound);
              setDurationValue(documentSnapshot.data().duration);
              setLevelValue(documentSnapshot.data().level);
              setTestContent(documentSnapshot.data().testContent);
            });
          }
    }, []);

    return(
        <View style={styles.container}>
            { testKey != null ? <Text style={styles.title}>Update Test</Text> : <Text style={styles.title}>Create Test</Text> }
            <Dropdown data = {audioNameList} placeholder='Sound' onChange={setSoundValue} dbValue={soundValue}/>
            <Dropdown data = {['30', '60', '90', '120']} placeholder='Duration (Seconds)' onChange={setDurationValue} dbValue={durationValue}/>
            <Dropdown data = {['Easy', 'Middle', 'Hard']} placeholder='Level' onChange={setLevelValue} dbValue={levelValue}/>
            <TestInputBox onChange={setTestContent} value={testContent}/>
            <View style={styles.buttonContainer}>
                <Button text = 'Clear' onPress={deleteTestContent} theme='danger'/>
                { testKey != null ? <Button text = 'Update' onPress={update}/> : <Button text = 'Add' onPress={add}/> }
            </View>
        </View>
    )
}

export default AddUpdateTest;

