import profileImg from "../../assets/profile.jpg";
export default function ProfileCard(){
    return(
        <div>
            <img src={profileImg} alt="profile" />
            <h2>Baba Jide</h2>
            <p>
              Full-stack web developer and teacher at Udemy. When not coding or
              preparing a course, I like to play board games, to cook (and eat), or to
              just enjoy the Portuguese sun at the beach.
            </p>
        </div>
    )
}