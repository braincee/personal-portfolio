import React from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {
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
<div>
  <div id='skills' className='mx-auto px-2 mb-20'>
 <div className='max-w-[1240px] mx-auto grid grid-cols-2 px-2 mb-20 items-center'>
   <div className="h-1 bg-[#9668f5] mr-2"></div>
    <p className='relative inline-block text-xl pl-2 md:text-3xl'>TECHNICAL SKILLS</p>
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
        <Image src='/../public/assets/skills/html.png' width="50" height="50" alt='/'/>
      </div>
     </div>
     </div>
     <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src='/../public/assets/skills/css.png' width="50" height="50" alt='/'/>
      </div>
     </div>
     </div>
     <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src='/../public/assets/skills/javascript.png' width="50" height="50" alt='/'/>
      </div>
     </div>
     </div>
     <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src='/../public/assets/skills/react.png' width="50" height="50" alt='/'/>
      </div>
     </div>
     </div>
     <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src='/../public/assets/skills/redux2.png' width="50" height="50" alt='/'/>
      </div>
     </div>
     </div>
     <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src='/../public/assets/skills/ruby.png' width="50" height="50" alt='/'/>
      </div>
     </div>
     </div>
     <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src='/../public/assets/skills/rails5.png' width="50" height="50" alt='/'/>
      </div>
     </div>
     </div>
     <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src='/../public/assets/skills/firebase.png' width="50" height="50" alt='/'/>
      </div>
     </div>
     </div>
     <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src='/../public/assets/skills/postgresql.png' width="50" height="50" alt='/'/>
      </div>
     </div>
     </div>
     <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src='/../public/assets/skills/vscode3.png' width="50" height="50" alt='/'/>
      </div>
     </div>
    </div>
    <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src='/../public/assets/skills/github.png' width="50" height="50" alt='/'/>
      </div>
     </div>
    </div>
    <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src='/../public/assets/skills/git.png' width="50" height="50" alt='/'/>
      </div>
     </div>
    </div>
    <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src='/../public/assets/skills/render.png' width="50" height="50" alt='/'/>
      </div>
     </div>
    </div>
    <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src='/../public/assets/skills/rspec.png' width="50" height="50" alt='/'/>
      </div>
     </div>
    </div>
    <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src='/../public/assets/skills/netlify.png' width="50" height="50" alt='/'/>
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
    <div className='mb-10'></div>
    <Slider {...bottomSettings}>
    <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src='/../public/assets/skills/html.png' width="50" height="50" alt='/'/>
      </div>
     </div>
     </div>
     <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src='/../public/assets/skills/css.png' width="50" height="50" alt='/'/>
      </div>
     </div>
     </div>
     <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src='/../public/assets/skills/javascript.png' width="50" height="50" alt='/'/>
      </div>
     </div>
     </div>
     <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src='/../public/assets/skills/react.png' width="50" height="50" alt='/'/>
      </div>
     </div>
     </div>
     <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src='/../public/assets/skills/redux2.png' width="50" height="50" alt='/'/>
      </div>
     </div>
     </div>
     <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src='/../public/assets/skills/ruby.png' width="50" height="50" alt='/'/>
      </div>
     </div>
     </div>
     <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src='/../public/assets/skills/rails5.png' width="50" height="50" alt='/'/>
      </div>
     </div>
     </div>
     <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src='/../public/assets/skills/firebase.png' width="50" height="50" alt='/'/>
      </div>
     </div>
     </div>
     <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src='/../public/assets/skills/postgresql.png' width="50" height="50" alt='/'/>
      </div>
     </div>
    </div>
    <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src='/../public/assets/skills/vscode3.png' width="50" height="50" alt='/'/>
      </div>
     </div>
    </div>
    <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src='/../public/assets/skills/github.png' width="50" height="50" alt='/'/>
      </div>
     </div>
    </div>
    <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src='/../public/assets/skills/git.png' width="50" height="50" alt='/'/>
      </div>
     </div>
    </div>
    <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src='/../public/assets/skills/render.png' width="50" height="50" alt='/'/>
      </div>
     </div>
    </div>
    <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src='/../public/assets/skills/rspec.png' width="50" height="50" alt='/'/>
      </div>
     </div>
    </div>
    <div>
      <div className='card shadow-md hover-shadow-lg hover:scale-105 rounded-lg'>
        <div className='w-full h-full flex items-center justify-center py-5'>
        <Image src='/../public/assets/skills/netlify.png' width="50" height="50" alt='/'/>
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
  </div>
  )
}

export default Skills;
