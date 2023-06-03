
import React, { useEffect, useState } from "react";
import {SafeAreaView, View, Image, Text} from "react-native";
import Button from "../../components/Button";
import { getAuth, updatePassword } from "firebase/auth";
import Input from "../../components/Input";
import { Formik } from "formik";
import * as Yup from 'yup';
import styles from './EmailRequest.style';

import { firebase } from "../../../firebase";


const EmailRequest = ({navigation}) => {

    const auth1 = getAuth();
    const user = auth1.currentUser;

    const [email, setEmail] = useState('');

    function resetPassword(email){
        
        firebase.auth().sendPasswordResetEmail( email).then(()=>{
        alert("We send an email to you for reseting your password!");
        navigation.navigate('Login');
        })
    };

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
            <Image style={styles.logo} source={require('../../assets/logo.png')}/>
            </View>
            <View style={styles.body_container}>
                <Input placeholder={"Email"} onChangeText={setEmail} />
                
                <Button text={"send"} onPress={resetPassword(email)}/>
            </View>
        </SafeAreaView>
    );
}

export default EmailRequest;