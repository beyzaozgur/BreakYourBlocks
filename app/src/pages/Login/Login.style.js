import { StyleSheet, Dimensions } from "react-native";
import colors from '../../styles/colors';

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.green,
    },
    logo:{
        height: Dimensions.get('window').height / 3,
        width: Dimensions.get('window').width * 0.9,
        resizeMode:'contain',
        alignSelf:'center',
    },
    logo_container:{
        flex:2.5,
        alignItems:'center',
        justifyContent:'center',
    },
    body_container:{
        //flex:1,
        justifyContent:'center'
    },
    signup_container:{
        flex:1,
        margin:30,
        alignItems:'center',
        justifyContent:'center',
        
    },
    signup_text:{
        color:colors.grayish,
        fontWeight:'bold',
        fontSize:20,
    },
    error:{
        fontSize: 10,
        fontWeight:'bold',
        color: colors.grayish,
        paddingLeft:15,
       },
});