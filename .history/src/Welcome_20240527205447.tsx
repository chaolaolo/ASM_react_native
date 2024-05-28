import { StyleSheet, View, Text, ImageBackground, Image } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Home'

const Welcome = ({ navigation }: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('SignIn');
    }, 2000);
    return () => {
      clearTimeout(timer);
    }
  }, [navigation])

  return (
    <ImageBackground source={require('./image/background.png')} style={st.container}>
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


