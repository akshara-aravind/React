import UserGreeting from "./conditonl.jsx"
import {List} from "./List.jsx"
function App() {
      let fruitsAndCalories = [{id:1, name:'apple', calories:'apple'},
                            {id:2, name:'orange', calories:45},
                            {id:3, name:'banana', calories:105},
                            {id:4, name:'coconut', calories:159},
                            {id:5, name:'pineapple', calories:37}
                           ]
    let vegitables = [{id:6, name:'garlic', calories:95},
                      {id:7, name:'ginger', calories:105},
                      {id:8, name:'onion', calories:45},
                      {id:9, name:'tomato', calories:59},
                      {id:10, name:'potato', calories:47}
                    ]
  return (
    <>
       <UserGreeting name="Alexa" isLoggedIn = {true}></UserGreeting>
       {fruitsAndCalories.length >0 && <List item = {fruitsAndCalories} category = "Fruits"></List>}
       {vegitables.length > 0 ? <List item = {vegitables} category = "Vegitables"></List> : null}
       <List></List>
    </>
  )
}

export default App
