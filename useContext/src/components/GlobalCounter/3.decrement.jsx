import { useContext } from "react";
import { Counter } from "../context";
import { Reset } from "./4.reset";
export function Decrement(){
   const {count,setCount} = useContext(Counter)
   return(
    <>
      <button onClick={() => setCount(count-1)}>Decrement</button>
      <Counter.Provider value={{setCount}}>
        <Reset></Reset>
      </Counter.Provider>
    </>
   )
}