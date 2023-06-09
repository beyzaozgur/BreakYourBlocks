import React, { useEffect, useState } from "react";

import { Dimensions } from "react-native";
import { View, SafeAreaView, Image } from "react-native";
// import ImagePicker from 'react-native-image-crop-picker';
// import { select } from "underscore";
import styles from "./TestAnalyse.style";
// import Button from "../../components/Button";
import { firebase } from "../../../../firebase";

import { PieChart } from 'react-native-chart-kit';

label_names = ['"Unsure"', 'PoorAudioQuality', 'Prolongation',
 'Block', 'SoundRepetition', 'WordRepetition', 'DifficultToUnderstand',
 'Interjection', 'NoStutteredWords', 'NaturalPause', 'Music', 'NoSpeech'].sort();
const data = [
    {
      name: "Block",
      population: 1.000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 10
    },
    {
      name: "Interjection",
      population: 2.000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 10
    },
    {
      name: "SoundRep",
      population: 1.000,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 10
    },
    {
      name: "DifficultToUnderstand",
      population: 1.001,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 10
    },
    {
      name: "WordRep",
      population: 1.000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 10
    },
    {
      name: "Block",
      population: 1.000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 10
    },
    {
      name: "Interjection",
      population: 1.000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 10
    },
    {
      name: "SoundRep",
      population: 1.000,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 10
    },
    {
      name: "Prolongatitons",
      population: 1.000,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 10
    },
    {
      name: "WordRep",
      population: 1.000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 10
    },
    {
      name: "Prolongatitons",
      population: 1.001,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 10
    },
    {
      name: "WordRep",
      population: 1.000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 10
    },
  ];
 
  const screenWidth = Dimensions.get('screen').width;
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  };
  function getData(property){
    const auth=getAuth();
    const user=auth.currentUser;
    
    useEffect(() => {
      firebase.firestore()
      .collection('userTestResults')
      .doc(user.uid)
      .onSnapshot(documentSnapshot => {
        documentSnapshot.data().Block;
      });
    
}, []);
  }
function TestAnalyse() {

  for(let i=0; i<12; i++){
    //  data[i].name=label_names[i];
    //  data[i].population=props.analyse.label_names[i];
      data[i].color=colors.chartColors[i];
      data[i].legendFontColor=colors.grayish;
      data[i].legendFontSize=10;
    } 
  
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
      <Text style={styles.test}>Test 1</Text>
      <Text style={styles.testDate}>11.04.2023</Text> 
      </View>         
      <View style={styles.pieChartContainer}>
          <PieChart 
            style={styles.pieChart} 
            data={data} 
            width={screenWidth} 
            height={260} 
            chartConfig={chartConfig} 
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft="8"
            absolute           
            />
      </View>
    </View>
)
}

export default TestAnalyse;


