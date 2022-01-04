import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, FlatList, SafeAreaView, Alert  } from 'react-native';
//import * as Font from 'expo-font';
//import AppLoading from 'expo';
import { Ionicons } from '@expo/vector-icons';

import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';

/*
async function loadApplication () {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bolt': require('./assets/fonts/Roboto-Bold.ttf'),
  })
}*/

export default function App() {

  const [isReady, setIsReady] = useState(false)
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([
    {id: '1', title: 'Заметка 1'},
  ])

  /*
  if (!isReady){
    return (
      <AppLoading 
        startAsync = { loadApplication } 
        onError = { err => console.log(err) } 
        onFinish = { () => setIsReady(true) }
      />
    )
  }*/

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title: title
    }


    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title: title
      }
    ])

  }

  const removeTodo = (id) => {

    const todo = todos.find(t => t.id ==id)

    Alert.alert(
      "Удалить элемент",
      `Удалить ${todo.title}?`,
      [
        {
          text: "Отмена",
          style: "cancel"
        },
        { text: "Удалить",
          onPress: () => {
            setTodoId(null)
            setTodos (prev => prev.filter( todo => todo.id !== id))
          } 
        }
      ],
      { cancelable: false }
    );
  }

  const updateTodo = (id, title) => {
    setTodos( old => 
      old.map( todo=> {
        if (todo.id === id) {
          todo.title = title
        }
        return todo
      })
    )
  }

  let content = (
    <MainScreen todos = {todos} addTodo = {addTodo} removeTodo = {removeTodo} openTodo={ setTodoId }/>
  )

  if (todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId)
    content = (
        <TodoScreen 
          onRemove={ removeTodo }  
          goBack={ () => setTodoId(null) } 
          todo={selectedTodo} 
          onSave = {updateTodo}
        />)
  }

  return (
    <View>
      <Navbar  title='Заметки мамкиного программиста'/>
      <View style = {styles.container}>
        
        { content }

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
