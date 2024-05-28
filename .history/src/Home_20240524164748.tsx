import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, FlatList, Dimensions, ScrollView, Pressable } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('window');
const DATA = [
  { id: '1', title: 'All', image: require('./image/logo.png') },
  { id: '2', title: 'Rolex', },
  { id: '3', title: 'Cartier' },
  { id: '4', title: 'Calvin-Klein' },
  { id: '5', title: 'TimeX', },];

const Prod1 = [
  { id: '1', name: 'item1', price: '100$', image: require('./image/logo.png') },
  { id: '2', name: 'item2', price: '100$', image: require('./image/logo.png') },
  { id: '3', name: 'item3', price: '100$', image: require('./image/logo.png') },
  { id: '4', name: 'item4', price: '100$', image: require('./image/logo.png') },
  { id: '5', name: 'item5', price: '100$', image: require('./image/logo.png') },
  { id: '6', name: 'item1', price: '100$', image: require('./image/logo.png') },
  { id: '7', name: 'item2', price: '100$', image: require('./image/logo.png') },
  { id: '8', name: 'item3', price: '100$', image: require('./image/logo.png') },
  { id: '9', name: 'item4', price: '100$', image: require('./image/logo.png') },
  { id: '10', name: 'item5', price: '100$', image: require('./image/logo.png') },
];

const Category = ({ title, image }: any) => (
  <View style={st.itemCategory}>
    {/* <Image source={image} style={st.imageCategory} /> */}
    <Text style={st.titleCategory}>{title}</Text>
  </View>
);
const renderCategory = ({ item }: any) => <Category title={item.title} image={item.image} />;
const Product = ({ name, price, image }: any) => (
  <View style={st.itemCategory}>
    <Image source={image} style={st.imageCategory} />
    <Text style={st.titleCategory}>{name}</Text>
    <Text style={st.titleCategory}>{price}</Text>
  </View>
);
const renderProd = ({ item }: any) => <Product name={item.name} price={item.price} image={item.image} />;

const Homecopy = () => {
  return (
    <SafeAreaView style={st.container}>
      <Pressable style={st.head}>
        <Image source={require('./image/menuIcon.png')} style={st.person} />
        <Image source={require('./image/personIcon.png')} style={st.person} />
      </Pressable>
      <Text style={st.slogan}>
        Find the best Watch for you
      </Text>
      <View style={st.boxSearch}>
        <Image source={require('./image/search.png')} style={st.searchIcon} />
        <TextInput placeholder='Find your Watch...' style={st.tipSearch}></TextInput>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderCategory}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ paddingLeft: '4%', maxHeight: '6%' }}
        contentContainerStyle={{ paddingRight: '30%' }}
      />
      <ScrollView style={st.boxProduct} horizontal={true}>
        <FlatList
          data={Prod1}
          renderItem={renderProd}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={st.prod}
          contentContainerStyle={{ paddingRight: '30%' }}
        />
        <FlatList
          data={Prod1}
          renderItem={renderProd}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={st.prod}
          contentContainerStyle={{ paddingRight: '30%' }}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Homecopy
const st = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DBE5FD'
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  person: {
    width: 50,
    height: 50,
    backgroundColor: '#E1EAFF',
    margin: '5%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D1DAF0'
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
    backgroundColor: '#D6DDEE',
    alignSelf: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    borderWidth: 1.5,
    borderColor: 'lightgray'
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
    fontFamily: 'roboto',
    fontWeight: 'bold',
  },
  boxProduct: {
    backgroundColor: 'orange',

  },
  prod: {
    // paddingLeft: '4%',
    flex:1,
    backgroundColor: 'gray',

  }

})