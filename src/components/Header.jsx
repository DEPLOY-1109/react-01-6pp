import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='w-full p-4 flex justify-between items-center sticky bg-red-400 z-10'>
            <h1 className='uppercase' >TechWorld.in</h1>
            <main className='flex items-end ' >
                <Link className='my-link' to={"/"} >Home</Link>
                <Link className='my-link' to={"/contact"} >Contact</Link>
                <Link className='my-link' to={"/#about"} >About</Link>
                <Link className='my-link' to={"/#brands"} >Brands</Link>
                <Link className='my-link' to={"/services"} >Services</Link>
            </main>
        </nav>
    )
}

export default Header