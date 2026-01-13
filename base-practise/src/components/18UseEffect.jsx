import { useState,useEffect } from "react";

export function PageTilte(){
    const [count,setCount] = useState(0);
    useEffect(() =>{
        document.title =`Count:${count}`
    },[count])

    return(
        <>
         <h2>UseEffect Example</h2>
         <p>count:{count}</p>
         <button onClick={() => setCount(count-1)}>Decrement</button>
         <button onClick={() => setCount(0)}>Reset</button>
         <button onClick={() => setCount(count+1)}>Increment</button>
        </>
    )
}

export function ApiFetch(){
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
}

export function Timer(){
    const [time,setTime] = useState(0)
    useEffect(() =>{
        let interval = setInterval(() =>{
           setTime(t =>t+1)
        },1000)
       return() => clearInterval(interval)
    },[])
    return(
        <>
         <p>{time} sec</p>
        </>
    )
}

export function WindowResize(){
    const [width,setWidth] = useState(window.innerWidth)
    const [height,setHeight] = useState(window.innerHeight)
    
    function handleResize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }
    useEffect(() => {
        window.addEventListener('resize',handleResize);
        return(() =>{
            window.removeEventListener('resize',handleResize)
        })
    },[])
    return(
        <>
        <h2>Window Resize:</h2>
         <p>Width:{width}px</p>
         <p>Height:{height}px</p>
        </>
    )
}

