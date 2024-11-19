import React, { useState } from 'react';
import  { TaskType, Todo } from './Components/TodoList/Todo';
import { v1 } from 'uuid';


type FilterValuesType = 'all' | 'active' | 'completed'

type TodoListType = {
    id: string
    title: string
    filter: FilterValuesType
}





function App() {

  const [taskList, setTaskList] = useState<TaskType[]>([
    {id: v1(), title: 'test1', isDone: true},
    {id: v1(), title: 'test2', isDone: false},
    {id: v1(), title: 'test3', isDone: true}
  ])

  return (
    <div className="App">
     work
     <Todo tasks={taskList} />
    </div>
  );
}

export default App;
