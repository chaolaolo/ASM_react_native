import { StyleSheet, View, Text, ImageBackground, Image, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Home'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Welcome = ({ navigation }: any) => {


  useEffect(() => {
    const checkSignInStatus = async () => {
      try {
        const user = await AsyncStorage.getItem('user');
        if (user) {
          navigation.navigate('Home');
        } else {
          navigation.navigate('SignIn');
        }
      } catch (error) {
        console.error('Error:', error);
        navigation.navigate('SignIn');
      }
    };

    const timer = setTimeout(() => {
      // navigation.navigate('SignIn');
      checkSignInStatus();
    }, 2000);
    return () => {
      clearTimeout(timer);
    }
  }, [navigation])

  return (
    <ImageBackground source={require('./image/background.png')} style={st.container}>
      <StatusBar translucent={true} backgroundColor='transparent' barStyle={'dark-content'} />
      <Image source={require('./image/logo.png')} style={st.logo} />
    </ImageBackground>
  )
}

export default Welcome
const st = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    width: '80%',
    height: "60%",
    resizeMode: 'center',
    alignItems: 'center'
  }
})


