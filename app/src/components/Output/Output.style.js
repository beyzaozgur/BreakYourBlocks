import { StyleSheet } from "react-native";

import colors from "../../styles/colors";

// base style
const base_style = StyleSheet.create({
    container: { // main container style
        flexDirection: 'row', // determining main axis, the child components will be arranged horizontally
        borderRadius: 5,
        borderWidth: 3,
        borderColor: colors.darkestgreen,
        marginTop: 10,
        marginRight: 7,
        marginLeft: 7,
        backgroundColor: colors.darkgreen,
        overflow:"hidden", //prevent any overflow content from being displayed outside the boundaries of the component
    },
    text: { // label and value text style
        color: colors.grayish,
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        marginRight:5,
    },
});

export default {
    // label and value is aligned in center
    center: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            justifyContent: 'center',
        },
    }),
    // label and value aligned as space-between
    space: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            justifyContent: 'space-between',
            paddingRight: 7,
            paddingLeft: 7,
        },
    }),
}