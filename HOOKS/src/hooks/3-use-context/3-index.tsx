import { useContext } from "react"
import { GlobalContext } from "./context"
export default  function ChildDisplay(){
    const {isToggle} = useContext(GlobalContext)
    return(
        <div>
            <h1>Current State:{isToggle ? 'Yes':'NO'}</h1>
        </div>
    )
}