import { useContext } from "react"
import { ThemeContext } from "./context"


export function Home(){
   const {theme,setTheme} = useContext(ThemeContext)
    return(
        <>
        <button onClick={() => setTheme(theme==='light'?'dark':'light')}>Toggle Theme</button>
        </>
    )
}