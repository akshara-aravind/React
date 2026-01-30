import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Homepage"
import Header from "./components/Header"
import Users from "./pages/users"
import Settings from "./pages/Settings"
import Usage from "./pages/usage"
import Details from "./pages/details"
import NotFound from "./pages/notFound"

export type DataType = {
  id?:number;
  name?:string;
  address?:string;
  isActive?:boolean;
  phone?:number;
  class:string;
}
function App() {
  
  return (
    <>
       <BrowserRouter>
         <Header />
         <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<Users />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/usage' element={<Usage />} />
          <Route path='/details/:userId' element={<Details />} />
          <Route path='*' element={<NotFound />} />
         </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
