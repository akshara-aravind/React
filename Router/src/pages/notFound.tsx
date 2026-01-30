import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <div className="content">
            <h1>Sorry, page not found...</h1>
            <Link to='/' className="text-violet-700 underline">Go Home</Link>
        </div>
    )
}