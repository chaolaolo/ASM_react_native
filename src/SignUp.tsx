import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, Button, ImageBackground, TouchableOpacity, Platform, Pressable, KeyboardAvoidingView, ScrollView, StatusBar, Alert } from 'react-native'
import React, { useState } from 'react'
import ErrorModal from './ErrorModal';


const SignUp = ({ navigation }: any) => {
    const [passVisible, setpassVisible] = useState(false);
    const [repassVisible, setrepassVisible] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [modalVisible, setModalVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [titleModal, setTitleModal] = useState('');

    const passPress = () => {
        setpassVisible(!passVisible);
    };
    const repassPress = () => {
        setrepassVisible(!repassVisible);
    };

    const validateEmail = (email) => {
        const regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regEmail.test(String(email).toLowerCase());
    };

    const showError = (title, message) => {
        setTitleModal(title);
        setErrorMessage(message);
        setModalVisible(true);
    };
    const validate = () => {
        if (name.length == 0 && email.length == 0 && password.length == 0 && confirmPassword.length == 0) {
            showError('Lỗi', 'Vui lòng nhập thông tin!');
            return;
        };
        if (name.length == 0) {
            showError('Lỗi', 'Bạn chưa nhập tên!');
            return;
        };
        if (email.length == 0) {
            showError('Lỗi', 'Bạn chưa nhập email!');
            return;
        };
        if (!validateEmail(email)) {
            showError('Lỗi', 'Email không đúng định dạng!');
            return;
        };
        if (password.length == 0) {
            showError('Lỗi', 'Bạn chưa nhập mật khẩu!');
            return;
        };
        if (confirmPassword.length == 0) {
            showError('Lỗi', 'Bạn chưa xác nhận mật khẩu!');
            return;
        };
        if (password.length < 6) {
            showError('Lỗi', 'Mật khẩu ít nhất phải 6 ký tự!');
            return;
        }
        if (password !== confirmPassword) {
            showError('Lỗi', 'Mật khẩu không trùng khớp!');
            return;
        }
        return true;
    };

    const doRegister = async () => {
        if (!validate()) {
            return;
        }

        try {
            //check nếu email đã tồn tại
            const usersResponse = await fetch('https://665f14f81e9017dc16f2c14e.mockapi.io/Users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!usersResponse.ok) {
                showError('Lỗi', 'Có lỗi xảy ra khi kiểm tra email!');
                return;
            }
            const users = await usersResponse.json();
            const existingUser = users.find(user => user.email === email);

            if (existingUser) {
                showError('Lỗi', 'Email đã tồn tại!');
                return;
            }
            //đang ký
            const response = await fetch('https://665f14f81e9017dc16f2c14e.mockapi.io/Users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            });

            if (response.ok) {
                // setTitleModal('Chúc mừng');
                // setErrorMessage('Bạn đã tạo tài khoản thành công!');
                // setModalVisible(true);
                Alert.alert('Chúc mừng', 'Bạn đã tạo tài khoản thành công!')
                // { text: 'ok', onPress: () => navigation.navigate('SignIn', { email, password }) }
                navigation.navigate('SignIn', { email, password });
                return;
            } else {
                showError('Lỗi', 'Lỗi tạo tài khoản!');
                return;
            }
        } catch (error) {
            showError('Lỗi', 'Có lỗi xảy ra khi tạo tài khoản!');
            return;
        }
    };


    return (
        <ImageBackground source={require('./image/background.png')} style={st.container}>
            <StatusBar translucent={true} backgroundColor='transparent' barStyle={'dark-content'} />
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
                                    value={name}
                                    onChangeText={setName}
                                >
                                </TextInput>
                            </View>
                            <View style={st.box_info}>
                                <TextInput style={st.tip}
                                    placeholder='Email'
                                    value={email}
                                    onChangeText={setEmail}
                                    keyboardType="email-address"
                                >
                                </TextInput>
                            </View>
                            <View style={st.box_info}>
                                <TextInput
                                    style={st.tip}
                                    placeholder='Enter password'
                                    value={password}
                                    onChangeText={setPassword}
                                    secureTextEntry={!passVisible} />
                                <Pressable onPress={passPress} style={{ justifyContent: 'center' }}>
                                    <Image source={passVisible ? require('./image/iconHidePass.png') : require('./image/iconShowPass.png')} style={st.iconPass} />
                                </Pressable>
                            </View>
                            <View style={st.box_info}>
                                <TextInput
                                    style={st.tip}
                                    placeholder='Enter password'
                                    value={confirmPassword}
                                    onChangeText={setConfirmPassword}
                                    secureTextEntry={!repassVisible} />
                                <Pressable onPress={repassPress} style={{ justifyContent: 'center' }}>
                                    <Image source={repassVisible ? require('./image/iconHidePass.png') : require('./image/iconShowPass.png')} style={st.iconPass} />
                                </Pressable>
                            </View>
                            <TouchableOpacity style={st.btnSignIn} onPress={() => doRegister()}>
                                <Text style={st.t_signIn}>Register</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <View style={st.t_left}>
                                <Text style={st.t1}>You have an account? </Text>
                                <Pressable onPress={() => navigation.navigate('SignIn')}>
                                    <Text style={st.t2}>Sign In</Text>
                                </Pressable>
                            </View>
                        </View>

                    </ScrollView>
                </SafeAreaView>
            </KeyboardAvoidingView>
            {modalVisible && <ErrorModal modalVisible={modalVisible} setModalVisible={setModalVisible} errorMessage={errorMessage} titleModal={titleModal} />}
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
        width: 30,
        height: 30,
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
