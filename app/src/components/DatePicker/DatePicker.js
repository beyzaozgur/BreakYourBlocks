import React, { useState } from "react";
import { SafeAreaView, TextInput, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from "./DatePicker.style";
import colors from "../../styles/colors";


export default function App ({ value, onDateChange }) {

  // const [datePicker, setDatePicker] = useState(false);

   const [date, setDate] = useState(value);


  // function showDatePicker() {
  //   setDatePicker(true);
  // };


  // function onDateSelected(event, value) {
  //   setDate(value);
  //   setDatePicker(false);
  // };
  // 

  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios');
  //  if (selectedDate !== undefined) {
    setDate(selectedDate);
    onDateChange(selectedDate);
   // }
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  return (
    <SafeAreaView >
      <View style={styles.MainContainer}>

        <TextInput style={styles.text}>{date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</TextInput>


        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode={'date'}
            maximumDate={new Date()}
           // display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            // is24Hour={true}
            onChange={handleDateChange}
            // onChange={onChange}

            style={styles.datePicker}
          />
        )}

        {!showDatePicker && (
          <View >
            <Icon name="calendar-month" size={30} color={colors.grayish} onPress={showDatepicker} />
          </View>
        )}

      {/* <TextInput placeholder="Date of Birth" value={value.getDate()/(value.getMonth() + 1)/value.getFullYear()} />
      <Icon name="calendar-month" size={30} color={colors.grayish} onPress={showDatepicker} />
      {showDatePicker && (
        <DateTimePicker
          value={value}
          mode="date"
          display="default"
          onChange={handleDateChange}
          maximumDate={new Date()}
          style={styles.datePicker}
        />
      )} */}

      </View>
    </SafeAreaView>
  );
}
