import React from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Html from '../public/assets/skills/html.png'
import Css from '../public/assets/skills/css.png'
import JavaScript from '../public/assets/skills/javascript.png'
import Reacto from '../public/assets/skills/react.png'
import Redux from '../public/assets/skills/redux2.png'
import Ruby from '../public/assets/skills/ruby.png'
import Rails from '../public/assets/skills/rails5.png'
import Firebase from '../public/assets/skills/firebase.png'
import Postgres from '../public/assets/skills/postgresql.png'
import Vscode from '../public/assets/skills/vscode3.png'
import Github from '../public/assets/skills/github.png'
import Git from '../public/assets/skills/git.png'
import Render from '../public/assets/skills/render.png'
import Rspec from '../public/assets/skills/rspec.png'
import Netlify from '../public/assets/skills/netlify.png'
import Tailwind from '../public/assets/skills/tailwind.png'
import Vercel from '../public/assets/skills/vercel.png'
import Jest from '../public/assets/skills/jest.png'



const Skills = () => {

  const { ref, inView } = useInView();

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
    };

    const bottomSettings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        rtl: true,
        arrows: false,
      };

  return (
    <div ref={ref}>
       <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
       >
  <div id='skills' className='mx-auto px-2 py-[150px] md:pt-[20px] skills'>
 <div className='relative grid grid-cols-2 px-2 mb-20 items-center section'>
   <div className="h-1 bg-yellow-600 mr-2"></div>
    <p className='relative inline-block text-3xl pl-2 text-yellow-600'>TECHNICAL SKILLS</p>
  </div>
  <div className='grid grid-cols-3 mb-20 ml-6 md:flex justify-center'>
  <div className='mb-4 flex flex-col pr-12'>
        <h3 className='text-lg font-bold'>LANGUAGES</h3>
        <hr className='border-b-1 border-gray-400 mt-1' />
        <ul className='mt-3'>
          <li>JavaScript</li>
          <li>React</li>
          <li>Redux</li>
          <li>Ruby</li>
          <li>Rails</li>
          <li>Bootstrap</li>
          <li>Tailwind</li>
        </ul>
      </div>
      <div className='mb-4 flex flex-col pr-10'>
        <h3 className='text-lg font-bold'>DATABASE</h3>
        <hr className='border-b-1 border-gray-400 mt-1' />
        <ul className='mt-3'>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>Firebase</li>
        </ul>
      </div>
      <div className='mb-4 flex flex-col pr-10'>
        <h3 className='text-lg font-bold'>DEPLOYMENT</h3>
        <hr className='border-b-1 border-gray-400 mt-1' />
        <ul className='mt-3'>
            <li>GitHub Pages</li>
            <li>Netlify</li>
            <li>Vercel</li>
            <li>Render</li>
        </ul>
      </div>
      <div className='mb-4 flex flex-col pr-10'>
        <h3 className='text-lg font-bold'>TOOLS</h3>
        <hr className='border-b-1 border-gray-400 mt-1' />
        <ul className='mt-3'>
            <li>Git</li>
            <li>GitHub</li>
            <li>VsCode</li>
        </ul>
      </div>
      <div className='mb-4 flex flex-col'>
        <h3 className='text-lg font-bold'>TESTING</h3>
        <hr className='border-b-1 border-gray-400 mt-1' />
        <ul className='mt-3'>
            <li>Jest</li>
            <li>Rspec</li>
            <li>Capybara</li>
        </ul>
      </div>
      </div>
    <Slider {...settings}>
     <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src={Html} width="50" height="50" alt='/'/>
      </div>
     </div>
     </div>
     <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src={Css} width="50" height="50" alt='/'/>
      </div>
     </div>
     </div>
     <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src={JavaScript} width="50" height="50" alt='/'/>
      </div>
     </div>
     </div>
     <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src={Reacto} width="50" height="50" alt='/'/>
      </div>
     </div>
     </div>
     <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src={Redux} width="50" height="50" alt='/'/>
      </div>
     </div>
     </div>
     <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src={Ruby} width="50" height="50" alt='/'/>
      </div>
     </div>
     </div>
     <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src={Rails} width="50" height="50" alt='/'/>
      </div>
     </div>
     </div>
     <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src={Firebase} width="50" height="50" alt='/'/>
      </div>
     </div>
     </div>
     <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src={Postgres} width="50" height="50" alt='/'/>
      </div>
     </div>
     </div>
     <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src={Vscode} width="50" height="50" alt='/'/>
      </div>
     </div>
    </div>
    <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src={Github} width="50" height="50" alt='/'/>
      </div>
     </div>
    </div>
    <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src={Git} width="50" height="50" alt='/'/>
      </div>
     </div>
    </div>
    <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src={Render} width="50" height="50" alt='/'/>
      </div>
     </div>
    </div>
    <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src={Rspec} width="50" height="50" alt='/'/>
      </div>
     </div>
    </div>
    <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src={Netlify} width="50" height="50" alt='/'/>
      </div>
     </div>
    </div>
    <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src={Tailwind} width="50" height="50" alt='/'/>
      </div>
     </div>
    </div>
    <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src={Vercel} width="50" height="50" alt='/'/>
      </div>
     </div>
    </div>
    <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src={Jest} width="50" height="50" alt='/'/>
      </div>
     </div>
    </div>
    </Slider>
    <div className='mb-10'></div>
    <Slider {...bottomSettings}>
    <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src={Html} width="50" height="50" alt='/'/>
      </div>
     </div>
     </div>
     <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src={Css} width="50" height="50" alt='/'/>
      </div>
     </div>
     </div>
     <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src={JavaScript} width="50" height="50" alt='/'/>
      </div>
     </div>
     </div>
     <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src={Reacto} width="50" height="50" alt='/'/>
      </div>
     </div>
     </div>
     <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src={Redux} width="50" height="50" alt='/'/>
      </div>
     </div>
     </div>
     <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src={Ruby} width="50" height="50" alt='/'/>
      </div>
     </div>
     </div>
     <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src={Rails} width="50" height="50" alt='/'/>
      </div>
     </div>
     </div>
     <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src={Firebase} width="50" height="50" alt='/'/>
      </div>
     </div>
     </div>
     <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src={Postgres} width="50" height="50" alt='/'/>
      </div>
     </div>
    </div>
    <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src={Vscode} width="50" height="50" alt='/'/>
      </div>
     </div>
    </div>
    <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src={Github} width="50" height="50" alt='/'/>
      </div>
     </div>
    </div>
    <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src={Git} width="50" height="50" alt='/'/>
      </div>
     </div>
    </div>
    <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src={Render} width="50" height="50" alt='/'/>
      </div>
     </div>
    </div>
    <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src={Rspec} width="50" height="50" alt='/'/>
      </div>
     </div>
    </div>
    <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src={Netlify} width="50" height="50" alt='/'/>
      </div>
     </div>
    </div>
    <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src='/../public/assets/skills/tailwind.png' width="50" height="50" alt='/'/>
      </div>
     </div>
    </div>
    <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src='/../public/assets/skills/vercel.png' width="50" height="50" alt='/'/>
      </div>
     </div>
    </div>
    <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src='/../public/assets/skills/jest.png' width="50" height="50" alt='/'/>
      </div>
     </div>
    </div>
    </Slider>
    </div>
  </motion.div>
    </div>

  )
}

export default Skills;
