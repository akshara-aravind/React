import { useState } from "react"
export function DisplayName(){
    const [text,setText] = useState('');
    return(
        <>
          <input type="text" placeholder="Enter name..." onChange={(e) => setText(e.target.value)} />
          <span>{text}</span>
        </>
    )
}

export function UpperCaseConverter(){
    const [upper,setUpper] = useState('')
    return(
        <>
          <input type="text" placeholder="Type here..." onChange={(e) => setUpper(e.target.value)}/>
          <p>{upper.toUpperCase()}</p>
        </>
    )
}

export function CharacterCounter(){
    const [character,setCharCount] = useState(0)
    return(
        <>
         <input type="text" placeholder="Type here show count..." onChange={(e) => setCharCount(e.target.value)} />
         <p>{character.length}</p>
        </>
    )
}

export function PasswordLength(){
    const [password,setPasswordLength] = useState(0)
    return(
        <>
         <input type="password" placeholder="Enter password" onChange={(e) => setPasswordLength(e.target.value)}/>
         <p>Password length:{password.length}</p>
        </>
    )
}

//combine 2 input value
export function Combine(){
    const [first,setFirst] = useState('')
    const [second,setSecond] = useState('')

    return(
        <>
         <input type="text" placeholder="Enter first name..." onChange={(e) => setFirst(e.target.value)}/>
         <input type="text" placeholder="Enter second name..." onChange={(e) => setSecond(e.target.value)}/>
         <p>{first} {second}</p>
        </>
    )
}

//input number show squre
export function Squre(){
    const [num,setSqure] = useState(0)
    return(
        <>
         <input type="number" placeholder="Enter number..." onChange={(e) => setSqure(e.target.value)}/>
         <p>{num*2}</p>
        </>
    )

}

//email validation: show valid if input contains '@' else 'Invlaid'
export function EmailValidation(){
    const [email,setEmail] = useState('')
    return(
        <>
         <input type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
         <p>{email.includes('@') ? 'Valid':'Invalid'}</p>
        </>
    )
}

//word limit
export function WordLimit(){
    const [word,setWord] = useState('')
    return(
        <>
         <input type="text" onChange={(e) => setWord(e.target.value.slice(0,10))}/>
         <p>{word}</p>
        </>
    )
}

//input typed color changed the text color
export function TextcolorChange(){
    const [color,setColor] = useState('')

    return(
        <>
         <input type="text" placeholder="Enter color..." onChange={(e) => setColor(e.target.value)}/>
         <p style={{color}}>Change color</p>
        </>
    )
}

//fontSize increases
export function IncrementFontSize(){
    const [size,setSize] = useState(20)
    return(
        <>
        <p style={{fontSize:size}}>This is the Text</p>
          <button onClick={() => setSize(size+2)}>+</button>
          <button onClick={() => setSize(size-2)}>-</button>
        </>
    )
}