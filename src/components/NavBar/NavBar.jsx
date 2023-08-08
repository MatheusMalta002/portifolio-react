import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaDev, FaTimes} from 'react-icons/fa';


function Navbar(){

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (

    <div className="navbar h-20 fixed top-0 left-0 w-full bg-[#EFE7EB] shadow-md text-gray-800 flex items-center justify-between px-4 z-50">  
      <div>
        <h1 className='flex items-center text-base font-bold ' >
          <FaDev className='w-[35px] h-[35px] pr-2 text-gray-800'/> 
          Portifolio
        </h1>
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li className='list_NavBar'>
          <Link to='home' smooth={true} duration={500}>Home</Link>
        </li>
        <li className='list_NavBar'>
          <Link to='about' smooth={true} duration={500}>About</Link>
        </li>
        <li className='list_NavBar'>
          <Link to='skills' smooth={true} duration={500}>Skills</Link>
        </li>
        <li className='list_NavBar'>
          <Link to='work' smooth={true} duration={500}>Work</Link>
        </li>
        <li className='list_NavBar'>
          <Link to='contact' smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 text-gray-800 cursor-pointer text-2xl'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav ? 
          'hidden'
          : 
          'absolute top-0 left-0 w-full h-screen bg-[#EFE7EB] flex flex-col justify-center items-center'
        }
      >
        <li className='py-3 hover:border-b border-gray-600 mx-0'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link>
        </li>
        <li className='py-3 hover:border-b border-gray-600 mx-0'>
          {' '} <Link onClick={handleClick} to='about' smooth={true} duration={500}>About</Link>
        </li>
        <li className='py-3 hover:border-b border-gray-600 mx-0'>
          {' '}<Link onClick={handleClick} to='skills' smooth={true} duration={500}>Skills</Link>
        </li>
        <li className='py-3 hover:border-b border-gray-600 mx-0'>
          {' '}<Link onClick={handleClick} to='work' smooth={true} duration={500}>Work</Link>
        </li>
        <li className='py-3 hover:border-b border-gray-600 mx-0'>
          {' '}<Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;


