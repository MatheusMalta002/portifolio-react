import React from 'react'
import Social_Icons from './Social_Icons/Social_Icons'
import Typewriter from 'typewriter-effect'
import image from '../../assets/image.png'

function Home() {

  return (
    <>
    <div className="home h-80vh min-h-80vh w-full flex items-center justify-center absolute top-20 ">
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>

            {/* Social Icons */}
            <Social_Icons />

            {/* main container */}
            <div className='flex justify-center items-center flex-row w-[850px] my-14 h-[350px] ml-[40px] mr-[40px]'>
                <div className='w-full h-full flex flex-col items-start justify-center'>
                    <h1 className='py-4 flex'>
                        <span className='text-white uppercase font-bold text-6xl flex-wrap'>MATHEUS FILLIPE</span>
                    </h1>
                    <h1 className='py-2 text-white text-4xl flex text-center font-bold'>
                        I am a 
                        <span className='text-[#99a7eb] font-bold  flex items-center pl-3'>
                            <Typewriter
                                options={{
                                    strings: ['Developer', 'Student'],
                                    autoStart: true,
                                    loop: true,
                                    }}
                            />
                        </span>
                    </h1>
                    <p className='py-4 text-gray-400 sm:max-w-[70%] '>
                        Currently, I'm focused on building responsive web applications.
                    </p>
                </div>
                <div className='hidden md:flex  w-full h-full  flex-col items-center justify-center'>
                    <div className=' w-[280px] h-[280px] rounded-full flex justify-end items-center overflow-hidden  '>
                    <img src={image} alt="photo" className='object-cover h-full w-full' />
                    </div>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Home