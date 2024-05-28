import { StyleSheet, View, Text, ImageBackground, Image } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Home'

const Welcome = ({ navigation }: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
    return () => {
      clearTimeout(timer);
    }
  }, [])

  return (
    <View style={st.container}>
      <Image source={require('./image/logo.png')} style={st.logo} />
    </View>
  )
}

export default Welcome
const st = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#DBE5FD'
  },
  logo: {
    width: '80%',
    height: "60%",
    resizeMode: 'center',
    alignItems: 'center'
  }
})


