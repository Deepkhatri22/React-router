import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            <nav className='flex gap-6 decoration-none style list-none bg-black text-white content-center h-10 w-auto px-5'>
                <NavLink className={(e) => { return e.isActive ? "bg-red-500 text-white font-bold" : "" }} to="/"><li className='p-1.5'>Home</li></NavLink>
                <NavLink className={(e) => { return e.isActive ? "bg-red-500 text-white font-bold" : "" }} to="/gallery"><li className='p-1.5'>Gallery</li></NavLink>
                <NavLink className={(e) => { return e.isActive ? "bg-red-500 text-white font-bold" : "" }} to="/about"><li className='p-1.5'>About Us</li></NavLink>
                <NavLink className={(e) => { return e.isActive ? "bg-red-500 text-white font-bold" : "" }} to="/contact"><li className='p-1.5'>Contact Us</li></NavLink>

            </nav>
        </>
    )
}

export default Navbar
