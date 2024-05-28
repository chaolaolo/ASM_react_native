import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, FlatList, Dimensions, ScrollView, Pressable, Touchable, KeyboardAvoidingView, Platform, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';


const { width, height } = Dimensions.get('window');


const Home = () => {
  const DATA = [
    { id: '1', title: 'All', image: require('./image/logo.png') },
    { id: '2', title: 'Rolex', },
    { id: '3', title: 'Cartier' },
    { id: '4', title: 'Calvin-Klein' },
    { id: '5', title: 'TimeX', },];

  const Prod1 = [
    { id: '1', brand: 'Rolex', name: 'item1 Chao lao lo Chao Lao Lo Chao lao lo Chao Lao Lo', price: '100', image: require('./image/prod1.png'), rate: 5, address: 'Ha Noi' },
    { id: '2', brand: 'Rolex', name: 'item2', price: '100', image: require('./image/prod1.png'), rate: 5, address: 'Ha Noi' },
    { id: '3', brand: 'Rolex', name: 'item3', price: '100', image: require('./image/prod1.png'), rate: 4, address: 'HCM' },
    { id: '4', brand: 'Rolex', name: 'item4', price: '100', image: require('./image/prod1.png'), rate: 4.2, address: 'Da Nang' },
    { id: '5', brand: 'Rolex', name: 'item5', price: '100', image: require('./image/prod1.png'), rate: 4.5, address: 'Lao Cai' },
    { id: '6', brand: 'Rolex', name: 'item1', price: '100', image: require('./image/prod1.png'), rate: 4.1, address: 'Tp. Hue' },
    { id: '7', brand: 'Rolex', name: 'item2', price: '100', image: require('./image/prod1.png'), rate: 3.5, address: 'Hai Phong' },
    { id: '8', brand: 'Rolex', name: 'item3', price: '100', image: require('./image/prod1.png'), rate: 4.5, address: 'Ha Noi' },
    { id: '9', brand: 'Rolex', name: 'item4', price: '100', image: require('./image/prod1.png'), rate: 5, address: 'Ca Mau' },
    { id: '10', brand: 'Rolex', name: 'item10', price: '100', image: require('./image/prod1.png'), rate: 5, address: 'Ha Noi' },
  ];
  const Prod2 = [
    { id: '1', brand: 'Cartier', name: 'item1', price: '100', image: require('./image/prod2.png'), rate: 4.7, address: 'Ha Noi' },
    { id: '2', brand: 'Cartier', name: 'item2', price: '100', image: require('./image/prod2.png'), rate: 4.5, address: 'Lao Cai' },
    { id: '3', brand: 'Cartier', name: 'item3', price: '100', image: require('./image/prod2.png'), rate: 4.3, address: 'Lao Cai' },
    { id: '4', brand: 'Cartier', name: 'item4', price: '100', image: require('./image/prod2.png'), rate: 4.5, address: 'Ha Noi' },
    { id: '5', brand: 'Cartier', name: 'item5', price: '100', image: require('./image/prod2.png'), rate: 4.4, address: 'Tp. Hue' },
    { id: '6', brand: 'Cartier', name: 'item1', price: '100', image: require('./image/prod2.png'), rate: 4.5, address: 'Tp. Hue' },
    { id: '7', brand: 'Cartier', name: 'item2', price: '100', image: require('./image/prod2.png'), rate: 4.7, address: 'Ha Noi' },
    { id: '8', brand: 'Cartier', name: 'item3', price: '100', image: require('./image/prod2.png'), rate: 4.5, address: 'Ha Noi' },
    { id: '9', brand: 'Cartier', name: 'item4', price: '100', image: require('./image/prod2.png'), rate: 4.5, address: 'HCM' },
    { id: '10', brand: 'Cartier', name: 'item10', price: '100', image: require('./image/prod2.png'), rate: 4.6, address: 'HCM' },
  ];

  const Category = ({ title, image }: any) => (
    <View style={st.itemCategory}>
      <Text style={st.titleCategory}>{title}</Text>
    </View>
  );
  const renderCategory = ({ item }: any) => <Category title={item.title} image={item.image} />;

  const renderProd = ({ item }: any) => {
    return (
      <Pressable onPress={() => navigation.navigate('ProductDetail', { item })}>
        <View style={st.itemProduct}>
          <View style={st.rate}><Image source={require('./image/rateIcon.png')} /><Text style={st.txtRate}>{item.rate}</Text></View>
          <Image source={item.image} style={st.imageProduct} />
          <Text style={st.brandProduct}>{item.brand}</Text>
          <Text style={st.titleProduct} numberOfLines={1}>{item.name}</Text>
          <View style={st.priceProduct}>
            <Text style={{ color: 'orange', fontSize: 18, marginRight: '2%' }}>$</Text>
            <Text style={st.txtPrice}>{item.price}</Text>
          </View>
          <TouchableOpacity style={st.AddToCart}><Image source={require('./image/plusIcon.png')} style={st.plusIcon} /></TouchableOpacity>
          <TouchableOpacity style={st.like}><Image source={require('./image/iconLikeWhite.png')} style={st.likeIcon} /></TouchableOpacity>
        </View>
      </Pressable>
    )
  }
  const renderProd2 = ({ item }: any) => {
    return (
      <Pressable onPress={() => navigation.navigate('ProductDetail', { item })}>
        {/* <LinearGradient colors={['#F7F7F7', '#919191']} style={st.itemProduct}> */}
        <View style={st.itemProduct}>
          <View style={st.rate}><Image source={require('./image/rateIcon.png')} /><Text style={st.txtRate}>{item.rate}</Text></View>
          <Image source={item.image} style={st.imageProduct} />
          <Text style={st.brandProduct}>{item.brand}</Text>
          <Text style={st.titleProduct} numberOfLines={1}>{item.name}</Text>
          <View style={st.priceProduct}>
            <Text style={{ color: 'orange', fontSize: 18, marginRight: '2%' }}>$</Text>
            <Text style={st.txtPrice}>{item.price}</Text>
          </View>
          <TouchableOpacity style={st.AddToCart}><Image source={require('./image/plusIcon.png')} style={st.plusIcon} /></TouchableOpacity>
          <TouchableOpacity style={st.like}><Image source={require('./image/iconLikeWhite.png')} style={st.likeIcon} /></TouchableOpacity>
        </View>
      </Pressable>
    )
  }

  const navigation = useNavigation()

  // -------------------------------------------------------
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={st.container}>
      <StatusBar translucent={false} />
      <SafeAreaView style={st.container}>
        <Pressable style={st.head}>
          <Image source={require('./image/menuIcon.png')} style={st.person} />
          <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'black' }}>Home</Text>
          <Image source={require('./image/personIcon.png')} style={st.person} />
        </Pressable>
        <ScrollView contentContainerStyle={st.boxProduct}>
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
          <View><Text style={{
            fontFamily: 'roboto',
            marginLeft: '5%',
            marginTop: '4%',
            marginBottom: '2%',
            fontSize: 18,
            color: 'black',
            fontWeight: 'bold',
            textDecorationLine: 'underline'
          }}>New products</Text></View>
          <FlatList
            data={Prod1}
            renderItem={renderProd}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={st.prod}
            ListFooterComponent={<View style={{ width: 200, margin: 50 }} />}
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
          }}>Best-selling</Text></View>

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

        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>

  )
}

export default Home
const st = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  person: {
    width: 50,
    height: 50,
    backgroundColor: '#E9E9E9',
    margin: '5%',
    borderRadius: 50,
  },
  slogan: {
    width: '50%',
    height: 'auto',
    fontSize: 24,
    fontWeight: '800',
    fontFamily: 'roboto',
    margin: '5%',
    color: 'black'
  },
  boxSearch: {
    width: '90%',
    height: 60,
    backgroundColor: '#F8F8F8',
    alignSelf: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    // borderWidth: 1.5,
    // borderColor: 'lightgray'
  },
  searchIcon: {
    width: '8%',
    height: '50%',
    justifyContent: 'flex-start',
    marginVertical: 'auto',
    marginLeft: '2%'
  },
  tipSearch: {
    fontSize: 16,
    fontFamily: 'roboto',
    flex: 1
  },
  itemCategory: {
    marginVertical: 8,
    marginHorizontal: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'flex-start',

  },
  titleCategory: {
    fontSize: 18,
    color: '#515151',
    textAlign: 'center',
    fontFamily: 'roboto',
    fontWeight: 'bold',
    margin: 2,
  },
  boxProduct: {
    paddingBottom: 100,
  },
  prod: {
    paddingLeft: '4%',
    flex: 1,
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
    backgroundColor: '#F3F4F6',
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
    color: 'black',
    fontFamily: 'roboto',
  },
  titleProduct: {
    fontSize: 16,
    fontFamily: 'roboto',
    color: 'black',
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
    fontFamily: 'roboto',
    fontWeight: 'bold',
    color: '#2AB381',
  },
  AddToCart: {
    backgroundColor: 'rgba(0,0,0,0.7)',
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
    backgroundColor: 'rgba(0,0,0,0.7)',
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
    width: 56,
    backgroundColor: 'rgba(0,0,0,0.6)',
    // backgroundColor: 'red',
    padding: '2%',
    flexDirection: 'row',
    marginHorizontal: 2,
    position: 'absolute',
    zIndex: 10,
    paddingHorizontal: '4%',
    marginTop: '6%',
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