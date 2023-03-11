import React from "react";
import {View, Text} from 'react-native';
import styles from './TestEditCard.styles';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import colors from '../../styles/colors';

const TestEditCard = props => {
    return(
        <View style={styles.container} >
            <View style={styles.inner_container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.title} >Test {props.test.id}</Text>
                    <View style={styles.buttonsLocation}>
                        <FontAwesome.Button style={styles.buttonContainer} name='edit' size={25} backgroundColor={colors.warning}/>
                        <FontAwesome.Button style={styles.buttonContainer} name='trash' size={25} backgroundColor={colors.danger}/>
                    </View>
                </View>
                <Text><Text style={styles.subtitle}>Level:</Text> {props.test.level}</Text>
                <Text><Text style={styles.subtitle}>Duration:</Text> {props.test.duration} seconds</Text>
                <Text><Text style={styles.subtitle}>Creation Date:</Text> {props.test.creationDate}</Text>
                <Text numberOfLines={2}><Text style={styles.subtitle}>Content:</Text> {props.test.content} ...</Text>
            </View>
        </View>
    )
}

export default TestEditCard;