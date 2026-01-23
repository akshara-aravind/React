import { useEffect, useRef } from "react"

export default function RefExample(){
    const ref = useRef(0)
    function handleClick(){
        ref.current++;
        console.log(ref.current)
    }
    useEffect(() => {
        console.log('COMPONENT RENDERED')
    })
    return(
        <div className="flex flex-col justify-center items-center bg-black min-h-screen text-white">
           <button className ='border p-3 rounded ' onClick={handleClick}>Click me!</button>
           
        </div>
    )
}