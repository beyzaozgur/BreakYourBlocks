import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ToastProvider } from 'react-native-toast-notifications';

import Profile from '../app/src/pages/Profile';
import ChangePassword from '../app/src/pages/ChangePassword';
import EditProfile from '../app/src/pages/EditProfile/EditProfile';
import EmailRequest from '../app/src/pages/EmailRequest/EmailRequest';
import Settings from '../app/src/pages/Settings/Settings';
//import Analyzes from '../app/src/pages/Analyzes';
import Tests from '../app/src/pages/Tests/Tests';
import TestEditList from '../app/src/pages/Admin/TestEditList';
// import Error from '../app/src/components/Error/Error';
import Login from '../app/src/pages/Login';
import SignUp from '../app/src/pages/Signup'
import AddUpdateTest from '../app/src/pages/Admin/AddUpdateTest'
// import TestEditList from '../app/src/pages/Admin/TestEditList/TestEditList'
import TestInformation from '../app/src/pages/Tests/TestInformation';
// import CheckBox from '../app/src/components/CheckBox/CheckBox';
import TestsList from '../app/src/pages/Tests/TestsList';
import AnalysisList from '../app/src/pages/Analyzes/AnalysisList';
import TestAudioList from '../app/src/pages/Admin/TestAudioList';
import AddAudio from './src/pages/Admin/AddAudio/AddAudio';
import { firebase } from './firebase';
import colors from './src/styles/colors';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='ProfileScreen' component={Profile} />
            <Stack.Screen name='Settings' component={Settings}/>
            <Stack.Screen name='ChangePasswordScreen' component={ChangePassword}/>
            <Stack.Screen name='EditProfileScreen' component={EditProfile}/>
        </Stack.Navigator>
    )
}
 const TestsStack = () => {
     return(
         <Stack.Navigator screenOptions={{headerShown:false}}>
              <Stack.Screen name='TestsListScreen' component={TestsList}/>
              <Stack.Screen name='TestInformationScreen' component={TestInformation}/>
              <Stack.Screen name='TestsScreen' component={Tests} initialParams={{userID: firebase.auth().currentUser.uid}}/>
         </Stack.Navigator>
     )
 }

 const TestAudioStack = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
             <Stack.Screen name='TestsListScreen' component={TestAudioList}/>
             <Stack.Screen name='AddAudioScreen' component={AddAudio}/>
             
        </Stack.Navigator>
    )
}

const AnalyzesStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='AnalyzesScreen' component={AnalysisList} />
        </Stack.Navigator>
    )
}

 const AdminTestOperationsStack = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
             <Stack.Screen name='TestEditListScreen' component={TestEditList}/>
             <Stack.Screen name='AddUpdateTestScreen' component={AddUpdateTest}/>
        </Stack.Navigator>
    )
}


function Router () {

    //const [initializing, setInitializing] = useState(true);
    const [userSession, setUserSession] = useState();
    const [adminSession, setAdminSession] = useState();
    const [emailVerified, setEmailVerified] = useState(false);

    // function onAuthStateChanged(user){
    //     setUser(user);
    //    if(initializing) setInitializing(false);
    // }

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if(user && user.email === 'stutteringtranscriptor@gmail.com'){
                setAdminSession(!!user);
            }else{
                 setUserSession(!!user);
            }
           
            if (firebase.auth().currentUser !== null) setEmailVerified(firebase.auth().currentUser.emailVerified);
            //console.log('index:');
            //console.log(emailVerified);
            
        })
    }, [])



    //if(initializing) return null;


    if (adminSession) {

        return (
            <ToastProvider
                placement='top'
                animationType='slide-in'
                animationDuration={250}
                successColor={colors.notification}
                dangerColor={colors.notification}
                warningColor={colors.notification}
                normalColor={colors.notification}
                // icon={<Icon name='information' color={colors.darkestgreen} />}
                successIcon={<Icon name='star-shooting' color={colors.yellow} size={15} />}
                dangerIcon={<Icon name='alert' color={colors.danger} size={15} />}
                warningIcon={<Icon name='alert-circle-outline' color={colors.warning} size={15} />}
                textStyle={{ fontSize: 12 }}
                offset={60}
            // renderToast={(toastOptions) => JSX.Element}
            >
                <Tab.Navigator //initialRouteName='Profile'

                    screenOptions={{
                        headerShown: false,
                        tabBarItemStyle: { borderRightColor: colors.grayish, borderRightWidth: 2, borderLeftColor: colors.grayish, borderLeftWidth: 2 },
                        tabBarActiveTintColor: colors.grayish,
                        tabBarInactiveTintColor: colors.darkestgreen,
                        tabBarInactiveBackgroundColor: colors.green,
                        tabBarActiveBackgroundColor: colors.green,
                    }}>
                    <Tab.Screen name="AdminTestOperations" component={AdminTestOperationsStack} options={{ tabBarIcon: ({ focused }) => (<Icon name="file-document" color={focused ? colors.grayish : colors.darkestgreen} size={26} />) }} />
                    <Tab.Screen name="Audio" component={TestAudioStack} options={{ tabBarIcon: ({ focused }) => (<Icon name="file-document" color={focused ? colors.grayish : colors.darkestgreen} size={26} />) }} />
                </Tab.Navigator>
            </ToastProvider>
        );
    }

    if (!userSession || !emailVerified) {
        return (
            <ToastProvider
                placement='top'
                animationType='slide-in'
                animationDuration={250}
                successColor={colors.notification}
                dangerColor={colors.notification}
                warningColor={colors.notification}
                normalColor={colors.notification}
                // icon={<Icon name='information' color={colors.darkestgreen} />}
                successIcon={<Icon name='star-shooting' color={colors.yellow} size={15} />}
                dangerIcon={<Icon name='alert' color={colors.danger} size={15} />}
                warningIcon={<Icon name='alert-circle-outline' color={colors.warning} size={15} />}
                textStyle={{ fontSize: 12 }}
                offset={60}
            >
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name='Login' component={Login} />
                    <Stack.Screen name='Sign Up' component={SignUp} />
                    <Stack.Screen name='Email Request' component={EmailRequest} />
                    
                </Stack.Navigator>
            </ToastProvider>
        );
    }
  /*  if (!emailVerified) {

        return (
            <ToastProvider
                placement='top'
                animationType='slide-in'
                animationDuration={250}
                successColor={colors.notification}
                dangerColor={colors.notification}
                warningColor={colors.notification}
                normalColor={colors.notification}
                // icon={<Icon name='information' color={colors.darkestgreen} />}
                successIcon={<Icon name='star-shooting' color={colors.yellow} size={15} />}
                dangerIcon={<Icon name='alert' color={colors.danger} size={15} />}
                warningIcon={<Icon name='alert-circle-outline' color={colors.warning} size={15} />}
                textStyle={{ fontSize: 12 }}
                offset={60}
            // renderToast={(toastOptions) => JSX.Element}
            >
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name='Login' component={Login} />
                    <Stack.Screen name='Sign Up' component={SignUp} />
                </Stack.Navigator>
            </ToastProvider>
        );
    }*/

    return (
        <ToastProvider
            placement='top'
            animationType='slide-in'
            animationDuration={250}
            successColor={colors.notification}
            dangerColor={colors.notification}
            warningColor={colors.notification}
            normalColor={colors.notification}
            // icon={<Icon name='information' color={colors.darkestgreen} />}
            successIcon={<Icon name='star-shooting' color={colors.yellow} size={15} />}
            dangerIcon={<Icon name='alert' color={colors.danger} size={15} />}
            warningIcon={<Icon name='alert-circle-outline' color={colors.warning} size={15} />}
            textStyle={{ fontSize: 12 }}
            offset={60}
        >
            <Tab.Navigator initialRouteName='Profile'

                screenOptions={{
                    headerShown: false,
                    tabBarItemStyle: { borderRightColor: colors.grayish, borderRightWidth: 2, borderLeftColor: colors.grayish, borderLeftWidth: 2 },
                    tabBarActiveTintColor: colors.grayish,
                    tabBarInactiveTintColor: colors.darkestgreen,
                    tabBarInactiveBackgroundColor: colors.green,
                    tabBarActiveBackgroundColor: colors.green,
                }}>
                <Tab.Screen name="Profile" component={ProfileStack} options={{ tabBarIcon: ({ focused }) => (<Icon name="account-circle" color={focused ? colors.grayish : colors.darkestgreen} size={26} />) }} />
                <Tab.Screen name="Tests" component={TestsStack} options={{ tabBarIcon: ({ focused }) => (<Icon name="alpha-t-circle" color={focused ? colors.grayish : colors.darkestgreen} size={26} />) }}/>
                <Tab.Screen name="Analyzes" component={AnalyzesStack} options={{ tabBarIcon: ({ focused }) => (<Icon name="file-document" color={focused ? colors.grayish : colors.darkestgreen} size={26} />) }} />
                
            </Tab.Navigator>
        </ToastProvider>

    );

}

export default Router;