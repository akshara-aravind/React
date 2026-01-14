// //without useContext
// import { ComponentC } from "./componentC"
// export function ComponentB({user}){
//     return(
//         <div className="box">
//             <h1>ComponentB</h1>
//             <ComponentC user={user}></ComponentC>
//         </div>
//     )
// }

//with useContext
import { ComponentC } from "./componentC"
export function ComponentB(){
    return(
        <div className="box">
            <h1>ComponentB</h1>
            <ComponentC></ComponentC>
        </div>
    )
}