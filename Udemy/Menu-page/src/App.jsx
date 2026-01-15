import { Header } from "./Components/header.jsx"
import { Menu } from "./Components/menu.jsx"
import { Footer } from "./Components/footer.jsx"

//images
import Img1 from "./assets/focaccia.jpg"
import Img2 from "./assets/margherita.jpg"
import Img3 from "./assets/spinaci.jpg"
import Img4 from "./assets/funghi.jpg"
import Img5 from "./assets/salamino.jpg"
import Img6 from "./assets/prosciutto.jpg"


function App() {
  const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: {Img1},
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: {Img2},
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: {Img3},
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: {Img4},
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: {Img5},
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: {Img6},
    soldOut: false,
  },
];
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

export default App
