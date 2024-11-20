import React, { FC, useState } from "react";
import { Button, TextField } from "@mui/material";
import { addTodo } from "../../store/todoSlice";
import { useAppDispatch } from "../../hooks/redux";

const TodoForm: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useAppDispatch();
  const handleAddTodo = () => {
    if (inputValue.trim()) {
      dispatch(addTodo(inputValue));
      setInputValue("");
    }
  }
  
  return (
    <div className="todo-form">
      <TextField
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        id="standard-helperText"
        label="enter value"
        defaultValue="Default Value"
        variant="standard"
      />
      <Button
        className="btn"
        variant="contained"
        onClick={handleAddTodo}
        color="primary"
        size="small"
      >
        Add
      </Button>
    </div>
  );
};

export default TodoForm;
