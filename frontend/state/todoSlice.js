import { createSlice } from "@reduxjs/toolkit";

let id = 1
const getNextId = () => id++

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [
            
    { id: getNextId(), label: 'Laundry', complete: true },
    { id: getNextId(), label: 'Groceries', complete: false },
    { id: getNextId(), label: 'Dishes', complete: false },
        ],
        showCompletedTodos: true,
    },
    reducers: {
        createNewTodo: {
        prepare(label, complete) {
            return { payload: {id: getNextId(), label, complete}}
        },
        reducer(state, action) {
            state.todos.push(action.payload)
        }
        },
        toggleTodo: (state, action) => {
        let todo = state.todos.find(td => td.id === action.payload)
        todo.complete = !todo.complete
        },
        toggleShowCompletedTodos: state => {
            state.showCompletedTodos = !state.showCompletedTodos
        }
    }
})

export const {
    createNewTodo,
    toggleTodo,
    toggleShowCompletedTodos,
} = todoSlice.actions

export default todoSlice.reducer