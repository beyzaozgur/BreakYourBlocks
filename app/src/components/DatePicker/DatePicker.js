import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import styles from "./DatePicker.style";

const DatePicker = ({ onSelect, initialDate }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    var formattedDate = formatDate(date);
    setSelectedDate(formattedDate);
    hideDatePicker();
    onSelect(date);
  };

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
  
    return day + "/" + month + "/" + year;
  };  

  return (
    <View style={styles.MainContainer}>
      <TouchableOpacity onPress={showDatePicker} style={{color:'transparent'}}>
        {/* <Text>{selectedDate != "" ? (initialDate != "" ? initialDate : selectedDate) : "Select Date"}</Text> */}
        <Text>{selectedDate != "" ? selectedDate : "Select Date"}</Text> 
      </TouchableOpacity>
      <DateTimePickerModal
         minimumDate={new Date('1900-01-01')}
         maximumDate={new Date()}
         isVisible={isDatePickerVisible}
         mode="date"
         onConfirm={handleConfirm}
         onCancel={hideDatePicker}
      />
     </View>
  );
};

export default DatePicker;
