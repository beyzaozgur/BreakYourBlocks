import {StyleSheet, Dimensions} from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.green,
    },
    headerContainer: {
        flexDirection: 'row', 
        justifyContent: 'center', 
    },
    title: {
        marginTop: 25,
        fontSize: 30,
        color: 'black',
    },
    testContent: {
    },
    frame: {
        backgroundColor:colors.grayish,
        borderColor: colors.darkestgreen,
        borderWidth: 2,
        padding:10,
        margin:25,
        borderRadius:5,
    },
    buttonContainer: {
        flex: 10, 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'flex-start',
        padding: 20
    }
})
