import { StyleSheet } from "react-native";

import colors from "../../../styles/colors";


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.grayish,
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
  });