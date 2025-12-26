//onchange:-input,textArea,select,radio
import React, {useState} from "react"
function Input(){
  const [name,setName] = useState('Guest');
  const [quantity,setQuantity] = useState();
  const [comment,setComment] = useState('')
  const [payment,setPayment] = useState('')
  const [shipping,setShipping] = useState('')

  function handleNameChange(event){
    setName(event.target.value)
  }
  function handleQuantity(event){
    setQuantity(event.target.value)
  }
  function handleCommend(event){
    setComment(event.target.value)
  }
  function handlePayment(event){
    setPayment(event.target.value)
  }
  function handleShipping(event){
    setShipping(event.target.value)
  }
  return(
    <div>
        <input value = {name} type="text" placeholder="Enter name" onChange={handleNameChange}/>
        <p>Name:{name}</p>

        <input type="number" onChange={handleQuantity}/>
        <p>Quantity: {quantity}</p>

        <textarea value={comment} onChange={handleCommend} placeholder="Enter delivery instructions"></textarea>
        <p>Comment:{comment}</p>

        <select value={payment} onChange={handlePayment}>
            <option value="">Select an option</option>
            <option value="visa">Visa</option>
            <option value="mastercard">Mastercard</option>
            <option value="giftcard">Giftcard</option>
        </select>
        <p>payment:{payment}</p>

        <label>
           <input type="radio" value={'Pick Up'} checked={shipping === 'Pick Up'} onChange={handleShipping}/>
           Pick up  
        </label><br />
        <label>
           <input type="radio" value={'Delivery'} checked={shipping === 'Delivery'} onChange={handleShipping}/>
           Delivery  
        </label>
        <p>Shipping:{shipping}</p>
    </div>
  )
}
export default Input