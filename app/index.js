
import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from '../app/src/pages/Profile'; 
import Analyzes from '../app/src/pages/Analyzes';
import Tests from '../app/src/pages/Tests/Tests';
// import Error from '../app/src/components/Error/Error';
import Login from '../app/src/pages/Login';
 import SignUp from '../app/src/pages/Signup'
 import AddTest from '../app/src/pages/Admin/AddTest'
// import TestEditList from '../app/src/pages/Admin/TestEditList/TestEditList'
// import TestInformation from '../app/src/pages/Tests/TestInformation';
// import CheckBox from '../app/src/components/CheckBox/CheckBox';

import {firebase} from './firebase';
import colors from './src/styles/colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ProfileStack = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='ProfileScreen' component={Profile}/>
       </Stack.Navigator>
    )
}
 const TestsStack = () => {
     return(
         <Stack.Navigator screenOptions={{headerShown:false}}>
              <Stack.Screen name='TestsScreen' component={Tests}/>
         </Stack.Navigator>
     )
 }

 const AnalyzesStack = () => {
     return(
         <Stack.Navigator screenOptions={{headerShown:false}}>
             <Stack.Screen name='AnalyzesScreen' component={Analyzes}/>
         </Stack.Navigator>
     )
 }



function Router(){
const [initializing, setInitializing] = useState(true);
const [user, setUser] = useState();

function onAuthStateChanged(user){
    setUser(user);
    if(initializing) setInitializing(false);
}

useEffect(() =>{
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
}, [])

if(initializing) return null;

if(!user){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>     
        <Stack.Screen name='Login' component={AddTest}/>
        <Stack.Screen name='Sign Up' component={SignUp}/>
    </Stack.Navigator>
    );
}
return (
    <Tab.Navigator initialRouteName='Profile' 
    
    screenOptions={{headerShown:false,
     tabBarActiveTintColor:colors.grayish,
     tabBarInactiveTintColor:colors.darkestgreen, 
     tabBarInactiveBackgroundColor:colors.green, 
     tabBarActiveBackgroundColor:colors.green}} >
             <Tab.Screen name="Profile" component={ProfileStack} options={{tabBarIcon: ({focused})=>(<Icon name="account-circle" color={ focused ? colors.grayish : colors.darkestgreen} size={26} />)}}/>
             <Tab.Screen name="Tests" component={TestsStack} options={{tabBarIcon: ({focused}) =>(<Icon name="alpha-t-circle" color={focused ? colors.grayish : colors.darkestgreen} size={26} />)}}/>
             <Tab.Screen name="Analyzes" component={AnalyzesStack} options={{tabBarIcon: ({focused}) =>(<Icon name="file-document" color={focused ? colors.grayish : colors.darkestgreen} size={26} />)}}/>
    </Tab.Navigator>
    

);

}

export default Router;
