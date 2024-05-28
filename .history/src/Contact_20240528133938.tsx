import { Image, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Contact = () => {
    return (
        <KeyboardAvoidingView >
            <SafeAreaView>
                <View>
                    <Image></Image>
                </View>
                <View>
                    <Image></Image>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default Contact

const styles = StyleSheet.create({
    container:{

    }
})