//useEffetct() => react hook that tells react do code when (pick one): this component re-renders, this component mounts , the state of a value
//useEffect(function,[dependencies])

import React, {useState,useEffect} from "react";

function MyComponent(){
  const [count,setCount] = useState(0);
  const [color,setColor] = useState('brown')

  useEffect(() => {
    document.title = `count:${count} ${color}`
  },[count,color])

   function add(){
    setCount(count+1)
   }
   function substract(){
    setCount(count-1)
   }
   function changeColor(){
    setColor(color === 'brown'?'blue':'brown')
   }
  return(
    <>
      <p style={{color:color}}>Count: {count}</p>
      <button onClick={add}>Add</button>
      <button onClick={substract}>Substract</button><br />
      <button onClick={changeColor}>Change Color</button>
    </>
  )
}
export default MyComponent

