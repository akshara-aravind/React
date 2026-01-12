import React, {useState,useEffect} from "react";

function DigitalClock(){
    const [time,setTime] = useState(new Date())

    useEffect(() =>{
      const intervalId = setInterval(() => {
          setTime(new Date());
      },1000)
      return () =>{
        clearInterval(intervalId)
      }
    },[])

    function formateTime(){
        let hours = time.getHours()
        let minutes =time.getMinutes()
        let seconds = time.getSeconds()
        let meridian = hours >= 12 ? 'PM':'AM'
        hours = hours % 12 || 12

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridian}`
    }
    function padZero(num){
        return (num<10? '0':'') + num
    }
 return(
    <div className="clock_container">
        <p>{formateTime()}</p>
    </div>
 )
}
export default DigitalClock