/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
      <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
          <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
              <div className='col-span-2'>
                  <h2 className='text-xl tracking-widest text-[#5651e5]'>ABOUT ME</h2>
          <p className='py-4 text-gray-600 text-2xl'>I am a Full-Stack developer currently using modern technologies to plan, build and
            implement reusable user interfaces and user experience systems of websites, software programs, and web-based
            applications. I am passionate about researching and acquiring new ideas to break down complex problems into
            smaller component solutions. I view product development as a team effort, accept challenges, enjoy constructive
            criticism, contribute tactically and communicate effectively with team members and clients. As technologies are
            emerging with improvements in libraries and frameworks,
            I am determined to equip myself with the most trending and advanced technologies for a brighter future.</p>
             </div>
              <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-2 hover:scale-110 ease in duration-300'>
                   <Image
            className='rounded-xl'
            width='370'
            height='300'
            src='/../public/assets/laptop.jpg'
            alt='laptop'
          />
             </div>
          </div>
    </div>
  )
}

export default About;