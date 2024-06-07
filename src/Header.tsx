import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Header = ({titleHeader}:any) => {
  const navigation = useNavigation()
  return (
    <View style={st.head}>
      <Pressable onPress={() => navigation.navigate('Setting')}>
        <Image source={require('./image/iconSetting.png')} style={st.person} />
      </Pressable>
      <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'black' }}>{titleHeader}</Text>
      <Pressable onPress={()=>navigation.navigate('Notification')}>
        <Image source={require('./image/iconNotification.png')} style={st.person} />
      </Pressable>
    </View>
  )
}

export default Header

const st = StyleSheet.create({
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '5%',
    paddingVertical: '3%',
    backgroundColor:'#F2F2F2'
  },
  person: {
    width: 50,
    height: 50,
    backgroundColor: '#E9E9E9',
    borderRadius: 50,
  },
})