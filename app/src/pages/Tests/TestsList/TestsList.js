import React, {useState, useEffect} from "react";
import { View, FlatList } from 'react-native';
import TestStartCard from '../../../components/TestStartCard';
import styles from './TestsList.style';
import { firebase } from "../../../../firebase";

const TestsList = ({navigation}) => {

    const [testList, setTestList] = useState([]);

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
                console.log(documentSnapshot.id);
            }
            );
            setTestList(testList);
            console.log('Test List');
            console.log(testList);
            
            });
        return () => testData();
    }, []);

    const renderTest = ({ item }) => <TestStartCard test={item} />;

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={item => item.id}
                data={testList}
                renderItem={renderTest}
                numColumns={2}
                columnWrapperStyle={styles.row}>
            </FlatList>
        </View>
    )
}

export default TestsList;
