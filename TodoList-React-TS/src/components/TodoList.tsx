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
    const [sort, setSort] = useState<string>("none");

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSort(event.target.value);
    }

    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(event.target.value);
    }

    const filteredTodos = todos.filter((todo) => {
        if(filter === "completed") {
            return todo.isDone;
        }
        if(filter === "pending") {
            return !todo.isDone;
        }
        return true;
    });

    const getSortedTodos = ( todos: Todo[] ) => {
        if(sort === "alphabetically") {
            return todos.slice().sort((a, b) => a.todo.localeCompare(b.todo, 'en', { sensitivity: 'base' }));
        }
        if(sort === "newest-first") {
            return todos.slice().sort((a, b) => b.id - a.id);
        }
        return todos;
    }

    const sortedTodos = getSortedTodos(filteredTodos);

    return (
        <>
        <div className="options">
            <div className="filter">
                <label className="filter_label" htmlFor="select-filter">Filter:</label>
                    <select id="select-filter" value={filter} onChange={handleFilterChange}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="pending">Pending</option>
                    </select>
            </div>
            <div className="sort">
                <label className="sort_label" htmlFor="select-sort">Sort:</label>
                    <select id="select-sort" value={sort} onChange={handleSortChange}>
                        <option value="none">None</option>
                        <option value="alphabetically">Alphabetically</option>
                        <option value="newest-first">Newest First</option>
                    </select>
            </div>
        </div>

            <div className="todos">
                {sortedTodos.map((todo) => (
                    <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
                ))}
            </div>
        </>
    )
}

export default TodoList;