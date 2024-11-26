import React from "react";
import { Todo } from "./Components/TodoList/TodoContainer";
import { Container } from "@mui/material";
import { FilterValuesType } from "./store/todoSlice";

export type TodoListType = {
  id: string;
  title: string;
  filter: FilterValuesType;
};

function App() {
  return (
    <div className="App">
      <Container fixed>
        <Todo />
      </Container>
    </div>
  );
}

export default App;
