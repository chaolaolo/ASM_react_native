import { Image, KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Contact = () => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flexGrow: 1 }}>
            <SafeAreaView style={styles.container}>
                <View>
                    <Image source={require('./image/iconCall.png')}/>
                    <Text>0987654321</Text>
                </View>
                <View>
                    <Image/>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default Contact

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        flex: 1
    }
})