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
    <div id='about' className='w-full flex items-center justify-center md:py-16 sm:py-14 xs:py-7 xl:px-[180px] md:px-[150px] sm:px-[100px] 
    xs:px-[50px] font-custom '>
      <div className='max-w-[1240px] m-auto grid xl:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 xl:gap-8 md:gap-0 md:pt-[50px] 
      sm:pt-[20px] xs:pt-[10px]' >
        <div className='col-span-2'>  
          <p className=' text-3xl tracking-widest text-[#8685d4] font-bold font-custom'>
            Sobre
          </p>
          <h2 className='py-4 font-bold text-[#2c2b2c] md:text-[17px]  '>Quem eu sou</h2>
          <p className='py-2 text-[#2c2b2c] md:text-[17px] xs:text-[16px]  text-justify' >
            Sou estudante de Sistemas de Informação no Centro de Informática da Universidade Federal de Pernambuco,
            atualmente na fase final do meu 4º semestre. Moro em Recife-PE e invisto meu tempo estudando diversas
            tecnologias para aprimorar minhas habilidades técnicas e não me limitar apenas aos conhecimentos proporcionados pela universidade.
          </p>
          <p className='py-2 text-[#2c2b2c] md:text-[17px] xs:text-[16px] text-justify' >
            Possuo compreensão dos princípios de Algoritmos e Estruturas de Dados, Programação Orientada a Objetos,
             Redes de Computadores e Banco de Dados. Além disso, me dedico ao estudo de práticas como clean
             code, BDD, TDD e testes automatizados. Tenho domínio sobre as linguagens de programação Javascript e Python.
             Além dessas, possuo habilidades com outras tecnologias que podem ser revisadas na <span className='underline cursor-pointer'><Link to='skills'>seção de habilidades.</Link></span>
          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400  rounded-xl flex items-center
         justify-center p-4 md:mt-0 sm:mt-0 xs:mt-[30px]'>
          <ProfileCard />
        </div>
      </div>
    </div>
  );
};

export default About;