export default function SkillsNew({skill,color,level}){
    return(
            <div className="skill" style={{backgroundColor: color}}>
                <span>{skill}</span>
                <span>{level === 'beginner' && '👶'}</span>
                <span>{level === 'intermediate' && '👍'}</span>
                <span>{level === 'advanced' && '💪'}</span>
            </div>
    )
}