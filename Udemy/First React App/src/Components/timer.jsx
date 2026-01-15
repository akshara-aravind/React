import { useEffect } from "react"
import { useState } from "react"

function Timer(){
   const [time,setTime] = useState(new Date().toLocaleTimeString())

   useEffect(() =>{
      setInterval(() =>{
        setTime(new Date().toLocaleTimeString())
      },1000)
   },[])
    return(
        <>
          <h3>Hello React! It's {time}</h3>
        </>
    )
}
export default Timer 