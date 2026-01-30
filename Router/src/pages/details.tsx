import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type { DataType } from "../App"
import axios from "axios"

export default function Details(){
    const {userId} = useParams()
    const [user,setUser] = useState<DataType[]>([])
    // using useNavigate for back btn 
    const navigate = useNavigate();

    useEffect(() => {
        axios('/data.json')
        .then((res) =>{
            const item = res.data.find((userItem) => userItem.id === parseInt(userId))
            setUser(item)
        })
    },[userId])
    return(
        <div className="content">
            <div className="bg-[rgb(210,225,237)] text-2xl p-3 rounded mb-2">{user.name}</div>
            <div className="text-[slategrey] font-sans text-sm">Address: {user.address}</div>
            <div className="text-[slategrey] font-sans text-sm">Phone:{user.phone}</div>
            <div className="text-[slategrey] font-sans text-sm">Class : {user.class}</div>
            <button className="border p-2 rounded-xl mt-2 px-4 bg-red-800 text-white" onClick={() => navigate(-1)}>Back</button>
        </div>
    )
}