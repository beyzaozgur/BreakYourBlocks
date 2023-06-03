import React from 'react';
import { View, TextInput } from 'react-native';

import styles from './SearchBar.styles';


const SearchBar = props => {
    return (
        <View style={styles.container}>
            <TextInput placeholder={props.placeholder} onChangeText={props.onSearch} value={props.value}/>
        </View>
    )
}

export default SearchBar;