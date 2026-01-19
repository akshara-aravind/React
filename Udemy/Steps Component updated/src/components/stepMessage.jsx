export default function StepMessage({step,children}){
    return(
        <div className="message">
          <p>Step:{step}</p>
          {children}
        </div>
    )
}