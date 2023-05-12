import { StyleSheet, Dimensions} from "react-native";

import colors from '../../styles/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: colors.green,
        
    },
    frame: {
        alignSelf:"center",
       // alignItems:"center",
       // justifyContent:"center",
        borderWidth:5,
        borderRadius:5,
        borderColor: colors.grayish,
        margin:25,
    },
    logo: {
        height: Dimensions.get('window').height / 3,
        width: Dimensions.get('window').width * 0.9,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    logo_container: {
        flex: 2.5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    h1 :{
        fontWeight: "bold",
        fontSize:18,
        textAlign:"center", 
        paddingTop:10,      
    },

    h2 :{
        paddingLeft:3, 
        fontWeight:"bold",
        fontSize:14,
        textAlign:"left"
    },
    text : {
        paddingLeft:3,
        paddingRight:3,
        fontStyle:"italic",
    }
});