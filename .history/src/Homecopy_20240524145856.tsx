import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, FlatList, Dimensions } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('window');
const DATA = [
  {
    id: '1',
    title: 'All',
    image: require('./image/logo.png')
  },
  {
    id: '2',
    title: 'Item 2',
    image: require('./image/logo.png')

  },
  {
    id: '3',
    title: 'Item 3',
    image: require('./image/logo.png')

  },
  {
    id: '4',
    title: 'Item 4',
    image: require('./image/logo.png')

  },
  {
    id: '5',
    title: 'Item 5',
    image: require('./image/logo.png')

  },
];

const Item = ({ title, image }: any) => (
  <View style={st.item}>
    {/* <Image source={image} style={st.image} /> */}
    <Text style={st.title}>{title}</Text>
  </View>
);
const renderItem = ({ item }: any) => <Item title={item.title} image={item.image} />;

const Homecopy = () => {
  return (
    <SafeAreaView style={st.container}>
      <TouchableOpacity>
        <Image source={require('./image/personIcon.png')} style={st.person} />
      </TouchableOpacity>
      <Text style={st.slogan}>
        Find the best Watch for you
      </Text>
      <View style={st.boxSearch}>
        <Image source={require('./image/search.png')} style={st.searchIcon} />
        <TextInput placeholder='Find your Watch...' style={st.tipSearch}></TextInput>
      </View>
       <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
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
  slogan: {
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
  item: {
    backgroundColor: 'gray',
    // padding: 10,
    marginVertical: 8,
    marginHorizontal: 8,
    alignItems: 'center',
    width: width* 0.2,
    height: 60,
  },
  image: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 24,
    color: 'red',
    textAlign: 'center'
  },
})