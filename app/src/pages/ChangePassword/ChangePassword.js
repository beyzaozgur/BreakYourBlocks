import React, { useEffect, useState } from "react";
//import { useAlert } from "react-alert";
import {SafeAreaView, View, Image, Text, ScrollView} from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { getAuth, updatePassword } from "firebase/auth";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import styles from './ChangePassword.style';
import { firebase } from "../../../firebase";
import Dropdown from "../../components/Dropdown";
import CheckBox from "../../components/CheckBox";
import DatePicker from '../../components/DatePicker';
import Profile from "../Profile";
const educationOptions = ['No Formal Education', 'Primary Education', 'Secondary Education', 'High School', 
"Bachelor's degree", "Master's degree", 'Doctorate or higher'];

//const alert = useAlert();


const  ChangePassword = ({navigation}) => {
    
    const auth = getAuth();
    const user = auth.currentUser;

    const [password, setPassword] = useState('');

    function updatePassword(uid, _password){
        
        firebase.firestore().collection('users')
      .doc(uid)
      .update({
          password : _password
      })
    };

    function update () {
        updatePassword(user.uid, password);
        
        alert("Your password has been changed!")
        navigation.navigate('ProfileScreen')
    };

    useEffect(() => {
        firebase.firestore()
        .collection('users')
        .doc(user.uid)
        .onSnapshot(documentSnapshot => {
          setPassword(documentSnapshot.data().password);
        });
      
}, []);
   return(
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
            <Image style={styles.logo} source={require('../../assets/logo.png')}/>
            </View>      

            <View style={styles.body_container}>
            <Input placeholder={"Password"}  onChangeText={setPassword} />
            </View>
            
            <View style={styles.register_container}>         
                <Button text={"Save"}  onPress={update}/>
            </View>
                       
        </SafeAreaView>
    );
}

export default ChangePassword;
