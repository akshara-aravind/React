import { useContext } from "react";
import { InputContext } from "../context";
export function InputValue(){
    const {input,setInput} = useContext(InputContext)
    return(
        <>
         <input type="text" placeholder="Enter Username" onChange={(e) => setInput(e.target.value)}/>
          <p>{input}</p>
        </>
    )
}