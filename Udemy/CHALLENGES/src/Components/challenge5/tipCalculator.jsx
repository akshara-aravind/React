import BillInput from "./billInput"
import SelectPercentage from "./selectPercentage"
import OutPut from "./outPut"
import { useState } from "react"
export default function TipCalculator(){
  function handleReset(){
    setBill('')
    setValue1(0)
    setValue2(0)
  }
  const [bill,setBill] = useState('')
  const [value1,setValue1] =useState(0)
  const [value2,setValue2] =useState(0)
  const tip = bill * ((value1+value2) / 2 / 100)
    return(
        <div>
          <BillInput bill={bill} onSetBill ={setBill}/>
          <SelectPercentage onSetValue={setValue1}>How did you like the service?</SelectPercentage>
          <SelectPercentage  onSetValue={setValue2}>how did you friend like the service?</SelectPercentage>
          {bill > 0 && <OutPut bill={bill} tip={tip} onBtn={handleReset}/>}
        </div>
    )
}