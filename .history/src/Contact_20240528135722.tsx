import { Image, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Contact = () => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flexGrow: 1 }}>
            <SafeAreaView style={st.container}>
                <Pressable style={st.head}>
                    <Image source={require('./image/menuIcon.png')} style={st.person} />
                    <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'black' }}>Home</Text>
                    <Image source={require('./image/personIcon.png')} style={st.person} />
                </Pressable>
                <View>
                    <View>
                        <Image source={require('./image/iconCall.png')} />
                        <Text>0987654321</Text>
                    </View>
                    <View>
                        <Image source={require('./image/iconEmail.png')} />
                        <Text>timemaster@gmail.com</Text>
                    </View>
                </View>
                <Pressable>
                    <Image source={require('./image/iconSend.png')} />
                </Pressable>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default Contact

const st = StyleSheet.create({
    container: {
        // backgroundColor: 'blue',
        flex: 1
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