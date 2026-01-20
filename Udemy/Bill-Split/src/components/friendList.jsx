import ListOfFriends from "./ListofFriends"
export default function FriendList({initialFriends, onSelectedFriend, selectedFriend}){
  return(
     <ul>
        {initialFriends.map((friend)=>(
            <ListOfFriends initialFriends={friend} key={friend.id} selectedFriend={selectedFriend} onSelectedFriend={onSelectedFriend}/>
        ))}
     </ul>
  )
}