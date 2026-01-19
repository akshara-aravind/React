export default function Button({onClick,bg,textColor,children}){
    return(
        <div>
          <button onClick={onClick} style={{backgroundColor:bg,color:textColor}}>
           {children}
          </button>
        </div>
    )
}