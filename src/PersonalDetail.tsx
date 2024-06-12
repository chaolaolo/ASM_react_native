import { Alert, Image, KeyboardAvoidingView, Modal, Platform, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const PersonalDetail = () => {
    const navigation = useNavigation();
    const [passVisible, setpassVisible] = React.useState(false);
    const [repassVisible, setrepassVisible] = React.useState(false);
    const [avatar, setAvatar] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [avatarLoaded, setAvatarLoaded] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [newName, setNewName] = useState('');
    const [rePassword, setReNewPassword] = useState('');

    useEffect(() => {
        const getUserInfo = async () => {
            try {
                const userInfo = await AsyncStorage.getItem('user');
                if (userInfo !== null) {
                    const { avatar, name, email } = JSON.parse(userInfo);
                    setAvatar(avatar);
                    setName(name);
                    setEmail(email);
                    setAvatarLoaded(false);
                }
            } catch (error) {
                console.error('Error retrieving user info:', error);
            }
        };

        getUserInfo();
    }, []);

    const getUserId = async () => {
        try {
            const user = await AsyncStorage.getItem('user');
            if (user) {
                const userData = JSON.parse(user);
                return userData.id;
            }
        } catch (error) {
            console.error('Error getting user ID:', error);
        }
        return null;
    };

    const savePassword = async () => {
        if (newPassword.length == 0 && rePassword.length == 0) {
            Alert.alert('Lỗi', 'Vui lòng nhập mật khẩu mới');
            return;
        };
        if (newName.length == 0) {
            Alert.alert('Lỗi', 'Vui lòng nhập Họ và Tên của bạn');
            return;
        };
        if (newPassword.length == 0) {
            Alert.alert('Lỗi', 'Vui lòng nhập mật khẩu mới');
            return;
        };
        if (newPassword.length < 6) {
            Alert.alert('Lỗi', 'Mật khẩu ít nhất 6 kí tự');
            return;
        };
        if (rePassword.length == 0) {
            Alert.alert('Lỗi', 'Vui lòng xác nhận mật khẩu');
            return;
        };
        if (newPassword != rePassword) {
            Alert.alert('Lỗi', 'Mật khẩu không trùng khớp');
            return;
        };
        try {
            const userId = await getUserId();
            const response = await fetch(`https://665f14f81e9017dc16f2c14e.mockapi.io/Users/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    password: newPassword,
                    name: newName,
                }),
            });
            if (response.ok) {
                Alert.alert('Thành Công', 'Lưu thông tin thành công');
                const userInfo = await AsyncStorage.getItem('user');
                if (userInfo) {
                    const updatedUserInfo = {
                        ...JSON.parse(userInfo),
                        name: newName,
                        password: newPassword,
                    };
                    await AsyncStorage.setItem('user', JSON.stringify(updatedUserInfo));
                }
                setName(newName);
            } else {
                Alert.alert('Lỗi!', 'Có lỗi trong quá trình đổi thông tin');
            }
        } catch (error) {
            console.error('Error updating password:', error);
        }
    };


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
                    <Image style={st.imgPerson} source={avatarLoaded ? { uri: avatar } : require('./image/defaultAvatar.png')} />
                    <Pressable onPress={() => Alert.alert('Thông báo', 'Không thể đổi email!')}>
                        <TextInput style={[st.tip, { opacity: 0.6 }]} placeholder='Email' editable={false} value={email} />
                    </Pressable>
                    <TextInput style={st.tip} placeholder='Name' value={newName} onChangeText={setNewName} />
                    <TextInput style={st.tip} placeholder='New Password' textContentType='password' secureTextEntry={!passVisible} onChangeText={setNewPassword} />
                    <Pressable onPress={passPress} style={{ justifyContent: 'center' }} >
                        <Image source={passVisible ? require('./image/iconHidePass.png') : require('./image/iconShowPass.png')} style={st.iconPass} />
                    </Pressable>
                    <TextInput style={st.tip} placeholder='Re-type password' textContentType='password' secureTextEntry={!repassVisible} onChangeText={setReNewPassword} />
                    <Pressable onPress={repassPress} style={{ justifyContent: 'center' }}>
                        <Image source={repassVisible ? require('./image/iconHidePass.png') : require('./image/iconShowPass.png')} style={st.iconPass} />
                    </Pressable>
                    <Pressable style={st.btnSave} onPress={() => savePassword()}>
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