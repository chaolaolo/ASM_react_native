import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

const ProductDetail = ({ route }: any) => {
    const { item } = route.params;
    
    return (
        <SafeAreaView style={st.container}>
            <StatusBar translucent={true} backgroundColor='transparent' />
            <ScrollView style={st.boxDetail}>

            </ScrollView>
            <View style={st.boxPay}>
                <View style={st.leftPay}>
                    <Text style={{ color: 'white' }}>Price</Text>
                    <View style={{ flexDirection: 'row', flex: 1, }}>
                        <Text style={{ color: 'orange', fontSize: 24, marginRight: 4 }}>$</Text>
                        <Text style={{
                            fontSize: 24,
                            fontWeight: 'bold',
                            color: 'white'
                        }}>{item.Price}</Text>
                    </View>
                </View>
                <Pressable style={st.pressPay}><Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Pay</Text></Pressable>
            </View>
            <Text>{item.name}</Text>
        </SafeAreaView>
    )
}

export default ProductDetail

const st = StyleSheet.create({
    container: {

    },
    boxDetail: {

    },


    boxPay: {
        width: '100%',
        height: 80,
        marginBottom: 70,
        flexDirection: 'row',
        borderBottomWidth: 1,
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    leftPay: {
        justifyContent: 'center',
        marginHorizontal: '4.5%',
        marginVertical: '1%',
        paddingVertical: '2%',
    },
    pressPay: {
        backgroundColor: '#D17842',
        flex: 1,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: '4.5%',
        marginVertical: '1%'
    },
})