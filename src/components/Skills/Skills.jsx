import React from 'react';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const Skills = () => {

    const navItems = [
        { name: 'js', text: 'Javascript' },{ name: 'react', text: 'React Js' }, { name: 'html', text: 'HTML' },{ name: 'github', text: 'Git Hub' },
        { name: 'css', text: 'CSS' }, { name: 'git', text: 'Git' },{ name: 'nodejs', text: 'Node Js' },{ name: 'mongo', text: 'Mongo DB' },
        { name: 'tailwind', text: 'Tailwind' },{ name: 'mysql', text: 'MySQL' },{ name: 'python', text: 'Python' },
    ];

    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <div name='skills' className='w-full  xl:px-[180px] md:px-[150px] sm:px-[100px] xs:px-[50px] 
        flex justify-center items-center md:pt-10 sm:pt-5 xs>pt-0'>
            {/* Container */}
            <div className='mx-auto flex flex-col justify-center w-full h-full'>
                <div  data-aos="zoom-out-down" data-aos-duration="1000">
                    <p className='text-2xl font-bold inline border-b-2 text-[#2c2b2c] border-[#8685d4] font-custom ' >Skills</p>
                </div>

                <div className='w-full h-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-6'>
                    {navItems.map((item, index) => (
                        <div data-aos="zoom-out-down" data-aos-duration="1000">
                        <div key={index} className='shadow-md py-2 cursor-pointer shadow-[#313030]  hover:scale-110 duration-500 rounded-[10px] flex flex-col justify-around'   >
                            <img className='w-20 mx-auto' src={`https://skillicons.dev/icons?i=${item.name}`} alt={`${item.name} icon`}/>
                            <p className='font-medium'>{item.text}</p>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
