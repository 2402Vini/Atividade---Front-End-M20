import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../selectors/todoSelectors";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useRecoilValue(filteredTodoListState);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}