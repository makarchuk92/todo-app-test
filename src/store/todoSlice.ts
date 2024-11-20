import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v1 } from "uuid";


interface TodoState {
    todos: TaskType[]
    completed: boolean
    error: string
}

const initialState: TodoState = {
    todos: [],
    completed: false,
    error: ''
}

export type TaskType = {
    id: string;
    title: string;
    isDone: boolean;
  };

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const newTodo = {
                id: v1(),
                title: action.payload,
                isDone: false
            }
            state.todos.push(newTodo)
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        changeStatusTodo: (state, action: PayloadAction<string>) => {
            const todo = state.todos.find(todo => todo.id === action.payload)
            if(todo) {
            todo.isDone = !todo.isDone
            }
        }
    }
})

export const {addTodo, removeTodo, changeStatusTodo} = todoSlice.actions
export default todoSlice.reducer