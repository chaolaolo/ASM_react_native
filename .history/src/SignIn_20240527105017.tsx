import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, Button, ImageBackground, TouchableOpacity, Platform, Pressable, KeyboardAvoidingView, ScrollView } from 'react-native'
import * as React from 'react'

const SignIn = ({navigation}:any) => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flexGrow:1}}>

    {/* <View style={st.container}> */}
      <SafeAreaView style={st.container}>
      <ScrollView contentContainerStyle={st.all}>
        <Image source={require('./image/logo.png')} style={st.logo} />
        <Text style={{
          fontFamily: 'monospace',
          marginVertical: 10,
        }}>WELCOME! Login to continue</Text>
        <View style={st.ifno_container}>
          <View style={st.box_info}>
            {/* <Image
              style={st.icon}
              source={{ uri: 'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png' }} >
            </Image> */}
            <TextInput style={st.tip}
              placeholder='Enter email'
              textContentType='emailAddress'
              keyboardType='email-address'
            >
            </TextInput>
          </View>
          <View style={st.box_info}>
            {/* <Image
              style={st.icon}
              source={{ uri: 'https://songsofsyx.com/wiki/images/9/9e/Lock_icon.png' }}  >
            </Image> */}
            <TextInput style={st.tip}
              placeholder='Enter password'
              textContentType='password'/>
               {/* <Image style={st.iconPass} source={require('./image/showPass.png')} > */}
            </Image>
          </View>
          <TouchableOpacity style={st.btnSignIn} onPress={()=>{navigation.navigate('Home')}}>
            <Text style={st.t_signIn}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={st.t_left}>
            <Text style={st.t1}>Don't have an account? </Text>
            <Pressable  onPress={()=>{navigation.navigate('SignUp')}}>
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
      {/* </View> */}
    </KeyboardAvoidingView>


  )
}

export default SignIn
const st = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DBE5FD',
    justifyContent:'center',
},
  all: {
    alignItems: 'center',
    // justifyContent:'center',
    paddingBottom:20,
    margin:'auto',
    backgroundColor: 'red',
    // flex:1
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
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'monospace',
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
    borderColor: 'gray',
  },
  iconPass: {
    width: '10%',
    height: '50%',
    marginVertical: 'auto',
    margin: '3%',
  },
  tip: {
    width: '100%',
    marginVertical: 'auto',
    marginRight: 8,
    fontSize: 16,
    padding: 10,
    fontFamily: 'monospace',
  },
  btnSignIn: {
    height: 60,
    marginTop: 14,
    backgroundColor: '#FF520D',
    padding: 10,
    borderRadius: 30,
    marginVertical:'4%'
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
    marginBottom:'4%'
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