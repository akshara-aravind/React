import { useContext } from "react";
import { ProfileLoginContext } from "./context";
export function ProfileLogin(){
    const {login,setLogin} = useContext(ProfileLoginContext)
    return(
        <>
        <p>{login ? 'Please Login':'Welcome User'}</p>
        <button onClick={() => setLogin(!login)}>{login ? 'Logout':'Login'}</button>
        </>
    )
}