import { StyleSheet } from "react-native";

import colors from "../../../styles/colors";


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.green,
    },
    row: {
      flex: 1,
      //justifyContent: 'space-evenly',
      marginTop: '10%',
      marginHorizontal: '5%',
    },
    buttonContainer: {
      flexDirection: 'row',
    //  justifyContent: 'space-between',
     justifyContent:'flex-end',
      marginTop: 40,
      margin: 10,
  },
 /* title: {
    fontWeight: 'bold',
    fontSize: 20,
    color:colors.darkestgreen,
},*/

  settings_icon:{
    flex:1,
    paddingHorizontal:10,
    alignSelf:"flex-start"
  }
  });