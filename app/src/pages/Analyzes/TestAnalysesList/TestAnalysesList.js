import React, {useState, useEffect} from "react";
import { View, FlatList ,SafeAreaView, Image} from 'react-native';
import AnalysesListCard from "../../../components/AnalysesListCard";
import styles from './TestAnalysesList.style';
import { firebase } from "../../../../firebase";


const TestAnalysesList = ({ route, navigation }) => {

    const testID = route.params.testID;
    const testNo = route.params.testNo;
    console.log("TEST ID: " + testID);

    const [testAnalysisList, setTestAnalysisList] = useState([]);

    useEffect(() => {
        const testData = firebase.firestore()
            .collection('userTestResults')
            .where('userID', '==', firebase.auth().currentUser.uid)
            .where('testID', '==', testID)
            .onSnapshot(querySnapshot => {
            const analysisList = [];
            querySnapshot.forEach(documentSnapshot => {
                analysisList.push({
                    navigation: navigation,
                    key: documentSnapshot.id,
                    testDate : documentSnapshot.data().testDate,
                    testID: documentSnapshot.data().testID
                });
            }
        );
            setTestAnalysisList(analysisList);
        });
        return () => testData();
    }, []);

    const renderTest = ({ item }) => <AnalysesListCard test={item} testNo={testNo} />;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
            <Image style={styles.logo} source={require('../../../assets/logo.png')}/>
            </View>
        <View style={styles.body_container}>
            
            <FlatList
                keyExtractor={item => item.key}
                data={testAnalysisList}
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
