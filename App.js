import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import configureStore from './redux/store';

export default function App() {
  return (
    <Provider store={configureStore()}>
      <SafeAreaView style={styles.container}>
        <TodoInput />
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
