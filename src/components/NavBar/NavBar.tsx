import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaDev, FaTimes } from 'react-icons/fa';
import { ScrollIndicator } from './ScrollIndicator/ScrollIndicator';
import { useTheme } from '../../hooks/useTheme';
import ChangeTheme from './ChangeTheme/ChangeTheme';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

  const { theme, setTheme} = useTheme()

  useEffect(() => {
    AOS.init();
}, []);

  return (
    <>
      <ScrollIndicator />
      <header
        id='navbar'
        className={`h-[70px] fixed top-0 left-0 w-full shadow-md flex items-center justify-between px-4 z-50 backdrop-blur-[10px]
        ${theme === "light" ? ' text-light-secondary' : ' text-dark-secondary'}`}
      >
        <div>
          <h1 className='flex items-center text-base font-bold' data-aos="fade-down" data-aos-duration='900'>
            <FaDev
              className={`w-[35px] h-[35px] pr-2 text-[#2c2b2c] cursor-pointer
              ${theme === "light" ? ' text-light-textNavbar' : ' text-dark-textNavbar'}`}
              onClick={handleReloadClick}
            />
            <span className='font-custom font-bold'>Portifolio</span>
          </h1>
        </div>
        {/* menu */}
        <div className='flex justify-center items-center h-full'>
        <ul className='hidden md:flex h-full items-center mr-[20px]'>
          {navItems.map((item, idx) => (
            <li
              className='list_NavBar sm:text-sm md:text-base font-bold font-custom '
              key={item.id}
              data-aos="fade-down"
              data-aos-duration={`${idx+10}00`}
            >
              <Link to={item.id} smooth={true} duration={500}>
                <p className={`${theme === 'light' ? "hover:border-b border-light-secondary": "hover:border-b border-dark-secondary"}`}>{item.text}</p>
              </Link>
            </li>
          ))}
        </ul>
        <ChangeTheme/>
        
        {/* Hamburger */}
        <div
          onClick={handleClick}
          className={`md:hidden z-10  cursor-pointer text-2xl ml-[20px]
          ${theme === "light" ? "text-light-secondary" : "text-dark-secondary"}`}
  
        >
          {!nav ? <FaBars className=' ' /> : <FaTimes className='text-dark-secondary' />}
        </div>
        </div>
        {/* Mobile menu */}
        <ul
          className={
            !nav
              ? 'hidden'
              : 'absolute top-0 right-0 w-[65%] font-custom h-[100vh] bg-[#362f2f] flex flex-col justify-center items-center md:hidden'
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
