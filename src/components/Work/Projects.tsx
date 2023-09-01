import React from 'react';
import { data } from './ProjectItem/ProjectItem';
import { useTheme } from '../../hooks/useTheme';

interface ProjectItem {
  name: string;
  github: string;
}

const Work: React.FC = () => {
  const project: ProjectItem[] = data;

  const { theme, setTheme } = useTheme()

  return (
    <div id='work' className='w-full font-custom text-gray-800 xl:px-[180px] md:px-[150px] sm:px-[100px] xs:px-[50px] flex justify-center items-center py-14 '>
      <div className=' py-4 flex flex-col items-center justify-center w-full h-full '>
        <div className='pb-8'>
          <p className={`w-full flex justify-center items-center text-3xl font-bold
          ${theme === "light" ? " text-light-secondary" : " text-dark-textNavbar"}`}>Projetos</p>
        </div>
        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          {project.map((item, index) => (
            <div key={index} className={`imageProject shadow-md shadow-[#414142] group container rounded-md flex justify-center text-center items-center content-div
            ${theme === "light" ? "text-light-secondary hover:bg-light-secondary shadow-gray-500 bg-light-primary" : "hover:bg-dark-textNavbar text-dark-secondary shadow-black bg-[#353534]"}`}>
              <p className='w-full text-center group-hover:hidden font-bold'>Em breve...</p>
              {/* Hover effect for images */}
              <div className="opacity-0 hidden group-hover:opacity-100 group-hover:block">
                <span className="text-2xl font-bold text-white tracking-wider ">
                  {item.name}
                </span>
                <div className="pt-8 text-center">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank" rel="noopener noreferrer">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Código
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
