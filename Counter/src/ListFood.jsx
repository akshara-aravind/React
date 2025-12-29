import React, {useState} from "react";

function Food(){
    const [foods,setFoods] = useState(['Apple','Orange','Banana'])

    function handleAddFood(){
        const newFood = document.querySelector('.input').value;
        document.querySelector('.input').value = ''
        setFoods([...foods,newFood])
    }

    function handleRemoveFood(index){
        setFoods(foods.filter((element,i) => i !== index))
    }
   return(
    <div>
        <h2>List of Food</h2>
        <ul>
            {foods.map((food,index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
        </ul>
        <input type="text" className="input" placeholder="Enter food name"/>
        <button onClick={handleAddFood}>Add Food</button>
    </div>
   )
}
export default Food