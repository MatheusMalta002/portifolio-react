import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface SkillItem {
  name: string;
  text: string;
}

const Skills: React.FC = () => {
  const navItems: SkillItem[] = [
    { name: 'js', text: 'Javascript' },
    { name: 'react', text: 'React Js' },
    { name: 'html', text: 'HTML' },
    { name: 'github', text: 'Git Hub' },
    { name: 'css', text: 'CSS' },
    { name: 'git', text: 'Git' },
    { name: 'nodejs', text: 'Node Js' },
    { name: 'mongo', text: 'Mongo DB' },
    { name: 'tailwind', text: 'Tailwind' },
    { name: 'mysql', text: 'MySQL' },
    { name: 'python', text: 'Python' },
    { name: 'typescript', text: 'Typescript' },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div name='skills' className='w-full xl:px-[180px] md:px-[150px] sm:px-[100px] xs:px-[50px] 
      flex justify-center items-center pt-20'>
      {/* Container */}
      <div className='mx-auto flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-3xl font-bold inline border-b-2 text-[#2c2b2c]  font-custom ' >Habilidades</p>
        </div>

        <div className='w-full h-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-10'>
          {navItems.map((item, index) => (
            <div data-aos="zoom-out-down" data-aos-duration="800" key={index}>
              <div className='shadow-md py-2 cursor-pointer shadow-[#313030]  hover:scale-110 duration-500 rounded-[10px] flex flex-col justify-around'>
                <img className='w-20 mx-auto' src={`https://skillicons.dev/icons?i=${item.name}`} alt={`${item.name} icon`} />
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
