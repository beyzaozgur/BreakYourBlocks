import { StyleSheet } from "react-native";

import colors from "../../styles/colors";


export default StyleSheet.create({

  MainContainer: {
    height: 50,
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
    borderWidth: 2,
    borderColor: colors.grayish,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    flex: 0.99,
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.grayish,
    padding: 3,
    textAlignVertical:"center",
    // marginBottom: 10,
    // textAlign: 'center',
  },

  // Style for iOS ONLY...
  datePicker: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 320,
    height: 260,
    display: 'flex',
    backgroundColor: colors.darkestgreen,
  },

});