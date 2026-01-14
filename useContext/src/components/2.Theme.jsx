import {  useState,useEffect } from "react";
import { NavBar } from "./2.navbar";
import { ThemeContext } from "./context";


export function Theme(){
    const [theme,setTheme]=useState('light')
    useEffect(() =>{
        document.body.style.backgroundColor = theme === 'light' ? '#ffffff':'#121212'
    },[theme])
    return(
        <>
         <ThemeContext.Provider value ={{theme,setTheme}}>
            <NavBar></NavBar>
         </ThemeContext.Provider>
        </>
    )
}