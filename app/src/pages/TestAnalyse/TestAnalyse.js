import React, { useEffect, useState } from "react";

import { Dimensions } from "react-native";
import { View, SafeAreaView, Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import ImagePicker from 'react-native-image-crop-picker';
// import { select } from "underscore";
import Chart from "../../components/Chart"
import Output from "../../components/Output";
import colors from "../../styles/colors";
import styles from "./TestAnalyse.style";
// import Button from "../../components/Button";
import { firebase } from "../../../firebase";
import Loading from "../../components/Loading/Loading";

import { PieChart } from 'react-native-chart-kit';
const data = [
    {
      name: "Block",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 10
    },
    {
      name: "Interjection",
      population: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 10
    },
    {
      name: "SoundRep",
      population: 527612,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 10
    },
    {
      name: "Prolongatitons",
      population: 8538000,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 10
    },
    {
      name: "WordRep",
      population: 11920000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 10
    }
  ];
  const screenWidth = Dimensions.get('screen').width;
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  };
function TestAnalyse() {
   

    return (

        <View style={styles.container}>
            
            <PieChart 
                style={styles.pieChartContainer} 
                data={data} 
                width={screenWidth} 
                height={280} 
                chartConfig={chartConfig} 
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"10"}
                absolute
                />
        </View>
    )
}

export default TestAnalyse;


