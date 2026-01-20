import Star from "./Components/Star"
import StarRating from "./Components/StarRating"
function App() {

  return (
    <>
     <StarRating maxRating={10}/>
     <StarRating maxRating={5}/>
     <StarRating />
    </>
  )
}

export default App
