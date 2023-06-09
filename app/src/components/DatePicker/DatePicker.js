import React, { useEffect, useState ,TouchableOpacity} from "react";
import { SafeAreaView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "./DatePicker.style";
import colors from "../../styles/colors";
import { onChange } from "react-native-reanimated";
import { Button, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {getAuth, updateProfile} from "firebase/auth";
import { firebase } from "../../../firebase";
import { date } from "yup";

export default function App () {

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const auth=getAuth();
  const user=auth.currentUser;

  function updateDate (uid,_date){
    
    firebase.firestore().collection('users')
    .doc(uid)
    .update({
        dateOfBirth: _date.toDateString(),
    })
}
function setDate (_date){
    
  /*firebase.firestore().collection('users')
  .doc(firebase.auth().currentUser.uid)
  .set({
      dateOfBirth: _date.toString(),
  })*/
  return _date.toDateString()
  
}
function updateDB (dateOfBirth) {
  if(user==null){
    setDate(dateOfBirth);
  }else{
  updateDate(user.uid,  dateOfBirth);
}};



/*useEffect(() => {
  firebase.firestore()
  .collection('users')
  .doc(user.uid)
  .onSnapshot(documentSnapshot => {
    setDateOfBirth(documentSnapshot.data().dateOfBirth);
  });

}, []);*/


  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
   
    updateDB(date);
    hideDatePicker();
  };
  

  return (
    <View style={styles.MainContainer}>
      <Button title="Date of Birth" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
       onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
}
