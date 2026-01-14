import { useContext } from "react";
import { InputContext } from "../context";
import { useEffect } from "react";

export function InputChange(){
    const {input} = useContext(InputContext)
    useEffect(() => {
        if(input.trim() !== ''){
            console.log('Input value changed:',input)
        }
    },[input])  
}