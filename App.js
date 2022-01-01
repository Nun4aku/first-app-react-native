import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, FlatList, SafeAreaView, Alert  } from 'react-native';
import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen'; 


export default function App() {

  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([])


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

  let content = (
    <MainScreen todos = {todos} addTodo = {addTodo} removeTodo = {removeTodo} openTodo={ setTodoId }/>
  )

  if(todoId){
    const selectedTodo = todos.find(todo => todo.id === todoId)
    content = <TodoScreen onRemove={ removeTodo }  goBack={ () => setTodoId(null) } todo={selectedTodo} />
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
