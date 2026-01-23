import { useContext } from "react"
import { GlobalContext } from "./context"

export default function ChildToggle(){
    const {setIsToggle} = useContext(GlobalContext)
   return(
    <div>
        <button className="bg-black rounded-xl p-5 shadow" onClick={()=>setIsToggle((prev)=> !prev)}>Toggle state</button>
    </div>
   )
}