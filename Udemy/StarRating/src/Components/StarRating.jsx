import Star from "./Star"
export default function StarRating({maxRating=2}){
    return(
        <div className="container">
            <div className="starContainer">
                {Array.from({length:maxRating},(_,i) => (
                     <Star key={i} />
                ))}
            </div>
            <p>10</p>
        </div>
    )
}