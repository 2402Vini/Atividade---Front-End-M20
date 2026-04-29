import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilters from "./components/TodoFilters";

function App() {
  return (
    <div>
      <h1>To-do com Recoil 🧠</h1>
      <TodoForm />
      <TodoFilters />
      <TodoList />
    </div>
  );
}

export default App;