import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useTheme } from '../../../hooks/useTheme';

const Social_Icons: React.FC = () => {

    const { theme, setTheme} = useTheme()

    return (
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0 '>
            <ul className={` ${theme === "light" ? ' text-light-primary' : ' text-dark-textNavbar'}`}>
                <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] 
                duration-300 rounded-tr-[5px] hover:rounded-br-[5px] bg-[#353534]'>
                    <a
                        className='flex justify-between items-center w-full pl-2'
                        href='/'
                    >
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] 
                hover:rounded-br-[5px] hover:rounded-tr-[5px] duration-300 bg-[#353534]'>
                    <a
                        className='flex justify-between items-center w-full pl-2'
                        href='/'
                    >
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px]
                hover:rounded-br-[5px] hover:rounded-tr-[5px] duration-300 bg-[#353534]'>
                    <a
                        className='flex justify-between items-center w-full pl-2'
                        href='/'
                    >
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px]
                 duration-300 rounded-br-[5px] hover:rounded-tr-[5px] bg-[#353534]'>
                    <a
                        className='flex justify-between items-center w-full pl-2'
                        href='/'
                    >
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Social_Icons;