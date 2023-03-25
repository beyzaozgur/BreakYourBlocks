import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import PropTypes from 'prop-types';
import _ from 'underscore';

import styles from './CheckBox.style';


class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            onChange: null,
            placeholder: '',
            options: [],
            values: [],
            isVisible: true,

        }
    };



    // const [values, setValues] = useState([]);

    pick(selectedValue) {

        // const index = values.findIndex(value => value===selectedValue)
        // if(this.state.values.length=1){ // prevent multiple selcetion 
        //  this.setState({ values:this.state.values.filter(value => value === selectedValue)});
        //  var checked = !this.state.checked;
        //  this.setState({ checked: checked });
        //  this.props.onChange && this.props.onChange(selectedValue,checked);
        //  setValues(values => values.concat(selectedValue) );
        //setTimeout(30);

        //  }


        if (this.state.values.includes(selectedValue)) {
            this.setState({ values: this.state.values.filter(value => value !== selectedValue) });

            var checked = !this.state.checked;
            this.setState({ checked: checked });
            this.props.onChange && this.props.onChange(selectedValue, checked);
            return;
        }
        if (this.state.values.length = 1) { // prevent multiple selcetion 
            this.setState({ values: this.state.values.filter(value => value === selectedValue) });
        }


        this.setState({ values: this.state.values.concat(selectedValue) });
        var checked = !this.state.checked;
        this.setState({ checked: checked });
        this.props.onChange && this.props.onChange(selectedValue, checked);

    }
    componentDidMount() {
        this.setState(_.extend({}, this.props.style, _.omit(this.props, 'style')))
    }

    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
        this.setState({ checked: nextProps.checked });
    }
    //const CheckBox = ({placeholder, options, onChange}) =>{
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
    /*_toggleCheck() {
        var checked = !this.state.checked;
        this.setState({ checked: checked });
        this.props.onChange && this.props.onChange(this.props.option,checked);
    }*/
}


CheckBox.propTypes = {
    checked: PropTypes.bool,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    values: PropTypes.any,
    options: PropTypes.any,
    isVisible: PropTypes.bool,
    //option:PropTypes.string
}
export default CheckBox;

