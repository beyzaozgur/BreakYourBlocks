import React, {useState, useEffect} from "react";
import { View, FlatList, Text } from 'react-native';
import TestAudioCard from '../../../components/TestAudioCard';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './TestAudioList.style';
import { firebase } from "../../../../firebase";
import colors from "../../../styles/colors";


const TestAudioList = ({navigation}) => {
    const storageRef = firebase.storage().ref();
    const [testAudioList, setTestAudioList] = useState([]);

    function navigateToAddAudioScreen() {
        navigation.navigate('AddAudioScreen', {key: null});
    }

    useEffect(() => {
        
        const audioRef = storageRef.child(`testAudios`);
                
        audioRef.listAll()
        .then((audio) => {
            const promises = audio.items.map((itemRef, index) => {
                return itemRef.getMetadata().then(metadata => {
                    return {
                        audioNo: index + 1,
                        key: metadata.timeCreated,
                        name: itemRef.name,
                        contentType: metadata.contentType,
                       // navigation: navigation,
                    }
                });
            });
            Promise.all(promises).then(list => {
                setTestAudioList(list);
                //console.log(list);
            });
        })
        .catch((error) => {
            console.error('Error getting audio files list:', error);
        });

    }, [testAudioList]);

    const renderAudio = ({ item }) => <TestAudioCard audio={item} />;

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                {/* <Text style={styles.title}>Sounds</Text> */}
                <FontAwesome.Button style={styles.audioAddButton} name='plus' backgroundColor={colors.darkestgreen} onPress={navigateToAddAudioScreen}>Add Audio</FontAwesome.Button>
            </View>
            <FlatList
                keyExtractor={item => item.id}
                data={testAudioList}
                renderItem={renderAudio}
              //  numColumns={2}
                //columnWrapperStyle={styles.row}
                >
            </FlatList>
        </View>
    )
}

export default TestAudioList;