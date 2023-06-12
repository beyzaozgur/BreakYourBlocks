import { StyleSheet, Dimensions } from "react-native";

import colors from "../../styles/colors";


export default StyleSheet.create({
  inner_container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 27,
  },
  subtitle: {
    fontWeight: 'bold',
  },
  square: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: '45%',
    backgroundColor: colors.darkgreen,
    borderColor: colors.darkestgreen,
    borderWidth: 3,
    borderRadius: 10,
    width:Dimensions.get('window').width / 2.5,
    height:Dimensions.get('window').height / 4,
    marginTop: 40,
    marginLeft: 30,
  },
  squareWithIcon: {
    paddingTop: '15%',
  },
  squareWithoutIcon: {
    paddingTop: '35%',
  }
})