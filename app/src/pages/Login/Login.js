import React from "react";
import {SafeAreaView, View, Image, Text} from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Formik } from "formik";
import * as Yup from 'yup';
import styles from './Login.style';

const LoginSchema = Yup.object({
    username: Yup.string()
    .min(2, 'Invalid username!')
    .max(50, 'Invalid username!')
    .required('Required!'),
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
    function handleLogin(values){
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
            <Formik initialValues={{username:'', password:''}} validationSchema={LoginSchema} onSubmit={handleLogin}>
            {({handleSubmit, handleChange, values, errors}) => (
            <View style={styles.body_container}>
                <Input placeholder={"Username"} value={values.username} onChangeText={handleChange('username')} icon='account'/>
                {errors.username && <Text style={styles.error}>{errors.username}</Text>}
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