import React from 'react'
import photo from '../../../assets/photo_profile.png'
import { IoLogoInstagram, IoLogoWhatsapp, IoLogoFacebook } from 'react-icons/io'

export const ProfileCard = () => {

  const linkZap = 'https://api.whatsapp.com/send?phone=5581989054991&text=Ol%C3%A1%20Matheus,%20Bom%20dia!'

  return (
    <div class=" w-full  shadow-xl rounded-lg text-[#2c2b2c] ">
      <div class="rounded-t-lg h-32 overflow-hidden ">
        <img class="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain'/>
      </div>
      <div class="mx-auto w-[135px] h-[135px] relative -mt-16 border-4 border-white  bg-[#EFE7EB] rounded-full overflow-hidden">
        <img class="object-cover object-center h-32" src={photo} alt='Woman looking front'/>
      </div>
      <div class="text-center mt-2">
        <h2 class="font-semibold">Matheus Malta</h2>
        <p class="text-gray-500">Developer</p>
      </div>
      <ul class="py-4 mt-2 text-gray-700 flex items-center justify-around">
        <li class="flex flex-col items-center justify-around">
          <IoLogoInstagram className='text-[#b439a4] w-[30px] h-[30px]' />
        </li>
        <li class="flex flex-col items-center justify-between">
          <IoLogoFacebook className='text-[#385bb9] w-[30px] h-[30px]' />
        </li>
        <li class="flex flex-col items-center justify-around">
          <a href={linkZap}><IoLogoWhatsapp className='text-[#6cdd50] w-[30px] h-[30px]' /></a>
        </li>
      </ul>
      <div class="p-4 border-t mx-8 mt-2">
        <div className=' flex items-center justify-center'>
          <button className='rounded-[10px] bg-[#8685d4] p-[10px] hover:scale-105 ease-in duration-300 font-medium text-[#EFE7EB]'>
            Download CV
          </button>
        </div>
      </div>
    </div>
    
  )
}


