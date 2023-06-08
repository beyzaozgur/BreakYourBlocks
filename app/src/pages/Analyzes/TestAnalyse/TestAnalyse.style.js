import { StyleSheet, Dimensions } from "react-native";



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
        borderBottomColor:colors.grayish,
        borderTopColor:colors.grayish,
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
        marginBottom:Dimensions.get('screen').height*0.15,
        marginTop:80,
    },
    textContainer:{
       // flex:0.5,
        width: Dimensions.get('screen').width,
        flexDirection:"column",
    },
    testDate:{
        fontSize:15,
        fontWeight:'bold',
        color:colors.grayish,
        alignSelf:'flex-end',
        paddingRight:10,
        marginBottom:20,
    }
})