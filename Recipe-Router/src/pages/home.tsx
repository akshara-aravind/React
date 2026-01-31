import { useNavigate } from 'react-router-dom'
import banner from '../assets/banner.webp'
export default function Home(){
    const navigate = useNavigate();
    return(
        <div className='min-h-screen bg-no-repeat bg-cover bg-center' style={{backgroundImage:`url(${banner})`}}>
            <div className='flex flex-col justify-center items-center min-h-screen'>
                <h1 className='md:text-6xl sm:text-4xl font-[Poppins] font-bold text-center text-4xl  text-amber-300 drop-shadow-[0_4px_6px_rgba(0,0,0,0.7)]'>🍳 Welcome to Recipe Finder</h1>
                <p className='text-lime-100 font-[Poppins] text-xl sm:text-3xl my-2 mx-auto text-center mt-5 drop-shadow-[0_4px_6px_rgba(0,0,0,0.7)]'>Search and explore delicious recipes from around the world.<br></br>Click Recipes to start cooking!</p>
                <button className='rounded-full p-3 px-10 my-5 text-white text-xl bg-amber-500' onClick={() => navigate('recipes')}>Recipes ➜</button>
            </div>
        </div>
    )
}