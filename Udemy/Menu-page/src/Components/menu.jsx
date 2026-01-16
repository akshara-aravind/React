import { Items } from "./Item.jsx"
//Images
import Img1 from "../assets/focaccia.jpg"
import Img2 from "../assets/margherita.jpg"
import Img3 from "../assets/spinaci.jpg"
import Img4 from "../assets/funghi.jpg"
import Img5 from "../assets/salamino.jpg"
import Img6 from "../assets/prosciutto.jpg"
export function Menu(){
 const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: `${Img1}`,
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: `${Img2}`,
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: `${Img3}`,
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: `${Img4}`,
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: `${Img5}`,
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: `${Img6}`,
    soldOut: false,
  },
];

const pizzas = pizzaData;
// const pizzas = []
const numPizzas = pizzas.length
return(
  <main className="menu">
    <h2>Our Menu</h2>
  {/* {numPizzas > 0 && (    //CONDITIONAL OPERATOR
    <ul className="pizzas">
      {pizzas.map((pizza) =>(
        <Items key ={pizza.name} pizzaObj={pizza}></Items>
      ))}
    </ul>
    )} */}
  {numPizzas > 0 ? (     //TERNORY OPERATOR
    <>
      <p>Authentic Italic cuisine. 6 creative dishes to choose from. All 
        from our stone oven, all organic, all delicious.
      </p>
      <ul className="pizzas">
        {pizzas.map((pizza) =>(
          <Items key ={pizza.name} pizzaObj={pizza}></Items>
        ))}
      </ul>
    </>
    ):<p>we're still working on out menu. Please come back later :)</p>}
    {/* <Items name='Focaccia' ingredients ='Bread with italian olive oil and rosemary' price={12} photoName={Img1}/>
    <Items name='Pizza Margherita' ingredients ='Tomato and mozarella' price={17} photoName={Img2}/>
    <Items name='Pizza Spinaci' ingredients ='Tomato, mozarella, spinach, and ricotta cheese' price={15} photoName={Img3}/>
    <Items name='Pizza Funghi' ingredients ='Tomato, mozarella, mushrooms, and onion' price={15} photoName={Img4}/>
    <Items name='Pizza Salamino' ingredients ='Tomato, mozarella, and pepperoni' price={18} photoName={Img5}/>
    <Items name='Pizza Prosciutto' ingredients ='Tomato, mozarella, ham, aragula, and burrata cheese' price={18} photoName={Img6}/> */}
  </main>
)
}