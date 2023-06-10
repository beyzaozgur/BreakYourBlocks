import React, { useState, useEffect } from "react";
import { View, FlatList, Text } from 'react-native';

import test_data from '../../../test-data.json';
import AnalysisCard from '../../../components/AnalysisCard';
import styles from './AnalysisList.style';
import { TouchableOpacity } from "react-native-gesture-handler";
import TestAnalyse from "../TestAnalyse/TestAnalyse";
import {firebase} from "../../../../firebase";



const AnalysisList = ({navigation}) => {
  const [analysisData, setAnalysisData] = useState([]);
    useEffect(() => {

      const analyse =  firebase.firestore()
        .collection('completedTestUserMapping')
        .where('userID', '==', firebase.auth().currentUser.uid)
        .orderBy('testNo', 'asc')
        .onSnapshot(querySnapshot => {  
            const uniqueTestIDs = new Set();

            // Iterate over each document in the query snapshot
            querySnapshot.forEach((doc) => {
              const data = doc.data();
              const testID = data.testID;

              // Add the testID to the uniqueTestIDs Set
              uniqueTestIDs.add(testID);
            });

            // Convert the Set to an array
            const uniqueTestIDsArray = Array.from(uniqueTestIDs);

            // Log the unique testID values
            console.log(uniqueTestIDsArray);

             setAnalysisData(uniqueTestIDsArray);
        });

        return () => analyse();
    }, []);

    const renderGroup = ({ item }) =>{
      console.log(analysisData);
      // console.log(JSON.stringify(item.data));
    return  <AnalysisCard data = {item} nav = {navigation} />}

            return (
                <View style={styles.container}>
                    <FlatList
                      data={analysisData}
                      renderItem={renderGroup}
                      keyExtractor={(item, index) => index.toString()}
                      >
                    </FlatList>
                </View>
                
            )
        }

export default AnalysisList;
