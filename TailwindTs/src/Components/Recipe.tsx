export default function Food(){
    return(
        <div className="flex justify-between mx-10 p-7">
            <h2 className="font-cursive">FOODIE</h2>
            <ul className="flex gap-3">
               <li>Home</li>
               <li>About</li>
               <li>Testimonials</li>
               <li>Conatct</li>
               <li>🛒</li>
               <button>Booking Now</button>
            </ul>
        </div>
    )
}