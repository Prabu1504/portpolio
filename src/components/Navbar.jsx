import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"

const Navbar = () => {
    return (<>

        <div className=' bg-black flex justify-between items-center h-24  mx-auto px-4 text-white'>
            <div>
                <img src={logo} alt="logo" className='w-8 text-3xl absolute mt-6 ml-11 hover:shadow-inner ' />
                <h2 className='  pacifico-regular text-white-1000 text-3xl ml-20 m-2 static rounded-xl p-4 hover:text-[#00df9a]'>Portfolio</h2>

            </div>
            <div className=''>
                <ul className='flex justify-end items-center gap-10 text-white p-4'>
                    <li><Link to="/" className='p-3 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer
             duration-300 hover:text-black'>Home</Link></li>
                    <li><Link to="/" className='p-3 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer
             duration-300 hover:text-black'>Projects</Link></li>
                    <li><Link to="/" className='p-3 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer
             duration-300 hover:text-black'>Experience</Link></li>
                    <li><Link to="/" className='p-3 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer
             duration-300 hover:text-black'>Skills</Link></li>
                    <li><Link to="/" className='p-3 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer
             duration-300 hover:text-black'>About Us</Link></li>
                    <li><Link to="/ContactUs" className=' border-solid border-2 border-sky-600 p-3 hover:bg-white rounded-xl m-2 cursor-pointer
             duration-300 hover:text-orange-600'><button>Contact Us</button></Link></li>
                </ul>
            </div>

        </div></>

    )
}

export default Navbar