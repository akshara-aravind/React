export default function AccordionComponent({curOpen, onOpen, num,title,children}){

// const [isOpen,setIsopen] = useState(false);

const isOpen = num === curOpen
function handleToggle(){
    // setIsopen(isOpen  => !isOpen)
    // onOpen(num)
    onOpen(isOpen ? null:num)
}
    return(
        <div className= {`item ${isOpen ? 'open' :''}`}  onClick={handleToggle}>
                <p className="number">{num < 9 ? `0${num+1}`:`${num+1}`}</p>
                <p className="title">{title}</p>
                <p className="icon">{isOpen ? '-':'+'}</p>
            {isOpen && <div className="content-box">{children}</div>}
        </div>
    )
}