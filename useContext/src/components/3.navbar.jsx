import { useContext } from "react";
import { LoginContext } from "./context";
export function Nav(){
    const {user} = useContext(LoginContext)
    return(
        <>
         <h2>{user?`welcome ${user}`:`Guest user`}</h2>
        </>
    )
}