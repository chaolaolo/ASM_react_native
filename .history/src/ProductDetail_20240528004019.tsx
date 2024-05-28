import { Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const ProductDetail = ({ route }: any) => {
    const { item } = route.params;

    return (
        <SafeAreaView style={st.container}>
            <StatusBar translucent={false} />
            <Pressable style={st.head}>
                <Image source={require('./image/iconBack.png')} style={st.back} />
                <Image source={require('./image/iconLikeRed.png')} style={st.like} />
            </Pressable>
            <StatusBar translucent={true} backgroundColor='transparent' />
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                <Text>{item.name}</Text>
                <View style={st.top}>

                </View>
                <View style={st.bottom}>

                </View>
                <Text style={{ fontSize: 50 }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta illo ratione cum, ex vero commodi quae dolor corrupti, aspernatur maiores? Assumenda deserunt delectus sed laborum explicabo aut sunt eum.000000000000000</Text>
                <Text style={{ fontSize: 50 }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta illo ratione cum, ex vero commodi quae dolor corrupti, aspernatur maiores? Assumenda deserunt delectus sed laborum explicabo aut sunt eum.000000000000000</Text>
                <Text style={{ fontSize: 50 }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta illo ratione cum, ex vero commodi quae dolor corrupti, aspernatur maiores? Assumenda deserunt delectus sed laborum explicabo aut sunt eum.111111111111111</Text>
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
        position: 'absolute',
        backgroundColor: 'brown',
        marginVertical: '4%'
    },
    back: {
        width: 40,
        height: 40,
        backgroundColor: '#E9E9E9',
        margin: '5%',
        borderRadius: 10,
        padding:10
    },
    like: {
        width: 40,
        height: 40,
        backgroundColor: '#E9E9E9',
        margin: '5%',
        borderRadius: 10,
        padding:10
    },
    top: {
        width: '100%',
        backgroundColor: 'blue'
    },
    bottom: {
        width: '100%',
        backgroundColor: 'orange'
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