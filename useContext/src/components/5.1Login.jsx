import { useState } from "react";
import { IsLoginContext } from "./context";
import { LoginBtn } from "./5.2Status";
export function IsLoggedIn(){
    const [logIn,setLogIn] = useState(false)
    return(
        <div>
            <IsLoginContext.Provider value={{logIn,setLogIn}}>
               <LoginBtn></LoginBtn>
            </IsLoginContext.Provider>
        </div>
    )
}