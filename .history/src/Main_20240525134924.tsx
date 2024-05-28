import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import Welcom from './Welcom';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




const stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const BottomTabs = () => {
    return(
        <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
            name="Home"
            component={Home} 
            options={{
                tabBarIcon: () => (
                  <Image source={require('./image/logo.png')}
                    style={{ width: 50, height: 50, resizeMode: 'center' }}
                  />
                )
              }}/>
        <Tab.Screen
            name="SignIn"
            component={SignIn} />
        <Tab.Screen
            name="SignUp"
            component={SignUp} />
        <Tab.Screen
            name="Welcome"
            component={Welcom} />

    </Tab.Navigator>
    )
};
const Main = () => {
    return (
        <NavigationContainer>
            <stack.Navigator initialRouteName='SignIn' screenOptions={{ headerShown: false }}>
                <stack.Screen
                    name="SignIn"
                    component={SignIn} />
                <stack.Screen
                    name="Home"
                    component={BottomTabs} />
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default Main

const styles = StyleSheet.create({})

