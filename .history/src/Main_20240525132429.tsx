import { StyleSheet, Text, View } from 'react-native'
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

const Main = () => {
    return (
        <NavigationContainer>
            <stack.Navigator initialRouteName='SignIn' screenOptions={{ headerShown: false }}>
                <stack.Screen
                    name="SignIn"
                    component={SignIn} />
                <stack.Screen
                    name="Home"
                    component={Home} />
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default Main

const styles = StyleSheet.create({})