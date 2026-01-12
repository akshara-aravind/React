import { useState } from "react";

export function AddItem(){
    const [input,setInput] = useState('')
    const [list,setList] = useState([])

    function addBtn(){
        if(input.trim() !== ''){
            setList([...list,input])
            setInput('')
        }
    }
    return(
        <>
         <input type="text" placeholder="Type here..." value={input} onChange={(e) => setInput(e.target.value)}/>
         <button onClick={addBtn}>Add</button>
         <ul>
            {list.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
         </ul>
        </>
    )
}