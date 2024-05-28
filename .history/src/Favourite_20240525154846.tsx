import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, FlatList, Dimensions, ScrollView, Pressable, Touchable } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { width, height } = Dimensions.get('window');

const Prod1 = [
    { id: '1', brand: 'Rolex', name: 'item1 Chao lao lo Chao Lao Lo', price: '100$', image: require('./image/prod1.png') },
    { id: '2', brand: 'Rolex', name: 'item2', price: '100$', image: require('./image/prod1.png') },
    { id: '3', brand: 'Rolex', name: 'item3', price: '100$', image: require('./image/prod1.png') },
    { id: '4', brand: 'Rolex', name: 'item4', price: '100$', image: require('./image/prod1.png') },
    { id: '5', brand: 'Rolex', name: 'item5', price: '100$', image: require('./image/prod1.png') },
    { id: '6', brand: 'Rolex', name: 'item1', price: '100$', image: require('./image/prod1.png') },
    { id: '7', brand: 'Rolex', name: 'item2', price: '100$', image: require('./image/prod1.png') },
    { id: '8', brand: 'Rolex', name: 'item3', price: '100$', image: require('./image/prod1.png') },
    { id: '9', brand: 'Rolex', name: 'item4', price: '100$', image: require('./image/prod1.png') },
    { id: '10', brand: 'Rolex', name: 'item10', price: '100$', image: require('./image/prod1.png') },
];

const Product = ({ brand, name, price, image }: any) => (
    <View style={st.itemProduct}>
        <View style={st.Left}>
            <Image source={image} style={st.imageProduct} />
            <TouchableOpacity style={st.like}><Image source={require('./image/iconLikeWhite.png')} style={st.likeIcon} /></TouchableOpacity>
        </View>
        <View style={st.Right}>
            <Text style={st.brandProduct}>{brand}</Text>
            <Text style={st.titleProduct} numberOfLines={1}>{name}</Text>
            <Text style={st.priceProduct}>{price}</Text>
            <TouchableOpacity style={st.AddToCart}><Image source={require('./image/plusIcon.png')} style={st.plusIcon} /></TouchableOpacity>
        </View>

    </View>
);
const renderProd = ({ item }: any) => <Product brand={item.brand} name={item.name} price={item.price} image={item.image} />;

const Favourite = ({ navigation }: any) => {
    return (
        <SafeAreaView style={st.container}>
            <Pressable style={st.head}>
                <Image source={require('./image/menuIcon.png')} style={st.person} />
                <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'black' }}>Favourite</Text>
                <Image source={require('./image/personIcon.png')} style={st.person} />
            </Pressable>
            <FlatList
                data={Prod1}
                renderItem={renderProd}
                keyExtractor={item => item.id}
                style={st.prod}
                contentContainerStyle={{ paddingBottom: 100 }}
            />
        </SafeAreaView>

    )
}

export default Favourite
const st = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBE5FD'
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
    prod: {
        paddingLeft: '4%',
        flex: 1,
        backgroundColor: 'orange',
    },
    itemProduct: {
        borderRadius: 20,
        width: width * 0.9,
        height: height * 0.16,
        marginVertical: '2%',
        backgroundColor: '#545A62',
        flexDirection:'row'
    },
    Left: {
      flex:1,
      justifyContent:'center'
    },
    Right: {
      flex:1,
      justifyContent:'center',
      alignContent:'flex-end'
       
    },
    imageProduct: {
        width: '90%',
        height: '90%',
        resizeMode: 'cover',
        borderRadius: 16,
        alignSelf: 'center'
    },
    brandProduct: {
        marginTop: '1%',
        marginHorizontal: '8%',
        fontSize: 12,
        color: 'white',
        fontFamily: 'roboto',
        fontWeight: 'bold'
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
        fontFamily: 'serif',
        marginHorizontal: '8%',
        fontWeight: 'bold',
        color: 'white'
    },
    AddToCart: {
        backgroundColor: '#D17842',
        padding: '2%',
        alignSelf: 'flex-end',
        marginTop: '-14%',
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
})