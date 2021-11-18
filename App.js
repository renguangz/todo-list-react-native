import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Provider } from 'react-redux';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import configureStore from './redux/store';

export default function App() {
  return (
    <Provider store={configureStore()}>
      <SafeAreaView style={styles.container}>
        <TodoInput />
        {/* <Text>todo list ul li，每個項目旁邊做刪除按鈕，透過點擊變成complete</Text> */}
        <TodoList />
        <StatusBar style="auto" />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
