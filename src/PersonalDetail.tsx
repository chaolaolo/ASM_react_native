import { Image, KeyboardAvoidingView, Modal, Platform, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const PersonalDetail = () => {
    const navigation = useNavigation();
    const [passVisible, setpassVisible] = React.useState(false);
    const [repassVisible, setrepassVisible] = React.useState(false);

    const passPress = () => {
        setpassVisible(!passVisible);
    };
    const repassPress = () => {
        setrepassVisible(!repassVisible);
    };
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={st.container}>
            <SafeAreaView style={st.container}>
                <StatusBar translucent={false} backgroundColor='transparent' barStyle={'dark-content'} />
                <View style={st.head}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <Image source={require('./image/iconBack.png')} style={st.back} />
                    </Pressable>
                    <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'black', textAlign: 'center', flex: 1 }}>Personal Detail</Text>
                </View>
                <ScrollView style={{ backgroundColor: 'white' }}>
                    <Image style={st.imgPerson} source={{ uri: 'https://yt3.googleusercontent.com/v-fHSvLthvdRlrtXeEbWc1JtuKPa7yUeG668kRdxbX6XAxcw_rlhf8wjRGxht_oepo49SkwnXA=s900-c-k-c0x00ffffff-no-rj' }} />
                    <TextInput style={st.tip} placeholder='Name' editable={false} value='Chao lao Lo' />
                    <TextInput style={st.tip} placeholder='Email' editable={false} value='cll@gmail.com' />
                    <TextInput style={st.tip} placeholder='Password' textContentType='password' secureTextEntry={!passVisible} />
                    <Pressable onPress={passPress} style={{ justifyContent: 'center' }} >
                        <Image source={passVisible ? require('./image/iconHidePass.png') : require('./image/iconShowPass.png')} style={st.iconPass} />
                    </Pressable>
                    <TextInput style={st.tip} placeholder='Re-type password' textContentType='password' secureTextEntry={!repassVisible} />
                    <Pressable onPress={repassPress} style={{ justifyContent: 'center' }}>
                        <Image source={repassVisible ? require('./image/iconHidePass.png') : require('./image/iconShowPass.png')} style={st.iconPass} />
                    </Pressable>
                    <Pressable style={st.btnSave}>
                        <Text style={st.txtSave}>SAVE</Text>
                    </Pressable>
                </ScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default PersonalDetail

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
    imgPerson: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        alignSelf: 'center',
        borderRadius: 100,
        marginTop: 20,
        marginBottom: 40
    },
    tip: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'green',
        marginVertical: 6,
        marginHorizontal: '6%',
        paddingHorizontal: 10,
        paddingVertical: 16,
        color: 'black'
    },
    iconPass: {
        width: 30,
        height: 30,
        alignSelf: 'flex-end',
        position: 'absolute',
        right: 40,
        bottom: 20
    },
    btnSave: {
        borderRadius: 10,
        backgroundColor: '#34E0A1',
        marginTop: 30,
        marginBottom: 50,
        marginHorizontal: '6%',
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    txtSave: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
    }
})