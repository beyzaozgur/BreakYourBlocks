import {StyleSheet} from "react-native"
import colors from "../../../styles/colors";

export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.green,
    },
    title: {
        marginLeft: 25,
        marginTop: 25,
        fontSize: 30,
        color: 'black',
    },
    buttonContainer: {
        flex: 10, 
        flexDirection: 'row', 
        justifyContent: 'flex-end', 
        alignItems: 'flex-start',
    },
});