import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, FlatList, Dimensions, ScrollView, Pressable, Touchable } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');
const Cart = () => {

  const Prod1 = [
    { id: '1', brand: 'Rolex', name: 'Watch 1', size: ['130mm', '145mm', '150mm', '160mm'], price: '100', image: require('./image/prod4.png'), rate: 5, address: 'Ha Noi', rateCount: 1290, quantity: 1 },
    { id: '2', brand: 'Rolex', name: 'Watch 2', size: ['130mm', '145mm', '150mm', '160mm'], price: '100', image: require('./image/prod3.png'), rate: 5, address: 'Ha Noi', rateCount: 423, quantity: 1 },
    { id: '3', brand: 'Rolex', name: 'Watch 3', size: ['130mm', '145mm', '150mm', '160mm'], price: '100', image: require('./image/prod2.png'), rate: 4, address: 'HCM', rateCount: 233, quantity: 2 },
    { id: '4', brand: 'Rolex', name: 'Watch 4', size: ['130mm', '145mm', '150mm', '160mm'], price: '100', image: require('./image/prod3.png'), rate: 4.2, address: 'Da Nang', rateCount: 5422, quantity: 2 },
    { id: '5', brand: 'Rolex', name: 'Watch 5', size: ['130mm', '145mm', '150mm', '160mm'], price: '100', image: require('./image/prod4.png'), rate: 4.5, address: 'Lao Cai', rateCount: 32, quantity: 3 },
    { id: '6', brand: 'Rolex', name: 'Watch 1', size: ['130mm', '145mm', '150mm', '160mm'], price: '100', image: require('./image/prod3.png'), rate: 4.1, address: 'Tp. Hue', rateCount: 43, quantity: 4 },
    { id: '7', brand: 'Rolex', name: 'Watch 2', size: ['130mm', '145mm', '150mm', '160mm'], price: '100', image: require('./image/prod2.png'), rate: 3.5, address: 'Hai Phong', rateCount: 234, quantity: 1 },
    { id: '8', brand: 'Rolex', name: 'Watch 3', size: ['130mm', '145mm', '150mm', '160mm'], price: '100', image: require('./image/prod1.png'), rate: 4.5, address: 'Ha Noi', rateCount: 5432, quantity: 2 },
    { id: '9', brand: 'Rolex', name: 'Watch 4', size: ['130mm', '145mm', '150mm', '160mm'], price: '100', image: require('./image/prod3.png'), rate: 5, address: 'Ca Mau', rateCount: 142, quantity: 3 },
    { id: '10', brand: 'Rolex', name: 'Watch 10', size: ['130mm', '145mm', '150mm', '160mm'], price: '100', image: require('./image/prod4.png'), rate: 5, address: 'Ha Noi', rateCount: 122, quantity: 1 },
  ];
  const navigation = useNavigation()
  const renderProd = ({ item }: any) => {
    return (
      <Pressable onPress={() => navigation.navigate('ProductDetail', { item })}>
        <View style={st.itemProduct}>
          <View style={st.Left}>
            <Image source={item.image} style={st.imageProduct} />
            {/* <TouchableOpacity style={st.like}><Image source={require('./image/iconLikeRed.png')} style={st.likeIcon} /></TouchableOpacity> */}
          </View>
          <View style={st.Right}>
            <Text style={st.brandProduct}>{item.brand}</Text>
            <Text style={st.titleProduct} numberOfLines={2}>{item.name}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {/* <View> */}
              <Text style={st.txtSize}>{item.size[0]}</Text>
              {/* </View> */}
              <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center' }}>
                <Text style={{ color: 'orange', fontSize: 20, marginRight: 4 }}>$</Text>
                <Text style={st.priceProduct}>{item.price}</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <TouchableOpacity style={st.plus_minus}><Text style={st.txtAddToCart}>-</Text></TouchableOpacity>
              <Text style={st.txtQuantity}>{item.quantity}</Text>
              <TouchableOpacity style={st.plus_minus}><Text style={st.txtAddToCart}>+</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </Pressable>
    )
  }

  // const renderProd = ({ item }: any) => <Product brand={item.brand} name={item.name} price={item.price} image={item.image} size={item.size} quantity={item.quantity} />;
  //=====================
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
        contentContainerStyle={{ flexGrow: 1, paddingBottom: '40%' }}
      />
      <View style={st.boxPay}>
        <View style={st.leftPay}>
          <Text style={{ color: 'black' }}>Total Price</Text>
          <View style={{ flexDirection: 'row', flex: 1, }}>
            <Text style={{ color: 'orange', fontSize: 24, marginRight: 4 }}>$</Text>
            <Text numberOfLines={1} style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: '#2AB381',
            }}>1000</Text>
          </View>
        </View>
        <Pressable onPress={()=>navigation.navigate('')} style={st.pressPay}><Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Pay</Text></Pressable>
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
    borderRadius: 10,
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
    position: 'absolute',
    width: '100%',
    height: 80,
    marginBottom: 70,
    flexDirection: 'row',
    backgroundColor: '#E9E9E9',
    bottom: 0
  },
  leftPay: {
    justifyContent: 'center',
    paddingHorizontal: '5%',
    marginVertical: '1%',
    paddingVertical: '2%',
    flex: 1,
  },
  pressPay: {
    backgroundColor: '#2AB381',
    flex: 1,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '5%',
    marginVertical: '3%',
    marginHorizontal: '3%',
  },
})