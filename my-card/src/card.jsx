import profile from "../src/assets/download.jpeg"

function Card(){
   return(
    <div className = 'container'>
        <img src={profile} alt="profile" />
        <h3>Alexa John</h3>
        <p>Developer</p>
    </div>
   )
}

export default Card