import { useEffect } from "react";
import { RecipeContext } from "./context";
import { useContext } from "react";
export function Recipes(){
    const {input} = useContext(RecipeContext)
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    },[input])
}