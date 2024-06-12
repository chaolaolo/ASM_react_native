import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const ErrorModal = ({ modalVisible, setModalVisible, errorMessage, titleModal }) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={st.modalContainer}>
                <View style={st.modalView}>
                    <Text style={st.titleModal}>{titleModal}</Text>
                    <Text style={st.modalText}>{errorMessage}</Text>
                    <TouchableOpacity
                        style={[st.button, st.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text style={st.textStyle}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default ErrorModal

const st = StyleSheet.create({

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        height: 200,
        width: '70%',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: 'lightpink',
        width: 100,
        marginTop: 20
    },
    textStyle: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    titleModal: {
        fontSize: 20,
        left: -80,
        top: -10,
        fontWeight: 'bold',
        color: 'black'
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
})