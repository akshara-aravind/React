import { useState } from "react";
import { RecipeContext } from "./context";
import { Recipes } from "./content";
export function RecipeInput(){
    const [input,setInput] = useState('')
    return(
        <div className="container">
        <h2 className="heading">Recipe Finder</h2>
        <div>
            <input type="text" placeholder='Enter Recipe(eg:"chicken")' onChange={(e) => setInput(e.target.value)} />
            <button className="findBtn">Find</button>
        </div>
         <RecipeContext.Provider value={{input,setInput}}>
           <Recipes></Recipes>
         </RecipeContext.Provider>
        </div>
    )
}