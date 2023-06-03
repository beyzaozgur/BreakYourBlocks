import { StyleSheet, Dimensions } from "react-native";

import colors from "../../styles/colors";


export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.grayish,
    },
    profileContainer: {
        flex: 1,
        flexDirection: 'row-reverse',
        marginTop:20,
        //  backgroundColor:'red'
    },
    profilePictureContainer: {
        // flex:1,
        margin: 10,
        marginLeft: 63,
        flex: 10,
        alignItems: 'center',
        justifyContent: 'center',
        //  backgroundColor:'yellow',
        alignSelf: 'center',


    },
    profilePicture: {
        // flex:1,
        height: 200,
        width: 200,
        resizeMode: 'contain',
        alignSelf: 'center',
        borderRadius: 100,
        borderWidth: 5,
        borderColor: colors.green,
        // justifyContent:'center',
        //borderRadius:1000,
    },
    personalDataContainer: {
        marginTop: 60,
        flex: 1.5,
    },
    settings_icon: {
        alignSelf: 'flex-start',
        padding: 10,
        // flex:1,
        // backgroundColor:'green'
    },
    add_photo_icon: {
        //alignSelf:'flex-end',
        paddingLeft: 95,
        marginTop: -28,

        //  padding:10,
        // flex:1,
        //backgroundColor:'green'
        color: colors.midnightgreen,
    },
    nameContainer: {
        width: Dimensions.get('window').width / 2,
        // alignItems:'center',
        alignSelf: 'center',
    },

})