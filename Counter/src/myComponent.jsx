import React, {useState} from "react"
function Mycomponent(){
   const [name,setName] = useState('Guest');
   const [age,setAge] = useState(0)
   const [isEmployed,setEmployed] = useState(false)

   const udateName = () =>{
    setName('Alexa')
   }

   const IncrementAge = () =>{
    setAge(age+1)
   }

   const toggleEmployedStatus = () =>{
    setEmployed(!isEmployed)
   }
   return(
    <div>
        <p>Name:{name}</p>
        <button onClick={udateName}>Set Name</button>
    
        <p>Age:{age}</p>
        <button onClick={IncrementAge}>Increment Age</button>

        <p>Is employed:{isEmployed ? 'Yes' :'No'}</p>
        <button onClick={toggleEmployedStatus}>Toggle status</button>
    </div>
   )
}
export default Mycomponent