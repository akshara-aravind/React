import { useLocation, useNavigate } from "react-router-dom"
export default function Details(){

    const location = useLocation()
    const navigator = useNavigate()
    const state = location.state.data || {}
    // console.log(state)
        const Ingredient = []
      for(let i=0; i<=20;i++){
        const ingredient = state[`strIngredient${i}`] 
        const measure = state[`strMeasure${i}`]

        if(ingredient && measure.trim() !== ''){
            Ingredient.push(`${ingredient}-${measure}, `)
        }
      }
    
    return(
        <div className="min-h-screen bg-slate-200">
        <div className=" flex justify-center">
            <div className="flex flex-col justify-center bg-white max-w-1/2 h-[100%] rounded-2xl shadow-[0_4px_6px_rgba(0,0,0,0.5)] font-[cursive]">
                <h1 className="text-3xl text-center text-amber-500 font-bold mt-5">{state.strMeal}</h1>
                <img className="p-10" src={state.strMealThumb} alt={`image-${state.idMeal}`} />
                <p className="pl-3 font-bold text-2xl border-b-5 pb-5 border-green-800">Ingredients</p>
                <li className="list-none mt-5 px-5">{Ingredient}</li>
                <p className="pl-3 font-bold mt-5 text-2xl border-b-5 pb-5 border-green-800">Instructions</p>
                <li className="list-none my-5 px-5">{state.strInstructions}</li>
                <p className="pl-3 font-bold mt-5 text-2xl border-b-5 pb-5 border-green-800">Video:</p>
                <a href={`${state.strYoutube}`} className="text-xl text-indigo-700 my-5 px-5">Watch On YouTube</a>
            </div>
        </div>
        <div className="text-center">
            <button className="text-2xl p-4 text-red-500" onClick={() => navigator(-1)}><span className="text-red-500">←</span> Back</button>
        </div>
        </div>
    )
}