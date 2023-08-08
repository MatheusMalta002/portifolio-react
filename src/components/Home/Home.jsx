import React from 'react'
import Social_Icons from './Social_Icons/Social_Icons'
import Typewriter from 'typewriter-effect'
import image from '../../assets/image.png'
import { motion } from 'framer-motion'


function Home() {

    return (
        <>
        <div className='max-w-screen-xl min-h-screen mx-auto py-40 flex justify-center items-center'>
            {/* Social Icons */}
            <Social_Icons />
            {/* main container */}
            <motion.div className='flex justify-center items-center flex-row w-full ml-[40px] mr-[40px]'
                initial={{opacity:0, x:-100}}
                animate={{opacity:1, x:0}}
                transition={{duration: "1"}} >

                <div className='flex flex-col items-start justify-center text-gray-800 '>
                    <h1 className='py-4 flex'>
                        <span className='uppercase  text-5xl flex-wrap  '>
                            MATHEUS <span>MALTA</span>
                        </span>
                    </h1>

                    <h1 className='text-4xl flex text-center mt-4'>
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
                        <button className='btn_Contact'>
                            Contact me
                        </button>
                    </div>
                </div>
                <div className='hidden md:flex h-full  flex-col items-center justify-center'> 
                    <div className=' w-[250px] h-[250px] rounded-full flex p-3 border-2 border-gray-800
                     justify-center items-center overflow-hidden '>
                        <img src={image} alt="photo" className='object-cover h-full w-full rounded-full' />
                    </div>
                </div>
            </motion.div>
        </div>
        </>
    )
}

export default Home