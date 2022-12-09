import {useState} from 'react'

import {close, logo, menu} from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt='melearning' className='w-[130px] h-[35px]'/>

      {/* For NOT mobile screens */}
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) =>(
          <li
            key={nav.id}
            className={`font-poppins 
            font-normal 
            cursor-pointer
            text-[16px]
            text-white
            ${index===navLinks.length-1 ? 'mr-0': 'mr-10'}
            `}
          >
            <a href={`#${nav.id}`}>
            {nav.title}
            </a>
          </li>
        ))}
      </ul>

      {/* For mobile screens */}
      <div className='sm:hidden flex flex-1 
      justify-end items-center'>
        {/* adding the menu button as image */}
          <img src={toggle ? close:menu }
            alt="menu"
            className='w-[28px] h-[28px]
            object-contain'
            //making sure we obtain the previous state 
            onClick={()=> setToggle((prev)=>!prev)}
          />
        {/* Creating the Div that will serve as our menu */}
          <div 
          // let's first check if toggle is turn on 
            className={`${toggle ? 'flex' : 'hidden'}
            p-6
            bg-black-gradient
            absolute
            top-20
            right-0
            mx-4
            my-2
            min-w-[140px]
            rounded-xl 
            sidebar
            `}
          >
           {/*now implementing the menu  */}           
        <ul className='list-none flex flex-col justify-end items-center flex-1'>
              {navLinks.map((nav, index) =>(
                <li
                  key={nav.id}
                  className={
                  `font-poppins 
                  font-normal 
                  cursor-pointer
                  text-[16px]
                  text-white
                  ${index===navLinks.length-1 ? 'mr-0': 'mb-4'}
                  `}
                >
                  <a href={`#${nav.id}`}>
                  {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
      </div>
    
    </nav>
  )
}

export default Navbar

//37:06 / 2:17:36 Navbar
//https://www.youtube.com/watch?v=_oO4Qi5aVZs&t=36s&ab_channel=JavaScriptMastery

