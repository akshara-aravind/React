import Star from "./Components/Star"
import StarRating from "./Components/StarRating"
import Test from "./Components/test"
function App() {
  
  return (
    <>
     <StarRating maxRating={5} messages={['Terrible','Bad','Okay','Good','Amazing']}/>
     <StarRating size={30} color="brown" defaultRating ={2} />
     <Test />
    </>
  )
}

export default App
