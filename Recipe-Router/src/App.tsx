import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"

import Recipes from "./pages/recipes"
import Details from "./pages/details"
import NotFound from "./pages/notFound"

function App() {
  return (
    <>
      <BrowserRouter>
      
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="details" element={<Details />} />
          <Route path="*" element={<NotFound />} />
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
