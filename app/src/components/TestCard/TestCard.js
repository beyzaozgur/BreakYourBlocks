import React from "react";
import {View, Text} from 'react-native';
import Button from "../../components/Button";
import styles from './TestCard.styles';

const TestCard = props => {
    return(
        <View style={styles.container} >
            <View style={styles.inner_container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.title} >Test - {props.test.id}</Text>
                    <View style={styles.buttonsContainer}>
                        <Button text = 'Edit' theme='warning'/>
                        <Button text = 'Delete' theme='danger'/>
                    </View>
                </View>
                <Text>Level: {props.test.level}</Text>
                <Text>Duration: {props.test.duration} seconds</Text>
                <Text>Creation Date: {props.test.creationDate}</Text>
                <Text numberOfLines={2}>Content: {props.test.content} ...</Text>
                
            </View>
        </View>
    )
}

export default TestCard;