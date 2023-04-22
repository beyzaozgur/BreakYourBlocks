import React, { useEffect, useState } from "react";
//import { useAlert } from "react-alert";
import {SafeAreaView, View, Image, Text, ScrollView} from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import styles from './EditProfile.style';
import Dropdown from "../../components/Dropdown";
import CheckBox from "../../components/CheckBox";
import { firebase } from "../../../firebase";
import DatePicker from '../../components/DatePicker';
import Profile from "../Profile";
const educationOptions = ['No Formal Education', 'Primary Education', 'Secondary Education', 'High School', 
"Bachelor's degree", "Master's degree", 'Doctorate or higher'];

//const alert = useAlert();
/*
                <Input placeholder={"Password"} value={values.password} onChangeText={handleChange('password')}  icon='key' isPasswordHidden/>
                {errors.password && <Text style={styles.error}>{errors.password}</Text>}
                <Input placeholder={"Confirm Password"} value={values.confirmPassword} onChangeText={handleChange('confirmPassword')}  icon='key' isPasswordHidden/>
                {errors.confirmPassword && <Text style={styles.error}>{errors.confirmPassword}</Text>} */

const EditProfileSchema = Yup.object({
    name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
    //.required('Required!'),
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

const EditProfile = ({navigation}) => {
    function handleEditProfile(values){
        console.log(values);
        navigation.navigate('Profile')
    }
    function handleEditProfileSave(){
        navigation.navigate('ProfileScreen')
    }
    const [info, setInfo] = useState('');

    useEffect(() => {
        try {
            firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).get().then((snapshot) => {
                if (snapshot.exists) {
                    setInfo(snapshot.data())
                } else {
                    console.log('User does not exist!')
                }
            })

        } catch (error) {
            console.log(error);
        }

    }, [])
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
               // validationSchema={EditProfileSchema}
                onSubmit={handleEditProfile}>
            {({handleSubmit, handleChange, values,errors}) => (
            <>
            <View style={styles.body_container}>
               
                <Input placeholder={info.name} onChangeText={handleChange('name')}/>
                {errors.name && <Text style={styles.error}>{errors.name}</Text>}
                <Input placeholder={info.surname} onChangeText={handleChange('surname')} />
                {errors.surname && <Text style={styles.error}>{errors.surname}</Text>}
                <Dropdown data={educationOptions} placeholder={info.education} onChange={handleChange('education')}/>
                {errors.education && <Text style={styles.error}>{errors.education}</Text>}
                <CheckBox placeholder={"Gender"} options={['Woman', 'Men']} onChange={handleChange('gender')} />
                {errors.gender && <Text style={styles.error}>{errors.gender}</Text>}
                <Input placeholder={info.mail} onChangeText={handleChange('mail')}/>
                {errors.mail && <Text style={styles.error}>{errors.mail}</Text>}
                <Input placeholder={info.username} onChangeText={handleChange('username')} icon='account'/>
                {errors.username && <Text style={styles.error}>{errors.username}</Text>}
                
            </View>
            <View style={styles.register_container}>         
                <Button text={"Save"} theme='secondary' onPress={handleEditProfileSave}/>
            </View>
            </>
            )}
            </Formik>
            </ScrollView>
        </SafeAreaView>
    );
}

export default EditProfile;
