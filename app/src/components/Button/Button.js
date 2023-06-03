import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, View } from 'react-native';

import colors from '../../styles/colors';
import styles from './Button.style';
//import Icon from 'react-native-vector-icons'

// A custom component
// text corresponds to title 
//theme is assigned to primary initially 
// If a theme other than the default is set, the button will be styled accordingly
const Button = ({ text, onPress, loading, theme = 'primary' }) => { 
    return (
        <TouchableOpacity style={styles[theme].container} onPress={onPress} disabled={loading}>
                <View style={styles[theme].button_container}>
                    <Text style={styles[theme].title}>{text}</Text>
                </View>
        </TouchableOpacity>
    );
}

export default Button;