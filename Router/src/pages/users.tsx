import axios from "axios"
import { useEffect, useState } from "react"
import type { DataType } from "../App"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
export default function Users(){
    const [user,setUser] = useState<DataType[]>([])
    const [searchParams,setSearchParams] = useSearchParams();

    const navigate = useNavigate();

    const cls = searchParams.get('class')
    // console.log(cls)
    useEffect(() => {
         axios('data.json')
         .then((res) => {
            setUser(res.data)
           
         })
    },[])
    function handleSelectChange(e:React.ChangeEvent<HTMLSelectElement>){
        setSearchParams({
            class:e.target.value
        })
    }
    return(
        <div className="content">
            <label>Select Class: </label>
            <select className="border" onChange={handleSelectChange}>
                <option value="All">All</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            {user
            .filter((item) => {
                if(!cls) {
                    return true;
                }
                return cls === item.class;
            })      
            .map((item) => (
                <div key={item.id} className="bg-[rgb(210,225,237)] rounded mb-3 p-3 border border-slate-300" onClick={() => navigate(`/details/${item.id}`)}>
                    {/* <Link to={`/details/${item.id}`}>{item.name}</Link> */}
                    <div>{item.name}</div>
                    <p className="text-[12px] text-[slategrey]">{item.address}</p>
                    <p className="text-[12px] text-[slategrey]">class: {item.class}</p>
                </div>
            ))}
        </div>
    )
}