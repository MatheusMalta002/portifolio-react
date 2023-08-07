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
                  initial={{opacity:0, y:100}}
                  animate={{opacity:1, y:0}}
                  transition={{duration: "1"}}>
                    <div className=' w-full flex flex-col items-start justify-center '>

                        <h1 className='py-4 flex'>
                            <span className='text-white uppercase font-bold text-5xl flex-wrap '>
                                MATHEUS MALTA
                            </span>
                        </h1>

                        <h1 className=' text-white text-4xl flex text-center font-bold mt-4'>
                            I am a 
                            <span className='text-[#a1ade9] font-bold  flex items-center pl-3'>
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

                        <div>
                            <button class="btn">
                                Contact me
                            </button>
                        </div>
                    </div>

                    <div className='hidden md:flex h-full  flex-col items-center justify-center '>
                        <div className=' w-[280px] h-[280px] rounded-full flex justify-center items-center overflow-hidden  '>
                            <img src={image} alt="photo" className='object-cover h-full w-full' />
                        </div>
                    </div>
                </motion.div>

            </div>
        </>
    )
}

export default Home