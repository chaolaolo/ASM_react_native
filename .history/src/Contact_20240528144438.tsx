import { Image, KeyboardAvoidingView, Modal, Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Contact = () => {
    const [showSendModal, setshowSendModal] = useState(false);
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flexGrow: 1 }}>
            <SafeAreaView style={st.container}>
                <Pressable style={st.head}>
                    <Image source={require('./image/menuIcon.png')} style={st.person} />
                    <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'black' }}>Contact</Text>
                    <Image source={require('./image/personIcon.png')} style={st.person} />
                </Pressable>
                <View style={st.boxContact}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '4%' }}>
                        <Image style={st.imgContact} source={require('./image/iconCall.png')} />
                        <Text style={st.txtContact}>0987654321</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={st.imgContact} source={require('./image/iconEmail.png')} />
                        <Text style={st.txtContact}>timemaster@gmail.com</Text>
                    </View>
                </View>
                <Pressable onPress={() => setshowSendModal(true)} style={st.boxSend}>
                    <Image style={st.imgSend} source={require('./image/iconSend.png')} />
                </Pressable>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={showSendModal}
                    onRequestClose={() => setshowSendModal(false)}
                >
                    <View style={st.containerModal}>
                    <View style={st.boxModal}>
<Text style={st.txtTitleSend}>Contact us</Text>
                    </View>
                    </View>
                </Modal>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default Contact

const st = StyleSheet.create({
    container: {
        // backgroundColor: 'red',
        flex: 1,
    },
    boxContact: {
        // backgroundColor: 'blue',
        width: '80%',
        // height: '40%',
        margin: 'auto'
    },
    imgContact: {
        width: 40,
        height: 40,
        marginHorizontal: '4%'
    },
    txtContact: {
        fontSize: 20,
        color: 'black'
    },
    boxSend: {
        width: 80,
        height: 80,
        backgroundColor: '#4A4863',
        marginBottom: '30%',
        marginRight: '10%',
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        shadowOffset: {
            width: 0,
            height: -20
        },
        shadowColor: 'green',
        elevation: 10
    },
    imgSend: {
        width: 60,
    },

    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    person: {
        width: 50,
        height: 50,
        backgroundColor: '#E9E9E9',
        margin: '5%',
        borderRadius: 50,
    },

    containerModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor:'red'
    },
    boxModal:{
        margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '80%',
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    },
})