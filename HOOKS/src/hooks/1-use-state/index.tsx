import { useState } from "react"

export default function StateExample(){
    const [count,setCount] = useState<number>(0)

 
    return(
        <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center">
             <h1 className="text-8xl mb-10">{count}</h1>
             <div>
                <button onClick={() => setCount((prev)=>prev-1)} className="border border-white rounded p-2 mr-2">Decrement</button>
                <button onClick={() => setCount(0)} className="border border-white rounded p-2 mr-2">Reset</button>
                <button onClick={() => setCount((prev)=> prev+1)} className="border border-white rounded p-2 mr-2">Increment</button>
            </div>
        </div>
    )
}