import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    todos: []
}

const TodoSlice = createSlice({
    name: "todo",
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: uuidv4(),
                title: action.payload,
                complated: false
            }

            state.todos.push(newTodo);

        },
        removeTodo: (state, action) => {

            state.todos.splice(action.payload.id, 1);


        },
        todoComplated: (state, action) => {
            // state.todos.forEach((todo, index) => index === action.payload ? todo.complated = !todo.complated : todo.complated = false)
            state.todos[action.payload].complated = !state.todos[action.payload].complated

        }
    }

})


export const todoReducer = TodoSlice.reducer

export const { addTodo, removeTodo, todoComplated } = TodoSlice.actions;