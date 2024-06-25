import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"

const Navbar = () => {
    return (
        <div className=' bg-black flex justify-between items-center h-24  mx-auto px-4 text-white'>
            <img src={logo} alt="logo" className='w-8 text-3xl' />
            <h2 className='text-white-1000 uppercase hover:bg-[#00df9a] rounded-xl m-2 p-4 hover:text-black'>Portfolio</h2>
            <ul className='flex justify-end items-center gap-10 text-white p-4'>
                <li><Link to="/" className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer
             duration-300 hover:text-black'>Home</Link></li>
                <li><Link to="/" className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer
             duration-300 hover:text-black'>Projects</Link></li>
                <li><Link to="/" className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer
             duration-300 hover:text-black'>Experience</Link></li>
             <li><Link to="/" className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer
             duration-300 hover:text-black'>Skills</Link></li>
                <li><Link to="/" className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer
             duration-300 hover:text-black'>About Us</Link></li>
             <li><Link to="/ContactUs" className='p-4 hover:bg-white rounded-xl m-2 cursor-pointer
             duration-300 hover:text-orange-600'><button>Contact Us</button></Link></li>
            </ul>
        </div>

    )
}

export default Navbar