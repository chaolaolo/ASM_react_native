import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import Welcome from './Welcome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from './Cart';
import Favourite from './Favourite';
import Notification from './Notification';

const stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const BottomTabs = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: '#DBE5FD',
                position: 'absolute',
                height: 70
            },
            tabBarHideOnKeyboard: true,
            tabBarActiveTintColor: 'brown',
            tabBarInactiveTintColor: 'black',
            tabBarActiveBackgroundColor: 'orange',
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
                component={Cart}
                options={{
                    tabBarIcon: () => (
                        <Image source={require('./image/iconCart.png')}
                            style={{ width: 24, height: 24, resizeMode: 'contain' }}
                        />
                    )
                }} />
            <Tab.Screen
                name="Favourite"
                component={Favourite}
                options={{
                    tabBarIcon: () => (
                        <Image source={require('./image/iconLikeGray.png')}
                            style={{ width: 24, height: 24, resizeMode: 'contain' }}
                        />
                    )
                }} />
            <Tab.Screen
                name="Notification"
                component={Notification}
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
                <stack.Screen name="Home" component={BottomTabs} />
                <stack.Screen name="SignIn" component={SignIn} />
                <stack.Screen name="SignUp" component={SignUp} />
                <stack.Screen name="Welcome" component={Welcome} />
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default Main

const styles = StyleSheet.create({

})

