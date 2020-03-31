import React, { useReducer, useContext } from 'react'
import { Alert } from 'react-native'
import { TodoContext } from './todoContext'
import { todoReducer } from './todoReducer'
import { 
    ADD_TODO, 
    REMOVE_TODO, 
    UPDATE_TODO, 
    SHOW_LOADER, 
    HIDE_LOADER, 
    SHOW_ERROR, 
    CLEAR_ERROR, 
    FETCH_TODOS 
} from '../types'
import { ScreenContext } from '../screen/screenContext'
import { HTTP } from '../../http'


export const TodoState = ({ children }) => {
    const initialState = {
        todos: [],
        loading: false,
        error: null
    }
    
    const { changeScreen } = useContext(ScreenContext)

    const [state, dispatch] = useReducer(todoReducer, initialState)

    const addTodo = async title => {
        // const response = await fetch('https://todo-rn-app.firebaseio.com/todos.json', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ title })
        // })
        // const data = await response.json()
        clearError()
        try {
            const data = await HTTP.post(
                'https://todo-rn-app.firebaseio.com/todos.json', 
                { title }
            )
            dispatch({ type: ADD_TODO, title: title, id: data.name })
        } catch (error) {
            showError('Что-то пошло не так...')
        }
    }

    const removeTodo = id => {
        const todo = state.todos.find(t => t.id === id)
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
                onPress: async () => {
                    changeScreen(null)
                    try {
                        await HTTP.delete(`https://todo-rn-app.firebaseio.com/todos/${ id }.json`)
                        dispatch({ type: REMOVE_TODO, id: id })
                    } catch (error) {
                        showError('Что-то пошло не так...')
                    }
                }
            },
            ],
            { cancelable: false },
        )
    }

    const fetchTodos = async () => {
        showLoader()
        clearError()
        try {
            const data = await HTTP.get('https://todo-rn-app.firebaseio.com/todos.json')
            const todos = Object.keys(data).map(key => ({
                ...data[key], id: key
            }) )
            dispatch({ type: FETCH_TODOS, todos })
        } catch (error) {
            showError('Что-то пошло не так...')
            console.log(error)
        } finally {
            hideLoader()
        }
    }

    const updateTodo = async (id, title) => {
        clearError()
        try {              
            await HTTP.patch(`https://todo-rn-app.firebaseio.com/todos/${ id }.json`)
            dispatch({ type: UPDATE_TODO, id, title })
        } catch (error) {
            showError('Что-то пошло не так...')
            console.log(error)
        }
    }

    const showLoader = () => dispatch({ type: SHOW_LOADER })
    const hideLoader = () => dispatch({ type: HIDE_LOADER })

    const showError = error => dispatch({ type: SHOW_ERROR, error })
    const clearError = () => dispatch({ type: CLEAR_ERROR })

    return (
        <TodoContext.Provider value={ {
            todos: state.todos,
            loading: state.loading,
            error: state.error,
            addTodo,
            updateTodo,
            removeTodo,
            fetchTodos
        } }>
            { children }
        </TodoContext.Provider> 
    )
}