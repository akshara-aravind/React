import { useEffect, useState } from "react";

export default function MovieSearch(){
    const [input,setInput] = useState('');
    const [search,setSearch] = useState('')
    const [movie,setMovie] = useState([])
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=348ce71605a67ed83960815f022c9856&query=${input}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setMovie(data.results)})
    },[search])

    return(
        <div className="min-h-screen bg-black text-white flex flex-col">
            <h1 className="text-amber-300 text-center text-5xl mt-4 font-['sedan']">Movie Search App</h1>
           <div className="flex justify-center my-10">
                <input className="border px-10 rounded-l-xl" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <button className="border rounded-r-xl p-3"  onClick={() => setSearch(input)}>Search</button>
            </div>
            {movie.length === 0 && search && (
                <p className="text-center text-xl text-red-500 mt-5">Movie not found...</p>
            )}
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                {movie.map((item)=> (
                  item.backdrop_path !== null &&
                    <div key={item.id} className="border flex flex-col justify-center items-center rounded-xl">
                        <h1 className="text-2xl p-3">{item.title}</h1>   
                        <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt={item.title} />
                        <p className="p-5">{item.overview}</p>
                    </div>
                ))}
            </ul>
        </div>
    )
}