import { StyleSheet, Dimensions } from "react-native";
import colors from '../../styles/colors';

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.darkgreen,
        flexDirection:'column',
    },
    logo:{
        height: Dimensions.get('window').height /8,
        width: Dimensions.get('window').width * 0.9,
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
    register_container:{
        marginTop:20,
        flex:1.5,
       // margin:30,
        alignItems:'center',
        justifyContent:'center',
        
    },
    accept_text:{
        color:colors.grayish,
        fontWeight:'bold',
        fontSize:15,
    },
    error:{
     fontSize: 10,
     fontWeight:'bold',
     color: colors.grayish,
     paddingLeft:15,
    },
 
});
