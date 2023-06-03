import React from "react";
import { SafeAreaView, View, Image, Text } from "react-native";
import { useToast } from "react-native-toast-notifications";
import { Formik } from "formik";
import * as Yup from 'yup';

import Button from "../../components/Button";
import Input from "../../components/Input";
import styles from './Login.style';
//import { signInWithEmailAndPassword } from "firebase/auth";
import { firebase } from "../../../firebase";
import ErrorMessageParser from "../../utils/ErrorMessageParser";


const LoginSchema = Yup.object({
    mail: Yup.string().email('Invalid email!').required('Required!'),

    password: Yup
        .string()
        .matches(/\w*[a-z]\w*/, "Invalid password!")
        .matches(/\w*[A-Z]\w*/, "Invalid password!")
        .matches(/\d/, "Invalid password!")
        .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Invalid password!")
        .min(8, `Invalid password!`)
        .required('Required!'),

});

const Login = ({ navigation }) => {
    const toast = useToast();

    async function handleLogin(values) {
        try {
            await firebase.auth().signInWithEmailAndPassword(values.mail, values.password).then(
                async () => {
                    let emailVerified = firebase.auth().currentUser.emailVerified;
                    console.log(emailVerified);
                    if (emailVerified === true) {
                        firebase.auth().signOut();
                        await firebase.auth().signInWithEmailAndPassword(values.mail, values.password).then(() => {
                         //   toast.show('Your mail verified', { type: 'success' });
                        })

                    } else {
                        toast.show('Verify your email to continue!', { type: 'normal' });
                        firebase.auth().signOut();
                    }
                }


            )
        } catch (error) {
            console.log(error);
            toast.show(ErrorMessageParser(error.code), { type: 'normal' });           
        }

      //  console.log(values);

    }
    function handleSignUp() {
        navigation.navigate('Sign Up');
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require('../../assets/logo.png')} />
            </View>
            <Formik initialValues={{ mail: '', password: '' }} validationSchema={LoginSchema} onSubmit={handleLogin}>
                {({ handleSubmit, handleChange, values, errors }) => (
                    <View style={styles.body_container}>
                        <Input placeholder={"Mail"} value={values.mail} onChangeText={handleChange('mail')} icon='account' />
                        {errors.mail && <Text style={styles.error}>{errors.mail}</Text>}
                        <Input placeholder={"Password"} value={values.password} onChangeText={handleChange('password')} icon='key' isPasswordHidden />
                        {errors.password && <Text style={styles.error}>{errors.password}</Text>}
                        <Button text={"Login"} onPress={handleSubmit} />
                        <Text style={styles.forgotPassword_text}  onPress={()=>navigation.navigate('Email Request') } >Forgot password?</Text>
                    </View>)}
            </Formik>
            <View style={styles.signup_container}>
                <Text style={styles.signup_text}>Don't have an account?</Text>
                <Button text={"Sign Up"} theme='secondary' onPress={handleSignUp} />
            </View>
        </SafeAreaView>
    );
}

export default Login;