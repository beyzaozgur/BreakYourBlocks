import { View, Text, SafeAreaView, Image} from "react-native";
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
// import ImagePicker from 'react-native-image-crop-picker';
import Output from "../../components/Output"
import colors from "../../styles/colors";
import styles from "./Profile.style";
// import Button from "../../components/Button";
import { useState } from "react";
// import { select } from "underscore";


function ProfileScreen(){
//     var defaultUserProfile = require('../../assets/profile.png')
//     const [imageUri, setImageUri] = useState(defaultUserProfile);
    const [tintColor, setTintColor] = useState(colors.darkestgreen);

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
    
    
    return(
        <SafeAreaView style={styles.container}>
            
            <View style={styles.profileContainer}>
            <Icon name="cog-outline" size= {35} color={colors.darkestgreen} style={styles.settings_icon}/>
            {/* <View style={styles.profilePictureContainer}>
            <Image style={styles.profilePicture} source={imageUri} tintColor={tintColor}/>
            <Icon name="plus-circle" size= {35} color={colors.darkestgreen} style={styles.add_photo_icon} onPress={selectImage}/>
            </View> */}
            </View>
            <View style={styles.nameContainer}><Output value={"Yağmur"}/></View>       
            
            <View style={styles.personalDataContainer}>
            <Output label={'Full Name'} value={"Yağmur Akbaba"} align={'space'}/>
            <Output label={'Gender'} value={"Female"} align={'space'}/>
            <Output label={'Date Of Birth'} value={"17/6/2000"} align={'space'}/>
            <Output label={'Education'} value={"Bachelor's"} align={'space'}/>
            <Output label={'Mail'} value={"yagmur.akbaba@gmail.com"} align={'space'}/>

            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen;