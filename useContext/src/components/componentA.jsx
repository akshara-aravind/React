// //without useContext
// import { useState } from "react"
// import { ComponentB } from "./componentB"
// export function ComponentA(){
//     const [user,setUser] = useState('Alexa')
//     return(
//         <div className="box">
//             <h1>ComponentA</h1>
//             <h2>{`Hello ${user}`}</h2>
//             <ComponentB user={user}></ComponentB>
//         </div>
//     )
// }

//with useContext
import { useState} from "react" // 1
import { ComponentB } from "./componentB"
import { UserContext } from "./context"
// export const UserContext = createContext(); // 2 

export function ComponentA(){
    // const [user,setUser] = useState('Alexa') // there is an warning for setUser bcz not use this anywhere so avoid this
    const [user] = useState('Alexa')
    return(
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>  
                <ComponentB></ComponentB> 
            </UserContext.Provider> 
        </div>
    )
}
