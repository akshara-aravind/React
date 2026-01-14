import { useState } from "react";
import { Nav } from "./3.navbar";
import { LoginContext } from "./context";

export function Login(){
    const [user,setUser] = useState('')
    return(
        <>
           <LoginContext.Provider value={{user,setUser}}>
              <Nav></Nav>
                <input type="text" placeholder="Enter Username" onChange={(e) => setUser(e.target.value)}/>
           </LoginContext.Provider>
        </>
    )
}