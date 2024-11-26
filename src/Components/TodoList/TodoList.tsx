import TodoListItems from "./TodoListItems";
import { TaskType } from "../../store/todoSlice";

type PropsType = {
  filterTodos: TaskType[];
};

const TodoList = (props: PropsType) => {
  return (
    <ul>
      {props.filterTodos.map((task) => {
        return (
          <TodoListItems
            key={task.id}
            id={task.id}
            title={task.title}
            isDone={task.isDone}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
