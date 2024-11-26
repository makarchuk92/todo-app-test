import React from "react";
import { useAppSelector } from "../../hooks/redux";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import FilterTodo from "./FilterTodo";

export function Todo() {
  const { todos, filter } = useAppSelector((state) => state.todos);

  const filterTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.isDone;
    if (filter === "completed") return todo.isDone;
    return true;
  });

  return (
    <div className="todo-container">
      <TodoForm />
      <TodoList filterTodos={filterTodos} />
      <FilterTodo />
    </div>
  );
}
