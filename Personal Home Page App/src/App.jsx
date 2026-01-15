import { ProfileLoginContext } from "./Components/context"
import { ProfileLogin } from "./Components/login"
import { useState } from "react"
function App() {
  const [login,setLogin] = useState('Login')
  return (
    <>
      <h2 className="heading">My React Home Page</h2>
      <div className="container">
          <h2>Login In</h2>
          <ProfileLoginContext.Provider value={{login,setLogin}}>
           <ProfileLogin></ProfileLogin>
          </ProfileLoginContext.Provider>
      </div>
    </>
  )
}

export default App
