import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, FlatList, Dimensions, ScrollView, Pressable, Touchable } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');
const Favourite = () => {

    const Prod1 = [
        { id: '1', brand: 'Rolex', name: 'Watch 1', size: ['130mm', '145mm', '150mm', '160mm'], price: '100', image: require('./image/prod4.png'), rate: 5, address: 'Ha Noi', rateCount: 1290 },
        { id: '2', brand: 'Rolex', name: 'Watch 2', size: ['130mm', '145mm', '150mm', '160mm'], price: '100', image: require('./image/prod3.png'), rate: 5, address: 'Ha Noi', rateCount: 423 },
        { id: '3', brand: 'Rolex', name: 'Watch 3', size: ['130mm', '145mm', '150mm', '160mm'], price: '100', image: require('./image/prod2.png'), rate: 4, address: 'HCM', rateCount: 233 },
        { id: '4', brand: 'Rolex', name: 'Watch 4', size: ['130mm', '145mm', '150mm', '160mm'], price: '100', image: require('./image/prod3.png'), rate: 4.2, address: 'Da Nang', rateCount: 5422 },
        { id: '5', brand: 'Rolex', name: 'Watch 5', size: ['130mm', '145mm', '150mm', '160mm'], price: '100', image: require('./image/prod4.png'), rate: 4.5, address: 'Lao Cai', rateCount: 32 },
        { id: '6', brand: 'Rolex', name: 'Watch 6', size: ['130mm', '145mm', '150mm', '160mm'], price: '100', image: require('./image/prod3.png'), rate: 4.1, address: 'Tp. Hue', rateCount: 43 },
        { id: '7', brand: 'Rolex', name: 'Watch 7', size: ['130mm', '145mm', '150mm', '160mm'], price: '100', image: require('./image/prod2.png'), rate: 3.5, address: 'Hai Phong', rateCount: 234 },
        { id: '8', brand: 'Rolex', name: 'Watch 8', size: ['130mm', '145mm', '150mm', '160mm'], price: '100', image: require('./image/prod1.png'), rate: 4.5, address: 'Ha Noi', rateCount: 5432 },
        { id: '9', brand: 'Rolex', name: 'Watch 9', size: ['130mm', '145mm', '150mm', '160mm'], price: '100', image: require('./image/prod3.png'), rate: 5, address: 'Ca Mau', rateCount: 142 },
        { id: '10', brand: 'Rolex', name: 'Watch 10', size: ['130mm', '145mm', '150mm', '160mm'], price: '100', image: require('./image/prod4.png'), rate: 5, address: 'Ha Noi', rateCount: 122 },
    ];
    const navigation = useNavigation();

    const Product = ({ brand, name, price, image }: any) => (
        <View style={st.itemProduct}>
            <View style={st.Left}>
                <Image source={image} style={st.imageProduct} />
                <TouchableOpacity style={st.like}><Image source={require('./image/iconLikeRed.png')} style={st.likeIcon} /></TouchableOpacity>
            </View>
            <View style={st.Right}>
                <Text style={st.brandProduct}>{brand}</Text>
                <Text style={st.titleProduct} numberOfLines={2}>{name}</Text>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ color: 'orange', fontSize: 20, marginRight: 4 }}>$</Text>
                    <Text style={st.priceProduct}>{price}</Text>
                </View>
                <TouchableOpacity style={st.AddToCart}><Text style={st.txtAddToCart}>Add To Cart</Text></TouchableOpacity>
            </View>

        </View>
    );
    const renderProd = ({ item }: any) => {
        return (
            <Pressable onPress={() => navigation.navigate('ProductDetail', { item })}>
                <View style={st.itemProduct}>
                    <View style={st.Left}>
                        <Image source={item.image} style={st.imageProduct} />
                        <TouchableOpacity style={st.like}><Image source={require('./image/iconLikeRed.png')} style={st.likeIcon} /></TouchableOpacity>
                    </View>
                    <View style={st.Right}>
                        <Text style={st.brandProduct}>{item.brand}</Text>
                        <Text style={st.titleProduct} numberOfLines={2}>{item.name}</Text>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ color: 'orange', fontSize: 20, marginRight: 4 }}>$</Text>
                            <Text style={st.priceProduct}>{item.price}</Text>
                        </View>
                        <TouchableOpacity style={st.AddToCart}><Text style={st.txtAddToCart}>Add To Cart</Text></TouchableOpacity>
                    </View>

                </View>
            </Pressable>
        )
    }
    return (
        <SafeAreaView style={st.container}>
            <View style={st.head}>
                <Pressable onPress={()=>navigation.navigate('Setting')}>
                    <Image source={require('./image/iconSetting.png')} style={st.person} />
                </Pressable>
                <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'black' }}>Home</Text>
                <Pressable>
                    <Image source={require('./image/personIcon.png')} style={st.person} />
                </Pressable>
            </View>
            <FlatList
                data={Prod1}
                renderItem={renderProd}
                keyExtractor={item => item.id}
                style={st.prod}
                contentContainerStyle={{ flexGrow: 1, paddingBottom: '20%',backgroundColor: 'white',paddingLeft:'4%' }}
            />
        </SafeAreaView>

    )
}

export default Favourite
const st = StyleSheet.create({
    container: {
        flex: 1,
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '5%',
        paddingVertical: '3%'
    },
    person: {
        width: 50,
        height: 50,
        backgroundColor: '#E9E9E9',
        borderRadius: 50,
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
        padding: '-3%',
        borderRadius: 8,
        marginLeft: '8%',
        marginTop: '7%',
        position: 'absolute',
        zIndex: 4
    },
    likeIcon: {
        width: 34,
        height: 34,
        resizeMode: 'contain',
        opacity: 1,
    }
})