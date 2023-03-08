import { StyleSheet } from "react-native";
import colors from '../../styles/colors';

const base_style= StyleSheet.create({
    container:{
        padding:8,
        margin:10,
        
        borderWidth:1,
        borderRadius:5,
        alignItems:'center',
    },
    button_container:{
        //flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
        //marginLeft:5,
        fontWeight:'bold',
        fontSize: 17,
       // color:
        
    },
});

export default {
    primary: StyleSheet.create({
        ...base_style,
        container:{
            ...base_style.container,
            backgroundColor: colors.darkestgreen,
            borderColor: colors.grayish,
        
        },
        title:{
            ...base_style.title,
            color:colors.grayish,
        },
    }),

    secondary: StyleSheet.create({
        ...base_style,
        container:{
            ...base_style.container,
            backgroundColor: colors.grayish,
            borderColor: colors.darkestgreen,
            
        },
        title:{
            ...base_style.title,
            color:colors.darkestgreen,
        },
    }),

    warning: StyleSheet.create({
        ...base_style,
        container:{
            ...base_style.container,
            backgroundColor: colors.warning,
            borderColor: colors.grayish,
            
        },
        title:{
            ...base_style.title,
            color:colors.grayish,
        },
    }),
    danger: StyleSheet.create({
        ...base_style,
        container:{
            ...base_style.container,
            backgroundColor: colors.danger,
            borderColor: colors.grayish,
            
        },
        title:{
            ...base_style.title,
            color:colors.grayish,
        },
    })
}