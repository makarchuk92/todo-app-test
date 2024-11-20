import React from "react";
import { Todo } from "./Components/TodoList/TodoContainer";
import { Container, Grid2, Paper } from "@mui/material";

type FilterValuesType = "all" | "active" | "completed";

type TodoListType = {
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
