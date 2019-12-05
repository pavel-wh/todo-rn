import { 
    ADD_TODO, 
    UPDATE_TODO, 
    REMOVE_TODO,
    SHOW_LOADER, 
    HIDE_LOADER,
    SHOW_ERROR,
    CLEAR_ERROR,
    FETCH_TODOS
} from '../types'

const handlers = {
    [ADD_TODO]: (state, { title }) => ({
        ...state, 
        todos: [...state.todos, {
            id: Date.now().toString(),
            title: title
        }]
    }),
    [UPDATE_TODO]: (state, { title, id }) => ({
        ...state, 
        todos: state.todos.map(todo => {
            if (todo.id === id) {
                todo.title = title
            }
            return todo
        }) 
    }),
    [REMOVE_TODO]: (state, { id }) => ({
        ...state, 
        todos: state.todos.filter(todo => todo.id !== id)
    }),
    [SHOW_LOADER]: state => ({ ...state, loading: true }),
    [HIDE_LOADER]: state => ({ ...state, loading: false }),
    [CLEAR_ERROR]: state => ({ ...state, error: null }),
    [SHOW_ERROR]: (state, { error }) => ({ ...state, error: error }),
    [FETCH_TODOS]: (state, { todos }) => ({ ...state, todos }),

    DEFAULT: state => state
}

export const todoReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}