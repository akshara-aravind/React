import { useState } from "react"
import ChildToggle from "./2-index"
import ChildDisplay from "./3-index"
import { GlobalContext } from "./context"
export default function ContextExample(){
    const [isToggle,setIsToggle] = useState<boolean>(false)
    return(
        <div className="min-h-screen bg-slate-900 text-white flex flex-col gap-4 justify-center items-center">
            <h1 className="text-5xl font-bold ">Parent Component</h1>
            <GlobalContext.Provider value={{isToggle,setIsToggle}}>
                <ChildToggle />
                <ChildDisplay />
            </GlobalContext.Provider>
        </div>
    );
}