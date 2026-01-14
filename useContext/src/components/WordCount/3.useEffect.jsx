import { useEffect } from "react";
import { useContext } from "react";
import { InputCountContext } from "../context";
export function ValueChanges(){
    const {input} = useContext(InputCountContext)
  useEffect(() => {
      if(input.trim() !== ''){
        console.log('Input value changed:',input)
      }
  },[input])  
}