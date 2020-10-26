import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Header from './components/header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'get coffee', key: '1' },
    { text: 'create app', key: '2' },
    { text: 'play video games', key: '3' }
  ]); 

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    })
  }

  const submitHandler = (text) => {
    if (text.length > 0) {
      setTodos((prevTodos) => {
        return [
          ...prevTodos, 
          {text, key: Math.random().toString()}
        ];
      });
    } else {
      Alert.alert("Ooops", "Add some text for your todo!", [
        {text: "Okay", onPress: () => {}}
      ]);
    }
  };


  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList 
              data={todos} 
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 20
  }
});
