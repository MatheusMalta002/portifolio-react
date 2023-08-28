import React from 'react';
import photo from '../../../assets/photo_profile.png';
import { IoLogoGithub, IoLogoWhatsapp, IoLogoLinkedin } from 'react-icons/io';

export const ProfileCard: React.FC = () => {

  const linkZap = 'https://api.whatsapp.com/send?phone=5581989054991&text=Ol%C3%A1%20Matheus,%20Bom%20dia!';

  return (
    <div className=" w-full shadow-xl rounded-lg text-[#2c2b2c] ">
      <div className="rounded-t-lg h-32 overflow-hidden ">
        <img className="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain'/>
      </div>
      <div className="mx-auto w-[135px] h-[135px] relative -mt-16 border-4 border-white  bg-[#EFE7EB] rounded-full overflow-hidden">
        <img className="object-cover object-center h-32" src={photo} alt='Woman looking front'/>
      </div>
      <div className="text-center mt-2">
        <h2 className="font-semibold">Matheus Malta</h2>
        <p className="text-gray-500">Desenvolvedor</p>
      </div>
      <ul className="py-4 mt-2 text-gray-700 flex items-center justify-evenly">
        <li className="flex flex-col items-center justify-around px-0 ml-0">
          <IoLogoGithub className='text-[#4d464c] w-[35px] h-[35px]' />
        </li>
        <li className="flex flex-col items-center justify-between px-0 ml-0">
          <IoLogoLinkedin className='text-[#385bb9] w-[35px] h-[35px]' />
        </li>
        <li className="flex flex-col items-center justify-around px-0 ml-0">
          <a href={linkZap}><IoLogoWhatsapp className='text-[#6cdd50] w-[35px] h-[35px]' /></a>
        </li>
      </ul>
      <div className="p-4 border-t mx-8 mt-2">
        <div className=' flex items-center justify-center'>
          <button className='rounded-[10px] bg-[#8685d4] p-[10px] hover:scale-105 ease-in duration-300 
          font-medium text-[#EFE7EB] md:w-auto sm:w-auto xs:w-full'>
            Baixar Currículo
          </button>
        </div>
      </div>
    </div>
  );
};
