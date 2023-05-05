import React, { Component, useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import PropTypes from 'prop-types';
import _ from 'underscore';

import styles from './CheckBox.style';
import { onChange } from "react-native-reanimated";

// To create a custom implementation of a checkbox, Component class is extended
class CheckBox extends Component {
    // This code defines a constructor function for the component,
    // which sets the initial state of the component's properties to specific default values.
    constructor(props) {
        super(props); // call to Component's constructor
        this.state = { 
            checked: false,
            onChange: null,
            placeholder: '',
            options: [],
            values: [],
            isVisible: true,
           // isSingleSelection:true,
        }
    };   

  

    pick(selectedValue) {
      
    // if(this.state.isSingleSelection){
        if (this.state.values.includes(selectedValue)) {
         // if(this.state.options.length==1){
           // this.setState({ values: []}); 
          
          //}else{
          // it returns a new array that contains all the elements of values except for the one that matches selectedValue
          // removing
          //this.setState({ values: this.state.values.filter(value => value !== selectedValue) }); 
          return;
         // }
         // this.setState({ checked: false});
         
          } else { 
            this.setState({ values: selectedValue, checked:true });
            
          //  if(this.state.isSingleSelection){
              // If multiple options are allowed, and there is already a selected value,
              // clear the selection and add the new value
           //   this.setState({
           //     values: selectedValue,
            //    checked: true // Set checked to true
           //   });
        //  }else{
        //    this.setState({ values: this.state.values.concat(selectedValue), checked:true });
        //  }}
   /*   }else{
        if (this.state.values.includes(selectedValue)) {
            // If the selected value is already in the array, remove it
            this.setState({values: this.state.values.filter(value => value !== selectedValue), checked: false});
          } else {
            // Otherwise, add the selected value to the array
            this.setState({ values: this.state.values.concat(selectedValue), checked:true });
          }*/
        }
          console.log(this.state.values)
          console.log(this.state.checked)
          
          // Call the onChange handler with the selected value and checked state
          this.props.onChange && this.props.onChange(selectedValue, this.state.checked);
         

          // if (this.state.isSingleSelection) {
          //   if (this.state.values.includes(selectedValue)) {
          //     // Do nothing if the selected value is already in the array
          //     return;
          //   } else if (this.state.options.length > 1 && this.state.values.length > 0) {
          //     // If multiple options are allowed, and there is already a selected value,
          //     // clear the selection and add the new value
          //     this.setState({
          //       values: [selectedValue],
          //       checked: true // Set checked to true
          //     });
          //   } else {
          //     // Otherwise, set the array to contain only the selected value
          //     this.setState({
          //       values: [selectedValue],
          //       checked: true // Set checked to true
          //     });
          //   }
          // } else {
          //   if (this.state.values.includes(selectedValue)) {
          //     // If the selected value is already in the array, remove it
          //     this.setState({
          //       values: this.state.values.filter(value => value !== selectedValue),
          //       checked: false
          //     });
          //   } else {
          //     // Otherwise, add the selected value to the array
          //     this.setState({
          //       values: this.state.values.concat(selectedValue),
          //       checked: true
          //     });
          //   }
          // }
          
          // // Call the onChange handler with the selected value and checked state
          // this.props.onChange && this.props.onChange(selectedValue, this.state.checked);
          
          

    }
    componentDidMount() {
        this.setState(_.extend({}, this.props.style, _.omit(this.props, 'style')))
    }

    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
        this.setState({ checked: nextProps.checked });
       // console.log(this.state.checked)
    }

   

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.state.placeholder}</Text>
                <View style={styles.values}>
                    {this.state.options.map(option => (
                        <View key={option} style={styles.option}>
                            <TouchableOpacity style={styles.checkBox} onPress={() =>
                                this.pick(option)}>{this.state.values.includes(option) && <Text style={styles.check}>✓</Text>}</TouchableOpacity>
                            {this.state.isVisible && <Text style={styles.valueName}>{option}</Text>}

                        </View>
                    ))}

                </View>
            </View>
        );
    };

}

// This code defines the propTypes for the component, which specify the types and requirements for its props.
CheckBox.propTypes = {
    checked: PropTypes.bool,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    values: PropTypes.any,
    options: PropTypes.any,
    isVisible: PropTypes.bool,
  //  isSingleSelection: PropTypes.bool
}
export default CheckBox;

