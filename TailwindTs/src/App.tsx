import ProfileCard from "./Components/profile"
import InputPreview from "./Components/inputPreview"
import Food from "./Components/Recipe"


function App() {


  return (
    <>
      {/* <Counter /> */}
      {/* <div className="grid sm:grid-cols-2  md:grid-cols-3">
        <ProfileCard name='Alexa' age={20} isOnline={true}/>
        <ProfileCard name='Alen' age={25} isOnline={false}/>
        <ProfileCard name='Alen' age={25} isOnline={false}/>
      </div> */}
        {/* <InputPreview /> */}
        <div className="bg-[image:var(--bg-banner)] bg-cover bg-center min-h-screen">
        <Food />
        </div>
    </>
  )
}

export default App
