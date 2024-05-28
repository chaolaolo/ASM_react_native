import { Image, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient';

const Payment = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={st.container}>
            <StatusBar translucent={false} backgroundColor='transparent' barStyle={'dark-content'} />
            <View style={st.head}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Image source={require('./image/iconBack.png')} style={st.back} />
                </Pressable>
                <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'black', textAlign: 'center', flex: 1 }}>Home</Text>
            </View>
            <ScrollView>
                <View style={st.boxCreditCard}>
                    <Text style={st.titleCreditCard}>Credit Card</Text>
                    {/* <View style={st.boxCard}> */}
                    <LinearGradient colors={['black', 'green']} style={st.boxCard}>
                        <View style={st.topCard}>
                            <Image source={require('./image/iconVisa.png')} />
                            <Image source={require('./image/iconChipCard.png')} />
                        </View>
                        <Text st={st.cardNumber}>3 4 2 1  4 5 0 9  8 9 2 8 3  8 8 3 2</Text>
                        <View style={st.bottomCard}>
                            <View style={st.leftCard}>

                            </View>
                            <View style={st.rightCard}>

                            </View>
                        </View>
                    </LinearGradient>
                    {/* </View> */}
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

export default Payment

const st = StyleSheet.create({
    container: {
        flex: 1,
    },
    head: {
        width: '100%',
        paddingVertical: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 1,
        paddingHorizontal: '5%',
        // marginVertical: '5%',
        // backgroundColor:'red'
    },
    back: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 10,
        resizeMode: 'center',
    },
    boxCreditCard: {
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'green',
        width: '90%',
        height: 300,
        alignSelf: 'center',
        marginTop: 10
    },
    titleCreditCard: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginVertical: '2%',
        marginHorizontal: '3%'
    },
    boxCard: {
        borderRadius: 20,
        borderWidth: 2,
        // borderColor: 'green',
        flex: 1,
        marginBottom: '2%',
        marginHorizontal: '3%'
    },
    topCard: {
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:'2%',
        paddingTop:'2%'
    },
    cardNumber: {},
    bottomCard: {},
    leftCard: {},
    rightCard: {},




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