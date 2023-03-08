import React, { useState } from "react";
 
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
 
import DateTimePicker from '@react-native-community/datetimepicker';

import colors from "../../styles/colors";
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
 
export default function App({onChange}) {
 
  const [datePicker, setDatePicker] = useState(false);
 
  const [date, setDate] = useState(new Date());

  
  function showDatePicker() {
    setDatePicker(true);
  };
 
 
  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  };
 
  return (
    <SafeAreaView >
      <View style={styleSheet.MainContainer}>
 
        <Text style={styleSheet.text}>{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</Text>
 
        {datePicker && (
          <DateTimePicker
            value={date}
            mode={'date'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
           // is24Hour={true}
           onChange={onDateSelected}          
         // onChange={onChange}
          
            style={styleSheet.datePicker}
          />
        )}
 
                {!datePicker && (
          <View >
            <Icon name="calendar-month" size= {30} color={colors.grayish} onPress={showDatePicker} />
          </View>
        )}
 
      
 
      </View>
    </SafeAreaView>
  );
}
 
const styleSheet = StyleSheet.create({
 
  MainContainer: {
        height:40,
        flexDirection:'row',
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        padding:5,
        borderWidth:2,
        borderColor:colors.grayish,
        borderRadius:5,        
        justifyContent:'center',
        alignItems:'center',
       // backgroundColor:'red'
  },
  text: {
    flex:0.99,
    fontSize: 14,
    fontWeight:'bold',
    color: colors.grayish,
    padding: 3,
   // marginBottom: 10,
   // textAlign: 'center',
  },
 
  // Style for iOS ONLY...
  datePicker: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 320,
    height: 260,
    display: 'flex',
  },
 
});