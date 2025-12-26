//click event :- 

function Button(){
    let count = 0;

   const handleClick = (name)=> {
    const msg = document.querySelector('.msg')
    if(count < 3){
        count++
           msg.innerHTML = `
             ${name} you clicked me
             <span style="color:green; font-size = 28px;font-weight=bold">${count}</span> times
             `
    }else{
       msg.innerHTML = `
           ${name} stop clicking me
            `
        }
   }

   const nextClick = (e) => e.target.textContent = e.target.textContent === 'Click me' ? 'OUCH' : 'Click me';
   return(
    <>
      <button onClick={() => handleClick('Alexa')}>Click me</button>
      <button onClick={(e)=>nextClick(e)}>Click me</button>
      <p className="msg"></p>
    </>
   )
}

export default Button