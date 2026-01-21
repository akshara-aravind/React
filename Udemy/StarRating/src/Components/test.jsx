import { useState } from "react"
import StarRating from "./StarRating"
export default function Test(){
const [movieRating,setMovieRating] =useState(0)
  return(
    <div>
      <StarRating color="grey" maxRating={10} onSetRating={setMovieRating}></StarRating>
      <p>This movies was rated {movieRating} stars</p>
    </div>
  ) 
}