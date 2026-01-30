import { NavLink } from "react-router-dom";

export default function Header(){
    return(
        <div className="bg-blue-900 text-white flex gap-5 text-xl items-center">
        {/* <Link to="/">Home</Link>
        <Link to="Product">Products</Link>
        <Link to="pricing">Pricing</Link> */}
        <NavLink to="/" className='p-5'>Home</NavLink>
        <NavLink to="users" className='p-5'>Users</NavLink>
        <NavLink to="settings" className='p-5'>Setttings</NavLink>
        <NavLink to="usage" className='p-5'>Usage</NavLink>
       </div>
    )
}