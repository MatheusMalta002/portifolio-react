import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaDev, FaTimes } from 'react-icons/fa';
import { ScrollIndicator } from './ScrollIndicator/ScrollIndicator';

interface NavItem {
  id: string;
  text: string;
}

const Navbar: React.FC = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  const handleReloadClick = () => window.location.reload();

  const navItems: NavItem[] = [
    { id: 'home', text: 'Início' },
    { id: 'about', text: 'Sobre' },
    { id: 'skills', text: 'Habilidades' },
    { id: 'work', text: 'Projetos' },
    { id: 'contact', text: 'Contatos' },
  ];

  return (
    <>
      <ScrollIndicator />
      <header
        id='navbar'
        className='h-[70px] fixed top-0 left-0 w-full shadow-md text-[#2c2b2c] flex items-center justify-between px-4 z-50 backdrop-blur-[10px] bg-[#ffffff33]'
      >
        <div>
          <h1 className='flex items-center text-base font-bold'>
            <FaDev
              className='w-[35px] h-[35px] pr-2 text-[#2c2b2c] cursor-pointer'
              onClick={handleReloadClick}
            />
            <span className='font-custom font-bold'>Portifolio</span>
          </h1>
        </div>
        {/* menu */}
        <ul className='hidden md:flex'>
          {navItems.map((item) => (
            <li
              className='list_NavBar sm:text-sm md:text-base font-bold font-custom'
              key={item.id}
            >
              <Link to={item.id} smooth={true} duration={500}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
        {/* Hamburger */}
        <div
          onClick={handleClick}
          className='md:hidden z-10  cursor-pointer text-2xl'
        >
          {!nav ? <FaBars className='text-gray-800 ' /> : <FaTimes className='text-[#EFE7EB]' />}
        </div>
        {/* Mobile menu */}
        <ul
          className={
            !nav
              ? 'hidden'
              : 'absolute top-0 right-0 w-[65%] font-custom h-[100vh] bg-gray-800  flex flex-col justify-center items-center md:hidden'
          }
        >
          {navItems.map((item) => (
            <li
              className='py-5 hover:border-b text-[15px] text-[#EFE7EB] border-[#EFE7EB] mx-0'
              key={item.id}
            >
              <Link onClick={handleClick} to={item.id} smooth={true} duration={500}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </header>
    </>
  );
};

export default Navbar;