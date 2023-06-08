import React from "react";
import { View, FlatList ,SafeAreaView, Image} from 'react-native';

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
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
            <Image style={styles.logo} source={require('../../../assets/logo.png')}/>
            </View>
        <View style={styles.body_container}>
            
            <FlatList
                keyExtractor={item => item.id}
                data={test_data}
                renderItem={renderTest}
                numColumns={1}
                //columnWrapperStyle={styles.row}
                
                
                >
            </FlatList>
        </View>
        </SafeAreaView>
    )
}

export default TestAnalysesList;
