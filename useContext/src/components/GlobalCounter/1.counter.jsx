import { useState } from "react";
import { Counter } from "../context";
import { Increment } from "./2.increment";
export function CounterContext(){
    const [count,setCount] = useState(0)
    return(
        <>
        <h2>{count}</h2>
        <Counter.Provider value={{count,setCount}}>
           <Increment></Increment>
        </Counter.Provider>
        </>
    )
}