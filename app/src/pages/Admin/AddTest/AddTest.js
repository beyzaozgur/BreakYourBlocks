import React, {useState} from "react";
import {View, Text} from "react-native"
import styles from './AddTest.style';
import TestInputBox from "../../../components/TestInputBox";
import Button from "../../../components/Button";
import Dropdown from "../../../components/Dropdown";

function AddTest() {

    const [testContent, setTestContent] = useState('');
  //  const testTime = ;["30 seconds", "45 seconds", "1 minute", "2 minutes"]

    const handleChange = (value) => {
        setTestContent(value);
        console.log(testContent);
    };

    function deleteTestContent() {
        setTestContent('');
    };
    

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Create Test</Text>
            <Dropdown data = {['30 seconds', '1 minute']} placeholder='Time'/>
            <TestInputBox onChange={handleChange} value={testContent}/>
            <View style={styles.buttonContainer}>
                <Button text = 'Clear' onPress={deleteTestContent} theme='danger'/>
                <Button text = 'Add'/>
            </View>
        </View>
    )
}

export default AddTest;

