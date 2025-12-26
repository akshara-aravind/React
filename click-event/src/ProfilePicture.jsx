import img from '../src/assets/download.jpeg'
function Profile(){
    const click = (e) => {
         e.target.style.display = 'none'
    }
   return(
    <>
      <img onClick = {(e) => click(e)} src={img} alt="ProfileImg" />
    </>
   )
}

export default Profile