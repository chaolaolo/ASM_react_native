import { Alert, Image, KeyboardAvoidingView, Modal, Platform, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Header from './Header';

const Contact = () => {
    const navigation = useNavigation();
    const [showSendModal, setshowSendModal] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');

    const SendContact = () => {
        let err = false;
        if (name.length == 0 && email.length == 0 && content.length == 0) {
            Alert.alert('Lỗi', 'Hãy nhập thông tin của bạn')
            err = true;
            return;
        };
        if (name.length == 0) {
            Alert.alert('Lỗi', 'Hãy nhập họ tên của bạn')
            err = true;
            return;
        };
        if (email.length == 0) {
            Alert.alert('Lỗi', 'Hãy nhập email của bạn')
            err = true;
            return;
        };
        if (content.length == 0) {
            Alert.alert('Lỗi', 'Hãy nhập tin nhắn bạn muốn gửi cho chúng tôi!')
            err = true;
            return;
        };
        if (!err) {
            Alert.alert('Thành công', 'Cảm ơn bạn đã liên lạc với chúng tôi.');
            setshowSendModal(false);
        };

    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flexGrow: 1 }}>
            <Header titleHeader='Contact' />
            <SafeAreaView style={st.container}>
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

                {!showSendModal && (
                    <Pressable onPress={() => setshowSendModal(true)} style={st.boxSend}>
                        <Image style={st.imgSend} source={require('./image/iconSend.png')} />
                    </Pressable>
                )}
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
                                <TouchableOpacity onPress={() => setshowSendModal(false)} style={st.boxExit}>
                                    <Image source={require('./image/iconExitGreen.png')} style={st.iconExit} />
                                </TouchableOpacity>
                                <TextInput style={st.tipInfor} placeholder='Your name' onChangeText={setName}></TextInput>
                                <TextInput style={st.tipInfor} placeholder='Your email' onChangeText={setEmail}></TextInput>
                                {/* <TextInput style={st.tipInfor} placeholder='Your phone number'></TextInput> */}
                                <TextInput style={st.tipInfor} placeholder='Your address'></TextInput>
                                <TextInput style={st.tipInfor} placeholder='Type your message' multiline={true} numberOfLines={4} onChangeText={setContent}></TextInput>
                                <TouchableOpacity style={st.btnSend} onPress={() => SendContact()}><Text style={st.txtSend}>SEND</Text></TouchableOpacity>
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
        backgroundColor: 'white'
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
    containerModal: {
        flex: 1,
    },
    boxModal: {
        marginVertical: '26%',
        alignSelf: 'center',
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
        textAlign: 'left',
        color: '#2AB381',
        fontSize: 26,
        fontWeight: 'bold',
        marginVertical: '6%'
    },
    boxExit: {
        position: 'absolute',
        alignSelf: 'flex-end',
        marginTop: '8%',
    },
    iconExit: {
        margin: '5%',
        width: 18,
        height: 18,

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