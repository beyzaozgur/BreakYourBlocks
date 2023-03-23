import { StyleSheet } from "react-native";

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
  row: {
    flex: 1,
    justifyContent: 'space-around',
    marginTop: '5%'
  },
});