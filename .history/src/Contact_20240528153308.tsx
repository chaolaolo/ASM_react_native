import { Image, KeyboardAvoidingView, Modal, Platform, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';

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
                    <GestureHandlerRootView>
                        <ScrollView style={st.containerModal}>
                                <View style={st.boxModal}>
                                    <Text style={st.txtTitleSend}>CONTACT US</Text>
                                    <Image source={require('./image/iconCall.png')} style={{width:30,height:30}}/>
                                    <TextInput style={st.tipInfor} placeholder='Your name'></TextInput>
                                    <TextInput style={st.tipInfor} placeholder='Your email'></TextInput>
                                    <TextInput style={st.tipInfor} placeholder='Your phone number'></TextInput>
                                    <TextInput style={st.tipInfor} placeholder='Your address'></TextInput>
                                    <TextInput style={st.tipInfor} placeholder='Type your message' multiline={true} numberOfLines={4}></TextInput>
                                    <TouchableOpacity style={st.btnSend}><Text style={st.txtSend}>SEND</Text></TouchableOpacity>
                                </View>
                        </ScrollView>
                    </GestureHandlerRootView>
                </Modal>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default Contact

const st = StyleSheet.create({
    container: {
        flex: 1,
    },
    boxContact: {
        width: '80%',
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
    },
    boxModal: {
        marginVertical: '26%',
        alignSelf:'center',
        backgroundColor: 'white',
        borderRadius: 20,
        width: '80%',
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    txtTitleSend: {
        width: '100%',
        textAlign: 'center',
        color: '#2AB381',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: '6%'
    },
    tipInfor: {
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: 'gray',
        marginVertical: '2%',
        paddingLeft: 10
    },
    btnSend: {
        width: '100%',
        height: 50,
        marginVertical: '10%',
        backgroundColor: '#2AB381',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    txtSend: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },

})