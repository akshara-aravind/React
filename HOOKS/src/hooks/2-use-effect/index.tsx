import { useEffect, useState } from "react"
type Post ={
    userId:number;
    id:number;
    title:string;
    body:string;
}
export default function EffectExample(){
    const [data,setData] = useState<Post[]>([])
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then(res => res.json())
        .then(data => setData(data));
    },[])
    return(
        <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold my-7">Posts</h1>
            <div className=" grid md:grid-cols-3 gap-3 sm:grid-cols-2">
                {data.map((item) => (
                    <div className="m-5 border" key={item.id}>
                        <h2 className="text-xl mb-3 text-amber-100">{item.title}</h2>
                         <p>{item.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}