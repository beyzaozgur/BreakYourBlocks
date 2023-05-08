import { StyleSheet } from "react-native";

import colors from "../../styles/colors";


export default StyleSheet.create({
    container: { // main container's look
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: colors.grayish,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.darkestgreen,
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        justifyContent: 'center',

    },
    input: { // text's look
        paddingLeft: 4,
        flex: 0.99,
        fontSize: 14,
        color: colors.darkestgreen,
        fontWeight: 'bold',
    }

})