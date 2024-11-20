import { Checkbox, Grid2, IconButton, Paper } from '@mui/material'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeTodo } from '../../store/todoSlice';


const label = { inputProps: { "aria-label": "Checkbox demo" } };

const TodoList = () => {
    const tasks = useAppSelector((state) => state.todos.todos);
    const dispatch = useAppDispatch()
  return (
    <ul>
    {tasks.map((task) => {
      return (
        <Grid2 spacing={10}>
          <Paper elevation={5}>
            <li id={task.id}>
              <div className="todo-tasks">
                <Checkbox {...label} checked={task.isDone} />
                <h1>{task.title}</h1>
                <IconButton aria-label="delete" onClick={() => dispatch(removeTodo(task.id))}>
                  <DeleteIcon fontSize='small'/>
                </IconButton>
              </div>
            </li>
          </Paper>
        </Grid2>
      );
    })}
  </ul>
  )
}

export default TodoList