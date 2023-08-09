import React from 'react'
import { CiCircleChevDown } from 'react-icons/ci';



export const About = () => {
  return (
    <>
    <div className="w-screen min-h-screen flex flex-col justify-center items-center relative border-2px-[80px] py-[80px] border-black">
        <div className='w-full flex justify-center text-center'>
            <CiCircleChevDown className='absolute top-[-50px] text-4xl
            animate-bounce font-extrabold'/>
        </div>
    </div>

  </>
  );
};


