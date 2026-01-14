import { useContext } from "react";
import { IsLoginContext } from "./context";
import { Dashboard } from "./5.3Dashboard";
export function LoginBtn(){
    const {logIn,setLogIn} = useContext(IsLoginContext)
    return(
        <div>
            <h2>{logIn ? 'welcome User':'Please Login'}</h2>
            <button onClick={() => setLogIn(!logIn)}>{logIn ? 'Logout':'LogIn'}</button>
            {logIn && <Dashboard />}
        </div>
    )
}