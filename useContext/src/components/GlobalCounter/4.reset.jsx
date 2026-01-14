import { useContext } from "react";
import { Counter } from "../context";
export function Reset(){
     const {setCount} =useContext(Counter)
     return(
        <>
          <button onClick={() => setCount(0)}>Reset</button>
        </>
     )
}