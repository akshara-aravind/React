import Logo from "./Components/logo";
import Form from "./Components/form";
import PackingList from "./Components/packingList";
import Status from "./Components/status";
import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

function App() {
  const [items, setItem] = useState(initialItems);
  function handleAddItems(item) {
    setItem((items) => [...items, item]);
  }
  function handleDeleteBtn(id) {
    setItem((items) => items.filter((el) => el.id !== id));
  }
  function handleToggleItem(id){
    setItem((items) => items.map((item)=> item.id === id ? {...item, packed : !item.packed}:item))
  }
  function handleClearItems(){
    const confirmed = window.confirm('Are you sure you want to delete all items?');
    if(confirmed) setItem([])
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteBtn} onToggle ={handleToggleItem} onClearItems ={handleClearItems}/>
      <Status items ={items}/>
    </div>
  );
}

export default App;
