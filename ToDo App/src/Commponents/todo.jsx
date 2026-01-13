// import { useState} from "react";

// export function Todo(){
//     const [input,setInput] = useState('')
//     const [list,setList] = useState([])

    // function addItem(){
    //     if(input.trim() !== ''){
    //         setList([...list,{text:input,done:false}])
    //         setInput('')
    //     }
    // }
//     return(
//         <>
        // <h1>ToDo App</h1>
        //  <div>
        //  <input className ="itemInput" type="text" placeholder="Enter Task..." value = {input} onChange={(e) => setInput(e.target.value)}/>
        //  <button onClick = {addItem}>Add</button>
        //  </div>
        //  <ul>
        //     {list.map((item,index)=>(
        //         <li key={index}>
        //             <input className={`todoInput ${item.done ? 'checked':''}`} type="text" value={item.text} readOnly/>
        //             <input type="checkbox" checked={item.done} onChange={() =>{
        //                 const updated = [...list]
        //                 updated[index].done = !updated[index].done
        //                 setList(updated)
        //             }}/>
        //             <button className="deleteBtn" onClick={() =>{
        //                 const updated = list.filter((item,i) => i !== index)
        //                 setList(updated)
        //             }}>Delete</button>
        //         </li>
        //     ))}
        //  </ul>
//         </>
//     )
// }

import { useState,useEffect } from "react";

export function Todo(){
    const [input,setInput] = useState('')
    const [list,setList] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(res => res.json())
        .then(data => {
            setList(data)
        })
    },[])
    function addItem(){
        if(input.trim() !== ''){
            setList([...list,{text:input,completed:false}])
            setInput('')
        }
    }
    return(
        <>
         <h1>ToDo App</h1>
         <div>
         <input className ="itemInput" type="text" placeholder="Enter Task..." value = {input} onChange={(e) => setInput(e.target.value)}/>
         <button onClick = {addItem}>Add</button>
         </div>
         <ul>
            {list.map((item,index) => {
                return(
                <li key={index}>
                    <input type="text" className={`todoInput ${item.completed ? 'checked':''}`} value={item.title || item.text} readOnly/>
                    <input type="checkbox" checked ={item.completed} onChange={() => {
                        const updated = [...list]
                        updated[index].completed = !updated[index].completed
                        setList(updated)
                    }}/>
                    <button className="deleteBtn" onClick={() => {
                         const updated = list.filter((item,i) => i !== index)
                        setList(updated)
                    }}>Delete</button>
                </li>
                )
            })}
         </ul>
        </>
    )
}