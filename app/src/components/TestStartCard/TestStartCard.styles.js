import { StyleSheet, Dimensions } from "react-native";


import colors from "../../styles/colors";


export default StyleSheet.create({
    inner_container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 27,
    },
    subtitle: {
        fontWeight: 'bold',
    },
    square: {
        // initial values
        // flexGrow: 0,
        // flexShrink: 1,
        // flexBasis: '45%',
        // backgroundColor: colors.darkgreen,
        // borderColor: colors.darkestgreen,
        // borderWidth: 5,
        // borderRadius: 10,

        // new
        flex:1,
       //  flexGrow: 0,
       //  flexShrink: 1,
        // flexBasis: '45%',
        // flexDirection:'row',
         backgroundColor: colors.darkgreen,
         borderColor: colors.darkestgreen,
         borderWidth: 3,
         borderRadius: 10,
         width:Dimensions.get('window').width / 2.5,
        // margin: 10,
    },
    squareWithIcon: {
        paddingTop: '15%',
    },
    squareWithoutIcon: {
        paddingTop: '35%',
    },
    unreachableSquare: {
         flex:1,
         backgroundColor: colors.notification,
         borderColor: colors.darkestgreen,
         borderWidth: 3,
         borderRadius: 10,
         width:Dimensions.get('window').width / 2.5,
    },
})