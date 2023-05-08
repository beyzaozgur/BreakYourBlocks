import { StyleSheet } from "react-native";

import colors from "../../styles/colors";


export default StyleSheet.create({
    container: { // main container that contains boxes
        flexDirection: 'row', // The child components are arranged horizontally
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        padding: 5,
        borderWidth: 2,
        borderColor: colors.grayish,
        borderRadius: 5,
    },
    title: { // style of placeholder
        fontSize: 14,
        padding: 5,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: colors.grayish,

    },
    values: { // style of options, if there are more than one how they are arrenged according to each other
        justifyContent: 'space-evenly',
        flex: 1,
        flexDirection: 'row',

    },
    option: { // style of an option: how label and checkbox is arrenged
        flexDirection: 'row', // 
    },
    checkBox: { // how box looks
        width: 25,
        height: 25,
        borderWidth: 2,
        borderColor: colors.grayish,
        flexDirection: 'row', // The child component (✓) is arranged horizontally
    },
    valueName: { // how label of an option looks
        textTransform: 'capitalize',
        alignSelf: 'center',
        paddingLeft: 5,
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.grayish,
    },
    check: { // how ✓  looks
        flex: 1, // it will expand to fill all available space in its parent container.
        alignSelf: 'center', // it is centered
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: colors.grayish,
        color: colors.darkestgreen,
    }
});