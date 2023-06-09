import React, { useState, useEffect } from "react";
import { View, FlatList, Text } from 'react-native';

import test_data from '../../../test-data.json';
import AnalysisCard from '../../../components/AnalysisCard';
import styles from './AnalysisList.style';
import { TouchableOpacity } from "react-native-gesture-handler";
import TestAnalyse from "../../TestAnalyse/TestAnalyse";
import {firebase} from "../../../../firebase";



function AnalysisList({navigation}) {
  const [analysisData, setAnalysisData] = useState([]);
    useEffect(() => {

      const analyse =  firebase.firestore()
        .collection('userTestResults')
        .where('userID', '==', firebase.auth().currentUser.uid)
        .onSnapshot(querySnapshot => {  
            const groupedData={};
            querySnapshot.forEach(documentSnapshot => {
              const initialData= {
                ...documentSnapshot.data(),                
                key: documentSnapshot.id,
                navigation: navigation,
                }
                 const category = initialData.testID; 

                 firebase.firestore()
                .collection('tests')
                .doc(category)
                .onSnapshot((snapshot) => {
               const data= {...initialData, test:snapshot.data()}  ;  
                  if (!groupedData[category]) {
                groupedData[category] = [];
                }  
                groupedData[category].push(data);  
              
            });          

             }            
            
            );
             setAnalysisData(groupedData);
        });
        
        return () => analyse();
    }, []);

    const renderGroup = ({ item }) =>{
      console.log(analysisData);
      console.log(JSON.stringify(item.data));
    return  <AnalysisCard data ={JSON.stringify(item.data)} />}

        
            return (
                <View style={styles.container}>
                    <FlatList
              data={Object.entries(analysisData).map(([groupKey, data]) => ({groupKey,data}))}
              renderItem={renderGroup}
              keyExtractor={(item) => item.groupKey}
              >
            </FlatList>
                </View>
                
            )
        }



        

export default AnalysisList;
