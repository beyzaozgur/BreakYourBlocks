import React from "react";
import {SafeAreaView, View, Image, Text} from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Formik } from "formik";
import * as Yup from 'yup';
import styles from './Login.style';
//import { signInWithEmailAndPassword } from "firebase/auth";
import { firebase } from "../../../firebase";

const LoginSchema = Yup.object({
    mail: Yup.string().email('Invalid email!').required('Required!'),
 
    password:  Yup
    .string()
    .matches(/\w*[a-z]\w*/,  "Invalid password!")
    .matches(/\w*[A-Z]\w*/,  "Invalid password!")
    .matches(/\d/, "Invalid password!")
    .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Invalid password!")
    .min(8,`Invalid password!`)
    .required('Required!'),

});

const Login = ({navigation}) => {
  async function handleLogin(values){        
            try {
               await firebase.auth().signInWithEmailAndPassword(values.mail, values.password);
            } catch (error) {
                console.log(error);
            }

        console.log(values);

    }
    function handleSignUp(){
        navigation.navigate('Sign Up')
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
            <Image style={styles.logo} source={require('../../assets/logo.png')}/>
            </View>
            <Formik initialValues={{mail:'', password:''}} validationSchema={LoginSchema} onSubmit={handleLogin}>
            {({handleSubmit, handleChange, values, errors}) => (
            <View style={styles.body_container}>
                <Input placeholder={"Mail"} value={values.mail} onChangeText={handleChange('mail')} icon='account'/>
                {errors.mail && <Text style={styles.error}>{errors.mail}</Text>}
                <Input placeholder={"Password"} value={values.password} onChangeText={handleChange('password')}  icon='key' isPasswordHidden/>
                {errors.password && <Text style={styles.error}>{errors.password}</Text>}
                <Button text={"Login"} onPress={handleSubmit}/>
            </View>)}
            </Formik>
            <View style={styles.signup_container}>
                <Text style={styles.signup_text}>Don't have an account?</Text>                
                <Button text={"Sign Up"} theme='secondary' onPress={handleSignUp}/>
            </View>
        </SafeAreaView>
    );
}

export default Login;