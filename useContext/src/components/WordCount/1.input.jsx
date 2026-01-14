import { useState } from "react";
import { InputCountContext } from "../context";
import { InputCount } from "./2.count";
import { ValueChanges } from "./3.useEffect";
export function InputCountFn(){
    const [input,setInput] = useState('')
    return(
        <>
        <h2>Input Count:{input.length}</h2>
        <InputCountContext.Provider value={{input,setInput}}>
          <InputCount></InputCount>
          <ValueChanges></ValueChanges>
        </InputCountContext.Provider>
        </>
    )
}