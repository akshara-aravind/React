import { useState } from "react";

function Count(){
    const [count,setCount] = useState(0)
    return(
        <>
        <h2>{count}</h2>
        <button onClick={() => setCount(count+1)}>Increment</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count-1)}>Decrement</button>
        </>
    )
}
export default Count