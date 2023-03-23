import React from "react";
import { View, FlatList } from 'react-native';

import test_data from '../../../test-data.json';
import AnalysisCard from '../../../components/AnalysisCard';
import styles from './AnalysisList.style';


function AnalysisList() {

    const renderTest = ({ item }) => <AnalysisCard test={item} />;

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

export default AnalysisList;
