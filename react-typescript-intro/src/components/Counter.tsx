import {useState} from 'react';

const Counter = () => {

const [count, setCount] = useState(0);

  return (
    <>
    <div>counter</div>
    <h2>{count}</h2>
    <button onClick={() => setCount(count + 1)}>increment</button>
    <button onClick={() => setCount(count - 1)}>decrement</button>
    </>
  )
}

export default Counter;