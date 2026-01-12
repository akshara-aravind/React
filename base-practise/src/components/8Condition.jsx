function Condition(){
    let isLogin = true
    return(
        <>
          <p>{isLogin?'Logged In':'Logged out'}</p>
        </>
    )
}
export default Condition