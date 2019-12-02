import React , { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Navbar } from './src/components/Navbar'
import { MainScreen } from './src/screens/MainScreen'
import { ToDoScreen } from './src/screens/ToDoScreen'

export default function App() {
  const [todoId, setTodoId] = useState('2')
  const [todos, setTodos] = useState([
    { 
      id: '1',
      title: 'Выучить React Native'
    },
    { 
      id: '2',
      title: 'Написать приложение'
    }
  ])

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
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  let content = <MainScreen 
    todos={ todos }
    addTodo={ addTodo }
    removeTodo={ removeTodo }
    openTodo={ setTodoId }
  />

  if (todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId)
    content = <ToDoScreen goBack={ () => setTodoId(null) } todo={ selectedTodo } removeTodo={ removeTodo } />
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
   