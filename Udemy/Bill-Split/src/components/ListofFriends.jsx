import Button from "./button";

export default function ListOfFriends({initialFriends,onSelectedFriend, selectedFriend}){
  //because of the null setting we use optional chaining (?)
  const isSelected = selectedFriend?.id === initialFriends.id
  return(
            <li  className={isSelected ? 'selected':''} >
              <img src={initialFriends.image} alt={initialFriends.name} />
              <h3>{initialFriends.name}</h3>
              {initialFriends.balance < 0 && (<p className="red">You owe {initialFriends.name} {Math.abs(initialFriends.balance)} €</p>)}
              {initialFriends.balance > 0 && (<p className="green"> {initialFriends.name} owes you {initialFriends.balance} €</p>)}
              {initialFriends.balance === 0 && (<p>You and {initialFriends.name} are even</p>)}
              <Button onClick={() => onSelectedFriend(initialFriends)}>{isSelected ? 'Close':'Select'}</Button>
            </li>
    )
}