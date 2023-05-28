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
    const [filteredList, setFilteredList] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const testData = firebase.firestore()
            .collection('tests')
            .onSnapshot(querySnapshot => {
            const testList = [];
            var testNo = 1;

            querySnapshot.forEach(documentSnapshot => {
                testList.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.id,
                navigation: navigation,
                testNo: testNo
                });
                testNo = testNo + 1;
            });
            setTestList(testList);
            setFilteredList(testList);
            });
        return () => testData();
    }, []);

    const renderTest = ({item}) => <TestEditCard test={item}/>;

    const renderSeparator = () => <View style={styles.seperator}></View>

    const handleSearch = (text) => {
        if(text) {
            const newData = testList.filter( test => {
                const searchedText = text.toLowerCase();
                const currentTestContent = test.testContent.toLowerCase();

                return currentTestContent.indexOf(searchedText) > -1;
            });
            setFilteredList(newData);
            setSearch(text);
        } else {
            setFilteredList(testList);
            setSearch(text);
        }
    }

    function navigateToAddTestScreen() {
        navigation.navigate('AddUpdateTestScreen', {key: null});
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <FontAwesome.Button style={styles.testAddButton} name='plus' backgroundColor={colors.darkestgreen} onPress={navigateToAddTestScreen}>Add Test</FontAwesome.Button>
            </View>
            <SearchBar placeholder='Search by content...' onSearch={(text) => handleSearch(text)} value={search}/>
            <FlatList
                ItemSeparatorComponent={renderSeparator}
                keyExtractor={item => item.id}
                data={filteredList}
                renderItem={renderTest}>
            </FlatList>
        </View>
    )
}

export default TestEditList;