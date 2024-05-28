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
    title: 'Rolex',
    image: require('./image/logo.png')

  },
  {
    id: '3',
    title: 'Cartier',
    image: require('./image/logo.png')

  },
  {
    id: '4',
    title: 'Calvin-Klein',
    image: require('./image/logo.png')

  },
  {
    id: '5',
    title: 'TimeX',
    image: require('./image/logo.png')

  },
];

const Item = ({ title, image }: any) => (
  <View style={st.itemCategory}>
    {/* <Image source={image} style={st.imageCategory} /> */}
    <Text style={st.titleCategory}>{title}</Text>
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
        style={{paddingLeft:'4%',maxHeight:'6%'}}
        contentContainerStyle={{ paddingRight: '30%' }}
      />
      
    </SafeAreaView>
  )
}

export default Homecopy
const st = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DBE5FD'
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
    backgroundColor: '#D6DDHC',
    alignSelf: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    borderWidth:1.5,
    borderColor:'lightgray'
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
  itemCategory: {
    // backgroundColor: 'gray',
    // padding: 4,
    marginVertical: 8,
    marginHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'flex-start',
    // width: width* 0.2,
    // height: height * 0.06,,
  },
  imageCategory: {
    width: 50,
    height: 50,
  },
  titleCategory: {
    fontSize: 18,
    color: '#515151',
    textAlign: 'center',
    fontFamily:'roboto',
    fontWeight:'bold',
  },
})