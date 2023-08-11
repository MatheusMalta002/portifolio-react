import React from 'react'
import Social_Icons from './Social_Icons/Social_Icons'
import Typewriter from 'typewriter-effect'
import image from '../../assets/photo.png'
import { motion } from 'framer-motion'

function Home() {

    return (
        <>
        <section className='min-w-screen min-h-screen flex flex-col justify-start items-center border-2 px-[50px] sm:px-[300px] xs:px-[200px]'>
            {/* Social Icons */}
            <Social_Icons />
            {/* main container */}
            <motion.div className='flex  justify-center items-center flex-row min-h-screen pt-[75px] xs:pb-10  flex-shrink-0'
            initial={{opacity:0, x:-100}} animate={{opacity:1, x:0}} transition={{duration: "1"}} >
                <div className='flex md:flex-row sm:flex-col-reverse xs:flex-col-reverse'>
                    <div className='flex font-custom flex-col items-start justify-center text-gray-800 xs:mt-7 sm:mt-14 md:mt-0 xs:mb-16'>
                        <h1 className='flex 2xl:text-7xl md:text-6xl sm:text-5xl xs:text-[40px] transition-all duration-500 whitespace-nowrap  xs:mb-5 sm:mb-5 md:mb-8'>
                            Matheus Malta
                        </h1>
                        <h1 className=' xs:text-3xl sm:text-4xl md:text-4xl  transition-all duration-500 whitespace-nowrap flex  xs:mb-3 sm:mb-3 md:mb-2'>
                            <span className='w-full text-center'>
                                I am a 
                            </span>
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
                        <p className='text-gray-800 whitespace-normal flex-shrink-0 xs:mb-5 sm:mb-5 md:mb-5 md:w-[75%] sm:w-[75%]'>
                            Currently, I'm focused on building responsive web applications.
                        </p>
                        <button className='btn_Contact ml-[3px]'>
                            Contact me
                        </button>         
                    </div>

                    {/* IMAGEM */}
                    <div className='h-full w-full flex items-center justify-center md:ml-10 xs:ml-0'> 
                        <div className=' md:w-[220px] md:h-[220px] sm:w-[200px] sm:h-[200px] xs:w-[180px] xs:h-[180px] rounded-full overflow-hidden transition-all duration-500'>
                            <img src={image} alt="photo" className='object-cover w-full h-full rounded-full bg-gray-800' />
                        </div>
                    </div>  
                </div>
            </motion.div>
        </section>
        </>
    )
}

export default Home