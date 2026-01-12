function BooleanProps({loggedIn}){
    return(
        <>
         <p>{loggedIn ? 'Logged In':'Not Logged In'}</p>
        </>
    )
}
export default BooleanProps