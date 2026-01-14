// //without useContext
// export function ComponentD({user}){
//     return(
//         <div className="box">
//             <h1>ComponentD</h1>
//             <p>Bye {user}!</p>
//         </div>
//     )
// }

//with useContext
import { useContext } from "react"  //4
import { UserContext } from "./context"  //5
export function ComponentD(){

    const user =useContext(UserContext)  //6

    return(
        <div className="box">
            <h1>ComponentD</h1>
            <h2>Bye {user}!</h2>
        </div>
    )
}