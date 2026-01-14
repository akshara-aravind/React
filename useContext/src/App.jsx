import { ComponentA } from "./components/componentA"
import { Theme } from "./components/2.Theme"
import { Login } from "./components/3.login"
import { Language } from "./components/4.LangTranslate"
import { IsLoggedIn } from "./components/5.1Login"
import { CounterContext } from "./components/GlobalCounter/1.counter"
import { Input } from "./components/Input/1.input"
import { InputCountFn } from "./components/WordCount/1.input"
function App() {


  return (
    <>
      {/* <ComponentA></ComponentA> */}
      {/* <Theme></Theme> */}
      {/* <Login></Login> */}
      <Language></Language>
      <IsLoggedIn></IsLoggedIn>
      <CounterContext />
      <Input></Input>
      <InputCountFn />
    </>
  )
}

export default App