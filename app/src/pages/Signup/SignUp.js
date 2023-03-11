import React from "react";
//import { useAlert } from "react-alert";
import {SafeAreaView, View, Image, Text, ScrollView} from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import styles from './SignUp.style';
import Dropdown from "../../components/Dropdown";
import CheckBox from "../../components/CheckBox";
import DatePicker from '../../components/DatePicker';
//import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebase } from "../../../firebase";

const educationOptions = ['No Formal Education', 'Primary Education', 'Secondary Education', 'High School', 
"Bachelor's degree", "Master's degree", 'Doctorate or higher'];

//const alert = useAlert();

const SignUpSchema = Yup.object({
    name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required!'),
  surname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required!'),
  education: Yup.string().required('Required!').oneOf(educationOptions),
  gender: Yup.string().required('gender Required!'),
  mail: Yup.string().email('Invalid email!').required('Required!'),
  username: Yup.string()
  .min(2, 'Too Short!')
  .max(50, 'Too Long!')
  .required('Required!'),
  password: Yup
  .string()
  .matches(/\w*[a-z]\w*/,  "Password must have a small letter!")
  .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter!")
  .matches(/\d/, "Password must have a number!")
  .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character!")
  .min(8, ({ min }) => `Password must be at least ${min} characters!`)
  .required('Required!'),
  confirmPassword: Yup
  .string()
  .oneOf([Yup.ref('password')], 'Passwords do not match!')
  .required('Required!'),
  isApproved:Yup.string().required('Required!'),
});



const SignUp = ({navigation}) => {
   async function handleSignUp(values){
    try {
       await firebase.auth().createUserWithEmailAndPassword(values.mail, values.password)
       .then(() => {
        firebase.auth().currentUser.sendEmailVerification({
            handleCodeInApp:true,
            url:'https://breakyourblocks-1.firebaseapp.com',
        })
        .then(() =>{alert('Verification email sent!')}).catch(error =>{
            alert(error.message)
        }) .then(()=>{
            firebase.firestore().collection('users')
            .doc(firebase.auth().currentUser.uid)
            .set({
                name: values.name,
                surname: values.surname,
                education: values.education,
                gender:values.gender,
                mail: values.mail,
                username: values.username,
                password:values.password
            })
        }).then(()=>{
            console.log(values);
            navigation.navigate('Profile');
        }).catch((error)=>{alert(error.message)})
       })
    } catch (error) {
        console.log(error);
    }
      
    }
   return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
            <View style={styles.logo_container}>
            <Image style={styles.logo} source={require('../../assets/logo.png')}/>
            </View>
            <Formik initialValues={{
                name:'',
                surname:'',
                dateOfBirth:'', 
                education:'', 
                gender:'', 
                mail:'', 
                username:'', 
                password:'', 
                confirmPassword:'', 
                isApproved:''}}                
                validationSchema={SignUpSchema}
                onSubmit={handleSignUp}>
            {({handleSubmit, handleChange, values,errors}) => (
            <>
            <View style={styles.body_container}>
               
                <Input placeholder={"Name"} value={values.name} onChangeText={handleChange('name')}/>
                {errors.name && <Text style={styles.error}>{errors.name}</Text>}
                <Input placeholder={"Surname"} value={values.surname} onChangeText={handleChange('surname')} />
                {errors.surname && <Text style={styles.error}>{errors.surname}</Text>}
                <DatePicker value ={values.dateOfBirth} onChange={handleChange('dateOfBirth')} />
                <Dropdown data={educationOptions} placeholder={'Education'} onChange={handleChange('education')}/>
                {errors.education && <Text style={styles.error}>{errors.education}</Text>}
                <CheckBox placeholder={'Gender'} options={['Woman', 'Men']} onChange={handleChange('gender')} />
                {errors.gender && <Text style={styles.error}>{errors.gender}</Text>}
                <Input placeholder={"Mail"} value={values.mail} onChangeText={handleChange('mail')}/>
                {errors.mail && <Text style={styles.error}>{errors.mail}</Text>}
                <Input placeholder={"Username"} value={values.username} onChangeText={handleChange('username')} icon='account'/>
                {errors.username && <Text style={styles.error}>{errors.username}</Text>}
                <Input placeholder={"Password"} value={values.password} onChangeText={handleChange('password')}  icon='key' isPasswordHidden/>
                {errors.password && <Text style={styles.error}>{errors.password}</Text>}
                <Input placeholder={"Confirm Password"} value={values.confirmPassword} onChangeText={handleChange('confirmPassword')}  icon='key' isPasswordHidden/>
                {errors.confirmPassword && <Text style={styles.error}>{errors.confirmPassword}</Text>}
                <CheckBox placeholder={'I have read the PDPP and I accept.'} isVisible={false} options={['true']} onChange={handleChange('isApproved')}/>                      
                {errors.isApproved && <Text style={styles.error}>{errors.isApproved}</Text>}
            </View>
            <View style={styles.register_container}>         
                <Button text={"Register"} theme='secondary' onPress={handleSubmit}/>
            </View>
            </>
            )}
            </Formik>
            </ScrollView>
        </SafeAreaView>
    );
}

export default SignUp;
