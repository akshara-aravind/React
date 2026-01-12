import Image from "../assets/img.jpg"
import { useState } from "react"

function ShowImg(){
    const [image,setImg] = useState(false)
    return(
        <div>
         
          <button className="showImgBtn" onClick={() => setImg(!image)}>Toggle Image</button>
          {image && (
            <p>
                <img src={Image} alt="img" />
            </p>
          )}
        </div>
    )
}
export default ShowImg