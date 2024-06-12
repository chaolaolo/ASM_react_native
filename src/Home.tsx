import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, FlatList, Dimensions, ScrollView, Pressable, Touchable, KeyboardAvoidingView, Platform, StatusBar, LayoutAnimation, ActivityIndicator, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './Header';


const { width, height } = Dimensions.get('window');


const Home = () => {
  const navigation = useNavigation()
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [listNewProduct, setlistNewProduct] = useState([]);
  const [listBestSell, setlistBestSell] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const category = [
    { id: '1', title: 'All', image: require('./image/logo.png') },
    { id: '2', title: 'Rolex', },
    { id: '3', title: 'Cartier' },
    { id: '4', title: 'Calvin-Klein' },
    { id: '5', title: 'TimeX', },];

  useEffect(() => {
    const getCategory = async () => {
      try {
        const savedCategoryId = await AsyncStorage.getItem('selectedCategoryId');
        if (savedCategoryId !== null) {
          setSelectedCategoryId(savedCategoryId);
        } else {
          setSelectedCategoryId('1'); // Mặc định là 'All'
        }
      } catch (error) {
        console.error(error);
      }
    };

    getCategory();
  }, []);

  const handleCategoryPress = async (id: any) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSelectedCategoryId(id);
    try {
      await AsyncStorage.setItem('selectedCategoryId', id);
    } catch (error) {
      console.error(error);
    }
  };

  const Category = ({ title, image, id }: any) => {
    const isSelected = selectedCategoryId === id;
    return (
      <Pressable style={[st.itemCategory, selectedCategoryId === id ? st.selectedCategoryId : { backgroundColor: 'white' }]} onPress={() => handleCategoryPress(id)}>
        <Text style={st.titleCategory}>{title}</Text>
      </Pressable>);
  };
  const renderCategory = ({ item }: any) => <Category title={item.title} image={item.image} id={item.id} />;

  const getListNewProd = async () => {
    // let url_api = 'http://192.168.1.8:3001/Products';
    let url_api = 'https://665f14f81e9017dc16f2c14e.mockapi.io/products';
    try {
      const response = await fetch(url_api);
      const json = await response.json();
      json.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setlistNewProduct(json);
    } catch (error) {
      console.log(error);

    } finally {
      setisLoading(false);
    }
  }
  const getListBestSelling = async () => {
    let url_api = 'https://665f14f81e9017dc16f2c14e.mockapi.io/products';
    try {
      const response = await fetch(url_api);
      const json = await response.json();
      json.sort((a, b) => b.sold - a.sold);
      setlistBestSell(json);
    } catch (error) {
      console.log(error);

    } finally {
      setisLoading(false);
    }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getListNewProd();
      getListBestSelling();
    });

    return unsubscribe;
  }, [navigation])

  const addToCart = async (product) => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (!user) {
        Alert.alert('Lỗi', 'Đăng  nhập trước khi thêm vào giỏ hàng!');
        return;
      }
      const userData = JSON.parse(user);
      const addProd_Quantity = { ...product, quantity:1 ,idUser:userData.id};
      const response = await fetch('https://666138f063e6a0189fe8ec69.mockapi.io/Cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(addProd_Quantity)
      });
      if (response.ok) {
        Alert.alert('Add To Cart','Product added to cart successfully!');
      } else {
        Alert.alert('Add To Cart','Failed to add product to cart');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Add To Cart','An error occurred while adding product to cart');
    }
  };

  const addFaourite = async (product) => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (!user) {
        Alert.alert('Lỗi', 'Đăng  nhập trước khi thêm mục yêu thích!');
        return;
      }
      const userData = JSON.parse(user);
      const addIdUser = { ...product, idUser:userData.id};
      const response = await fetch('https://666138f063e6a0189fe8ec69.mockapi.io/Favourite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(addIdUser)
      });
      if (response.ok) {
        Alert.alert('Add To Favourite','Product added to favourite successfully!');
      } else {
        Alert.alert('Add To Favourite','Failed to add favourite to cart');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Add To Favourite','An error occurred while adding product to cart');
    }
  };



  const renderProd = ({ item }: any) => {
    return (
      <Pressable onPress={() => navigation.navigate('ProductDetail', { item })}>
        <View style={st.itemProduct}>
          <View style={st.rate}><Image source={require('./image/rateIcon.png')} /><Text style={st.txtRate}>{item.rate}</Text></View>
          <Image source={{ uri: item.image }} style={st.imageProduct} />
          <Text style={st.brandProduct}>{item.brand}</Text>
          <Text style={st.titleProduct} numberOfLines={1}>{item.name}</Text>
          <View style={st.priceProduct}>
            <Text style={{ color: 'orange', fontSize: 18, marginRight: '2%' }}>$</Text>
            <Text style={st.txtPrice}>{item.price}</Text>
          </View>
          <TouchableOpacity style={st.AddToCart} onPress={() => addToCart(item)}><Image source={require('./image/plusIcon.png')} style={st.plusIcon} /></TouchableOpacity>
          <TouchableOpacity style={st.like} onPress={() => addFaourite(item)}>
            <Image
              source={item.liked ? require('./image/iconLikeRed.png') : require('./image/iconLikeWhite.png')}
              style={st.likeIcon} />
          </TouchableOpacity>
        </View>
      </Pressable>
    )
  }

  // -------------------------------------------------------
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={st.container}>
      <StatusBar translucent={false} />
      <SafeAreaView style={st.container}>
        <Header titleHeader='Home' />
        <ScrollView contentContainerStyle={st.boxProduct}>
          <Text style={st.slogan}>
            Find the best Watch for you
          </Text>
          <View style={st.boxSearch}>
            <Image source={require('./image/search.png')} style={st.searchIcon} />
            <TextInput placeholder='Find your Watch...' style={st.tipSearch}></TextInput>
          </View>
          <FlatList
            data={category}
            renderItem={renderCategory}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ padding: 5, marginVertical: 10 }}
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
          {
            (isLoading) ? (
              <ActivityIndicator />
            ) : (
              <FlatList
                data={listNewProduct}
                renderItem={renderProd}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={st.prod}
                ListFooterComponent={<View style={{ width: 20, margin: 50 }} />}
              />
            )
          }

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
          {
            (isLoading) ? (
              <ActivityIndicator />
            ) : (
              <FlatList
                data={listBestSell}
                renderItem={renderProd}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={st.prod}
                ListFooterComponent={<View style={{ width: 20, margin: 50 }} />}
              />
            )
          }
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>

  )
}

export default Home
const st = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
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
    marginHorizontal: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  selectedCategoryId: {
    color: 'red',
    borderRadius: 5,
    backgroundColor: '#34E0A1'
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
    backgroundColor: 'white',
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
    marginHorizontal: 8,
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
})