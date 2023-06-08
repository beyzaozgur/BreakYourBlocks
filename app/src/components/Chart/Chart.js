import React, { Component } from "react";
import { Dimensions } from "react-native";
/*import { Text, TouchableOpacity, View } from "react-native";
import {  PieChart} from "react-native-chart-kit";
  import { Dimensions } from "react-native";
  import { ChartConfig } from "react-native-chart-kit/dist/HelperTypes";

  import styles from './Chart.style';
  
  const ChartComponent=()=>{
  const screenWidth = Dimensions.get("window").width;
  

  const data = [
  {
    name: "Seoul",
    population: 21500000,
    color: "rgba(131, 167, 234, 1)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Toronto",
    population: 2800000,
    color: "#F00",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Beijing",
    population: 527612,
    color: "red",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "New York",
    population: 8538000,
    color: "#ffffff",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Moscow",
    population: 11920000,
    color: "rgb(0, 0, 255)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  }
];
  
  
  <View>
    
  
  
  
<PieChart
  data={data}
  width={screenWidth}
  height={220}
  chartConfig={styles.chartConfig}
  accessor={"population"}
  backgroundColor={"transparent"}
  paddingLeft={"15"}
  center={[10, 50]}
  absolute
  export default ChartComponent ;
/>
</View>
  }*/
  import { LineChart } from 'react-native-chart-kit';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};
const screenWidth = Dimensions.get('window').width;
const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientTo: '#08130D',
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
};

<LineChart data={data} width={screenWidth} height={220} chartConfig={chartConfig} />
