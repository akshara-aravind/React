import Button from "./button";

export default function ListOfFriends({initialFriends,onSelectedFriend}){
    
    return(
        <ul>
           {initialFriends.map((items)=>(
            <li key={items.id}>
              <img src={items.image} alt={items.name} />
              <h3>{items.name}</h3>
              {items.balance < 0 && (<p className="red">You owe {items.name} {Math.abs(items.balance)} €</p>)}
              {items.balance > 0 && (<p className="green"> {items.name} owes you {items.balance} €</p>)}
              {items.balance === 0 && (<p>You and {items.name} are even</p>)}
              <Button onClick={onSelectedFriend}>Select</Button>
            </li>
           ))}
        </ul>
    )
}