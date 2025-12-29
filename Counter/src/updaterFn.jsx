//updater fn =>  a fn passed as an argument to setState() usually ex. setYear(y => y+1)

import React,{useState} from "react"
function UpdaterFunction(){
const [count, setCount] = useState(0)


function increment(){
    setCount(c => c+1)
    setCount(c => c+1)
    setCount(c => c+1)
}
function decrement(){
     setCount(c => c-1)
     setCount(c => c-1)
     setCount(c => c-1)
}
function restart(){
    setCount(0)
}
return(
   <div>
    <h1>{count}</h1>
    <button onClick={decrement}>Decrement</button>
    <button onClick={restart}>Restart</button>
    <button onClick={increment}>Increment</button>
   </div>
)
}
export default UpdaterFunction