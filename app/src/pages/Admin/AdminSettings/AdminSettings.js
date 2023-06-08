import React from "react";
import {SafeAreaView, View, Image, Text} from "react-native";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { Formik } from "formik";
import * as Yup from 'yup';
import styles from './AdminSettings.style';
import  {firebase}  from "../../../../firebase";


async function handleLogOut() {
    await firebase.auth().signOut();
    console.log("Logging out");
}
const AdminSettings = ({navigation}) => {
   

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
            <Image style={styles.logo} source={require('../../../assets/logo.png')}/>
            </View>
            <View style={styles.body_container}>
                <Button text={"Change Password"} onPress={()=>navigation.navigate('EmailRequestScreen') }/>
                <Button text={"Log Out"} onPress={handleLogOut}/>
            </View>
        </SafeAreaView>
    );
}

export default AdminSettings;
