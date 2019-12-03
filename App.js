import React , { useState } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Navbar } from './src/components/Navbar'
import { MainScreen } from './src/screens/MainScreen'
import { ToDoScreen } from './src/screens/ToDoScreen'

async function loadApplication() {
  await Font.loadAsync({
    'MullerThin': require('./assets/fonts/MullerThin.ttf'),
    'MullerExtraBold': require('./assets/fonts/MullerExtraBold.ttf'),
  }) 
}

export default function App() {
  const [isReady, setIsReady] = useState(false)
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([
    { 
      id: '1',
      title: 'Выучить React Native'
    },
    // { 
    //   id: '2',
    //   title: 'Написать приложение'
    // } 
  ])
 
  if (!isReady) {
    return <AppLoading 
      startAsync={ loadApplication }
      onError={ err => console.log(err) }
      onFinish={ () => setIsReady(true) }
    />
  }

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title: title
    }
    setTodos( prev => [ 
      ...prev, 
      {
        id: Date.now().toString(),
        title: title
      }
    ])
  }

  const removeTodo = id => {
    const todo = todos.find(t => t.id == id)
    Alert.alert(
      'Удаление задачи',
      `Вы уверены, что хотите удалить "${ todo.title }"?`,
      [
        {
          text: 'Отмена',
          style: 'cancel',
        },
        {
          text: 'Удалить',
          style: 'destructive',
          onPress: () => {
            setTodoId(null)
            setTodos(prev => prev.filter(todo => todo.id !== id))
          }
        },
      ],
      { cancelable: false },
    );
  }

  const updateTodo = (id, title) => {
    setTodos(old => old.map(todo => {
      if (todo.id === id) {
        todo.title = title
      }
      return todo
    }))
  }

  let content = <MainScreen 
    todos={ todos }
    addTodo={ addTodo }
    removeTodo={ removeTodo }
    openTodo={ setTodoId }
  />

  if (todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId)
    content = <ToDoScreen 
      goBack={ () => setTodoId(null) } 
      todo={ selectedTodo } 
      onRemove={ removeTodo }
      onSave={ updateTodo }
    />
  }

  return (
    <View>
      <Navbar title='ToDo App' />
      <View style={ styles.container }>{ content }</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
})
   