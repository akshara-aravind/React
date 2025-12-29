import React, {useState} from "react";

function ShowAndHide(){
   const [show,setShowText] = useState(false)

   function toggleText(){
    setShowText(!show)
   }
   return(
    <>
        {show && <p>This is the text</p>}
        <button onClick={toggleText}>Show/Hide Text</button>
    </>
   )
}
export default ShowAndHide