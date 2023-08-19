import React from 'react'
import Social_Icons from './Social_Icons/Social_Icons'
import Typewriter from 'typewriter-effect'
import image from '../../assets/photo_profile.png'
import { motion } from 'framer-motion'
import {CiCircleChevDown} from 'react-icons/ci'

function Home() {

    return (
        <>
        <section id='home' className='min-w-screen min-h-screen flex flex-col justify-center items-center  md:px-[350px] sm:px-[300px] xs:px-[200px] '>
            {/* Social Icons */}
            <Social_Icons />
            {/* main container */}
            <motion.div className='flex  justify-center items-center flex-col  pt-[75px] xs:pb-10  flex-shrink-0'
                initial={{opacity:0, x:-100}} 
                animate={{opacity:1, x:0}} 
                transition={{duration: "1"}} >

                <div className='md:flex justify-center w-full py-12 sm:hidden xs:hidden'></div>
                <div className='flex md:flex-row sm:flex-col-reverse xs:flex-col-reverse'>
                    <div className='flex font-custom flex-col items-start justify-center text-[#2c2c2b] xs:mt-3 sm:mt-14 md:mt-0'>
                        <h1 className='flex 2xl:text-7xl xl:text-6xl md:text-5xl sm:text-5xl xs:text-[40px] transition-all duration-500 whitespace-nowrap  xs:mb-5 sm:mb-5 md:mb-8'>
                            Matheus Malta
                        </h1>
                        <h1 className=' xs:text-3xl sm:text-4xl md:text-4xl  transition-all duration-500 whitespace-nowrap flex  xs:mb-3 sm:mb-3 md:mb-2'>
                            <span className='w-full text-center'>
                                I am a 
                            </span>
                            <span className='text-[#9894cc] font-bold  flex items-center pl-3'>
                                <Typewriter
                                    options={{
                                        strings: ['Developer', 'Student'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </span>
                        </h1>
                        <p className='text-[#2c2b2c] font-light whitespace-normal flex-shrink-0 xs:mb-5 sm:mb-5 md:mb-5 md:w-[75%] sm:w-[75%]'>
                            Currently, I'm focused on building responsive web applications.
                        </p>
                        <button className='btn_Contact ml-[3px]'>
                            Contact me
                        </button>       
                    </div>
                    {/* IMAGEM */}
                    <div className='h-full w-full flex items-center justify-center md:ml-10 sm:ml-3 xs:ml-0'> 
                    <div className=' rounded-full sm:p-[10px] xs:p-[8px] bg-[#c6caff]'>
                        <div className='flex items-center justify-center xl:w-[280px] xl:h-[280px] md:w-[250px] md:h-[250px] 
                        sm:w-[200px] sm:h-[200px] xs:w-[180px] xs:h-[180px] transition-all rounded-full bg-[#9894cc] duration-500 sm:border-[10px] xs:border-[8px] border-[#acabec]
                        '>
                            <img src={image} alt="photo" id='photo' className='object-cover rounded-full w-full h-full sm:p-[10px] xs:p-[8px] '/>
                        </div>
                        </div>   
                    </div>  
                </div>
                <div className='flex justify-center items-end w-full md:text-4xl sm:text-3xl xs:text-3xl h-[130px]'>
                    <CiCircleChevDown className=' animate-bounce   text-[#000000]'/>
                </div>
            </motion.div>      
        </section>
        </>
    )
}

export default Home