import React from 'react';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../../styles/colors';
import styles from './Input.style';


const Input = ({ placeholder, onChangeText, value, icon, isPasswordHidden }) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholderTextColor={colors.darkestgreen} placeholder={placeholder} onChangeText={onChangeText} value={value} secureTextEntry={isPasswordHidden} />
            <Icon name={icon} size={25} color={colors.darkestgreen} />
        </View>
    )
}

export default Input;