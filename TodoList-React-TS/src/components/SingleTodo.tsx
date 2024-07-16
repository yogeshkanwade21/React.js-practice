import { MdEdit, MdDelete } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { Todo } from "../model";

type SingleTodoProps = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo, todos, setTodos}: SingleTodoProps) => {
  return (
    <form className="todos__single">
        <span className="todos__single--text">{todo.todo}</span>
        <div>
            <span className="icon">
                <MdEdit />
            </span>
            <span className="icon">
                <FaCheckCircle />
            </span>
            <span className="icon">
                <MdDelete />
            </span>
        </div>
    </form>
  )
}

export default SingleTodo;