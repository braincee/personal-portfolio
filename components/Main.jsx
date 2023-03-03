import React from 'react';
import Link from 'next/link';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'


const Main = () => {

  const { ref, InView } = useInView();

    return (
      <div ref={ref}>
             <div className='text-center main'> 
          <div className='w-full h-full mx-auto p-2 flex justify-center items-center'>
              <div>
                <div className='flex justify-start items-start flex-col gap-5 w-[700px]'>
                <div>
                  <p className='text-[70px] tracking-[50px]'><span className='welcome text-[90px] text-yellow-500 leading-10'>W</span>elcome.</p>
                </div>
                <div className='border-l border-yellow-600 h-[38vh] ml-5'>
                <div className='flex items-start ml-8'>
                   <p className='text-[30px] tracking-[10px]'>My name is,</p>
                  </div>
                  <div className='flex items-start ml-8'>
                   <p className='tracking-[10px] italic text-[50px] text-yellow-500 uppercase'>Stephen Annor</p>
                  </div>
                  <div className='flex items-start ml-8'>
                  <p className='text-[20px]'>
                    A Full-Stack Web Developer in Accra, Ghana. I turn ideas into engaging 
                    and user-friendly websites with a keen eye for design and a focus on delivering 
                    projects on time. Want to take your website to the next level? Let's talk.
                  </p>
                  </div>
                  <div className='flex items-start ml-8'>
                    <p className='text-[30px] tracking-widest text-yellow-400'>Quote: One Man's crappy code is another man's full time Job</p>
                  </div>
                </div>
                </div>
                    <div className='flex items-center justify-between max-w-[500px] m-auto py-[70px]'>
                        <div className='rounded-full bg-[#2a9cf45d] text-yellow-500 p-5 cursor-pointer hover:scale-105 hover:bg-yellow-400 hover:text-[#d0efff] ease in duration-300'>
                            <Link href="https://www.linkedin.com/in/stephen-annor/" target="_blank" rel="noopener noreferrer">
                              <FaLinkedinIn />
                            </Link>
                          </div>
                        <div className='rounded-full bg-[#2a9cf45d] text-yellow-500 p-5 cursor-pointer hover:scale-105 ease in duration-300 hover:bg-yellow-400 hover:text-[#d0efff]'>
                            <Link href="https://github.com/braincee" target="_blank">
                              <AiOutlineGithub />
                            </Link>
                            
                          </div>
                        <div className='rounded-full bg-[#2a9cf45d] text-yellow-500 p-5 cursor-pointer hover:scale-105 ease in duration-300  hover:bg-yellow-400 hover:text-[#d0efff]'>
                            <Link href="https://twitter.com/annor0543" target="_blank">
                              <AiOutlineTwitter />
                            </Link>
                          </div>
                        <div className='rounded-full bg-[#2a9cf45d] text-yellow-500 p-5 cursor-pointer hover:scale-105 ease in duration-300  hover:bg-yellow-400 hover:text-[#d0efff]'>
                            <Link href="https://www.instagram.com/appiah.korang/" target='_blank'>
                              <BsInstagram />
                            </Link>
                          </div>
                    </div>
                </div> 
          </div>
    </div>
      </div>
    
  )
}

export default Main;