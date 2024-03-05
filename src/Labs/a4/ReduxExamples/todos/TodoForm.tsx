import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { LabState } from "../../../store";

function TodoForm() {
  const { todo } = useSelector((state: LabState) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <li className="list-group-item">
      <input value={todo.title} onChange={ (e) => dispatch(setTodo({ ...todo, title: e.target.value })) } />
      &emsp;
      <button onClick={() => dispatch(updateTodo(todo))} className="btn btn-warning"> Update </button>
      &emsp;
      <button onClick={() => dispatch(addTodo(todo))} className="btn btn-success"> Add </button>
    </li>
  );
}
export default TodoForm;