import { StyleSheet, Dimensions } from "react-native";
import colors from '../../styles/colors';

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.darkgreen,
        flexDirection:'column',
    },
    logo:{
        height: Dimensions.get('window').height /4,
        width: Dimensions.get('window').width * 2,
        resizeMode:'contain',
        alignSelf:'center',
        justifyContent:'center',
      //  backgroundColor:'red'
    },
    logo_container:{
        marginTop:5,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
      //  backgroundColor:'yellow'
    },
    body_container:{
        flex:5,
        justifyContent:'center',
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