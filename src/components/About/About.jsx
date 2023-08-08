import React from 'react'
import { CiCircleChevDown } from 'react-icons/ci';


export const About = () => {
  return (
    <div className="flex flex-col items-stretch w-screen h-screen relative">
        <div className='w-full flex justify-center text-center'>
            <CiCircleChevDown className='absolute top-[-50px] text-4xl
            animate-bounce font-extrabold'/>
        </div>
    </div>
  );
};


