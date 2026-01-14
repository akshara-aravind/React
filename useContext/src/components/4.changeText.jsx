import { useContext } from "react";
import { LangContext } from "./context";

export function ChangeText(){
 const {lang} = useContext(LangContext)
  
 return(
    <>
      <h2>Select An Language</h2>
      {lang === 'English' && 'English'}
      {lang === 'Hindi' && '"हिंदी"'}
      {lang === 'Malayalam' && "മലയാളം"}
    </>
 )
 
}