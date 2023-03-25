import React from "react";
import { TextInput, ScrollView } from 'react-native';

import styles from './TestInputBox.styles';


const TestInputBox = props => {

    return (
        <ScrollView>
            <TextInput style={styles.inputBox}
                placeholder='Test Content...'
                numberOfLines={15}
                maxLength={1000}
                editable
                multiline
                onChangeText={props.onChange}
                value={props.value} />
        </ScrollView>
    )
}

export default TestInputBox;