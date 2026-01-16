export default function Skills({skill,emoji,color}){
    return(
            <div className="skill" style={{backgroundColor: color}}>
                <span>{skill}</span>
                <span>{emoji}</span>
            </div>
    )
}