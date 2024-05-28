import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, FlatList } from 'react-native'
import React from 'react'

const Homecopy = () => {
  return (
    <SafeAreaView style={st.container}>
      <TouchableOpacity>
        <Image source={require('./image/personIcon.png')} style={st.person} />
      </TouchableOpacity>
      <Text style={st.title}>
        Find the best Watch for you
      </Text>
      <View style={st.boxSearch}>
        <Image source={require('./image/search.png')} style={st.searchIcon} />
        <TextInput placeholder='Find your Watch...' style={st.tipSearch}></TextInput>
      </View>
      {/* <FlatList
      
      ></FlatList> */}
    </SafeAreaView>
  )
}

export default Homecopy
const st = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BDC3C3'
  },
  person: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    margin: '5%',
    alignSelf: 'flex-end',
    borderRadius: 10
  },
  title: {
    width: '50%',
    height: 'auto',
    fontSize: 24,
    fontWeight: '800',
    fontFamily: 'monospace',
    margin: '5%',
    color: 'black'
  },
  boxSearch: {
    width: '90%',
    height: 60,
    backgroundColor: '#DEE1E1',
    alignSelf: 'center',
    borderRadius: 20,
    flexDirection: 'row'
    // borderWidth:1.5,
    // borderColor:'gray'
  },
  searchIcon: {
    width: '8%',
    height: '60%',
    justifyContent: 'flex-start',
    marginVertical: 'auto',
    marginLeft: '2%'
  },
  tipSearch: {
    fontSize: 16,
    fontFamily: 'monospace',
    flex: 1
  },
})