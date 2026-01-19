import { useState } from "react"

export default function UpdateDateCount(){
    const [count,setCount] = useState(0)
    const [step,setStep] = useState(1)

    let date = new Date()
    date.setDate(date.getDate()+count)
    return(
        <div style=
        {{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column"
        }}>
           <div style={{display:"flex"}}>
                <input type="range" 
                    min={0} max={10} 
                    value={step} 
                    onChange={(e) => setStep(Number(e.target.value))}
                />
                <div style={{display:"flex",alignItems:'center',justifyContent:"center"}}>
                    <h2>{step}</h2>
                </div>
            </div>
           <div>
              <button onClick={() => setCount(c => c-step)}>-</button>
              <input type="number" id="input" 
                value={count} 
                onChange={(e) => setCount(Number(e.target.value))}/>
              <button onClick={() => setCount(c =>c+step)}>+</button>
           </div>
           <p>
            <strong>
                <span>
                    {count === 0 ? 'Today is ' : count > 0 ? `${count} days from today is ` :`${Math.abs(count)} days ago was `}
                </span>
                <span>{date.toDateString()}</span>
            </strong>     
           </p>
           {count !== 0 || step !== 1 ? (
            <button onClick={() => {
                setCount(0)
                setStep(1)
            }}>Reset</button>
           ):null}
        </div>
    )
}