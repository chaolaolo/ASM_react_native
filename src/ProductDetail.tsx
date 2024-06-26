import { Alert, Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductDetail = ({ route, navigation }: any) => {
    // const navigation=useNavigation();
    const { item } = route.params;

    const addFaourite = async (product) => {
        try {
          const user = await AsyncStorage.getItem('user');
          if (!user) {
            Alert.alert('Lỗi', 'Đăng  nhập trước khi thêm vào mục yêu thích!');
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
    


    return (
        <SafeAreaView style={st.container}>
            <StatusBar translucent={false} backgroundColor='transparent' barStyle={'dark-content'} />
            <View style={st.head}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Image source={require('./image/iconBack.png')} style={st.back} />
                </Pressable>
                <Pressable style={st.boxLike} onPress={() => addFaourite(item)}>
                    <Image source={require('./image/iconLikeWhite.png')} style={st.like} />
                </Pressable>
            </View>
            <ScrollView>
                <View style={st.top}>
                    <Image source={{ uri: item.image }} style={st.imgProduct} />
                    <View style={st.bottomImage}>
                        <View style={st.left}>
                            <Text style={st.name} numberOfLines={2}>{item.name}</Text>
                            <Text style={st.brand}>{item.brand}</Text>
                            <View style={st.rate}>
                                <Image source={require('./image/rateIcon.png')} style={st.iconRate} />
                                <Text style={st.txtRate}>{item.rate}</Text>
                                <Text style={st.txtRateCount}>({item.rateCount})</Text>
                            </View>
                        </View>
                        <View style={st.right}>
                            <Image source={require('./image/iconAddress.png')} style={st.iconAddress} />
                            <Text style={st.txtAddres}>{item.address}</Text>
                        </View>
                    </View>
                </View>
                <View style={st.bottom}>
                    <View style={{ padding: '4%' }}>
                        <Text style={{ marginBottom: '2%', fontWeight: 'bold', color: 'black' }}>Description</Text>
                        <Text style={{ color: 'black' }}>
                            {/* {item.description} */}
                            Màu Sắc Dây: Đen
                            Màu Sắc Mặt: Trắng
                            Đường kính mặt : 38mm
                            Dây : 20mm
                            Độ dày mặt: 9mm
                            Loại mặt kính : Kính khoáng
                            Dây da
                            Chống nước : 30m
                            Loại máy đồng hồ : Quartz
                            Bảo hành : 12 tháng.
                            Công nghệ đèn nền INDIGLO độc quyền của Timex.
                            Thương hiệu Mỹ, sản xuất tại Philippines, Nhật Bản, Trung Quốc.
                            Hướng dẫn bảo quản
                            _ Tránh để đồng hồ nơi nhiệt độ thay đổi đột ngột
                            _ Tránh va chạm và tiếp xúc với chất ăn mòn, nhiệt độ cao hoặc từ trường mạnh
                            _ Không chỉnh nút chỉnh giờ khi đồng hồ bị ướt
                            _ Tắt nguồn khi không được sử dụng trong thời gian dài
                            _ Làm sạch đồng hồ theo định kỳ bằng vải mềm hơi ẩm để gia tăng tuổi thọ đồng hồ.</Text>
                    </View>
                    <View>
                        <Text style={{ marginBottom: '2%', fontWeight: 'bold', color: 'black', marginLeft: '4%' }}>size</Text>
                        <View style={{ flexDirection: 'row', marginHorizontal: '4%' }}>
                            <Text style={st.txtSize}>{item.size[0]}</Text>
                            <Text style={st.txtSize}>{item.size[1]}</Text>
                            <Text style={st.txtSize}>{item.size[2]}</Text>
                            <Text style={st.txtSize}>{item.size[3]}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={st.boxPay}>
                <View style={st.leftPay}>
                    <Text style={{ color: 'black' }}>Price</Text>
                    <View style={{ flexDirection: 'row', flex: 1, }}>
                        <Text style={{ color: 'orange', fontSize: 24, marginRight: 4 }}>$</Text>
                        <Text numberOfLines={1} style={{
                            fontSize: 24,
                            fontWeight: 'bold',
                            color: '#2AB381',
                        }}>{item.price}</Text>
                    </View>
                </View>
                <Pressable style={st.pressPay} onPress={() => navigation.navigate('Payment',{totalPrice:item.price})}><Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Pay</Text></Pressable>
            </View>
        </SafeAreaView>
    )
}

export default ProductDetail

const st = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(1,1,1,0.01)'
    },
    head: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 1,
        paddingHorizontal: '5%',
        marginVertical: '5%',
    },
    back: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 10,
        resizeMode: 'center',
    },
    boxLike: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    like: {
        width: 30,
        height: 28,
    },
    //------------------------
    top: {
        width: '100%',
    },
    imgProduct: {
        width: '100%',
        height: 480,
        // resizeMode: 'cover'
    },
    bottomImage: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        bottom: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: '4%',
        paddingTop: '4%'
    },
    //
    left: {
        flex: 1,
    },
    name: {
        fontFamily: 'roboto',
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
        marginHorizontal: '2%'
    },
    brand: {
        fontFamily: 'roboto',
        color: '#E9E9E9',
        marginLeft: '2%',
    },
    rate: {
        flexDirection: 'row',
        marginLeft: '2%',
        alignItems: 'center'
    },
    iconRate: {
        width: 30,
        height: 30,
        marginRight: '4%'
    },
    txtRate: {
        fontFamily: 'roboto',
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    },
    txtRateCount: {
        fontFamily: 'roboto',
        color: '#E9E9E9',
        marginLeft: '2%',
    },
    //
    right: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconAddress: {
        width: 40,
        height: 40,
        resizeMode: 'contain'
    },
    txtAddres: {
        color: 'white',
        fontSize: 18,

    },

    //---------------------
    bottom: {
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.2)',
        paddingBottom: '10%',
        marginBottom: 70
    },
    txtSize: {
        // fontSize: 20,
        backgroundColor: 'white',
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
        borderRadius: 10,
        marginHorizontal: '2%',
        paddingVertical: '2%'
    },



    boxPay: {
        position: 'absolute',
        width: '100%',
        height: 80,
        marginBottom: 70,
        flexDirection: 'row',
        backgroundColor: '#E9E9E9',
        bottom: -70
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