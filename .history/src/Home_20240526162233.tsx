import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, FlatList, Dimensions, ScrollView, Pressable, Touchable, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');
const DATA = [
  { id: '1', title: 'All', image: require('./image/logo.png') },
  { id: '2', title: 'Rolex', },
  { id: '3', title: 'Cartier' },
  { id: '4', title: 'Calvin-Klein' },
  { id: '5', title: 'TimeX', },];

const Prod1 = [
  { id: '1', brand: 'Rolex', name: 'item1 Chao lao lo Chao Lao Lo', price: '100', image: require('./image/prod1.png') },
  { id: '2', brand: 'Rolex', name: 'item2', price: '100', image: require('./image/prod1.png') },
  { id: '3', brand: 'Rolex', name: 'item3', price: '100', image: require('./image/prod1.png') },
  { id: '4', brand: 'Rolex', name: 'item4', price: '100', image: require('./image/prod1.png') },
  { id: '5', brand: 'Rolex', name: 'item5', price: '100', image: require('./image/prod1.png') },
  { id: '6', brand: 'Rolex', name: 'item1', price: '100', image: require('./image/prod1.png') },
  { id: '7', brand: 'Rolex', name: 'item2', price: '100', image: require('./image/prod1.png') },
  { id: '8', brand: 'Rolex', name: 'item3', price: '100', image: require('./image/prod1.png') },
  { id: '9', brand: 'Rolex', name: 'item4', price: '100', image: require('./image/prod1.png') },
  { id: '10', brand: 'Rolex', name: 'item10', price: '100', image: require('./image/prod1.png') },
];
const Prod2 = [
  { id: '1', brand: 'Cartier', name: 'item1', price: '100', image: require('./image/prod2.png') },
  { id: '2', brand: 'Cartier', name: 'item2', price: '100', image: require('./image/prod2.png') },
  { id: '3', brand: 'Cartier', name: 'item3', price: '100', image: require('./image/prod2.png') },
  { id: '4', brand: 'Cartier', name: 'item4', price: '100', image: require('./image/prod2.png') },
  { id: '5', brand: 'Cartier', name: 'item5', price: '100', image: require('./image/prod2.png') },
  { id: '6', brand: 'Cartier', name: 'item1', price: '100', image: require('./image/prod2.png') },
  { id: '7', brand: 'Cartier', name: 'item2', price: '100', image: require('./image/prod2.png') },
  { id: '8', brand: 'Cartier', name: 'item3', price: '100', image: require('./image/prod2.png') },
  { id: '9', brand: 'Cartier', name: 'item4', price: '100', image: require('./image/prod2.png') },
  { id: '10', brand: 'Cartier', name: 'item10', price: '100', image: require('./image/prod2.png') },
];

const Category = ({ title, image }: any) => (
  <View style={st.itemCategory}>
    {/* <Image source={image} style={st.imageCategory} /> */}
    <Text style={st.titleCategory}>{title}</Text>
  </View>
);
const renderCategory = ({ item }: any) => <Category title={item.title} image={item.image} />;
const Product = ({ brand, name, price, image }: any) => (
  <View style={st.itemProduct}>
    <View style={st.rate}><Image source={require('./image/rateIcon.png')} /><Text style={st.txtRate}>4.5</Text></View>
    <Image source={image} style={st.imageProduct} />
    <Text style={st.brandProduct}>{brand}</Text>
    <Text style={st.titleProduct} numberOfLines={1}>{name}</Text>
    <View style={st.priceProduct}>
      <Text style={{ color: 'orange', fontSize: 18, marginRight: '2%' }}>$</Text>
      <Text style={st.txtPrice}>{price}</Text>
    </View>
    <TouchableOpacity style={st.AddToCart}><Image source={require('./image/plusIcon.png')} style={st.plusIcon} /></TouchableOpacity>
    <TouchableOpacity style={st.like}><Image source={require('./image/iconLikeWhite.png')} style={st.likeIcon} /></TouchableOpacity>
  </View>
);
const renderProd = ({ item }: any) => <Product brand={item.brand} name={item.name} price={item.price} image={item.image} />;
const Product2 = ({ brand, name, price, image }: any) => (
  <View style={st.itemProduct}>
          <LinearGradient colors={['#C8D6F6', '#838997']} style={st.boxProduct}>

    <View style={st.rate}><Image source={require('./image/rateIcon.png')} /><Text style={st.txtRate}>4.5</Text></View>
    <Image source={image} style={st.imageProduct} />
    <Text style={st.brandProduct}>{brand}</Text>
    <Text style={st.titleProduct} numberOfLines={1}>{name}</Text>
    <View style={st.priceProduct}>
      <Text style={{ color: 'orange', fontSize: 18, marginRight: '2%' }}>$</Text>
      <Text style={st.txtPrice}>{price}</Text>
    </View>
    <TouchableOpacity style={st.AddToCart}><Image source={require('./image/plusIcon.png')} style={st.plusIcon} /></TouchableOpacity>
    <TouchableOpacity style={st.like}><Image source={require('./image/iconLikeWhite.png')} style={st.likeIcon} /></TouchableOpacity>
    </LinearGradient>
  </View>


);
const renderProd2 = ({ item }: any) => <Product2 brand={item.brand} name={item.name} price={item.price} image={item.image} />;


const Home = ({ navigation }: any) => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={st.container}>
      <SafeAreaView style={st.container}>
        <Pressable style={st.head}>
          <Image source={require('./image/menuIcon.png')} style={st.person} />
          <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'black' }}>Home</Text>
          <Image source={require('./image/personIcon.png')} style={st.person} />
        </Pressable>
        <ScrollView contentContainerStyle={st.boxProduct}>
          <LinearGradient colors={['#C8D6F6', '#838997']} style={{ flex: 1 }}>
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
            <FlatList
              data={Prod1}
              renderItem={renderProd}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={st.prod}
              ListFooterComponent={<View style={{ width: 200, margin: 50 }} />}
            // contentContainerStyle={{width:'30%', paddingRight: '30%' }}
            />
            <View><Text style={{
              fontFamily: 'roboto',
              marginLeft: '5%',
              marginTop: '4%',
              marginBottom: '2%',
              fontSize: 18,
              color: 'black',
              fontWeight: 'bold',
              textDecorationLine: 'underline'
            }}>Product 2</Text></View>
            
            <FlatList
              data={Prod2}
              renderItem={renderProd2}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={st.prod}
              ListFooterComponent={<View style={{ width: 200, margin: 50 }} />}
            />
            <FlatList
              data={Prod2}
              renderItem={renderProd2}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={st.prod}
              ListFooterComponent={<View style={{ width: 200, margin: 50 }} />}
            />

          </LinearGradient>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>

  )
}

export default Home
const st = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DBE5FD',
    // backgroundColor: 'yellow'
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
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
    marginVertical: 8,
    marginHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'flex-start',
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
    // backgroundColor: 'orange',
    flexGrow: 1,
    width: '100%',
    height: 'auto',
  },
  prod: {
    paddingLeft: '4%',
    flex: 1,
    // backgroundColor: 'gray',
    width: 'auto',
    height: height * 0.26,

  },
  itemProduct: {
    borderRadius: 24,
    paddingTop: '6%',
    width: width * 0.38,
    marginHorizontal: '0.8%',
    marginVertical: '2%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#545A62',
  },
  imageProduct: {
    width: '84%',
    height: '66%',
    resizeMode: 'cover',
    borderRadius: 18,
    alignSelf: 'center'
  },
  brandProduct: {
    marginTop: '1%',
    marginHorizontal: '8%',
    fontSize: 12,
    color: 'white',
    fontFamily: 'roboto',
  },
  titleProduct: {
    fontSize: 16,
    fontFamily: 'roboto',
    color: 'white',
    marginHorizontal: '8%',
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: '-2%',
    marginBottom: '2%',
  },
  priceProduct: {
    fontSize: 16,
    marginHorizontal: '8%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtPrice: {
    fontSize: 16,
    fontFamily: 'serif',
    fontWeight: 'bold',
    color: 'white',
  },
  AddToCart: {
    backgroundColor: '#D17842',
    padding: '2%',
    alignSelf: 'flex-end',
    marginTop: '-16%',
    marginRight: '6%',
    borderRadius: 8
  },
  plusIcon: {
    resizeMode: 'contain'
  },
  like: {
    backgroundColor: '#D17842',
    padding: '3%',
    alignSelf: 'flex-end',
    marginTop: '-17%',
    marginRight: '28%',
    borderRadius: 8,
  },
  likeIcon: {
    resizeMode: 'contain',
    opacity: 1,
  },
  rate: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    // backgroundColor: 'red',
    padding: '2%',
    flexDirection: 'row',
    marginHorizontal: 2,
    position: 'absolute',
    zIndex: 10,
    paddingHorizontal: '4%',
    marginTop: '7%',
    marginLeft: '56%',
    borderTopRightRadius: 18,
    borderBottomStartRadius: 20,
  },
  txtRate: {
    color: 'white',
    marginLeft: 4
  }

  ///*Bottom tabs


})