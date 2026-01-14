// //without useContext
// import { ComponentD } from "./componentD"
// export function ComponentC({user}){
//     return(
//         <div className="box">
//             <h1>ComponentC</h1>
//             <ComponentD user={user}></ComponentD>
//         </div>
//     )
// }

//with useContext
import { ComponentD } from "./componentD"

//for using userContext in c
import { useContext } from "react"
import { UserContext } from "./context"
export function ComponentC(){

    const user = useContext(UserContext)
    return(
        <div className="box">
            <h1>ComponentC</h1>
            <h2>{`Hello again ${user}`}</h2>
            <ComponentD></ComponentD>
        </div>
    )
}