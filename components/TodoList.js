import React, { useState } from "react";
import { FlatList, StyleSheet, View, Text, Button, Alert, Dimensions, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { deleteTodo, updateTodo } from "../redux";
import UpdateModal from "./UpdateModal";

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
    const [updateModalVisible, setUpdateModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [modalKey, setModalKey] = useState(null);
    const [modalComplete, setModalComplete] = useState(false);

    const handleUpdate = (e) => {
        setUpdateModalVisible(true);
        setModalContent(e.title);
        setModalKey(e.key);
        setModalComplete(e.completed);
    };

    const handlePressCancel = () => {
        setUpdateModalVisible(false);
    };

    const handlePressUpdate = () => {
        if (modalContent === '') {
            return Alert.alert('請輸入內容')
        }
        setUpdateModalVisible(false);
        updateTodo(modalKey, modalContent, modalComplete);
    };

    const pressComplete = (item) => {
        updateTodo(item.key, item.title, !item.completed);
    };

    return (
        <View style={styles.todoContainer}>
            <UpdateModal
                visible={updateModalVisible}
                handlePressCancel={handlePressCancel}
                handlePressUpdate={handlePressUpdate}
                updateData={modalContent}
                onChangeInput={input => setModalContent(input)}
            />
            <Text style={styles.todoTitle}>Todo List</Text>
            <FlatList
                data={todos}
                keyExtractor={(item, index) => `key-${index}`}
                renderItem={({ item }) => (
                    <View style={{ ...styles.list, width: Dimensions.get('window').width }}>
                        <TouchableOpacity onPress={() => pressComplete(item)}>
                            <Text style={item.completed ? styles.completed : styles.uncompleted}>
                                {item.completed ? '已完成✅' : '未完成'}
                            </Text>
                        </TouchableOpacity>
                        <Text style={{ flex: 1, marginLeft: 12 }}>{item.title}</Text>
                        <Button
                            title='更新'
                            onPress={() => handleUpdate(item)}
                        />
                        <Button
                            title='刪除'
                            onPress={() => deleteTodo(item.key)}
                        />
                    </View>
                )}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    todoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    todoTitle: {
        fontSize: 30,
        fontWeight: '400',
        marginTop: 40,
        marginBottom: 20,
    },
    list: {
        color: 'black',
        fontSize: 28,
        fontWeight: 'bold',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 12,
    },
    completed: {
        color: 'red'
    },
    uncompleted: {
        color: 'green'
    }
})

const mapStateToProps = state => {
    return {
        todos: state.todos.data,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        deleteTodo: (id) => dispatch(deleteTodo(id)),
        updateTodo: (key, title, completed) => dispatch(updateTodo(key, title, completed)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);