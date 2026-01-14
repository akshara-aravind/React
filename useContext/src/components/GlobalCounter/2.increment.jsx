import { useContext } from "react";
import { Counter } from "../context";
import { Decrement } from "./3.decrement";
export function Increment(){
    const {count,setCount} = useContext(Counter)
    return(
        <>
          <button onClick={() => setCount(count+1)}>Increment</button>
          <Counter.Provider value={{count,setCount}}>
            <Decrement></Decrement>
          </Counter.Provider>
        </>
    )
}