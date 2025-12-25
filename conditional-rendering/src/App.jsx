import UserGreeting from "./conditonl.jsx"
import {List} from "./List.jsx"
function App() {
  
  return (
    <>
       <UserGreeting name="Alexa" isLoggedIn = {true}></UserGreeting>
       <List></List>
    </>
  )
}

export default App
