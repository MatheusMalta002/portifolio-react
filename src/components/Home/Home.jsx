import React from 'react'
import Social_Icons from './Social_Icons/Social_Icons'
import Typewriter from 'typewriter-effect'
import image from '../../assets/photo.png'
import { motion } from 'framer-motion'


function Home() {

    return (
        <>
        <section className='min-w-screen min-h-screen flex flex-col justify-start items-center border-2 px-[40px] '>
            {/* Social Icons */}
            <Social_Icons />
            {/* main container */}
            <motion.div className='flex  justify-center items-center w-full flex-row min-h-screen pt-[75px] xs:pb-10'
                initial={{opacity:0, x:-100}}
                animate={{opacity:1, x:0}}
                transition={{duration: "1"}} >

                <div className='flex md:flex-row '>

                <div className='flex font-custom flex-col items-start justify-center text-gray-800 xs:pb-[80px] pr-[10px] '>
                    <h1 className='flex 2xl:text-7xl md:text-6xl sm:text-6xl xs:text-6xl transition-text 
                    duration-500 xs:whitespace-normal sm:whitespace-normal md:whitespace-nowrap mb-4'>
                        Matheus Malta
                    </h1>

                    <h1 className=' xs:text-3xl sm:text-4xl md:text-5xl flex text-center mt-4 xs:pt-10 md:pt-0 transition-all duration-500'>
                        I am a 
                        <span className='text-[#7379d6] font-medium  flex items-center pl-3'>
                            <Typewriter
                                options={{
                                    strings: ['Developer', 'Student'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </h1>

                    <p className='py-4 text-gray-800 sm:max-w-[70%] '>
                        Currently, I'm focused on building responsive web applications.
                    </p>

                    <div>
                        <button className='btn_Contact ml-[3px]'>
                            Contact me
                        </button>
                    </div>
                </div>
                <div className='xs:hidden sm:hidden md:flex h-full  flex-col items-center justify-center pb-[80px]'> 
                    <div className=' w-[230px] h-[230px] rounded-full flex p-3 justify-center items-center overflow-hidden'>
                        <img src={image} alt="photo" className='object-cover w-full h-full rounded-full bg-gray-800' />
                    </div>
                </div>
                {/* <div className='xs:hidden sm:hidden md:flex flex-col items-center justify-start pb-[80px]'> 
                    <div className=' w-[200px] h-[200px] rounded-[10px] flex  justify-center bg-gray-800 items-center relative'>
                        <img src={image} alt="photo" className='object-cover  rounded-[10px] w-[150px] shadow-xl bg-[#EFE7EB] h-[200px] absolute bottom-[-20px]' />
                    </div>
                </div> */}
                </div>
            </motion.div>
        </section>
        </>
    )
}

export default Home