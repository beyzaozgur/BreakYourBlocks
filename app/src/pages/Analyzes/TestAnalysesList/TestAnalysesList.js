import React from "react";
import { View, FlatList } from 'react-native';

import test_data from '../../../test-data.json';
import AnalysesListCard from "../../../components/AnalysesListCard";
import styles from './TestAnalysesList.style';
import { TouchableOpacity } from "react-native-gesture-handler";


function TestAnalysesList({navigation}) {

    const renderTest = ({ item }) => 
    <TouchableOpacity onPress={ ()=>navigation.navigate('TestAnalyseScreen')}>
            <AnalysesListCard test={item} />
    </TouchableOpacity> ;

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={item => item.id}
                data={test_data}
                renderItem={renderTest}
                numColumns={2}
                columnWrapperStyle={styles.row}
                
                
                >
            </FlatList>
        </View>
    )
}

export default TestAnalysesList;
