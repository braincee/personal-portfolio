import React from 'react';
import Link from 'next/link';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { ToastContainer } from 'react-toastify';



const Main = () => {
    return (
        <div id='home' className='w-full h-screen text-center'> 
          <div className='max-w-[12] w-full h-full mx-auto p-2 flex justify-center items-center'>
              <div>
                <h2 className='py-4'>
                 Hello My name is <span className='text-[#d0efff] italic'>Stephen</span>
                 </h2>
                    <h2 className='py-4 uppercase'>A full-stack developer</h2>
                     <p className='uppercase tracking-widest'>let's build something together</p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full bg-[#2a9cf45d] p-5 cursor-pointer hover:scale-110 hover:bg-[#0403072a] hover:text-[#d0efff] ease in duration-300'>
                            <Link href="https://www.linkedin.com/in/stephen-annor/" target="_blank" rel="noopener noreferrer">
                              <FaLinkedinIn />
                            </Link>
                          </div>
                        <div className='rounded-full bg-[#2a9cf45d] p-5 cursor-pointer hover:scale-110 ease in duration-300 hover:bg-[#0403072a] hover:text-[#d0efff]'>
                            <Link href="https://github.com/braincee" target="_blank">
                              <AiOutlineGithub />
                            </Link>
                            
                          </div>
                        <div className='rounded-full bg-[#2a9cf45d] p-5 cursor-pointer hover:scale-110 ease in duration-300  hover:bg-[#0403072a] hover:text-[#d0efff]'>
                            <Link href="https://twitter.com/annor0543" target="_blank">
                              <AiOutlineTwitter />
                            </Link>
                          </div>
                        <div className='rounded-full bg-[#2a9cf45d] p-5 cursor-pointer hover:scale-110 ease in duration-300  hover:bg-[#0403072a] hover:text-[#d0efff]'>
                            <Link href="https://www.instagram.com/appiah.korang/" target="_blank">
                              <BsInstagram />
                            </Link>
                          </div>
                    </div>
                    <ToastContainer />
                </div> 
          </div>
    </div>
  )
}

export default Main;