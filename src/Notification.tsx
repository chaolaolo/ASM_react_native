import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Notification = () => {
  return (
    <View style={st.container}>
      <Text style={st.txt}>This is Notification Screen</Text>
    </View>
  )
}

export default Notification

const st = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  txt: {
    paddingVertical: 20,
    paddingHorizontal: 70,
    backgroundColor: '#34E0A1',
    fontSize:20,
    fontWeight:'400',
    borderRadius:20
  }
})