import nameImg from "./assets/images.png"
import emailImg from "./assets/email.png"
import passwordImg from "./assets/locked-computer.png"
function SignUp(){
    return(
        <div className="container">
           <div className="content">
                <h1>Sign Up</h1>
                <div className="inputBox">
                    <img src={nameImg} alt="man" />
                    <input type="text" placeholder="Name" required
                    />
                </div>
                <div className="inputBox">
                    <img src={emailImg} alt="email" />
                    <input type="email" placeholder="Email Id" required/>
                </div>
                <div className="inputBox">
                    <img src={passwordImg} alt="password" />
                    <input type="password" placeholder="Password" required/>
                </div>
                <div className="btns">
                    <button className="signUpBtn">Sign Up</button>
                    <button className="loginBtn">Login</button>
                </div>
            </div>
        </div>
    )
}

export default SignUp