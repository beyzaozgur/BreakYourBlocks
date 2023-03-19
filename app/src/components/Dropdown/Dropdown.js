import React, { useState } from 'react';
import { Text, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../styles/colors';
import styles from './Dropdown.style';


const DropdownComponent = ({placeholder, data, onChange, dbValue}) => {
   // const [value, setValue] = useState(null);

    return (
      <SelectDropdown
        defaultButtonText={dbValue ? dbValue : placeholder}
        buttonStyle={styles.button}
        buttonTextStyle= {styles.text}
        dropdownStyle={styles.container}
       // selectedRowStyle={styles.container}
        data={data}
       // rowStyle={styles.container}
       // placeholderStyle={styles.text}
        rowTextStyle={styles.text}
       // selectedRowTextStyle={styles.text}
       // itemTextStyle={styles.text}
        //maxHeight={300}
      // labelField="label"
       // valueField="value"
      //  placeholder={placeholder}
       // value={value}
        //onChange = {onChange}
        //dropdownIconPosition='left'
       // renderDropdownIcon ={()=>(<Icon name='menu-down' size={25} color={colors.darkestgreen}/>)}
        onSelect = {onChange}
        buttonTextAfterSelection={(selectedItem) => {	return selectedItem
        }}
        rowTextForSelection={(item) => {
          return item
        }}
      />
    );
  };

export default DropdownComponent;

