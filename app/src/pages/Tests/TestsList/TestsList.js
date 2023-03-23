import React from "react";
import { View, FlatList } from 'react-native';

import test_data from '../../../test-data.json';
import TestStartCard from '../../../components/TestStartCard';
import styles from './TestsList.style';


function TestsList() {

    const renderTest = ({ item }) => <TestStartCard test={item} />;

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={item => item.id}
                data={test_data}
                renderItem={renderTest}
                numColumns={2}
                columnWrapperStyle={styles.row}>
            </FlatList>
        </View>
    )
}

export default TestsList;
