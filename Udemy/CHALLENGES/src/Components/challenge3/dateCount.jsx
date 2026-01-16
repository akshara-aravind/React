import { useState } from "react"

export default function DateCount(){
  const [step,setStep] = useState(1)
  const [count,setCount] = useState(0)

  let date = new Date()
  date.setDate(date.getDate()+count)
    return(
        <>
            <div style={{display:'flex',alignItems:"center",justifyContent:'center'}}>
                <button onClick={() => setStep(s => s-1)}>-</button>
                <h2>Step:{step}</h2>
                <button onClick={() => setStep(s => s+1)}>+</button>
            </div>
            <div style={{display:'flex',alignItems:"center",justifyContent:'center'}}>
                <button onClick={() => setCount(c => c-step)}>-</button>
                <h2>count:{count}</h2>
                <button onClick={() => setCount(c => c+step)}>+</button>
            </div>
            <p style={{textAlign:"center"}}>
            <span>
                <strong>
                    {count === 0? 'Today is '
                                 :count > 0 ? `${count} days from today is `
                                 :`${Math.abs(count)} days ago was ` }
                </strong>
            </span>
            <span><strong>{date.toDateString()}</strong></span>
            </p>
        </>
    )
}