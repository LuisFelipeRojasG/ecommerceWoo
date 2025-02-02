import { NavLink } from 'react-router'
import { FaSearch } from 'react-icons/fa'
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import logo from '../assets/group98.png'

function NavBar() {
  return (
    <nav className='fixed top-0 left-0 right-0 flex flex-col bg-BorderGrey'>
        <section className='flex justify-between h-[66px] p-4'>
            <div className='flex items-center justify-center w-[60px] h-[34px]'>
                <FaSearch color='black' size={24} />
            </div>
            <NavLink to='/' className='flex items-center w-44'>
                <img src={logo} alt="Logo" width={50} height={50}/>
                <p className='px-2 font-Roboto text-Headline_one text-Dark'>Avion</p>
                <img src={logo} alt="Logo" width={50} height={50}/>
            </NavLink>
            <ul className='hidden sm:flex justify-around text-botton font-Roboto'>
                <li className='pr-6 flex items-center'>
                    <NavLink to='/shopping' className='pl-2'>
                        <IoCartOutline size={24} />
                    </NavLink>
                </li>
                <li className='pr-6 flex items-center'>                    
                    <NavLink to='/account' className='pl-2'>
                        <CgProfile size={24} />
                    </NavLink>
                </li>
            </ul>
            <div className='sm:hidden flex items-center'>
                <IoMdMenu size={50} />
            </div>
        </section>
        <section className='sm:flex justify-center h-[66px] hidden'>
            <ul className='md:flex md:items-center md:text-Dark sm:hidden font-Open_Sans text-Headline_four'>
            <li className='px-4'>
                    <NavLink to='/all'>
                        All
                    </NavLink>
                </li>
                <li className='px-4'>
                    <NavLink to="/clothes">
                        Clothes
                    </NavLink>
                </li>
                <li className='px-4'>
                    <NavLink to='/electronics'>
                        Electronics
                    </NavLink>
                </li>
                <li className='px-4'>
                    <NavLink to='/forniture'>
                        Forniture
                    </NavLink>
                </li>
                <li className='px-4'>
                    <NavLink to='/shoes'>
                        Shoes
                    </NavLink>
                </li>
                <li className='px-4'>
                    <NavLink to='/miscellaneous'>
                        Miscellaneous
                    </NavLink>
                </li>
            </ul>
        </section>
    </nav>
  )
}

export default NavBar