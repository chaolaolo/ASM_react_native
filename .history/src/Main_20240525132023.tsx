import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SignIn from './SignIn';
import SignUp from './SignUp';
import Welcom from './Welcom';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Homecopy from './Home';
const Tab = createBottomTabNavigator();

const Main = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
                <Tab.Screen
                    name="Home"
                    component={Homecopy} />
                <Tab.Screen
                    name="Settings"
                    component={Welcom} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Main

const styles = StyleSheet.create({})