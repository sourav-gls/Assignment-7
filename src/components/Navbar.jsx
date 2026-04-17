import React from 'react';
import { ImStatsDots } from 'react-icons/im';
import { LuClock3 } from 'react-icons/lu';
import { SlHome } from 'react-icons/sl';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <nav className='p-5' >
            <div className='container mx-auto sm:flex justify-between items-center text-center sm:text-start'>
            <div className=''>
                <h2 className='text-3xl text-[#244D3F] font-semibold mb-2 sm:mb-0'><span className='font-bold text-black'>Keen</span>Keeper</h2>
            </div>
            <div className='flex flex-row gap-4 '>
               <NavLink to={"/"} className={({isActive}) =>{return `${isActive ? "bg-[#244D3F] text-white btn rounded-md " :"bg-white btn"}`}}><SlHome />Home</NavLink>
               <NavLink to={"/timeline"} className={({isActive}) =>{return `${isActive ? "bg-[#244D3F] text-white btn rounded-md " :"bg-white btn"}`}}><LuClock3 />Timeline</NavLink>
               <NavLink to={"/stats"} className={({isActive}) =>{return `${isActive ? "bg-[#244D3F] text-white btn rounded-md " :"bg-white btn"}`}}><ImStatsDots />Stats</NavLink>
            </div>
            </div>
        </nav>
    );
};

export default Navbar;