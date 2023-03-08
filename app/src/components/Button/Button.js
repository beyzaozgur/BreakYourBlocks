import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator,View} from 'react-native';
import colors from '../../styles/colors';
import styles from './Button.style';
//import Icon from 'react-native-vector-icons'

const Button = ({text, onPress, loading, icon, theme='primary'}) => {
    return(
        <TouchableOpacity style={styles[theme].container} onPress={onPress} disabled={loading}>
            {loading ? (<ActivityIndicator color={colors.grayish}/>) : (
            <View style={styles[theme].button_container}>
            <Text style={styles[theme].title}>{text}</Text>
            </View> )}
            
        </TouchableOpacity>
    );
}

export default Button;