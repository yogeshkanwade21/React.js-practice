import { MdEdit, MdDelete } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { Todo } from "../model";
import { useState, useRef, useEffect } from "react";

type SingleTodoProps = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo, todos, setTodos}: SingleTodoProps) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const handleEdit = ( e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(todos.map((todo) => 
            todo.id === id ? {...todo, todo: editTodo} : todo
        ));
        setEdit(false);
    }

    const inputRef = useRef<HTMLInputElement>(null);

    const handleDone = (id: number) => {
        setTodos(todos.map((todo) =>
            todo.id ===id ? {...todo, isDone: !todo.isDone} : todo));
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit])

  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
        {edit ? (
            <input ref={inputRef} value={editTodo} onChange={(e) => setEditTodo(e.target.value)} className="todos_single--text"/>
        ) :
            todo.isDone ? (
                <span className="todos__single--text"><s>{todo.todo}</s></span>
            ) : (
                    <span className="todos__single--text">{todo.todo}</span>
                )
        }
        <div>
            <span className="icon" onClick={() => {
                if(!edit && !todo.isDone) {
                    setEdit(!edit);
                }   
            }}>
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