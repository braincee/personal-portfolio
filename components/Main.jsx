import React from 'react';
import Link from 'next/link';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';


const Main = () => {
    return (
        <div className='text-center main'> 
          <div className='w-full h-full mx-auto p-2 flex justify-center items-center'>
              <div>
                <div className='flex justify-center items-start flex-col gap-5 w-[700px]'>
                <div>
                  <p className='text-[70px] tracking-[50px]'><span className='welcome text-[90px] text-yellow-500 leading-10'>W</span>elcome.</p>
                </div>
                  <div className="">
                   <p className='text-[30px] tracking-[10px]'>My name is,</p>
                  </div>
                  <div className=''>
                   <p className='tracking-[20px] italic text-[50px] text-yellow-500 uppercase'>Stephen Annor</p>
                  </div>
                  <div className=''>
                  <p className='text-[20px]'>
                    A Full-Stack Web Developer in Accra, Ghana. I turn ideas into engaging 
                    and user-friendly websites with a keen eye for design and a focus on delivering 
                    projects on time. Want to take your website to the next level? Let's talk.
                  </p>
                  </div>
                  <div>
                    <p className='text-[30px] tracking-widest text-yellow-400'>Quote: One Man's crappy code is another man's full time Job</p>
                  </div>
                </div>
                    <div className='flex items-center justify-between max-w-[500px] m-auto py-[50px]'>
                        <div className='rounded-full bg-[#2a9cf45d] p-5 cursor-pointer hover:scale-110 hover:bg-yellow-400 hover:text-[#d0efff] ease in duration-300'>
                            <Link href="https://www.linkedin.com/in/stephen-annor/" target="_blank" rel="noopener noreferrer">
                              <FaLinkedinIn />
                            </Link>
                          </div>
                        <div className='rounded-full bg-[#2a9cf45d] p-5 cursor-pointer hover:scale-110 ease in duration-300 hover:bg-yellow-400 hover:text-[#d0efff]'>
                            <Link href="https://github.com/braincee" target="_blank">
                              <AiOutlineGithub />
                            </Link>
                            
                          </div>
                        <div className='rounded-full bg-[#2a9cf45d] p-5 cursor-pointer hover:scale-110 ease in duration-300  hover:bg-yellow-400 hover:text-[#d0efff]'>
                            <Link href="https://twitter.com/annor0543" target="_blank">
                              <AiOutlineTwitter />
                            </Link>
                          </div>
                        <div className='rounded-full bg-[#2a9cf45d] p-5 cursor-pointer hover:scale-110 ease in duration-300  hover:bg-yellow-400 hover:text-[#d0efff]'>
                            <Link href="https://www.instagram.com/appiah.korang/" target="_blank">
                              <BsInstagram />
                            </Link>
                          </div>
                    </div>
                </div> 
          </div>
    </div>
  )
}

export default Main;