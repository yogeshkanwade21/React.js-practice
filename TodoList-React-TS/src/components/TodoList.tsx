import "./styles.css";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import { useState } from "react";

interface TodoListProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({todos,  setTodos}: TodoListProps) => {

    const [filter, setFilter] = useState<string>("all");

    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(event.target.value);
    }
    return (
        <>
            <div className="filter">
                <label className="filter_label" htmlFor="select-filter">Filter:</label>
                    <select id="select-filter" value={filter} onChange={handleFilterChange}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="pending">Pending</option>
                    </select>
        
            </div>
            <div className="todos">
                {todos.filter((todo) => {
                    if(filter === "completed") {
                        return todo.isDone;
                    }
                    if(filter === "pending") {
                        return !todo.isDone;
                    }
                    return true;
                })
                .map((todo) => (
                    <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
                ))}
            </div>
        </>
    )
}

export default TodoList;