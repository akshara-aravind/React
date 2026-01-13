import { useState, useEffect } from "react";

export function ColorPicker(){
    const [color,setColor] = useState('#FFFFFF')
    return(
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'5px'}}>
            <h2>Color Picker</h2>
            <div style={{width:'200px',height:'200px',background:color,display:"flex",alignItems:'center',justifyContent:'center',borderRadius:'8px',marginBottom:'10px',border:'1px solid', padding:'2px'}}>
                <p>Color:{color}</p>
            </div>
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        </div>
    )
}

export function ChangeFontSize(){
    const [size,setSize] = useState(16)
    return(
        <div>
            <h2>Resize Font</h2>
            <p style={{fontSize:size+'px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit fuga atque nihil similique placeat amet officia deserunt odit voluptate excepturi doloribus, magnam, dolor labore? Iure tempore quam eius ab nesciunt.</p>
            <button onClick={() => setSize(size-1)}>Decrement</button>
            <button onClick={() => setSize(size+1)}>Increment</button>
        </div>
    )
}

export function ChangeBackGround(){
    const [background,setBackground] = useState('white')
    useEffect(() =>{
       document.body.style.backgroundColor = background
    })
    function randomBg(){
        const hex = "#" + Math.floor(Math.random()*16777215).toString(16)
        setBackground(hex)
    }
    return(
        <div>
            <button onClick={randomBg}>Change BackGround</button>
        </div>
    )
}