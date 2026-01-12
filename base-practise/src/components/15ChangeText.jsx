import { useState } from "react";

function ChangeText(){
    const [changeText,setText] = useState('Welcome')

    return(
        <>
          <p>{changeText}</p>
          <button onClick={() => setText(changeText === 'Welcome'?"Bye...":'Welcome')}>Click here</button>
        </>
    )
}
export default ChangeText