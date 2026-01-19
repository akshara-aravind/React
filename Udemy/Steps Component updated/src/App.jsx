import { useState } from "react";
import Button from "./components/button";
import StepMessage from "./components/stepMessage";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
 const [step,setStep] = useState(1)
 const [isOpen,setOpen] = useState(true) // another useState for display
 function handlePrevious(){
   if(step > 1) 
    setStep(s => s-1)
 }
 function handleNext(){
   if(step < 3) 
    setStep(s => s+1)
 }
  return (
 <>
   <button onClick={() => setOpen(!isOpen)} className="close">&times;</button>
   {isOpen && (   //conditional rendering
    <div className="steps">
       <div className="numbers">
          <div className={step >= 1?'active':''}>1</div>
          <div className={step >= 2?'active':''}>2</div>
          <div className={step >= 3?'active':''}>3</div>
        </div>

        {/* <p className="message">Step {step}: {messages[step-1]}</p> */}
        <StepMessage step={step}>
          {messages[step-1]}
          <div className="buttons">
            <Button 
            onClick={()=> alert(`Learn how to ${messages[step-1]}`)}
            bg='#efefef'
            textColor='#333'
            >Learn how</Button>
          </div>
        </StepMessage>
        <div className="buttons">
          {/* content passing in children */}
        <Button  onClick={handlePrevious} bg='#7950f2' textColor='#fff'>
          <span>👈</span>
          Previous
        </Button>
        <Button  onClick={handleNext} bg='#7950f2' textColor='#fff'>
          Next
          <span>👉</span>
        </Button>
          {/* <button onClick={hanalePrevious} style={{backgroundColor:'#7950f2', color:'#fff'}}>Previous</button>
          <button onClick={hanaleNext} style={{backgroundColor:'#7950f2', color:'#fff'}}>Next</button> */}
        </div>
    </div> 
   )}
  </>
  )
}

export default App
