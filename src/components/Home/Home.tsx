import React, { useEffect } from 'react';
import Social_Icons from './Social_Icons/Social_Icons';
import Typewriter from 'typewriter-effect';
import { VscFoldDown } from 'react-icons/vsc';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image from '../../assets/photo_profile.png';
import { useTheme } from '../../hooks/useTheme';

const Home: React.FC = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const { theme, setTheme} = useTheme()

    return (
        <section id='home' className={` min-w-screen min-h-screen flex flex-col justify-center items-center  md:px-[350px] sm:px-[300px] xs:px-[200px] 
        ${theme === "light" ?  ("text-light-secondary") : ("text-dark-secondary")}`}>
            {/* Social Icons */}   
            <Social_Icons />
            {/* main container */}
            <div className='w-full h-[75px]'></div>
            <div className='flex  justify-center items-center flex-col   md:pb-10  xs:pb-0 flex-shrink-0' >
                <div className='md:flex justify-center w-full py-10 sm:hidden xs:hidden'></div>
                <div className='flex md:flex-row sm:flex-col-reverse xs:flex-col-reverse'>
                    <div className='flex font-custom flex-col items-start justify-center xs:mt-3 sm:mt-14 md:mt-0' data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="1100">
                        <h1 className='flex 2xl:text-7xl xl:text-6xl md:text-5xl sm:text-5xl xs:text-[40px] transition-all duration-500 whitespace-nowrap md:mb-5 sm:mb-4 xs:mb-6 font-bold'>
                            Matheus Malta
                        </h1>
                        <h1 className=' xs:text-2xl sm:text-4xl md:text-4xl  font-bold transition-all duration-500 whitespace-nowrap flex  xs:mb-3 sm:mb-3 md:mb-2'>
                            <span className='w-full text-center  '>
                                Sou
                            </span>
                            <span className={` flex items-center pl-3
                            ${theme === "light" ? ' text-light-typewriter' : 'text-dark-typewriter'}`}>
                                <Typewriter
                                    options={{
                                        strings: ['Desenvolvedor', 'Estudante'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </span>
                        </h1>
                        <p className='font-medium whitespace-normal flex-shrink-0 xs:mb-5 sm:mb-5 md:mb-5 md:w-[75%] sm:w-[75%] xs:w-full'>
                            Atualmente focado na construção de aplicações web responsivas.
                        </p>
                        <button className='btn_Contact ml-[3px] md:w-[40%] sm:w-[40%] xs:w-full'>
                            Contate-me
                        </button>       
                    </div>
                    {/* IMAGEM */}
                    <div className='h-full w-full flex items-center justify-center md:ml-10 sm:ml-3 xs:ml-0 ' data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="1100"> 
                        <div className={`flex items-center justify-center xl:w-[280px] xl:h-[280px] md:w-[250px] md:h-[250px] 
                        sm:w-[220px] sm:h-[220px] xs:w-[250px] xs:h-[250px] transition-all rounded-full duration-500
                        ${theme === "light" ? ' bg-light-image' : ' bg-dark-image'}`}>
                        <img src={image} alt="photo" id='photo' className='object-cover rounded-full w-full h-full md:p-[15px] sm:p-[10px] xs:p-[8px]' />
                        </div>  
                    </div>  
                </div>
                <div className='flex flex-col md:justify-center md:items-center xs:justify-start xs:items-center w-full h-[130px]'>
                    <div className={` rounded-full p-2 relative md:top-[50px] sm:top-[30px] xs:top-[15px] ${theme === "light" ?  ("text-light-secondary") : ("text-dark-secondary")}`}>
                    <p className='w-full text-center text-[13px] font-bold mb-[5px] '>Scroll Down</p>
                    <div className='w-full flex justify-center'>
                    <VscFoldDown className={` animate-bounce`}/>
                    </div>
                    </div>
                </div>
            </div>      
        </section>
    );
}

export default Home;
