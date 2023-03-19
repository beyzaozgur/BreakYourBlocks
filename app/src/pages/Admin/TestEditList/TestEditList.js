import React, {useState, useEffect} from "react";
import {View, FlatList} from "react-native"
import TestEditCard from '../../../components/TestEditCard';
import SearchBar from '../../../components/SearchBar'
import styles from './TestEditList.style'
import { firebase } from "../../../../firebase";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import colors from '../../../styles/colors';


const TestEditList = ({navigation}) => {

    const [testList, setTestList] = useState([]);

    useEffect(() => {
        const testData = firebase.firestore()
            .collection('tests')
            .onSnapshot(querySnapshot => {
            const testList = [];
        
            querySnapshot.forEach(documentSnapshot => {
                testList.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.id,
                navigation: navigation
                });
            });
            setTestList(testList);
            });
        return () => testData();
    }, []);

    const renderTest = ({item}) => <TestEditCard test={item}/>;

    const renderSeparator = () => <View style={styles.seperator}></View>

    const handleSearch = text => {
        const filteredList = testList.filter( test => {
            const searchedText = text.toLowerCase();
            const currentTitle = test.content.toLowerCase();

            return currentTitle.indexOf(searchedText) > -1;
        });

        setTestList(filteredList);
    } 

    function navigateToAddTestScreen() {
        navigation.navigate('AddUpdateTestScreen', {key: null});
    }

    return(
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <FontAwesome.Button style={styles.testAddButton} name='plus' backgroundColor={colors.darkestgreen} onPress={navigateToAddTestScreen}>Add Test</FontAwesome.Button>
            </View>
            <SearchBar onSearch={handleSearch} />
            <FlatList
                ItemSeparatorComponent={renderSeparator}
                keyExtractor={item => item.id}
                data={testList}
                renderItem={renderTest}>
            </FlatList>
        </View>
    )
}

export default TestEditList;