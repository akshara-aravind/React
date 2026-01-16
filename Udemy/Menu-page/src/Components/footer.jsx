import Order from "./order";
export function Footer(){
    const hour = new Date().getHours();
    const openHour = 10;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour
    console.log(isOpen)
    // if(!isOpen) return <p>CLOSED</p>
    return(
        <footer className="footer">
            {/* {isOpen && (        //conditional rendering
                <div className="order">
                    <p>We're open util {closeHour}:00. Come visit us or order online.</p>
                    <button className="btn">Order</button>
                </div>
            )} */}
            {isOpen ? 
            (<Order closeHour={closeHour} openHour={openHour}/>)
            : <p>we're happy welcome you between {openHour}:00 and {closeHour}:00.</p>}
        </footer>
    )
}