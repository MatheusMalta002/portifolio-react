import { Link } from 'react-scroll';
import { ProfileCard } from './ProfileCard/ProfileCard';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';


const About = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id='about' className='w-full md:h-screen p-4 flex items-center justify-center py-16 xl:px-[180px] md:px-[150px] sm:px-[100px] 
    xs:px-[50px] font-custom '>
      <div className='max-w-[1240px] m-auto grid xl:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 xl:gap-8 md:gap-0 md:pt-[50px] 
      sm:pt-[20px] xs:pt-[10px]' >
        <div className='col-span-2' >  
          <p className=' text-xl tracking-widest text-[#8685d4] font-bold font-custom' data-aos="fade-right" data-aos-offset="100" 
          data-aos-easing="ease-in-sine" data-aos-duration="850">
            About
          </p>
          <h2 className='py-4 font-bold text-[#2c2b2c]'data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" 
          data-aos-duration="900">Who I Am</h2>
          <p className='py-2 text-[#2c2b2c]  text-justify' data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" 
          data-aos-duration="950">
            I am a student of Information Systems at the Center for Informatics of the Federal University of Pernambuco, 
            currently in the final stages of my 4th semester. I reside in Recife-PE, and invest my time in studying various
             technologies to enhance my technical skills and not confine myself solely to the knowledge provided by the university.
          </p>
          <p className='py-2 text-[#2c2b2c] text-justify ' data-aos="fade-right" data-aos-offset="100"
           data-aos-easing="ease-in-sine" data-aos-duration="1000" >
            I possess an understanding of the principles of Algorithms and Data Structures, Object-Oriented Programming,
            Computer Networks, and Database Systems. Additionally, I am dedicated to the study of practices such as clean
            code, BDD, TDD, and automated testing. I have a comprehensive command of the Javascript and Python programming 
            languages. Apart from these, I have other skills that can be reviewed in the <span className='underline cursor-pointer'><Link to='skills'>skills section.</Link></span>
          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400  rounded-xl flex items-center
         justify-center p-4 md:mt-0 sm:mt-0 xs:mt-[30px]' data-aos="zoom-in-left" data-aos-duration="1000">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
};

export default About;