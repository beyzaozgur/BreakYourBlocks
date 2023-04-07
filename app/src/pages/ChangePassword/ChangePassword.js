import*as React from "react";
//import { useAlert } from "react-alert";
import {SafeAreaView, View, Image, Text, ScrollView} from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import styles from './ChangePassword.style';
import Dropdown from "../../components/Dropdown";
import CheckBox from "../../components/CheckBox";
import DatePicker from '../../components/DatePicker';
import Profile from "../Profile";
const educationOptions = ['No Formal Education', 'Primary Education', 'Secondary Education', 'High School', 
"Bachelor's degree", "Master's degree", 'Doctorate or higher'];

//const alert = useAlert();


const  ChangePassword = ({navigation}) => {
    function handleChangePassword(){
        alert("Your password has been changed!")
        navigation.navigate('ProfileScreen')
    }
   return(
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
            <Image style={styles.logo} source={require('../../assets/logo.png')}/>
            </View>              
            
            <View style={styles.body_container}>

                <Input placeholder={"Password"} value={""} />
                <Input placeholder={"Confirm Password"} value={""} />
                
            </View>
            <View style={styles.register_container}>         
                <Button text={"Save"}  onPress={handleChangePassword}/>
            </View>
        </SafeAreaView>
    );
}

export default ChangePassword;
