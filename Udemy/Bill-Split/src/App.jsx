import ListOfFriends from "./components/ListofFriends"
import FormAddFriend from "./components/formAddFriend";
import FormSplitBill from "./components/formSplitBill";
import Button from "./components/button";
import { useState } from "react";
    const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function App() {
 const [showAddFriend,setShowAddFriend] = useState(false)
 const [friends,setFriends] = useState(initialFriends)
//  selectButton
const [selectedFriend,setSelectedFriend] = useState(null)
 function handleShowAddFriend(){
  setShowAddFriend(!showAddFriend)
 }
 function handleAddFriend(friend){
  // setFriends([...friends,friend])
  setFriends((frnds)=>[...frnds,friend])
  setShowAddFriend(false)
 }
 function handleSelection(friend){
  setSelectedFriend(friend)
 }
  return (
    <div className="app">
      <div className="sidebar">
        <ListOfFriends initialFriends={friends}  onSelectedFriend={handleSelection}/>

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend}/>}
        <Button onClick={handleShowAddFriend} >{showAddFriend ? 'Close':'Add friend'}</Button>
      </div>
      {selectedFriend && <FormSplitBill />}
    </div>
  )
}

export default App
