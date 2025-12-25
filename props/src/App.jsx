import Student from "./props.jsx"
function App() {

  return (
    <>
    <Student name = 'Alexa' age = {20} isStudent = {true}></Student>
    <Student name = 'Alex' age = {23} isStudent = {false}></Student>
    <Student></Student>
    <Student age = {26}></Student>
    </>
  )
}

export default App
