import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Alert } from "react-native";
import { connect } from "react-redux";
import { addTodo } from "../redux";

const TodoInput = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState('');

    const handlePressButton = () => {
        if (inputValue === '') {
            Alert.alert('請輸入內容', '內容不能為空', [
                { text: '確定' }
            ])
        } else {
            addTodo(inputValue);
            setInputValue('');
        }
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput
                multiline={true}
                placeholder='請輸入todo'
                value={inputValue}
                onChangeText={input => setInputValue(input)}
            />
            <Button
                title='新增'
                onPress={handlePressButton}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        flexDirection: 'row',
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

const mapStateToProps = state => {
    return {
        todos: state.todos,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (todo) => dispatch(addTodo(todo)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);