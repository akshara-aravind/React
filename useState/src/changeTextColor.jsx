import React, {useState} from "react";

function ChangeTextColor(){
  const [color,setColor] = useState('black')

  function changeColor(){
    setColor(color === 'black'?'red':'black')
  }
  return(
    <>
        <p style={{color:color}}>This text change color</p>
        <button onClick={changeColor}>Change color</button>
    </>
  )
}
export default ChangeTextColor