import React, { useState, useContext } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { THEME } from './theme'
import { Navbar } from './components/Navbar'
import { MainScreen } from './screens/MainScreen'
import { ToDoScreen } from './screens/ToDoScreen'
import { TodoContext } from './context/todo/todoContext'

export const MainLayout = () => {
    const { todos, addTodo, updateTodo, removeTodo } = useContext(TodoContext)
    const [todoId, setTodoId] = useState(null)
    // const [todos, setTodos] = useState([])


    // const addTodo = (title) => {
    //     setTodos( prev => [ 
    //         ...prev, 
    //         {
    //             id: Date.now().toString(),
    //             title
    //         }
    //     ])
    // }
    
    // const updateTodo = (id, title) => {
    //     setTodos(old => old.map(todo => {
    //         if (todo.id === id) {
    //             todo.title = title
    //         }
    //         return todo
    //     }))
    // }

    // const removeTodo = id => {
    //     const todo = todos.find(t => t.id == id)
    //     Alert.alert(
    //         'Удаление задачи',
    //         `Вы уверены, что хотите удалить "${ todo.title }"?`,
    //         [
    //         {
    //             text: 'Отмена',
    //             style: 'cancel',
    //         },
    //         {
    //             text: 'Удалить',
    //             style: 'destructive',
    //             onPress: () => {
    //                 setTodoId(null)
    //                 setTodos(prev => prev.filter(todo => todo.id !== id))
    //             }
    //         },
    //         ],
    //         { cancelable: false },
    //     );
    // }

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
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: THEME.PADDING_VERTICAL
  }
})