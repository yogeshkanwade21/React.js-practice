import { MdEdit, MdDelete } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { Todo } from "../model";

type SingleTodoProps = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo, todos, setTodos}: SingleTodoProps) => {

  const handleDone = (id: number) => {
    setTodos(todos.map((todo) =>
        todo.id ===id ? {...todo, isDone: !todo.isDone} : todo));
  }

  const handleDelete = (id: number) => {
      setTodos(todos.filter((todo) => todo.id !== id));
  }
  return (
    <form className="todos__single">
        {
            todo.isDone ? (
                <span className="todos__single--text"><s>{todo.todo}</s></span>
            ) : (
                    <span className="todos__single--text">{todo.todo}</span>
                )
        }
        <div>
            <span className="icon">
                <MdEdit />
            </span>
            <span className="icon" onClick={() => handleDone(todo.id)}>
                <FaCheckCircle />
            </span>
            <span className="icon" onClick={()=> handleDelete(todo.id)}>
                <MdDelete />
            </span>
        </div>
    </form>
  )
}

export default SingleTodo;