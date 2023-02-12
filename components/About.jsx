/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';


const About = () => {
  return (
      <div id='about' className='max-w-[1240px] m-auto px-2 w-full p-2 flex-col items-center py-[150px] about'>
        <div className="relative mb-20 grid grid-cols-2 items-center section">
                  <div className="h-1 bg-yellow-600"></div>
                  <p className='relative inline-block text-3xl pl-2 text-yellow-600'>ABOUT ME</p>
                </div>
          <div className='max-w-[1240px] m-auto md:grid grid-cols-2 gap-8'>
          <div className='flex justify-center'>
                   <Image
            className='rounded-xl'
            
            width='350'
            height='300'
            src='/../public/assets/steve.png'
            alt='stephen'
          />
             </div>
              <div className='col-span-1'>
          <p className='py-4 text-2xl about-1'>"As a Full-Stack developer, I use modern technologies to design, 
          develop, and implement reusable user interfaces and user experience systems for websites, software 
          programs, and web-based applications. I am passionate about researching and exploring new ideas to 
          break down complex problems into smaller, more manageable solutions. I believe in the importance of 
          teamwork and collaboration in product development, and I embrace challenges, welcome constructive criticism, 
          contribute effectively, and communicate clearly with team members and clients. As new technologies continue 
          to emerge and improve, I am committed to staying up-to-date and using the most advanced tools and techniques 
          to enhance my skills and future prospects."</p>
             </div>
          </div>
    </div>
  )
}

export default About;