import { Checkbox, Grid2, IconButton, Paper } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { changeStatusTodo, removeTodo } from '../../store/todoSlice';


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
                <Checkbox {...label} checked={task.isDone} 
                onChange={() => dispatch(changeStatusTodo(task.id))} />
                <h3>{task.title}</h3>
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