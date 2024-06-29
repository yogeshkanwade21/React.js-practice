import { useRef } from "react";
import { useState } from "react";

function App() {
  const [flag, setFlag] = useState(false);

  // event handler
  const handleToggle = () => {
    setFlag(!flag);
  }

  return (
    <>
      <h1> Switch is {flag? "On" : "Off"} </h1>
      <button
      onClick={handleToggle} 
      >
        Toggle
      </button>

    </>
  )

  // const [count, setCount] = useState(0);
  // const [isIncrementing, setIsIncrementing] = useState(false);
  // const incrementInterval = useRef(null);

  // const toggleIncrement = () => {
  //   if (isIncrementing) {
  //     clearInterval(incrementInterval.current);
  //     setCount(0);
  //   }
  //   else {
  //     incrementInterval.current = setInterval(() => {
  //       setCount(count => count + 2);
  //     }, 1000);
  //   }
  //   setIsIncrementing(!isIncrementing);
  // };

  // const decrementCount = () => {
  //   setCount(count - 2);
  // }

  // return (
  //   <>
  //     <h1>Counter is {count}</h1>
  //     <button
  //     onClick={toggleIncrement}
  //     >
  //       {!isIncrementing ? "Increment" : "Stop Increment"}
  //     </button>
  //     <button
  //     onClick={decrementCount}
  //     >
  //       Decrement
  //     </button>
  //   </>

  // )
}

export default App;
