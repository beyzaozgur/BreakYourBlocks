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
import {getAuth} from "firebase/auth";
import DatePicker from '../../components/DatePicker';
import Profile from "../Profile";
import Output from "../../components/Output/Output";
//import {updateProfile} from "../../hooks/updateProfile";
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
    const auth=getAuth();
    const user=auth.currentUser;

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [gender, setGender] = useState('');
    const [education, setEducation] = useState('');
    const [mail, setMail] = useState('');
    const [username, setUserName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');

    function updateProfile (uid,_name, _surname, _education, _gender, _mail, _username,){
    
      firebase.firestore().collection('users')
      .doc(uid)
      .update({
          name: _name,
          surname: _surname,
          education: _education,
          gender: _gender,
          mail: _mail,
          username: _username
      })
  
  }

    function update () {
        updateProfile(user.uid, name, surname, education, gender,mail,username);
        navigation.navigate('ProfileScreen');
    };
    useEffect(() => {
            firebase.firestore()
            .collection('users')
            .doc(user.uid)
            .onSnapshot(documentSnapshot => {
              setName(documentSnapshot.data().name);
              setSurname(documentSnapshot.data().surname);
              setEducation(documentSnapshot.data().education);
              setGender(documentSnapshot.data().gender);
              setMail(documentSnapshot.data().mail);
              setUserName(documentSnapshot.data().username);
              setDateOfBirth(documentSnapshot.data().dateOfBirth);
            });
    }, []);
   
   return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
            <View style={styles.logo_container}>
            <Image style={styles.logo} source={require('../../assets/logo.png')}/>
            </View>
            <View style={styles.body_container}>               
                <Input placeholder={"Name"} value={name} onChangeText={setName} />
                <Input placeholder={"Surname"} value={surname} onChangeText={setSurname} />
                <Dropdown data={educationOptions} placeholder={'Education'} dbValue={education} onChange={setEducation} />
               {/* <Output label="Selected Date of Birth:" value={dateOfBirth} align="space_color"/>*/}
                <DatePicker />
                <Output label="Selected Gender:" value={gender} align="space_color"/>
                <CheckBox placeholder={"Gender"} options={['Woman', 'Men']} onChange={setGender} />
                <Input placeholder={"Mail"} value={mail} onChangeText={setMail}/>
                <Input placeholder={"Username"} value={username} onChangeText={setUserName} icon='account'/>
                
            </View>
            <View style={styles.register_container}>         
                <Button text={"Save"} theme='secondary' onPress={update}/>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default EditProfile;
