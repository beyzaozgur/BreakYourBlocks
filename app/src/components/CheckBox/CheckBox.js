import React, { Component} from "react";
import { Text, TouchableOpacity, View } from "react-native";
import PropTypes from 'prop-types';
import _ from 'underscore';

import styles from './CheckBox.style';

// To create a custom implementation of a checkbox, Component class is extended
class CheckBox extends Component {
    // This code defines a constructor function for the component,
    // which sets the initial state of the component's properties to specific default values.
    constructor(props) {
        super(props); // call to Component's constructor
        this.state = { 
            // properties
            checked: false,
            onChange: null,
            placeholder: '',
            options: [],
            values: [],
            isVisible: true,
           // isSingleSelection:true,
        }
    };   
  

    pick(selectedValue) { // function that controls selection
        if (this.state.values.includes(selectedValue)) {  // if selected value already selected , do nothing
            // prevent unselect  
          return;      
         
        } else { // if not selected, select
            this.setState({ values: selectedValue, checked:true });            
         
        }
          
          // Call the onChange handler with the selected value and checked state
          this.props.onChange && this.props.onChange(selectedValue, this.state.checked);        
          
    }

    //set the component's state based on the style property and other props passed to it. 
    componentDidMount() {
        this.setState(_.extend({}, this.props.style, _.omit(this.props, 'style')))
    }
    //  update the component's state based on the new props that it is about to receive
   // componentWillReceiveProps(nextProps) {
      //  this.props = nextProps;
   //     this.setState({ checked: nextProps.checked });
       // console.log(this.state.checked)
   // }
   

   // A required method that defines what should be displayed on the screen when the component is rendered   
   // The render method is called whenever the component's state or props change
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.state.placeholder}</Text> 
                <View style={styles.values}>
                    {this.state.options.map(option => (// for each option creates a box and labels it with option if isVisible set to true
                        <View key={option} style={styles.option}>
                            <TouchableOpacity style={styles.checkBox} onPress={() => // when box is clicked, pick method is called
                                                                                                // if option is selected, puts ✓ in it
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

