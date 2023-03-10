
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './src/pages/Profile'; 
// import Analyzes from '../app/src/pages/Analyzes';
import Tests from '../app/src/pages/Tests/Tests';
import TestEditList from '../app/src/pages/Admin/TestEditList';
// import Error from '../app/src/components/Error/Error';
import Login from '../app/src/pages/Login';
// import SignUp from '../app/src/pages/Signup/SignUp'
// import AddTest from '../app/src/pages/Admin/AddTest/AddTest'
// import TestEditList from '../app/src/pages/Admin/TestEditList/TestEditList'
// import TestInformation from '../app/src/pages/Tests/TestInformation/TestInformation';
// import CheckBox from '../app/src/components/CheckBox/CheckBox';
import TestsList from '../app/src/pages/Tests/TestsList/TestsList'
import AnalysisList from '../app/src/pages/Analyzes/AnalysisList/AnalysisList'
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const ProfileStack = () => {
//     return(
//         <Stack.Navigator>
//             <Stack.Screen name='ProfileScreen' component={Profile}/>
//         </Stack.Navigator>
//     )
// }

// const TestsStack = () => {
//     return(
//         <Stack.Navigator>
//             <Stack.Screen name='TestsScreen' component={Tests}/>
//         </Stack.Navigator>
//     )
// }

// const AnalyzesStack = () => {
//     return(
//         <Stack.Navigator>
//             <Stack.Screen name='AnalyzesScreen' component={Analyzes}/>
//         </Stack.Navigator>
//     )
// }

function Router(){
   // return <Error/>;
  /* return(
    <NavigationContainer>                
        <Tab.Navigator initialRouteName='Profile'>
            <Tab.Screen name="Profile" component={ProfileStack}/>
            <Tab.Screen name="Tests" component={TestsStack}/>
            <Tab.Screen name="Analyzes" component={AnalyzesStack}/>
        </Tab.Navigator>
    </NavigationContainer>
)*/
const isRegistered = false;
return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
    
      
       <Stack.Screen name='Login' component={Login}/>
    </Stack.Navigator>
//     ! isRegistered ? (
    
//     <NavigationContainer>
//         <Stack.Navigator screenOptions={{headerShown:false}}>
    
      
//        <Stack.Screen name='Login' component={Login}/>
//         <Stack.Screen name='Sign Up' component={SignUp}/>
//         {/* <Stack.Screen name='Profile' component={Profile}/> */}
        
            
//         <Stack.Screen name='Info Test' component={TestInformation}/> 
//         <Stack.Screen name='Add Test' component={AddTest}/>
//         </Stack.Navigator>
//     </NavigationContainer>  ):( 
//     <NavigationContainer>           
//     <Tab.Navigator initialRouteName='Profile'>
//         <Tab.Screen name="Profile" component={ProfileStack}/>
//         <Tab.Screen name="Tests" component={TestsStack}/>
//         <Tab.Screen name="Analyzes" component={AnalyzesStack}/>
//     </Tab.Navigator>
// </NavigationContainer>)
);

}

export default Router;
