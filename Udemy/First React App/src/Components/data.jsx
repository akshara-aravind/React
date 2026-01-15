
// import { useEffect } from "react";
import { useState } from "react";

function Aduvice(){
    const [advice,setAdvice] = useState('')
    const [count,setCount] = useState(0)
    async function getAdvice(){
        const res = await fetch('https://api.adviceslip.com/advice');
        const data = await res.json()
        setAdvice(data.slip.advice)
        setCount(c => c+1)
    }
    // useEffect(() => {
    //     getAdvice()
    // },[])
    return(
        <div style={{display:'flex',flexDirection:'column',alignItems:"center"}}>
             <h2>{advice || 'Random Advice!'}</h2>
             <button onClick={getAdvice}>Advice</button>
             <Message count={count}/>
        </div>
    )
}
export default Aduvice

function Message({count}){
    return(
        <p>You have read <strong style={{fontSize:'18px'}}>{count}</strong> pieces of advice.</p>
    )
}