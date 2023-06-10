import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../styles/colors";
import { size } from "underscore";

export default StyleSheet.create({
    container: {
            flex: 1, 
            backgroundColor: colors.darkgreen,                    
            flexDirection: 'column',
            alignItems:'center', 
        
    },
    pieChartContainer: {
        //flex:1,
        //height:Dimensions.get('screen').height*0.8,
        width:Dimensions.get('screen').width*0.95,
        borderBottomColor:colors.darkestgreen,
        borderTopColor:colors.darkestgreen,
        borderLeftColor:"transparent",
        borderRightColor:"transparent",
        borderWidth:5,
        alignSelf:'center',
        justifyContent:'center',        
        
    },
    pieChart: {
        //width: Dimensions.get('window').width / 2,
        // alignItems:'center',
        alignSelf: 'center',
    },
    test:{
        
        textAlign:'center',
        fontSize:40,
        fontWeight:'bold',
        color:colors.grayish,
        marginTop:25,
       // backgroundColor: colors.darkestgreen,
        //marginBottom:Dimensions.get('screen').height*0.15,
        
    },
    backgroundOfText:{
        
        backgroundColor: colors.darkestgreen,
        borderWidth: 2,
        borderColor:colors.midnightgreen,
        width: 200,
        height: 100,
        marginBottom: 80,
        marginTop:150,
    },
    textContainer:{
       // flex:0.5,
        width: Dimensions.get('screen').width,
        flexDirection:"column",
    },
    testDate:{
        fontSize:15,
        fontWeight:'bold',
        color:colors.midnightgreen,
        alignSelf:'flex-end',
        paddingRight:10,
        marginBottom: 15,
    }
})