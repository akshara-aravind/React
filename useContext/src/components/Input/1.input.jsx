import { useState } from "react";
import { InputContext } from "../context";
import { InputValue } from "./2value";
import { InputChange } from "./3.useEffect";
export function Input(){
    const [input,setInput] = useState('')
    return(
        <>
        <h2>Input Value Display</h2>
         <InputContext.Provider value={{input,setInput}}>
           <InputValue />
           <InputChange />
         </InputContext.Provider>
        </>
    )
}