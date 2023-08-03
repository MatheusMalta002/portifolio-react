import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaReact} from 'react-icons/fa';

function Navbar(){

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 shadow-xl z-[100] text-gray-300'>
      <div>
        <h1 className='flex items-center uppercase text-gray-600 font-bold' ><FaReact className='w-[40px] h-[40px] pr-2' /> Portifolio</h1>
      </div>
        {/* menu */}
        <ul className='hidden md:flex'>
          <li className='hover:border-b border-gray-600'>
            <Link to='home' smooth={true} duration={500}>Home</Link>
          </li>
          <li className='hover:border-b border-gray-600'>
            <Link to='about' smooth={true} duration={500}>About</Link>
          </li>
          <li className='hover:border-b border-gray-600'>
            <Link to='skills' smooth={true} duration={500}>Skills</Link>
          </li>
          <li className='hover:border-b border-gray-600'>
            <Link to='work' smooth={true} duration={500}>Work</Link>
          </li>
          <li className='hover:border-b border-gray-600'>
            <Link to='contact' smooth={true} duration={500}>Contact</Link>
          </li>
        </ul>

      {/* Hamburger */}

      <div onClick={handleClick} className='md:hidden z-10 text-gray-600 cursor-pointer text-2xl'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav ? 
          'hidden'
          : 
          'absolute top-0 left-0 w-full h-screen bg-[#ecf0f3] flex flex-col justify-center items-center'
        }
      >
        <li className='py-4 text-2xl hover:border-b border-gray-600 pl-0 mx-0'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link>
        </li>
        <li className='py-4 text-2xl hover:border-b border-gray-600 mx-0'>
          {' '} <Link onClick={handleClick} to='about' smooth={true} duration={500}>About</Link>
        </li>
        <li className='py-4 text-2xl hover:border-b border-gray-600 mx-0'>
          {' '}<Link onClick={handleClick} to='skills' smooth={true} duration={500}>Skills</Link>
        </li>
        <li className='py-4 text-2xl hover:border-b border-gray-600 mx-0'>
          {' '}<Link onClick={handleClick} to='work' smooth={true} duration={500}>Work</Link>
        </li>
        <li className='py-4 text-2xl hover:border-b border-gray-600 mx-0'>
          {' '}<Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;


