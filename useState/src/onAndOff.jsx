import React, {useState} from "react";

function Onoff(){
  const [isOn,setIsOn] = useState(false)

  function toggle(){
    setIsOn(!isOn)
  }
  return(
    <>
      <p>Status:{isOn?"ON":'OFF'}</p>
      <button onClick={toggle}>{isOn?"Trun OFF":'Turn ON'}</button>
    </>
  )
}
export default Onoff