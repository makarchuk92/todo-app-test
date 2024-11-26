import React from "react";
import { Button } from "@mui/material";
import { useAppDispatch } from "../../hooks/redux";
import { setFilterTodo } from "../../store/todoSlice";

const FilterTodo = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="filter-btn">
      <Button
        className="btn"
        variant="contained"
        color="primary"
        size="small"
        onClick={() => dispatch(setFilterTodo("all"))}
      >
        All
      </Button>
      <Button
        className="btn"
        variant="contained"
        color="primary"
        size="small"
        onClick={() => dispatch(setFilterTodo("active"))}
      >
        Active
      </Button>
      <Button
        className="btn"
        variant="contained"
        color="primary"
        size="small"
        onClick={() => dispatch(setFilterTodo("completed"))}
      >
        Completed
      </Button>
    </div>
  );
};

export default FilterTodo;
