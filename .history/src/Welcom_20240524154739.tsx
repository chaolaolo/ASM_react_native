import { StyleSheet, View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'

const Welcom = () => {
  // const logo = require('./image/logo.png');
  return (
    <View style={st.container}>
      <Image source={require('./image/logo.png')} style={st.logo} />
    </View>
  )
}

export default Welcom
const st = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
    backgroundColor:'#DBE5FD'
  },
  logo: {
    width: '80%',
    height: "60%",
    resizeMode:'center',
    alignItems:'center'
  }
})


