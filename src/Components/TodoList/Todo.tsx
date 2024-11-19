import { Checkbox } from '@mui/material'
import React from 'react'

export type TaskType = {
  id: string
  title: string
  isDone: boolean
}

type PropsType = {

  tasks: Array<TaskType>
}

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export function Todo (props: PropsType) {
    
  return (
    <div>
    <input />
    <button>Add</button>
    <ul>
     {props.tasks.map( task => {
      return <li id={task.id}>
      <div>
        {/* <input type="checkbox" checked={task.isDone} /> */}
        <Checkbox {...label}  checked={task.isDone} />
        <h1>{task.title}</h1>
      </div>
         
          
      </li>
     }

     )}
    </ul>
    </div>
  )
}
