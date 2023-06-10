import React, { useEffect, useState } from "react";

import { Dimensions } from "react-native";
import { View, Text, SafeAreaView, Image } from "react-native";
// import ImagePicker from 'react-native-image-crop-picker';
// import { select } from "underscore";
import styles from "./TestAnalyse.style";
// import Button from "../../components/Button";
import { firebase } from "../../../../firebase";
import colors from "../../../styles/colors";

import { PieChart } from 'react-native-chart-kit';



label_names = ['"Unsure"', 'PoorAudioQuality', 'Prolongation',
 'Block', 'SoundRepetition', 'WordRepetition', 'DifficultToUnderstand',
 'Interjection', 'NoStutteredWords', 'NaturalPause', 'Music', 'NoSpeech'].sort();
 
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
const TestAnalyse = ({ route }) => { 

  const [block, setBlock] = useState("");
  const [difficultToUnderstand, setDifficultToUnderstand] = useState("");
  const [interjection, setInterjection] = useState("");
  const [music, setMusic] = useState("");
  const [naturalPause, setNaturalPause] = useState("");
  const [noSpeech, setNoSpeech] = useState("");
  const [noStutteredWords, setNoStutteredWords] = useState("");
  const [poorAudioQuality, setPoorAudioQuality] = useState("");
  const [prolongation, setProlongation] = useState("");
  const [soundRepetition, setSoundRepetition] = useState("");
  const [unsure, setUnsure] = useState("");
  const [wordRepetition, setWordRepetition] = useState("");
  
  useEffect(() => {
    const analysisData = firebase.firestore()
        .collection('userTestResults')
        .where('userID', '==', firebase.auth().currentUser.uid)
        .where('testID', '==', route.params.testID)
        .where('testDate', '==', route.params.testDate)
        .onSnapshot(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
            blockVal = documentSnapshot.data().Block;
            difficultToUnderstandVal = documentSnapshot.data().DifficultToUnderstand;
            interjectionVal = documentSnapshot.data().Interjection;
            musicVal = documentSnapshot.data().Music;
            naturalPauseVal = documentSnapshot.data().NaturalPause;
            noSpeechVal = documentSnapshot.data().NoSpeech;
            noStutteredWordsVal = documentSnapshot.data().NoStutteredWords;
            poorAudioQualityVal = documentSnapshot.data().PoorAudioQuality;
            prolongationVal = documentSnapshot.data().Prolongation;
            soundRepetitionVal = documentSnapshot.data().SoundRepetition;
            unsureVal = documentSnapshot.data().Unsure;
            wordRepetitionVal = documentSnapshot.data().WordRepetition;
        }
    );
        setBlock(blockVal);
        setDifficultToUnderstand(difficultToUnderstandVal);
        setInterjection(interjectionVal);
        setMusic(musicVal);
        setNaturalPause(naturalPauseVal);
        setNoSpeech(noSpeechVal);
        setNoStutteredWords(noStutteredWordsVal);
        setPoorAudioQuality(poorAudioQualityVal);
        setProlongation(prolongationVal);
        setSoundRepetition(soundRepetitionVal);
        setUnsure(unsureVal);
        setWordRepetition(wordRepetitionVal);

        console.log("ANALYSIS RESULT : **********************");
        console.log("BLOCK : " + block);
        console.log("difficultToUnderstandVal : " + difficultToUnderstand);
        console.log("interjectionVal : " + interjection);
        console.log("musicVal : " + music);
        console.log("naturalPauseVal : " + naturalPause);
        console.log("noSpeechVal : " + noSpeech);
        console.log("noStutteredWordsVal : " + noStutteredWords);
        console.log("poorAudioQualityVal : " + poorAudioQuality);
        console.log("prolongationVal : " + prolongation);
        console.log("soundRepetitionVal : " + soundRepetition);
        console.log("unsureVal : " + unsure);
        console.log("wordRepetitionVal : " + wordRepetition);
        

        // setData(generateChartData(5.000));

    });
    return () => analysisData();
  }, []);


  if(block != null && difficultToUnderstand != null && interjection != null && music!= null && naturalPause != null && noSpeech != null && noStutteredWords != null && poorAudioQuality != null && prolongation != null && soundRepetition != null && unsure != null && wordRepetition != null) {
    data = [
      {
        name: "Block",
        population: Number(block),
        color: "rgba(131, 167, 234, 1)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 10
      },
      {
        name: "Difficult To Understand",
        population: Number(difficultToUnderstand),
        color: "#F00",
        legendFontColor: "#7F7F7F",
        legendFontSize: 10
      },
      {
        name: "Interjection",
        population: Number(interjection),
        color: "red",
        legendFontColor: "#7F7F7F",
        legendFontSize: 10
      },
      {
        name: "Music",
        population: Number(music),
        color: "#ffffff",
        legendFontColor: "#7F7F7F",
        legendFontSize: 10
      },
      {
        name: "Natural Pause",
        population: Number(naturalPause),
        color: "rgb(0, 0, 255)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 10
      },
      {
        name: "No Speech",
        population: Number(noSpeech),
        color: "rgba(131, 167, 234, 1)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 10
      },
      {
        name: "No Stuttered Words",
        population: Number(noStutteredWords),
        color: "#F00",
        legendFontColor: "#7F7F7F",
        legendFontSize: 10
      },
      {
        name: "Poor Audio Quality",
        population: Number(poorAudioQuality),
        color: "red",
        legendFontColor: "#7F7F7F",
        legendFontSize: 10
      },
      {
        name: "Prolongatiton",
        population: Number(prolongation),
        color: "#ffffff",
        legendFontColor: "#7F7F7F",
        legendFontSize: 10
      },
      {
        name: "Sound Repetition",
        population: Number(soundRepetition),
        color: "rgb(0, 0, 255)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 10
      },
      {
        name: "Unsure",
        population: Number(unsure),
        color: "#ffffff",
        legendFontColor: "#7F7F7F",
        legendFontSize: 10
      },
      {
        name: "Word Repetition",
        population:Number(wordRepetition),
        color: "rgb(0, 0, 255)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 10
      },
    ];
  } else {
    data = [
      {
        name: "Block",
        population: 5.000,
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
  }
  

  function formatDate(dateTimeParameter) {
    const dateTime = dateTimeParameter;
    const onlyDate = dateTime.split("-")[0];
    return onlyDate;
  }

  
      

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
      <Text style={styles.test}>Test {route.params.testNo}</Text>
      <Text style={styles.testDate}>{formatDate(route.params.testDate)}</Text> 
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


