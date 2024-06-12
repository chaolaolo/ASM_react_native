import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, Button, ImageBackground, TouchableOpacity, Platform, Pressable, KeyboardAvoidingView, ScrollView, StatusBar, Alert } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions, useNavigation } from '@react-navigation/native';
import Home from './Home';
import ErrorModal from './ErrorModal';

const SignIn = ({ route }) => {
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [passVisible, setpassVisible] = useState(false);
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const [modalVisible, setModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [titleModal, setTitleModal] = useState('');

  const validateEmail = (email) => {
    const regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regEmail.test(String(email).toLowerCase());
  };

  const showError = (title, message) => {
    setTitleModal(title);
    setErrorMessage(message);
    setModalVisible(true);
  };

  const doSignIn = async () => {
    if (email.length == 0 && password.length == 0) {
      showError('Lỗi', 'Bạn chưa nhập email và mật khẩu!');
      return;
    };
    if (email.length == 0) {
      showError('Lỗi', 'Bạn chưa nhập email!');
      return;
    };
    if (!validateEmail(email) && password.length == 0) {
      showError('Lỗi', 'Sai định dạng email và chưa nhập mật khẩu!');
      return;
    };
    if (!validateEmail(email)) {
      showError('Lỗi', 'Email không hợp lệ!');
      return;
    };
    if (password.length == 0) {
      showError('Lỗi', 'Bạn chưa nhập mật khẩu!');
      return;
    };

    try {
      const response = await fetch('https://665f14f81e9017dc16f2c14e.mockapi.io/Users');
      const data = await response.json();

      const user = data.find((user) => user.email === email);

      if (!user) {
        showError('Lỗi', 'Email không tồn tại!');
        return;
      } else if (user.password !== password) {
        showError('Lỗi', 'Mật khẩu không đúng!');
        return;
      } else {
        await AsyncStorage.setItem('user', JSON.stringify(user));
        const userData = await AsyncStorage.getItem('user');
        console.log('User data:', JSON.parse(userData));
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          })
        );
      }
    } catch (error) {
      console.error('Error during login:', error);
      showError('Lỗi', 'Có lỗi xảy ra khi đăng nhập');
      return;
    } finally {
    }
  }


  const passPress = () => {
    setpassVisible(!passVisible);
  };
  return (
    <ImageBackground source={require('./image/background.png')} style={st.container}>
      <StatusBar translucent={true} backgroundColor='transparent' barStyle={'dark-content'} />
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flexGrow: 1 }}>
        <SafeAreaView style={st.container}>
          <ScrollView contentContainerStyle={st.all}>
            <Image source={require('./image/logo.png')} style={st.logo} />
            <Text style={{
              fontFamily: 'roboto',
              marginVertical: 10,
            }}>WELCOME! Login to continue</Text>
            <View style={st.ifno_container}>
              <View style={st.box_info}>
                <TextInput style={st.tip} placeholder='Enter email' textContentType='emailAddress' keyboardType='email-address' onChangeText={(txt) => { setemail(txt) }} />
              </View>
              <View style={st.box_info}>
                <TextInput style={st.tip} placeholder='Enter password' textContentType='password' secureTextEntry={!passVisible} onChangeText={(txt) => { setpassword(txt) }} />
                <Pressable onPress={passPress} style={{ justifyContent: 'center' }}>
                  <Image source={passVisible ? require('./image/iconHidePass.png') : require('./image/iconShowPass.png')} style={st.iconPass} />
                </Pressable>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CheckBox disabled={false}
                  value={toggleCheckBox}
                  onValueChange={(newValue) =>
                    setToggleCheckBox(newValue)} />
                <Text style={{ color: 'black' }}>Remember me?</Text>
              </View>

              <TouchableOpacity style={st.btnSignIn} onPress={() => doSignIn()}>
                {/* <TouchableOpacity style={st.btnSignIn} onPress={() => navigation.navigate('Home')}> */}
                <Text style={st.t_signIn}>Sign In</Text>
              </TouchableOpacity>
            </View>
            <View>
              <View style={st.t_left}>
                <Text style={st.t1}>Don't have an account? </Text>
                <Pressable onPress={() => { navigation.navigate('SignUp') }}>
                  <Text style={st.t2}>Sign Up</Text>
                </Pressable>
              </View>
              <View style={st.t_left}>
                <Text style={st.t1}>Forget password? </Text>
                <Text style={st.t2}>Reset</Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
      {modalVisible && <ErrorModal modalVisible={modalVisible} setModalVisible={setModalVisible} errorMessage={errorMessage} titleModal={titleModal} />}
    </ImageBackground>


  )
}

export default SignIn
const st = StyleSheet.create({
  container: {
    flex: 1,
  },
  all: {
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: '30%',
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
    fontWeight: 'bold'
  },
  t_left: {
    flexDirection: 'row',
    marginHorizontal: 'auto',
    marginBottom: '4%'
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