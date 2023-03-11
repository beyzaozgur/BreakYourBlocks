import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding:10,
        flexDirection: 'row',
    },
    inner_container: {
        flex:1,
        padding:10,
        justifyContent: 'center',
    },
    title: {
        fontWeight:'bold',
        fontSize:27,
    },
    buttonsLocation: {
        flexDirection: 'row',
        width: 100,
        justifyContent: 'space-between'
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonContainer: {
        paddingRight:0
    },
    subtitle:{
        fontWeight:'bold',
    },
})