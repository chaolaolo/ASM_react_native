import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, Button, ImageBackground, TouchableOpacity, Platform, Pressable, KeyboardAvoidingView, ScrollView, StatusBar, Alert } from 'react-native'
import * as React from 'react'
import CheckBox from '@react-native-community/checkbox'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Home from './Home';

const SignIn = () => {
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);
  const [passVisible, setpassVisible] = React.useState(false);
  const [email, setemail] = React.useState('')
  const [password, setpassword] = React.useState('')

  // const doSignIn = () => {
  //   //validate
  //   if (email.length == 0) {
  //     Alert.alert('Please enter your email!'); return;
  //   }
  //   if (password.length == 0) {
  //     Alert.alert('Please enter your password!'); return;
  //   }

  //   //fetch email data
  //   let urlCheckSignIn = "http://192.168.1.8:3001/Users?email=" + email;
  //   fetch(urlCheckSignIn)
  //     .then((res) => { return res.json(); })
  //     .then(async (resSignIn) => {
  //       if (resSignIn.length != 1) {
  //         Alert.alert("Wrong email or same data");
  //         return
  //       } else {
  //         //số  lượng được 1 bản ghi =>check pass
  //         let objU = resSignIn[0];
  //         if (objU.password != password) {
  //           Alert.alert('Wrong password!');
  //           return;
  //         } else {
  //           try {
  //             await AsyncStorage.setItem('signInInfo', JSON.stringify(objU));
  //             navigation.navigate('Home');
  //             console.log('Home');

  //           } catch (e) {
  //             console.log(e);
  //           }
  //         }
  //       }
  //     })

  // }

  const validateEmail = (email) => {
    const regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regEmail.test(String(email).toLowerCase());
  };

  const doSignIn = async () => {
    if (!email) {
      Alert.alert('Validation Error', 'Email không được để trống');
      return;
    } else if (!validateEmail(email)) {
      Alert.alert('Validation Error', 'Email không hợp lệ');
      return;
    }
    if (!password) {
      Alert.alert('Validation Error', 'Mật khẩu không được để trống');
      return;
    }

    try {
      const response = await fetch('https://665f14f81e9017dc16f2c14e.mockapi.io/Users');
      const data = await response.json();

      const user = data.find((user) => user.email === email && user.password === password);

      if (user) {
        navigation.navigate('Home');
      } else {
        Alert.alert('Login Failed', 'Email hoặc mật khẩu không đúng');
      }
    } catch (error) {
      console.error('Error during login:', error);
      Alert.alert('Login Failed', 'Có lỗi xảy ra khi đăng nhập');
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

              {/* <TouchableOpacity style={st.btnSignIn} onPress={() =>doSignIn()}> */}
              <TouchableOpacity style={st.btnSignIn} onPress={() => navigation.navigate('Home')}>
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