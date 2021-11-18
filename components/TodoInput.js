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
            <View style={{...styles.border, flex: 1, marginRight: 12}}>
                <TextInput
                    multiline={true}
                    placeholder='請輸入Todo'
                    value={inputValue}
                    onChangeText={input => setInputValue(input)}
                    style={styles.input}
                />
            </View>
            <View style={styles.border}>
                <Button
                    title='新增'
                    onPress={handlePressButton}
                    color='#818181'
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        // backgroundColor: 'orange',
        marginTop: 100,
        flexDirection: 'row',
        width: '88%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    border: {
        // backgroundColor: 'steelblue',
        height: '100%',
        // flex: 1,
        borderWidth: 2,
        borderColor: '#DCDCDC',
        padding: 8,
        borderRadius: 12,
        justifyContent: 'center',
    },
    input: {
        // backgroundColor: 'pink',
        fontSize: 28,
    },
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