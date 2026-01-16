import profileImg from "../../assets/profile.jpg";
import Skills from "./skills";
export default function ProfileCard(){
    return(
        <div className="cardContainer">
            <img src={profileImg} alt="profile" />
            <h2>Baba Jide</h2>
            <p>
              Full-stack web developer and teacher at Udemy. When not coding or
              preparing a course, I like to play board games, to cook (and eat), or to
              just enjoy the Portuguese sun at the beach.
            </p>
            <div className="skill-list">
                <Skills color = 'blue' skill='React' emoji = '💪' />
                <Skills color = 'orange' skill='Javascript' emoji = '💪' />
                <Skills color = 'yellow' skill='HTML+CSS' emoji = '💪' />
                <Skills color = 'orangered' skill='Svelte' emoji = '👶' />
            </div>
        </div>
    )
}