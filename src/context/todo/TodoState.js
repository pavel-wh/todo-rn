import React, { useReducer, useContext } from 'react'
import { TodoContext } from './todoContext'
import { todoReducer } from './todoReducer'
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../types'
import { ScreenContext } from '../screen/screenContext'

export const TodoState = ({ children }) => {
    const initialState = {
        todos: [    
            { 
                id: '1',
                title: 'Выучить React Native'
            },
            { 
                id: '2',
                title: 'Написать приложение'
            } 
        ]
    }
    
    const { changeScreen } = useContext(ScreenContext)

    const [state, dispatch] = useReducer(todoReducer, initialState)

    const addTodo = title => dispatch({ type: ADD_TODO, title: title })

    const updateTodo = (id, title) => dispatch({ type: UPDATE_TODO, id, title })

    const removeTodo = id => {
        changeScreen(null)
        dispatch({ type: REMOVE_TODO, id: id })
    }

    return (
        <TodoContext.Provider value={ {
            todos: state.todos,
            addTodo,
            updateTodo,
            removeTodo
        } }>
            { children }
        </TodoContext.Provider> 
    )
}