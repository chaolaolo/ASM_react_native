import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, FlatList, Dimensions, ScrollView, Pressable, Touchable, Alert, RefreshControl } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import Header from './Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');
const getUserId = async () => {
  try {
    const user = await AsyncStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      return userData.id;
    }
  } catch (error) {
    console.error('Error getting user ID:', error);
  }
  return null;
};
const Favourite = () => {
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();
  const [listProduct, setlistProduct] = useState([]);


  const fetchData = useCallback(async() => {
    const userId = await getUserId();
    if (!userId) {
      console.log('chưa đăng nhập');
      return;
    }
  //   fetch('https://666138f063e6a0189fe8ec69.mockapi.io/Favourite')
  //     .then(response => response.json())
  //     .then(data => setlistProduct(data))
  //     .catch(error => console.error('Error fetching data:', error))
  //     .finally(() => setRefreshing(false));
  // }, []);
  try {
    const response = await fetch(`https://666138f063e6a0189fe8ec69.mockapi.io/Favourite?idUser=${userId}`);
    const data = await response.json();
    if (Array.isArray(data)) {
      setlistProduct(data);
    } else {
      setlistProduct([]);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    setRefreshing(false);
  }
}, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', fetchData);
    return unsubscribe;
  }, [navigation, fetchData]);

  const onRefresh = () => {
    setRefreshing(true);
    fetchData();
  };



  const addToCart = async (product) => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (!user) {
        Alert.alert('Lỗi', 'Đăng  nhập trước khi thêm vào giỏ hàng!');
        return;
      }
      const userData = JSON.parse(user);
      const addProd_Quantity = { ...product, quantity: 1,idUser:userData.id };
      const response = await fetch('https://666138f063e6a0189fe8ec69.mockapi.io/Cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(addProd_Quantity)
      });
      if (response.ok) {
        Alert.alert('Add To Cart', 'Product added to cart successfully!');
      } else {
        Alert.alert('Add To Cart', 'Failed to add product to cart');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Add To Cart', 'An error occurred while adding product to cart');
    }
  };

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
            fetch(`https://666138f063e6a0189fe8ec69.mockapi.io/Favourite/${item.id}`, {
              method: 'DELETE',
            })
              .then(response => response.json())
              .then(() => {
                // Update local state
                const updatedList = listProduct.filter(product => product.id !== item.id);
                setlistProduct(updatedList);
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
            <TouchableOpacity style={st.like} onPress={() => deleteItem(item)}>
              <Image source={require('./image/iconLikeRed.png')} style={st.likeIcon} />
              </TouchableOpacity>
          </View>
          <View style={st.Right}>
            <Text style={st.brandProduct}>{item.brand}</Text>
            <Text style={st.titleProduct} numberOfLines={2}>{item.name}</Text>
            <View style={{ flexDirection: 'row', }}>
              <Text style={{ color: 'orange', fontSize: 20, marginRight: 4 }}>$</Text>
              <Text style={st.priceProduct}>{item.price}</Text>
            </View>
            <TouchableOpacity style={st.AddToCart} onPress={() => addToCart(item)}><Text style={st.txtAddToCart}>Add To Cart</Text></TouchableOpacity>
          </View>

        </View>
      </Pressable>
    )
  }
  return (
    <SafeAreaView style={st.container}>
      <Header titleHeader='Favourite' />
      {listProduct.length === 0 ? (
        <View style={st.noItemsContainer}>
          <Text style={st.noItemsText}>none favourite item</Text>
        </View>
      ) : (
        <FlatList
          data={listProduct}
          renderItem={renderProd}
          keyExtractor={item => item.id}
          style={st.prod}
          contentContainerStyle={{ flexGrow: 1, paddingBottom: '20%', backgroundColor: 'white', paddingLeft: '4%' }}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        />)}
    </SafeAreaView>

  )
}

export default Favourite
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
  priceProduct: {
    fontSize: 18,
    fontFamily: 'roboto',
    fontWeight: 'bold',
    color: '#2AB381'
  },
  AddToCart: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    padding: '2%',
    marginHorizontal: 'auto',
    // alignSelf: 'flex-end',
    // marginTop: '-14%',
    // marginRight: '6%',
    borderRadius: 8
  },
  txtAddToCart: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20
  },
  like: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 5,
    borderRadius: 8,
    marginLeft: '8%',
    marginTop: '7%',
    position: 'absolute',
    zIndex: 4
  },
  likeIcon: {
    width: 22,
    height: 20,
    resizeMode: 'contain',
    opacity: 1,
  },
  noItemsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },
  noItemsText: {
    fontSize: 18,
    color: 'gray',
  },
})