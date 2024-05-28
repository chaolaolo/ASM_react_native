import { StyleSheet, Text, View, Image } from 'react-native'
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
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: 'lightblue', 
            },
            tabBarActiveTintColor: 'brown',
            tabBarInactiveTintColor: 'black',
        }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: () => (
                        <Image source={require('./image/iconHome.png')}
                            style={{ width: 24, height: 24, resizeMode: 'contain' }}
                        />
                    )
                }} />
            <Tab.Screen
                name="Cart"
                component={SignIn}
                options={{
                    tabBarIcon: () => (
                        <Image source={require('./image/iconCart.png')}
                            style={{ width: 24, height: 24, resizeMode: 'contain' }}
                        />
                    )
                }} />
            <Tab.Screen
                name="Liked"
                component={SignUp}
                options={{
                    tabBarIcon: () => (
                        <Image source={require('./image/iconLikeGray.png')}
                            style={{ width: 24, height: 24, resizeMode: 'contain' }}
                        />
                    )
                }} />
            <Tab.Screen
                name="Notification"
                component={Welcom}
                options={{
                    tabBarIcon: () => (
                        <Image source={require('./image/iconNotification.png')}
                            style={{ width: 24, height: 24, resizeMode: 'contain' }}
                        />
                    )
                }} />

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
