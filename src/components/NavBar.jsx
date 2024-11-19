import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { FaUser, FaShoppingBag } from 'react-icons/fa'
import { IoMdMenu } from "react-icons/io";
import logo from '../assets/group98.png'

function NavBar() {
  return (
    <nav className='fixed top-0 left-0 right-0 flex flex-col bg-LightPrimary'>
        <div className='flex justify-between h-[66px] p-4'>
            <div className='flex items-center sm:w-[240px]'>
                <form className='hidden sm:flex w-[181px]'>
                    <input type="search" className='h-[34px]'></input>
                </form>
                <div className='flex items-center justify-center w-[60px] h-[34px] bg-DarkPrimary'>
                    <FaSearch color='white' size={24} />
                </div>
            </div>
            <NavLink to='/' className='flex items-center w-36'>
                <img src={logo} alt="Logo" width={30} height={30}/>
                <p className=' px-2 font-Roboto text-paragraph'>Woo</p>
                <img src={logo} alt="Logo" width={30} height={30}/>
            </NavLink>
            <ul className='hidden sm:flex justify-around text-botton font-Roboto'>
                <li className='pr-6 flex items-center'>
                    <FaUser />
                    <NavLink to='/Account' className='pl-2'>
                        Account
                    </NavLink>
                </li>
                <li className='pr-6 flex items-center'>
                    <FaShoppingBag />
                    <NavLink to='/Shopping' className='pl-2'>
                        Shopping
                    </NavLink>
                </li>
            </ul>
            <div className='sm:hidden flex items-center'>
                <IoMdMenu size={50} />
            </div>
        </div>
        <div className='sm:flex justify-center h-[66px] hidden'>
            <ul className='md:flex md:items-center md:text-Dark sm:hidden font-Open_Sans text-botton'>
                <li className='pr-8'>
                    <NavLink to='/Clothing'>
                        Clothing
                    </NavLink>
                </li>
                <li className='pr-8'>
                    <NavLink to='/house'>
                        House
                    </NavLink>
                </li>
                <li className='pr-8'>
                    <NavLink to='/jewelry'>
                        Jewelry
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar