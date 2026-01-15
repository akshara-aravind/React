import { Items } from "./Item.jsx"
import Img1 from "../assets/focaccia.jpg"
import Img2 from "../assets/margherita.jpg"
import Img3 from "../assets/spinaci.jpg"
import Img4 from "../assets/funghi.jpg"
import Img5 from "../assets/salamino.jpg"
import Img6 from "../assets/prosciutto.jpg"
export function Menu(){

return(
  <main className="menu">
    <h2>Our Menu</h2>
    <Items name='Focaccia' ingredients ='Bread with italian olive oil and rosemary' price={12} photoName={Img1}/>
    <Items name='Pizza Margherita' ingredients ='Tomato and mozarella' price={17} photoName={Img2}/>
    <Items name='Pizza Spinaci' ingredients ='Tomato, mozarella, spinach, and ricotta cheese' price={15} photoName={Img3}/>
    <Items name='Pizza Funghi' ingredients ='Tomato, mozarella, mushrooms, and onion' price={15} photoName={Img4}/>
    <Items name='Pizza Salamino' ingredients ='Tomato, mozarella, and pepperoni' price={18} photoName={Img5}/>
    <Items name='Pizza Prosciutto' ingredients ='Tomato, mozarella, ham, aragula, and burrata cheese' price={18} photoName={Img6}/>
  </main>
)
}