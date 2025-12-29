import React,{useState} from "react"
function Count(){
    const [count,setCount] = useState(0)

    function decrement(){
        setCount(count-1)
    }
    function reset(){
        setCount(0)
    }
    function increment(){
        setCount(count+1)
    }
   return(
    <div>
        <h1>{count}</h1>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Increment</button>
    </div>
   )
}
export default Count