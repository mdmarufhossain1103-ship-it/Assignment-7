import React from 'react';
import { BiHomeAlt2 } from 'react-icons/bi';
import { FaChartLine } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { NavLink } from 'react-router';

const Navbar = () => {

    const links = (
        <>
            <NavLink to='/' className={({ isActive }) => `text-[#64748B] font-semibold mr-4 flex gap-1 items-center ${isActive ? 'bg-[#244D3F] text-[#FFFFFF] px-4 py-2 rounded-md' : ''}`}><BiHomeAlt2/>Home</NavLink>
            <NavLink to='timeline' className={({ isActive }) => `text-[#64748B] font-semibold mr-4 flex gap-1 items-center ${isActive ? 'bg-[#244D3F] text-[#FFFFFF] px-4 py-2 rounded-md' : ''}`}><IoMdTime />Timeline</NavLink>
            <NavLink to='status' className={({ isActive }) => `text-[#64748B] font-semibold mr-4 flex gap-1 items-center ${isActive ? 'bg-[#244D3F] text-[#FFFFFF] px-4 py-2 rounded-md' : ''}`}><FaChartLine />Stats</NavLink>
        </>
    )
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                           {links}
                        </ul>
                    </div>
                    <h2 className='text-x'><span className='font-extrabold'>Keen</span><span className='font-semibold text-[#244D3F]'>Keeper</span></h2>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;