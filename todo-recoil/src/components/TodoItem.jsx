import { useRecoilState } from "recoil";
import { todoListState } from "../atoms/todoAtoms";

export default function TodoItem({ todo }) {
  const [todos, setTodos] = useRecoilState(todoListState);

  const toggleTask = () => {
    setTodos(
      todos.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const removeTask = () => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  return (
    <li>
      <span
        onClick={toggleTask}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {todo.text}
      </span>
      <button onClick={removeTask}>❌</button>
    </li>
  );
}