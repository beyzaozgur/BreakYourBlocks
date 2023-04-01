import { StyleSheet, Dimensions } from "react-native";

import colors from "../../styles/colors";


export default StyleSheet.create({
    inner_container: {
        flex: 1,
        padding: 7,
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
        color:colors.grayish,
    },
    subtitle: {
        fontWeight: 'bold',
    },
    square: {
        flex:1,
       // flexGrow: 0,
       // flexShrink: 1,
       // flexBasis: '45%',
        flexDirection:'row',
        backgroundColor: colors.darkgreen,
        borderColor: colors.darkestgreen,
        borderWidth: 3,
        borderRadius: 10,
       // width:Dimensions.get('window').width / 2.5,
        margin: 3,
    },

    buttonsLocation: {
        flexDirection: 'row',
        width: 100,
        justifyContent: 'flex-end',
        alignSelf:'flex-end',
        padding: 3,
    },
    buttonContainer: {
        paddingRight: 0,
    },
  
})