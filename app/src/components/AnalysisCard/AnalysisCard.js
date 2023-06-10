import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { firebase } from '../../../firebase';

import styles from './AnalysisCard.styles';


const AnalysisCard = props => {

    const [testNo, setTestNo] = useState(0);
    const [duration, setDuration] = useState(0);
    const [level, setLevel] = useState('');


    useEffect(() => {
        firebase.firestore()
            .collection('tests')
            .doc(props.data)
            .onSnapshot(documentSnapshot => {
                setTestNo(documentSnapshot.data().testNo);
                setLevel(documentSnapshot.data().level);
                setDuration(documentSnapshot.data().duration);
            });
    }, []);


    function navigateToTestAnalysisListByDates() {
        props.nav.navigate('TestAnalysesListScreen', {testID: props.data, testNo: testNo});
    }

    return (
        <View>
            { 
            <TouchableOpacity onPress={navigateToTestAnalysisListByDates}>
                <View style={styles.square} >
                    <View style={styles.inner_container}>
                        <Text style={styles.title} >{'Test ' + testNo + '\nAnalysis'}</Text>
                        <Text><Text style={styles.subtitle}>Level:</Text> {level}</Text>
                        <Text><Text style={styles.subtitle}>Duration:</Text> {duration} seconds</Text>
                        {/* <Text><Text style={styles.subtitle}>TEST ID:</Text> {props.data}</Text> */}
                    </View>
                </View>
            </TouchableOpacity>}
        </View>
    )
}

export default AnalysisCard;