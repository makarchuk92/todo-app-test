import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v1 } from "uuid";


export type FilterValuesType = "all" | "active" | "completed";

interface TodoState {
    todos: TaskType[]
    completed: boolean
    error: string
    filter: FilterValuesType
}

const initialState: TodoState = {
    todos: [],
    completed: false,
    error: '',
    filter: 'all'
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
                isDone: false,

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
        },

        setFilterTodo: (state, action: PayloadAction<FilterValuesType>) => {
            state.filter = action.payload
    
        }
    }
})

export const {addTodo, removeTodo, changeStatusTodo,  setFilterTodo} = todoSlice.actions
export default todoSlice.reducer

