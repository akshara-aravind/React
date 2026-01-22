import { useState } from "react"

export default  function InputPreview(){
    const [input ,setInput] = useState('')
    
    function handleEvent(e:React.ChangeEvent<HTMLInputElement>){
        setInput(e.target.value)
    }
    return(
        <div>
            <input className='border m-4' type="text" placeholder="Enter ...." onChange={(e) =>handleEvent(e)}/>
            <p className="font-bold">{input}</p>
        </div>
    )
}