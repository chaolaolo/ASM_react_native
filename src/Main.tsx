import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
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
import ProductDetail from './ProductDetail';
import Contact from './Contact';
import Payment from './Payment';
import Setting from './Setting';
import PersonalDetail from './PersonalDetail';

const stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const BottomTabs = () => {

    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: 'black',
                position: 'absolute',
                height: 80,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderTopWidth: 0
            },
            tabBarItemStyle: {
                padding: '1%',
                margin: '2%',
                borderRadius: 10,
            },
            tabBarHideOnKeyboard: true,
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'black',
            tabBarActiveBackgroundColor: '#2A2A2A',
        }}>
            <Tab.Screen
                name="HomeTab"
                component={Home}
                options={{
                    tabBarIcon: () => (
                        <Image source={require('./image/iconHome.png')}
                            style={{ width: 24, height: 24, resizeMode: 'contain' }}
                        />
                    )
                }} >
            </Tab.Screen>
            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    tabBarIcon: () => (
                        <Image source={require('./image/iconCart.png')}
                            style={{ width: 24, height: 24, resizeMode: 'contain' }}
                        />
                    ),
                    // tabBarBadge: 0,
                }}
            >
            </Tab.Screen>
            <Tab.Screen
                name="Favourite"
                component={Favourite}
                options={{
                    tabBarIcon: () => (
                        <Image source={require('./image/iconLikeWhite.png')}
                            style={{ width: 24, height: 24, resizeMode: 'contain' }}
                        />
                    )
                }} />
            <Tab.Screen
                name="Personal"
                component={PersonalDetail}
                options={{
                    tabBarIcon: () => (
                        <Image source={require('./image/iconPerson.png')}
                            style={{ width: 24, height: 24, resizeMode: 'contain' }}
                        />
                    )
                }} />
            {/* <Tab.Screen
                name="Contact"
                component={Contact}
                options={{
                    tabBarIcon: () => (
                        <Image source={require('./image/iconContact.png')}
                            style={{ width: 24, height: 24, resizeMode: 'contain' }}
                        />
                    )
                }} /> */}

        </Tab.Navigator>
    )
};
const Main = () => {
    return (
        <NavigationContainer>
            <stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
                <stack.Screen name="Home" component={BottomTabs} />
                <stack.Screen name="Welcome" component={Welcome} />
                <stack.Screen name="SignIn" component={SignIn} />
                <stack.Screen name="SignUp" component={SignUp} />
                <stack.Screen name="ProductDetail" component={ProductDetail} />
                <stack.Screen name="Payment" component={Payment} />
                <stack.Screen name="Setting" component={Setting} />
                <stack.Screen name="PersonalDetail" component={PersonalDetail} />
                <stack.Screen name="Notification" component={Notification} />
                <stack.Screen name="Contact" component={Contact} />
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default Main

const styles = StyleSheet.create({

})

