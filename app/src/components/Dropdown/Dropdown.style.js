import { StyleSheet, Dimensions } from "react-native";

import colors from "../../styles/colors";


export default StyleSheet.create({
  container: { // main container that contains buttons
    marginTop: 10,
    backgroundColor: colors.grayish,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.darkestgreen,
    flexDirection: 'row', // The child components are arranged horizontally(options)
    alignItems: 'center', // items in it centered
    justifyContent:'center', // align items horizontally since flex direction is row
    width: Dimensions.get('window').width * 0.95, // width is 95% of the screen width
    alignSelf: 'center', // container is centered
  },
  button: { // buttons (that contains options) looks
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: colors.grayish,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.darkestgreen,
    flexDirection: 'row', // main axis
    alignItems: 'center', // aligning cross axis
    justifyContent: 'center', // aligning main axis
    height: 40,
    width: Dimensions.get('window').width * 0.95, // width is 95% of the screen width
  },
  text: {
    flex: 0.99, //  take up almost all the available space, leaving just a tiny amount of space
    fontSize: 14,
    color: colors.darkestgreen,
    fontWeight: 'bold',
  },

});