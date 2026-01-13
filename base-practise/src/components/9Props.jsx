function PropsPassing(props){
    return(
        <>
        <p>My name is {props.name}, I' m {props.job}.</p>
        </>
    )
}
export default PropsPassing

export function ChildDisplay({name}){
    return(
        <>
         <p>Name:{name}</p>
        </>
    )
}

export function ButtonComponent(props){
   return(
    <>
    <button style={{background:props.color}}>{props.title}</button>
    </>
   )
}

export function ReusableCard({name,description,image,children}){
  return(
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:'center'}}>
        <div style={{boxShadow:'0 8px 20px rgba(0, 0, 0, 0.2)',textAlign:'center',borderRadius:'8px'}}>
        <img style={{borderRadius:'25px',padding:'10px'}}src={image} alt="img" />
        <h2>{name}</h2>
        <p>{description}</p>
        <div>{children}</div>
    </div>
    </div>
  )
}

export function StatusBadge({status}){
    const color = status === 'online' ? 'green': status === 'offline'?'gray':'red'
    return(
        <>
         <span style={{backgroundColor:color,color:'#fff',padding:'6px 12px',borderRadius:'14px',fontSize:'14px'}}>{status}</span>
        </>
    )
}