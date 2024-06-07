import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, FlatList, Dimensions, ScrollView, Pressable, Touchable, Alert, RefreshControl } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import Header from './Header';

const { width, height } = Dimensions.get('window');
const Cart = () => {
  const navigation = useNavigation()
  const [listProduct, setlistProduct] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [refreshing, setRefreshing] = useState(false);


  const fetchData = useCallback(() => {
    fetch('https://666138f063e6a0189fe8ec69.mockapi.io/Cart')
      .then(response => response.json())
      .then(data => {
        setlistProduct(data);
        calculateTotalPrice(data);
      })
      .catch(error => console.error('Error fetching data:', error))
      .finally(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', fetchData);
    return unsubscribe;
  }, [navigation, fetchData]);

  const onRefresh = () => {
    setRefreshing(true);
    fetchData();
  };

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     fetch('https://666138f063e6a0189fe8ec69.mockapi.io/Cart')
  //       .then(response => response.json())
  //       .then(data => {
  //         setlistProduct(data);
  //         calculateTotalPrice(data);
  //       })
  //       .catch(error => console.error('Error fetching data:', error));
  //   });

  //   return unsubscribe;
  // }, [navigation]);

  const calculateTotalPrice = (products) => {
    const total = products.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total);
  }

  const updateQuantity = (item, operation) => {
    const updatedQuantity = operation === 'increase' ? item.quantity + 1 : item.quantity - 1;

    if (updatedQuantity < 1) return;

    const updatedList = listProduct.map(product => {
      if (product.id === item.id) {
        return { ...product, quantity: updatedQuantity };
      }
      return product;
    });

    setlistProduct(updatedList);
    calculateTotalPrice(updatedList);

    fetch(`https://666138f063e6a0189fe8ec69.mockapi.io/Cart/${item.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...item, quantity: updatedQuantity }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Successfully updated:', data);
      })
      .catch(error => {
        console.error('Error updating data:', error);
      });
  }


  const deleteItem = (item) => {
    Alert.alert(
      "Delete Item",
      "Are you sure you want to delete this item?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Delete",
          onPress: () => {
            fetch(`https://666138f063e6a0189fe8ec69.mockapi.io/Cart/${item.id}`, {
              method: 'DELETE',
            })
              .then(response => response.json())
              .then(() => {
                // Update local state
                const updatedList = listProduct.filter(product => product.id !== item.id);
                setlistProduct(updatedList);
                calculateTotalPrice(updatedList);
              })
              .catch(error => {
                console.error('Error deleting item:', error);
              });
          },
          style: "destructive"
        }
      ],
      { cancelable: true }
    );
  };

  const renderProd = ({ item }: any) => {
    return (
      <Pressable onPress={() => navigation.navigate('ProductDetail', { item })}>
        <View style={st.itemProduct}>
          <View style={st.Left}>
            <Image source={{ uri: item.image }} style={st.imageProduct} />
          </View>
          <View style={st.Right}>
            <TouchableOpacity style={st.deleteItem} onPress={() => deleteItem(item)}>
              <Image source={require('./image/iconExitBlack.png')} />
            </TouchableOpacity>
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
              <TouchableOpacity style={st.plus_minus} onPress={() => updateQuantity(item, 'decrease')}><Text style={st.txtAddToCart}>-</Text></TouchableOpacity>
              <Text style={st.txtQuantity}>{item.quantity}</Text>
              <TouchableOpacity style={st.plus_minus} onPress={() => updateQuantity(item, 'increase')}><Text style={st.txtAddToCart}>+</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </Pressable>
    )
  }

  //=====================
  return (
    <SafeAreaView style={st.container}>
      <Header titleHeader='Cart' />
      <FlatList
        data={listProduct}
        renderItem={renderProd}
        keyExtractor={item => item.id}
        style={st.prod}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: '40%', backgroundColor: 'white', paddingLeft: '4%' }}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
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
            }}>{totalPrice.toFixed(2)}</Text>
          </View>
        </View>
        <Pressable onPress={() => navigation.navigate('Payment')} style={st.pressPay}><Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Pay</Text></Pressable>
      </View>
    </SafeAreaView>

  )
}

export default Cart
const st = StyleSheet.create({
  container: {
    flex: 1,
  },
  prod: {
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
  deleteItem: {
    // alignSelf: 'flex-end',
    position: 'absolute',
    right: 16
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