import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, Button, ImageBackground, TouchableOpacity, Platform, Pressable, KeyboardAvoidingView, ScrollView, StatusBar } from 'react-native'
import * as React from 'react'


const SignUp = ({ navigation }: any) => {
    return (
    <ImageBackground source={require('./image/background.png')} style={st.container}>
      <StatusBar translucent={true} backgroundColor='transparent' barStyle={'dark-content'}/>
    <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flexGrow: 1 }}>
            <SafeAreaView style={st.container}>
                <ScrollView contentContainerStyle={st.all}>
                    <Image source={require('./image/logo.png')} style={st.logo} />
                    <Text style={{
                        fontFamily: 'roboto',
                        marginVertical: 10,
                    }}>WELCOME! Register to continue</Text>
                    <View style={st.ifno_container}>
                        <View style={st.box_info}>
                            <TextInput style={st.tip}
                                placeholder='Name'
                                textContentType='emailAddress'
                                keyboardType='email-address'
                            >
                            </TextInput>
                        </View>
                        <View style={st.box_info}>
                            <TextInput style={st.tip}
                                placeholder='Email'
                                textContentType='password'
                            >
                            </TextInput>
                        </View>
                        <View style={st.box_info}>
                            <TextInput style={st.tip} placeholder='Password' textContentType='password' secureTextEntry={true} />
                            <Image style={st.iconPass} source={require('./image/iconShowPass.png')} />
                        </View>
                        <View style={st.box_info}>
                            <TextInput style={st.tip} placeholder='Re-type password' textContentType='password' secureTextEntry={true} />
                            <Image style={st.iconPass} source={require('./image/iconShowPass.png')} />
                        </View>
                        <TouchableOpacity style={st.btnSignIn}>
                            <Text style={st.t_signIn}>Register</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={st.t_left}>
                            <Text style={st.t1}>You have an account? </Text>
                            <Pressable onPress={() => { navigation.navigate('SignIn') }}>
                                <Text style={st.t2}>Sign In</Text>
                            </Pressable>
                        </View>
                    </View>

                </ScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView>
        </ImageBackground>
    )
}

export default SignUp
const st = StyleSheet.create({
    container: {
        flex: 1,
    },
    all: {
        alignItems: 'center',
        paddingBottom: 20,
        paddingTop: '20%',
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'center',
    },
    welcome: {
        color: "black",
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'roboto',
    },
    ifno_container: {
        marginTop: '4%',
    },
    box_info: {
        width: '80%',
        height: 60,
        marginVertical: 6,
        flexDirection: 'row',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
    },
    iconPass: {
        width: '8%',
        height: '40%',
        alignSelf: 'center',
        position: 'absolute',
        right: 10
    },
    tip: {
        width: '100%',
        marginVertical: 'auto',
        marginRight: 8,
        fontSize: 16,
        paddingVertical: 10,
        paddingLeft: 16,
        fontFamily: 'roboto',
    },
    btnSignIn: {
        height: 60,
        marginTop: 14,
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 30,
        marginVertical: '4%'
    },
    t_signIn: {
        color: 'white',
        fontSize: 20,
        margin: 'auto',
        fontFamily: 'roboto',
        fontWeight: 'bold',
    },
    t_left: {
        flexDirection: 'row',
        marginHorizontal: 'auto',
        marginBottom: '8%'
    },
    t1: {
        color: 'black',
        fontFamily: 'roboto',
        fontSize: 16
    },
    t2: {
        color: '#007AFF',
        fontFamily: 'roboto',
        fontSize: 16
    },
});
