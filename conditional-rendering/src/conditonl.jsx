//conditionl rendering :- allows you to control what gets renders in your applications based on certain conditions {show , hide  or  change components}

function UserGreeting({name = 'Guest',isLoggedIn = false}){
    return(
        isLoggedIn ? <h2 className="welcome">Welcome {name}</h2> : <h2 className="logIn">Please logIn to continue</h2>
    )
}

export default UserGreeting