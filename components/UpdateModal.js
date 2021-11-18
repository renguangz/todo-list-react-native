import React, { useState } from "react";
import { Modal, View, StyleSheet, Text, Pressable, Button, TextInput } from "react-native";

const UpdateModal = ({ visible, handlePressCancel, handlePressUpdate, updateData, onChangeInput }) => {

    return (
        <Modal
            visible={visible}
            transparent
            animationType='slide'
        >
            <View style={styles.centeredView}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalTitle}>
                        <Text style={{ color: '#7E7E7E', fontSize: 24, }}>修改內容</Text>
                    </View>
                    <View style={styles.modalContent}>
                        {/* <Text>{updateData}</Text> */}
                        <TextInput
                            multiline={true}
                            style={styles.modalInput}
                            value={updateData}
                            onChangeText={onChangeInput}
                        />
                    </View>
                    <View style={styles.pressContainer}>
                        <Pressable
                            style={{ ...styles.pressButton, ...styles.pressButtonLeft }}
                        >
                            <Button
                                title='取消'
                                onPress={handlePressCancel}
                            />
                        </Pressable>
                        <Pressable
                            style={{ ...styles.pressButton, borderBottomRightRadius: 20 }}
                        >
                            <Button
                                title='確認修改'
                                onPress={handlePressUpdate}
                            />
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    modalContainer: {
        width: 300,
        height: 200,
        backgroundColor: '#ffffff',
        // borderWidth: 1,
        // borderColor: '#000',
        borderRadius: 20,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000099',
    },
    modalTitle: {
        // backgroundColor: '#ff0',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    modalContent: {
        // backgroundColor: '#ff0',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1.5,
        borderBottomColor: '#ECECEC',
    },
    modalInput: {
        fontSize: 24,
        width: '90%',
    },
    pressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 50,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    pressButton: {
        // backgroundColor: 'pink',
        width: '50%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pressButtonLeft: {
        borderRightWidth: 1.5,
        borderRightColor: '#ECECEC',
        borderBottomLeftRadius: 20
    }
});

export default UpdateModal;