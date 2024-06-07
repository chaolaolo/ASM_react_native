import { Image, Modal, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const Setting = () => {
    const navigation = useNavigation();
    const [showLogoutModal, setshowLogoutModal] = useState(false);

    return (
        <SafeAreaView style={st.container}>
            <StatusBar translucent={false} backgroundColor='transparent' barStyle={'dark-content'} />
            <View style={st.head}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Image source={require('./image/iconBack.png')} style={st.back} />
                </Pressable>
                <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'black', textAlign: 'center', flex: 1 }}>Settings</Text>
            </View>
            <ScrollView style={{ backgroundColor: 'white' }}>
                <Pressable style={st.settingItem} onPress={() => navigation.navigate('PersonalDetail')}>
                    <Image style={st.iconLeft} source={require('./greenIcon/iconPersonGreen.png')} />
                    <Text style={st.txtTitle}>Personal Detail</Text>
                    <Image style={st.iconGoto} source={require('./greenIcon/iconBack.png')} />
                </Pressable>
                <Pressable style={st.settingItem} onPress={() => navigation.navigate('Payment')}>
                    <Image style={st.iconLeft} source={require('./greenIcon/iconPayMethodGreen.png')} />
                    <Text style={st.txtTitle}>Payment Method</Text>
                    <Image style={st.iconGoto} source={require('./greenIcon/iconBack.png')} />
                </Pressable>
                <Pressable style={st.settingItem} onPress={() => navigation.navigate('Contact')}>
                    <Image style={st.iconLeft} source={require('./greenIcon/iconContactGreen.png')} />
                    <Text style={st.txtTitle}>Contact us</Text>
                    <Image style={st.iconGoto} source={require('./greenIcon/iconBack.png')} />
                </Pressable>
                 <Pressable style={st.settingItem}>
                    <Image style={st.iconLeft} source={require('./greenIcon/iconAddressGreen.png')} />
                    <Text style={st.txtTitle}>Address</Text>
                    <Image style={st.iconGoto} source={require('./greenIcon/iconBack.png')} />
                </Pressable>
                <Pressable style={st.settingItem}>
                    <Image style={st.iconLeft} source={require('./greenIcon/iconHistoryGreen.png')} />
                    <Text style={st.txtTitle}>History</Text>
                    <Image style={st.iconGoto} source={require('./greenIcon/iconBack.png')} />
                </Pressable>
                <Pressable style={st.settingItem}>
                    <Image style={st.iconLeft} source={require('./greenIcon/iconAbout.png')} />
                    <Text style={st.txtTitle}>About</Text>
                    <Image style={st.iconGoto} source={require('./greenIcon/iconBack.png')} />
                </Pressable>
                <Pressable style={st.settingItem}>
                    <Image style={st.iconLeft} source={require('./greenIcon/iconHelpGreen.png')} />
                    <Text style={st.txtTitle}>Help</Text>
                    <Image style={st.iconGoto} source={require('./greenIcon/iconBack.png')} />
                </Pressable>
                <Pressable style={st.settingItem} onPress={() => setshowLogoutModal(true)}>
                    <Image style={st.iconLeft} source={require('./greenIcon/iconLogoutGreen.png')} />
                    <Text style={st.txtTitle}>Log Out</Text>
                </Pressable>
            </ScrollView>
            <Modal animationType='fade'
                transparent={true}
                visible={showLogoutModal}
                onRequestClose={() => setshowLogoutModal(false)}
            >
                <View style={st.containerModal}>
                    <View style={st.boxModal}>
                        <Text style={st.txtLogout}>Are you sure want to log out?</Text>
                        <View style={st.boxButton}>
                            <TouchableOpacity onPress={() => setshowLogoutModal(false)} style={st.btnNo}><Text style={st.txtSend}>No</Text></TouchableOpacity>
                            <TouchableOpacity style={st.btnYes}><Text style={st.txtSend}>Yes</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

export default Setting

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
    },
    back: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 10,
        resizeMode: 'center',
    },
    settingItem: {
        width: '100%',
        backgroundColor: '#F8F8F8',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '6%',
        paddingVertical: '3%',
        marginVertical: '1%'
    },
    iconLeft: {
        width: 30,
        height: 30,
    },
    txtTitle: {
        flex: 1,
        fontSize: 18,
        color: 'black',
        fontWeight: '500',
        marginHorizontal: '5%'
    },
    iconGoto: {
        // backgroundColor: 'rgba(0,0,0,0.3)',
        borderWidth: 0.4,
        borderColor: 'rgba(0,0,0,0.3)',
        transform: [{ scaleX: -1 }],
        width: 30,
        height: 30,
        borderRadius: 10,
        resizeMode: 'center',
    },

    containerModal: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    boxModal: {
        marginVertical: 'auto',
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
    txtLogout: {
        width: '100%',
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: '10%'
    },
    boxButton: {
        flexDirection: 'row',
    },
    btnNo: {
        flex: 1,
        borderColor: '#2AB381',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 10,
        marginHorizontal: 10,
        paddingVertical: '4%'
    },
    btnYes: {
        flex: 1,
        backgroundColor: '#2AB381',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 10,
        marginHorizontal: 10,
        paddingVertical: '4%'
    },
    txtSend: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
})