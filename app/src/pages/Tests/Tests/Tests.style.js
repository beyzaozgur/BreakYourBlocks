import {StyleSheet, Dimensions} from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.green,
      },
      timerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 20,
        marginTop:75
      },
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      fill: {
        flex: 1,
        margin: 16
      },
      button: {
        margin: 16
      },
      testTitle: {
        textAlign: 'center',
        fontSize: 40,
        marginTop: 20,
        marginBottom: 20
      },
      testBox: {
        backgroundColor: colors.grayish,
        borderColor: colors.darkestgreen,
        borderWidth: 2,
        margin: 20,
        padding: 10,
        marginBottom:20
      },
      startStopButton: {
        backgroundColor: colors.darkestgreen,
        height:60,
        width: 160,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonText: {
        fontSize: 20
      },
      buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      time: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%'
     }
})
