import { StyleSheet, View, Text, ImageBackground, Image } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Home'

const Welcome = ({ navigation }: any) => {
const press=()=>{
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('SignIn');
    }, 2000);
    return () => {
      clearTimeout(timer);
    }
  }, [navigation])
}

  return (
    <View style={st.container}>
      <Image source={require('./image/logo.png')} style={st.logo} />
    </View>
  )
}
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App
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


