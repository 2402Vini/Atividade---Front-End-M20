import { useRecoilState } from "recoil";
import { filterState } from "../atoms/todoAtoms";

export default function TodoFilters() {
  const [filter, setFilter] = useRecoilState(filterState);

  return (
    <div>
      <button onClick={() => setFilter("all")}>Todas</button>
      <button onClick={() => setFilter("completed")}>Concluídas</button>
      <button onClick={() => setFilter("pending")}>Pendentes</button>

      <p>Filtro atual: {filter}</p>
    </div>
  );
}