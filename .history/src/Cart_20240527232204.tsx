import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, FlatList, Dimensions, ScrollView, Pressable, Touchable } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

const Prod1 = [
  { id: '1', brand: 'Rolex', name: 'item1 Chao lao lo Chao Lao Lo Chao lao lo Chao Lao Lo', price: '100', image: require('./image/prod1.png'), size: 'S', quantity: 1 },
  { id: '2', brand: 'Rolex', name: 'item2', price: '100', image: require('./image/prod1.png'), size: 'M', quantity: 1 },
  { id: '3', brand: 'Rolex', name: 'item3', price: '100', image: require('./image/prod1.png'), size: 'L', quantity: 2 },
  { id: '4', brand: 'Rolex', name: 'item4', price: '100', image: require('./image/prod1.png'), size: 'XL', quantity: 3 },
  { id: '5', brand: 'Rolex', name: 'item5', price: '100', image: require('./image/prod1.png'), size: 'S', quantity: 4 },
  { id: '6', brand: 'Rolex', name: 'item1', price: '100', image: require('./image/prod1.png'), size: 'M', quantity: 5 },
  { id: '7', brand: 'Rolex', name: 'item2', price: '100', image: require('./image/prod1.png'), size: 'L', quantity: 2 },
  { id: '8', brand: 'Rolex', name: 'item3', price: '100', image: require('./image/prod1.png'), size: 'XL', quantity: 1 },
  { id: '9', brand: 'Rolex', name: 'item4', price: '100', image: require('./image/prod1.png'), size: 'S', quantity: 2 },
  { id: '10', brand: 'Rolex', name: 'item10', price: '100', image: require('./image/prod1.png'), size: 'M', quantity: 1 },
];

const Product = ({ brand, name, price, image, size, quantity }: any) => (
  <View>
    <View style={st.itemProduct}>
      <View style={st.Left}>
        <Image source={image} style={st.imageProduct} />
        {/* <TouchableOpacity style={st.like}><Image source={require('./image/iconLikeRed.png')} style={st.likeIcon} /></TouchableOpacity> */}
      </View>
      <View style={st.Right}>
        <Text style={st.brandProduct}>{brand}</Text>
        <Text style={st.titleProduct} numberOfLines={2}>{name}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {/* <View> */}
          <Text style={st.txtSize}>{size}</Text>
          {/* </View> */}
          <View style={{ flexDirection: 'row', flex: 1 ,justifyContent:'center'}}>
            <Text style={{ color: 'orange', fontSize: 20, marginRight: 4 }}>$</Text>
            <Text style={st.priceProduct}>{price}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity style={st.plus_minus}><Text style={st.txtAddToCart}>-</Text></TouchableOpacity>
          <Text style={st.txtQuantity}>{quantity}</Text>
          <TouchableOpacity style={st.plus_minus}><Text style={st.txtAddToCart}>+</Text></TouchableOpacity>
        </View>
      </View>

    </View>
  </View>
);
const renderProd = ({ item }: any) => <Product brand={item.brand} name={item.name} price={item.price} image={item.image} size={item.size} quantity={item.quantity} />;

const Cart = ({ navigation }: any) => {
  return (
    <SafeAreaView style={st.container}>
      <Pressable style={st.head}>
        <Image source={require('./image/menuIcon.png')} style={st.person} />
        <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'black' }}>Cart</Text>
        <Image source={require('./image/personIcon.png')} style={st.person} />
      </Pressable>
      <FlatList
        data={Prod1}
        renderItem={renderProd}
        keyExtractor={item => item.id}
        style={st.prod}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: '20%' }}
      />
      <View style={st.boxPay}>
        <View style={st.leftPay}>
          <Text style={{ color: 'black' }}>Total Price</Text>
          <View style={{ flexDirection: 'row', flex: 1,}}>
            <Text style={{ color: 'orange', fontSize: 24, marginRight: 4 }}>$</Text>
            <Text numberOfLines={1} style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: '#2AB381',
            }}>10000000.22227777740999999</Text>
          </View>
        </View>
        <Pressable style={st.pressPay}><Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Pay</Text></Pressable>
      </View>
    </SafeAreaView>

  )
}

export default Cart
const st = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
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
  prod: {
    paddingLeft: '4%',
    flex: 1,
  },
  itemProduct: {
    borderRadius: 20,
    width: width * 0.9,
    height: height * 0.19,
    marginVertical: '2%',
    backgroundColor: '#F3F4F6',
    flexDirection: 'row'
  },
  Left: {
    flex: 1,
  },
  Right: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    paddingVertical: '1%',
    paddingHorizontal: '6%'
  },
  imageProduct: {
    width: '90%',
    height: '90%',
    resizeMode: 'cover',
    borderRadius: 16,
    alignSelf: 'center',
    marginVertical: 'auto'
  },
  brandProduct: {
    fontSize: 12,
    color: 'black',
    fontFamily: 'roboto',
  },
  titleProduct: {
    fontSize: 16,
    fontFamily: 'roboto',
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: '-2%',
    marginBottom: '2%',
  },
  txtSize: {
    fontSize: 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
    borderRadius: 10,
    // marginRight: '4%',
    paddingVertical: '2%'
  },
  priceProduct: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2AB381',
  },
  plus_minus: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginHorizontal: '1%',
    borderRadius: 8
  },
  txtQuantity: {
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    borderRadius: 10,
    marginHorizontal: '5%',
    paddingVertical: '2%',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.5)',
  },
  txtAddToCart: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20
  },
  like: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: '3%',
    borderRadius: 8,
    marginLeft: '8%',
    marginTop: '7%',
    position: 'absolute',
    zIndex: 4
  },
  likeIcon: {
    resizeMode: 'contain',
    opacity: 1,
  },
  boxPay: {
    width: '100%',
    height: 80,
    marginBottom: 70,
    flexDirection: 'row',
    borderBottomWidth: 1,
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
  leftPay: {
    justifyContent: 'center',
    paddingHorizontal: '5%',
    marginVertical: '1%',
    paddingVertical: '2%',
    flex: 1, 
  },
  pressPay: {
    backgroundColor: '#D17842',
    flex: 1,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '5%',
    marginVertical: '1%'
  },
})