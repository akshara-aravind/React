//react hook =>  special fn that allows functional components
//               (useState, useEffect, useContext, useReduce, useCallback, ..)

//useState() => a react hook that allows the creation of a stateful variable and a setter fn to update its value in the virtual DOM.[name,setName]

import React,{useState} from "react"
function Counter(){
    const [count,setCount] = useState(0)

    const increment = () =>{
      setCount(count + 1)
    }
    const decrement = () =>{
      setCount(count-1)
    }
    const reset = () =>{
      setCount(0)
    }
   return(
      <div className="container">
          <h1 className="count" style={{color:count===0?'#000': count < 0 ?'red' :'green'}}>{count}</h1>
          <div className="btns">
            <button className="decrement" onClick={decrement}>Decrement</button>
            <button className="reset" onClick={reset}>Reset</button>
            <button className="increment" onClick={increment}>Increment</button>
          </div>
      </div>
   )
}
export default Counter