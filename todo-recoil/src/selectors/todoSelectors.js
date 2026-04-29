import { selector } from "recoil";
import { todoListState, filterState } from "../atoms/todoAtoms";

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const todos = get(todoListState);
    const filter = get(filterState);

    switch (filter) {
      case "completed":
        return todos.filter((todo) => todo.completed);
      case "pending":
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  },
});