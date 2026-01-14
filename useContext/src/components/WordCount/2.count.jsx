import { useContext } from "react"
import { InputCountContext } from "../context"
export function InputCount(){
  const {input,setInput} = useContext(InputCountContext)
  return(
    <>
     <input type="text" placeholder="Type here..." value={input} onChange={(e) => setInput(e.target.value)}/>
    </>
  )
}