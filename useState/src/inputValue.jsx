import React, {useState} from "react";

function Inputvalue(){
 const [value,setValue] = useState('')

 function inputText(e){
    setValue(e.target.value)
 }
 return(
    <>
      <p>{value}</p>
      <input type="text" placeholder="Type here..." onChange={inputText} />
    </>
 )
}
export default Inputvalue