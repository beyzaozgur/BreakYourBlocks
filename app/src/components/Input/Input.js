import React, {useState} from 'react';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../../styles/colors';
import styles from './Input.style';

// Custom Input component to take input from user
// takes placeholder, onChangeText function, value, icon, and isPasswordHidden parameters
const Input = ({ placeholder, onChangeText, value, icon, isPasswordHidden }) => {
    const [showPassword, setShowPassword] = useState(isPasswordHidden); // state variable to keep visibility state of password
    return (
        // assigning values and determining password visibility 
        <View style={styles.container}> 
            <TextInput style={styles.input} placeholderTextColor={colors.darkestgreen} placeholder={placeholder} onChangeText={onChangeText} value={value} secureTextEntry={showPassword} />
            <Icon name={icon} size={25} color={colors.darkestgreen} onPress={() => {isPasswordHidden ? setShowPassword(!showPassword) : null}/* each time icon is clicked, visibility is reversed */ }/>
        </View>
    )
}

export default Input;