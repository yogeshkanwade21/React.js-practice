import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todo, setTodo] = useState([]);

  const handleAddTodo = () => {
    // console.log(inputValue);
    setTodo([...todo, inputValue]);
    setInputValue("");
  }

  const removeTodo = (index) => {
    const newTodoList = [...todo];
    newTodoList.splice(index, 1);
    setTodo(newTodoList);
  };

  const todoList = todo.map((todo, index) => 
    <li key={index}>
      {todo} <button onClick={() => removeTodo(index)}> Remove </button>
    </li>
  );

  return (
    <>
      <h1>To Do List</h1>
      <input
        value={inputValue}
        type='text'
        placeholder='Enter To do'
        onChange={(e) => setInputValue(e.target.value)}
      >
      </input>
      <button onClick={handleAddTodo}>
        Add
      </button>

      <ul>{todoList}</ul>
    </>
  )
}

export default App;
