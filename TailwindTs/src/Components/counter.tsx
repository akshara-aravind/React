import { useState } from "react"

export default function Counter(){
      const [count, setCount] = useState<number>(0)
    return(
        <div>
            <h1 className="text-3xl text-center m-5">{count}</h1>
            <div className="flex justify-center">
                <button className='bg-counterBackground p-2 rounded mr-2 hover:scale-110 transition-all duration-300' onClick={() => setCount(c=> c+1)}>Increment</button>
                <button className="bg-counterBackground p-2 rounded mr-2 hover:scale-110 transition-all duration-300" onClick={() => setCount(0)}>Reset</button>
                <button className="bg-counterBackground p-2 rounded mr-2 hover:scale-110 transition-all duration-300" onClick={() => setCount(c => c-1)}>Decrement</button>
            </div>
        </div>
    )
}