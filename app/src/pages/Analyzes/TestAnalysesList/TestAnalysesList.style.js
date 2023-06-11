import { StyleSheet, Dimensions } from "react-native";

import colors from "../../../styles/colors";


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.green,
    },
    seperator: {
      borderWidth: 1,
      borderColor: colors.darkestgreen,
    },
    test:{
        
      textAlign:'center',
      fontSize:40,
      fontWeight:'bold',
      color:colors.midnightgreen,
      marginTop:50,
      marginBottom: 10,
     // backgroundColor: colors.darkestgreen,
      //marginBottom:Dimensions.get('screen').height*0.15,
      
  },
    row: {
      flex: 1,
      justifyContent: 'space-between',
      marginTop: '10%',
      marginHorizontal: '5%',
    },
  });