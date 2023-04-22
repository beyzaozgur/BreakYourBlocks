import React, { useEffect, useState } from "react";
import { View, SafeAreaView, Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import ImagePicker from 'react-native-image-crop-picker';
// import { select } from "underscore";

import Output from "../../components/Output";
import colors from "../../styles/colors";
import styles from "./Profile.style";
// import Button from "../../components/Button";
import { firebase } from "../../../firebase";
//import Loading from "../../components/Loading/Loading";


function ProfileScreen({navigation}) {
    //     var defaultUserProfile = require('../../assets/profile.png')
    //     const [imageUri, setImageUri] = useState(defaultUserProfile);
    //   const [tintColor, setTintColor] = useState(colors.darkestgreen);
    const [info, setInfo] = useState('');

    useEffect(() => {
        try {
            firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).get().then((snapshot) => {
                if (snapshot.exists) {
                    setInfo(snapshot.data())
                } else {
                    console.log('User does not exist!')
                }
            })

        } catch (error) {
            console.log(error);
        }

    }, [])



    //    function selectImage(){
    //         ImagePicker.openPicker({
    //             width: 300,
    //             height: 400,
    //             cropping: true,
    //             includeBase64: true,
    //           }).then(image => {
    //             source={uri: `data:${image.mime};base64,${image.data}`}
    //             setImageUri(source);
    //             setTintColor(null);
    //           }).catch(error => console.log(error));
    //           };


    return (

        <SafeAreaView style={styles.container}>

            <View style={styles.profileContainer}>
                <Icon name="cog-outline" size={35} color={colors.darkestgreen} style={styles.settings_icon} onPress={()=>navigation.navigate('Settings')} />
                {/* <View style={styles.profilePictureContainer}>
            <Image style={styles.profilePicture} source={imageUri} tintColor={tintColor}/>
            <Icon name="plus-circle" size= {35} color={colors.darkestgreen} style={styles.add_photo_icon} onPress={selectImage}/>
            </View> */}
            </View>
            <View style={styles.nameContainer}><Output value={info.username} /></View>

            <View style={styles.personalDataContainer}>
                <Output label={'Full Name'} value={info.name + ' ' + info.surname} align={'space'} />
                <Output label={'Gender'} value={info.gender} align={'space'} />
                <Output label={'Date Of Birth'} value={"17/6/2000"} align={'space'} />
                <Output label={'Education'} value={info.education} align={'space'} />
                <Output label={'Mail'} value={info.mail} align={'space'} />
            </View>

        </SafeAreaView>
    )
}

export default ProfileScreen;