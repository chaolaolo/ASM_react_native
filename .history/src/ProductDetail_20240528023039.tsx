import { Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const ProductDetail = ({ route, navigation }: any) => {
    // const navigation=useNavigation();
    const { item } = route.params;

    return (
        <SafeAreaView style={st.container}>
            <StatusBar translucent={false} backgroundColor='transparent' barStyle={'dark-content'} />
            <View style={st.head}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Image source={require('./image/iconBack.png')} style={st.back} />
                </Pressable>
                <Pressable onPress={() => navigation.goBack()}>
                    <Image source={require('./image/iconLikeRed.png')} style={st.like} />
                </Pressable>
            </View>
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>

                <View style={st.top}>
                    <Image source={item.image} style={st.imgProduct} />
                    <View style={st.bottomImage}>
                        <View style={st.left}>
                            <Text style={st.name} numberOfLines={2}>{item.name}</Text>
                            <Text style={st.brand}>{item.brand}</Text>
                            <View style={st.rate}>
                                <Image source={require('./image/rateIcon.png')} style={st.iconRate} />
                                <Text style={st.txtRate}>{item.rate}</Text>
                            </View>
                        </View>
                        <View style={st.right}>
                            <Image source={require('./image/rateIcon.png')} style={st.like} />
                            <Text>{item.address}</Text>
                        </View>
                    </View>
                </View>
                <View style={st.bottom}>
                    <Text style={{ fontSize: 50 }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta illo ratione cum, ex vero commodi quae dolor corrupti, aspernatur maiores? Assumenda deserunt delectus sed laborum explicabo aut sunt eum.000000000000000</Text>
                    <Text style={{ fontSize: 50 }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta illo ratione cum, ex vero commodi quae dolor corrupti, aspernatur maiores? Assumenda deserunt delectus sed laborum explicabo aut sunt eum.000000000000000</Text>
                    <Text style={{ fontSize: 50 }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta illo ratione cum, ex vero commodi quae dolor corrupti, aspernatur maiores? Assumenda deserunt delectus sed laborum explicabo aut sunt eum.111111111111111</Text>

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
                        }}>1000</Text>
                    </View>
                </View>
                <Pressable style={st.pressPay}><Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Pay</Text></Pressable>
            </View>
        </SafeAreaView>
    )
}

export default ProductDetail

const st = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue'
    },
    head: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'brown',
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
    like: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 10,
        padding: 10,
    },
    top: {
        width: '100%',
        backgroundColor: 'blue'
    },
    bottom: {
        width: '100%',
        backgroundColor: 'orange',
    },
    imgProduct: {
        width: '100%',
        height: 480,
        resizeMode: 'cover'
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
    left: {
        flex: 1,
        backgroundColor: 'green',
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
        color: 'white',
        marginLeft: '2%'
    },

    rate: {
        flexDirection: 'row',
        marginLeft: '2%'
    },
    iconRate: {
        width: 50,
        height: 40,
    },
    txtrate: {

    },
    right: {
        flex: 1,
        backgroundColor: 'blue'
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