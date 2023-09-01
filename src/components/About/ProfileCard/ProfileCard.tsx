import React from 'react';
import photo from '../../../assets/photo_profile.png';
import { IoLogoGithub, IoLogoWhatsapp, IoLogoLinkedin } from 'react-icons/io';
import { useTheme } from '../../../hooks/useTheme';

export const ProfileCard: React.FC = () => {

  const linkZap = 'https://api.whatsapp.com/send?phone=5581989054991&text=Ol%C3%A1%20Matheus,%20Bom%20dia!';

  const { theme, setTheme} = useTheme()

  return (
    <div className={`w-full rounded-lg  ${theme === 'light' ? "text-light-secondary" : "bg-dark-primary text-dark-textNavbar"}`}>
      <div className="rounded-t-lg h-32 overflow-hidden bg-dark-primary">
        {/* <img className="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain'/> */}
      </div>
      <div className={`mx-auto w-[135px] h-[135px] relative -mt-16 border-4 rounded-full overflow-hidden
      ${theme === 'light' ? "bg-light-primary border-light-primary" : "bg-dark-image border-dark-image"}`}>
        <img className="object-cover object-center h-36" src={photo} alt='matheus'/>
      </div>
      <div className="text-center mt-2">
        <h2 className="font-semibold">Matheus Malta</h2>
        <p className={`${theme === 'light' ? "text-light-secondary" : "text-dark-secondary"}`}>Desenvolvedor</p>
      </div>
      <ul className={`py-4 mt-2 flex items-center justify-evenly ${theme === 'light' ? "text-light-secondary" : "text-dark-textNavbar"}`}>
        <li className="flex flex-col items-center justify-around px-0 ml-0">
          <IoLogoGithub className='w-[35px] h-[35px]' />
        </li>
        <li className="flex flex-col items-center justify-between px-0 ml-0">
          <IoLogoLinkedin className='w-[35px] h-[35px]' />
        </li>
        <li className="flex flex-col items-center justify-around px-0 ml-0">
          <a href={linkZap}><IoLogoWhatsapp className=' w-[35px] h-[35px]' /></a>
        </li>
      </ul>
      <div className={`p-4 border-t mx-8 mt-2 ${theme === 'light' ? "border-light-secondary" : "border-[#353534]"}`}>
        <div className=' flex items-center justify-center'>
          <button className={`rounded-[10px] p-[10px] hover:scale-105 ease-in duration-300 font-medium
          md:w-auto sm:w-auto xs:w-full ${theme === 'light' ? "bg-light-secondary text-light-primary" : "bg-dark-textNavbar text-dark-primary"}`}>
            Baixar Currículo
          </button>
        </div>
      </div>
    </div>
  );
};
