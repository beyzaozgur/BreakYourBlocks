import { StyleSheet } from "react-native"
import colors from "../../styles/colors"

export default StyleSheet.create({
    container:{
       // flex:1,
      // alignItems:'center',
       // justifyContent:'center',
        flexDirection:'row',
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        padding:5,
        borderWidth:2,
        borderColor:colors.grayish,
        borderRadius:5,
      //  backgroundColor:'red',
    },
    title:{
        fontSize:14,
        padding:5,
        fontWeight:'bold',
       // borderWidth:2,
       // borderColor:colors.grayish,
        alignSelf:'center',
        color:colors.grayish,

    },
    values:{
       // alignSelf:'flex-start',
       justifyContent:'space-evenly',
       // marginLeft:50,
        flex:1,
       // backgroundColor:'yellow',
        flexDirection:'row',
       // padding: 20,
      
    },
    option:{
        flexDirection:'row',
    },
    checkBox:{
        width:25,
        height:25,
        borderWidth:2,
        borderColor:colors.grayish,
        flexDirection:'row',
       // alignItems:'center',
       // justifyContent:'center',
       // justifyContent:'flex-start',
    },
    valueName:{
        textTransform:'capitalize',
        alignSelf:'center',
        paddingLeft:5,
        fontSize:14,
        fontWeight:'bold',
        color:colors.grayish,
    },
    check:{
        flex:1,
        alignSelf:'center',
       // justifyContent:'space-around',
       // marginBottom:5,
        //marginEnd:10,
       
      
        fontSize:18,
        fontWeight:'bold',
        backgroundColor:colors.grayish,
        color:colors.darkestgreen,
    }
});