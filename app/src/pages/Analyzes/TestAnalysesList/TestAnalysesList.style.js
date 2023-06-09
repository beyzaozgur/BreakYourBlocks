import { StyleSheet, Dimensions } from "react-native";

import colors from "../../../styles/colors";


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.grayish,
    },
    body_container:{
      flex:5,
      justifyContent:'center',
  },
    seperator: {
      borderWidth: 1,
      borderColor: colors.darkestgreen,
    },
    row: {
      flex: 1,
      justifyContent: 'space-between',
      marginTop: '10%',
      marginHorizontal: '5%',
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
  });