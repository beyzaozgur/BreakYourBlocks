import { StyleSheet, Dimensions } from "react-native";

import colors from "../../styles/colors";


export default StyleSheet.create({
  container: {
    //flex:1,
    // margin:10,
    marginTop: 10,
    // marginLeft:10,
    // marginRight:10,
    backgroundColor: colors.grayish,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.darkestgreen,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent:'center',
    width: Dimensions.get('window').width * 0.95,
    alignSelf: 'center',
    //height:40,
  },
  button: {
    //flex:1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: colors.grayish,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.darkestgreen,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: Dimensions.get('window').width * 0.95,
  },
  text: {
    //paddingLeft:4,
    // textAlign:'left',
    flex: 0.99,
    fontSize: 14,
    color: colors.darkestgreen,
    fontWeight: 'bold',
    // fontFamily:'ui-serif',
  },

});