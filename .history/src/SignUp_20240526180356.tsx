import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, Button, ImageBackground, TouchableOpacity, Platform, Pressable, KeyboardAvoidingView, ScrollView } from 'react-native'
import * as React from 'react'
const SignUp = ({ navigation }: any) => {
    return (
        // <KeyboardAvoidingView 
        // behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        // contentContainerStyle={{flexGrow:1,backgroundColor:'red'}}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: 'green' }}>
            <SafeAreaView style={st.container}>
                <Image source={require('./image/logo.png')} style={st.logo} />
                <Text style={{
                    fontFamily: 'monospace',
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
                        <TextInput style={st.tip}
                            placeholder='Password'
                            textContentType='password'
                        >
                        </TextInput>
                    </View>
                    <View style={st.box_info}>
                        <TextInput style={st.tip}
                            placeholder='Re-type password'
                            textContentType='password'
                        >
                        </TextInput>
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
                    <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat magnam excepturi vel iste harum numquam optio porro quaerat nisi? Quae, commodi? Itaque quis dicta nostrum nam, maiores aut recusandae ex?</Text>
                    <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat magnam excepturi vel iste harum numquam optio porro quaerat nisi? Quae, commodi? Itaque quis dicta nostrum nam, maiores aut recusandae ex?</Text>
                    <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat magnam excepturi vel iste harum numquam optio porro quaerat nisi? Quae, commodi? Itaque quis dicta nostrum nam, maiores aut recusandae ex?</Text>
                    <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat magnam excepturi vel iste harum numquam optio porro quaerat nisi? Quae, commodi? Itaque quis dicta nostrum nam, maiores aut recusandae ex?1000000000000000000000000000000000000000000</Text>
                    <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat magnam excepturi vel iste harum numquam optio porro quaerat nisi? Quae, commodi? Itaque quis dicta nostrum nam, maiores aut recusandae ex?1000000000000000000000000000000000000000000</Text>
                    <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat magnam excepturi vel iste harum numquam optio porro quaerat nisi? Quae, commodi? Itaque quis dicta nostrum nam, maiores aut recusandae ex?1111111111111111111111111111111111111111111</Text>
                </View>
        </SafeAreaView>
            </ScrollView>
        // </KeyboardAvoidingView>
    )
}

export default SignUp
const st = StyleSheet.create({
    container: {
        // flexGrow: 1,
        backgroundColor: '#DBE5FD',
        justifyContent: 'center',
        alignItems: 'center'
    },
    all: {
        backgroundColor: 'yellow',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: '50%',
        height: '20%',
        resizeMode: 'center',
    },
    welcome: {
        color: "black",
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'monospace',
    },
    ifno_container: {
        marginTop: '4%',
    },
    box_info: {
        // backgroundColor: 'darkgray',
        width: '80%',
        height: 60,
        marginVertical: 6,
        flexDirection: 'row',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
    },
    icon: {
        width: '10%',
        height: '55%',
        marginVertical: 'auto',
        margin: '3%',
    },
    tip: {
        // backgroundColor: 'darkgray',
        width: '100%',
        height: '80%',
        marginVertical: 'auto',
        marginRight: 8,
        fontSize: 16,
        padding: 10,
        // borderBottomWidth: 1,
        fontFamily: 'monospace',
        // borderBottomColor: 'gray'
    },
    btnSignIn: {
        height: '16%',
        marginTop: 14,
        backgroundColor: '#FF520D',
        padding: 10,
        borderRadius: 30,
    },
    t_signIn: {
        color: 'white',
        fontSize: 20,
        margin: 'auto',
        fontFamily: 'monospace',
        fontWeight: 'bold'
    },
    t_left: {
        flexDirection: 'row',
        marginHorizontal: 'auto',
    },
    t1: {
        color: 'black',
        fontFamily: 'monospace',
        fontSize: 16
    },
    t2: {
        color: '#FF520D',
        fontFamily: 'monospace',
        fontSize: 16
    },
});
