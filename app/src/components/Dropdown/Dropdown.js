import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';

import styles from './Dropdown.style';


const DropdownComponent = ({ placeholder, data, onChange }) => {
  // const [value, setValue] = useState(null);

  return (
    <SelectDropdown
      defaultButtonText={placeholder}
      buttonStyle={styles.button}
      buttonTextStyle={styles.text}
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
      onSelect={onChange}
      buttonTextAfterSelection={(selectedItem) => {
        return selectedItem
      }}
      rowTextForSelection={(item) => {
        return item
      }}
    />
  );
};

export default DropdownComponent;

