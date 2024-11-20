import {  Checkbox, Grid2, Paper} from "@mui/material";
import React  from "react";
import {  useAppSelector } from "../../hooks/redux";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";






export function Todo() {
  



  return (
    <div className="todo-container">
      <TodoForm />
      <TodoList />
    </div>
  );
}
