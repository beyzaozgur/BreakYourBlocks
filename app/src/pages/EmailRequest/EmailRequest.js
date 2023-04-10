import React from "react";
import {SafeAreaView, View, Image, Text} from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Formik } from "formik";
import * as Yup from 'yup';
import styles from './EmailRequest.style';


const EmailRequest = ({navigation}) => {
    function handleEmailRequest(){
        alert("We send a link to your email!")
        navigation.navigate('Login')
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
            <Image style={styles.logo} source={require('../../assets/logo.png')}/>
            </View>
            <View style={styles.body_container}>
                <Input placeholder={"Email"} value={""} />
                
                <Button text={"send"} onPress={handleEmailRequest}/>
            </View>
        </SafeAreaView>
    );
}

export default EmailRequest;