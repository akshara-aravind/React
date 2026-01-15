export function Footer(){
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour
    console.log(isOpen)
    return(
        <footer className="footer">
         <p>We're Currently Open!</p>
        </footer>
    )
}