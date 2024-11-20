import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice"

const RootReducer = combineReducers({
    todos: todoReducer
})

export const store = configureStore({
    reducer: RootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch