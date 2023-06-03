import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';

import styles from './Dropdown.style';

// Custom Dropdown Component that takes placeholder data(list of options), onChange function, and dbValue
const DropdownComponent = ({placeholder, data, onChange, dbValue}) => { 
    return ( 
      <SelectDropdown
        defaultButtonText={dbValue ? dbValue : placeholder} // if there is dbValue, assign it. Otherwise assign placeholder
        // style, data, and onChange function is assigned
        buttonStyle={styles.button}
        buttonTextStyle= {styles.text}
        dropdownStyle={styles.container}
        data={data}
        rowTextStyle={styles.text}
        onSelect={onChange}
        buttonTextAfterSelection={(selectedItem) => { // button text will be assigned to selected option
        return selectedItem
      }}
      //  rowTextForSelection={(item) => { // it is used to customize options
      //  return item
      //}}
    />
  );
};

export default DropdownComponent;

