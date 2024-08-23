import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  /*
    useState returns an array with 2 elements:
        The current state value (e.g. count)
        A function to update the state value (e.g. setCount)

    setCount updates the state value and triggers a re-render of the component with the new value.

    In simple language:

    useState gives you:

    A value (e.g. count)
    A way(function) to change it (e.g. setCount)
  */

  let [counter, setCounter] = useState(1)
  
  // let counter = 15;

  const addValue = ()=>{

    // setCounter(counter++); // error or late to update- explanation below (have to double click) 

    if (counter >= 20) {
      return;
    }

    else{
      setCounter(counter+1);
    }

  }

  /*-----imp lesson learned-----
  
   Increments/Decrements from counter Variable don't correctly update the state in React. Instead, we're using the functional update form of setCounter. like above code. 

   issue with your original code was using counter++ and counter-- to update the state. In React, directly modifying state variables like this can lead to unexpected behavior because:

    State Updates are Asynchronous:
    React batches state updates for performance reasons. When you use counter++ or counter--, the state update may not be immediate, and React might not see the latest value of counter when updating.

    Mutating State Directly:
    Directly modifying state variables (e.g., counter++ or counter--) does not follow React's recommended practices. State in React should be treated as immutable. Instead, you should use functions that accept the previous state and return a new state value.

    By using setCounter(prevCounter => prevCounter + 1) and setCounter(prevCounter => prevCounter - 1), you're following React's best practices for state updates. This approach ensures that you're always working with the most recent state value and avoids issues related to asynchronous updates
  
  */

  const removeValue = ()=>{
    // setCounter(counter--);  // setCounter(counter++); // error or late(have to press the btn twice to get the event response) to update- explanation above (have to double click)

    // condition added to solve assignment 
    if (counter <= 0) {
      return;
    }
    else{
      setCounter(counter-1);
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>counter value : {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
