import { StyleSheet, Dimensions } from "react-native";

import colors from "../../styles/colors";


export default StyleSheet.create({
    container: {
            flex: 1,
            flexDirection: 'row-reverse',
            //  backgroundColor:'red'
        
        
    },
    pieChartContainer: {
        //width: Dimensions.get('window').width / 2,
        // alignItems:'center',
        alignSelf: 'center',
    },
})