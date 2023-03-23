import { StyleSheet } from "react-native";

import colors from "../../styles/colors";


const base_style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        //flex:0.1,
        // height:40,
        borderRadius: 5,
        borderWidth: 3,
        borderColor: colors.darkestgreen,
        marginTop: 10,
        marginRight: 7,
        marginLeft: 7,
        // alignItems:'center',
        // justifyContent:'',
        backgroundColor: colors.darkgreen,
    },
    text: {
        color: colors.grayish,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default {
    center: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            justifyContent: 'center',
        },
    }),
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