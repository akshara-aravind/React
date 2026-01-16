import profileImg from "../../assets/profile.jpg";
import SkillsNew from "./skills";
export default function ProfileCardNew(){
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];
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
                {skills.map((item) => (
                    <SkillsNew  key = {item.skill} skill={item.skill} color={item.color} level ={item.level}/>
                ))}
            </div>
        </div>
    )
}