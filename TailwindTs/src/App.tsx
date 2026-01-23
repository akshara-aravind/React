import ProfileCard from "./Components/profile"
import InputPreview from "./Components/inputPreview"
import Food from "./Components/Recipe/Recipe"
import About from "./Components/Recipe/about"
import TypedButton from "./Components/typedButton"
import Status from "./Components/status"


function App() {


  return (
    <>
      {/* <Counter /> */}
      {/* <div className="grid sm:grid-cols-2  md:grid-cols-3">
        <ProfileCard name='Alexa' age={20} isOnline={true}/>
        <ProfileCard name='Alen' age={25} isOnline={false}/>
        <ProfileCard name='Alen' age={25} isOnline={false}/>
      </div> */}

      {/* profile card with child */}
      {/* <ProfileCard name='Vax' age={23} isOnline={true}>
         <h2>This is Children passing in TS</h2>
      </ProfileCard> */}
        {/* <InputPreview /> */}
        <div className="backgroundImg">
        <Food />
        <About />
        </div>
        {/* <TypedButton label='Submit' varient='primary'/>
        <TypedButton label='Submit' varient='secondary'/> */}

        {/* with union */}
        {/* <Status status="success" />
        <Status status="failed" />
        <Status status="error" /> */}
    </>
  )
}

export default App
