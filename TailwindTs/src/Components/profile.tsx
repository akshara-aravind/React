import type React from 'react';
import profile from '../assets/download.jpeg'
type ProfileCard={
    name:string;
    age:number;
    isOnline:boolean;
    children:React.ReactNode
}

export default function ProfileCard({name,age,isOnline,children}:ProfileCard){
    return(
        <div>
            <h1 className='text-center font-bold text-xl'>{children}</h1>
            <div className='flex flex-col text-center shadow-xl rounded-2xl m-5 pb-4'>
                <div className='flex justify-center mb-2'>
                <img className="rounded-full w-65 h-65" src={profile} alt="img" />
                </div>
                <h2>{name}</h2>
                <h2>{age}</h2>
                <h2>{name} is 
                    <span>
                    {isOnline === true ? ' Online🟢':' Unavailable🔴'}
                    </span>
                </h2>
            </div>
        </div>
    )
}