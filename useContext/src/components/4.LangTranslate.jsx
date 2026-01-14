import { useState } from "react";
import { LangContext } from "./context";
import { ChangeText } from "./4.changeText";
export function Language(){
    const [lang,setLang] = useState('')

   return(
    <>
      <LangContext.Provider value={{lang,setLang}}>
        <ChangeText></ChangeText>
        <br /><br />
        <button onClick={() => setLang('English')}>English</button>
        <button onClick={() => setLang('Hindi')}>Hindi</button>
        <button onClick={() => setLang('Malayalam')}>Malayalam</button>
      </LangContext.Provider>
    </>
   )
}