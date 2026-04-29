import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../atoms/todoAtoms";

export default function TodoForm() {
  const [text, setText] = useState("");
  const setTodos = useSetRecoilState(todoListState);

  const addTask = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    setTodos((oldTodos) => [
      ...oldTodos,
      {
        id: Date.now(),
        text,
        completed: false,
      },
    ]);

    setText("");
  };

  return (
    <form onSubmit={addTask}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite uma tarefa..."
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}