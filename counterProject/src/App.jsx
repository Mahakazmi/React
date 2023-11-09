import {useState} from 'react'
import './App.css'

function App(){
  
  let [counter, setCounter] = useState(9)
  // counter is the variable and setCounter is the func responsible to update this variable

  // // let counter = 15
  const addValue = () => {
    // counter=counter+1;
    
    if(counter==20)
    {
      return counter;
    }
    else{
    setCounter(counter+1)
    console.log("Value added", counter);
    }
  }

  const removeValue = () => {
    if (counter<=0)
    {
      return counter;
    }
    else{
      setCounter(counter-1)
    console.log("Value added", counter);
    }
  }

  return (
    <>
      <h1>Chai or React</h1>
      <h3>Counter value: {counter} </h3>
      <button onClick={()=>addValue()}>Add Value {counter}</button>
      <br/>
      <button onClick={()=>removeValue()}>Remove value {counter}</button>
    </>
  )
}

export default App
