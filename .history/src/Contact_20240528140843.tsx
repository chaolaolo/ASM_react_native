import { Image, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Contact = () => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flexGrow: 1 }}>
            <SafeAreaView style={st.container}>
                <Pressable style={st.head}>
                    <Image source={require('./image/menuIcon.png')} style={st.person} />
                    <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'black' }}>Contact</Text>
                    <Image source={require('./image/personIcon.png')} style={st.person} />
                </Pressable>
                <View style={st.boxContact}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('./image/iconCall.png')} />
                        <Text>0987654321</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('./image/iconEmail.png')} />
                        <Text>timemaster@gmail.com</Text>
                    </View>
                </View>
                <Pressable style={st.send}>
                    <Image source={require('./image/iconSend.png')} />
                </Pressable>
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
        backgroundColor: 'blue',
        width: '80%',
        height: '40%',
        margin: 'auto'
    },
    send: {
        width: 50,
        height: 50,
        backgroundColor: 'brown',
margin:'5%'
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
})