import { Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const ProductDetail = ({ route }: any) => {
    const { item } = route.params;

    return (
        <SafeAreaView style={st.container}>
            <StatusBar translucent={true} backgroundColor='transparent' />
            <ScrollView style={{ flex: 1 }}>
                <Text>{item.name}</Text>



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
                    <Pressable style={st.pressPay}><Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Pay</Text></Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProductDetail

const st = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'red'
    },
    boxDetail: {

    },


    boxPay: {
        position:'absolute',
        width: '100%',
        height: 80,
        // marginBottom: 70,
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    leftPay: {
        // justifyContent: 'center',
        // paddingHorizontal: '5%',
        // marginVertical: '1%',
        // paddingVertical: '2%',
        flex: 1,
    },
    pressPay: {
        backgroundColor: '#2AB381',
        flex: 1,
        // borderRadius: 24,
        // alignItems: 'center',
        // justifyContent: 'center',
        // paddingHorizontal: '5%',
        // marginVertical: '3%',
        // marginHorizontal: '3%',
    },
})