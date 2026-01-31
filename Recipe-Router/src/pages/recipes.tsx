import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
export type RecipesType = {
    idMeal:string;
    strMealThumb:string;
    strMeal:string;
}
export default  function Recipes(){
    const [input,setInput] = useState<string>('')
    const [query,setQurey] = useState<string>('')
    const [data,setData] = useState<RecipesType[]>([])
    const navigate = useNavigate()
    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .then((res) => {
            setData(res.data.meals)
            // console.log(res.data.meals)
        })
    },[query])
    function handleInput(e:React.ChangeEvent<HTMLInputElement>){
        e.preventDefault()
        setInput(e.target.value)
    }
    function handleClik(){
        setQurey(input)
        setInput('')
    }
    return(
        <div className="min-h-screen bg-black flex flex-col items-center gap-5">
        <h1 className="text-5xl text-bold text-center pt-5 font-[cursive] text-amber-500 drop-shadow-[0_4px_6px_rgba(0,0,0,0.7)]">Recipes...</h1>
        <div>
            <input type="text" placeholder="Enter Recipe (eg:'egg')" className="bg-white rounded-l p-3 pr-20" value={input} onChange={handleInput}/>
            <button className="p-3 rounded-r bg-green-800 text-white" onClick={handleClik}>Search</button>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 p-2 text-white">
           {data.map((item) => (
            <div key={item.idMeal} className="rounded-2xl p-5 shadow-2xl mt-4 border" onClick={() => 
                navigate(`/details`, {
                    state:{
                        data:item
                    }
                })}>
                <img className="rounded-xl" src={item.strMealThumb} alt={`image-${item.idMeal}`} />
                <h1 className="text-center text-2xl mt-3 p-4 font-[cursive]">{item.strMeal}</h1>
            </div>
           ))}
        </div>
    </div>
    )
}