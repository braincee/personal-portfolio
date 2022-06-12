import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'

const Main = () => {
    return (
        <div id='home' className='w-full h-screen text-center'> 
          <div className='max-w-[12] w-full h-full mx-auto p-2 flex justify-center items-center'>
              <div>
                    <p className='uppercase tracking-widest text-gray-600'>let's build something together</p>
                    <h2 className='py-4 text-gray-700'>HI I'm <span className='text-[#5651e5]'>STEPHEN</span></h2>
                    <h2 className='py-4 text-gray-700 uppercase'> A full-stack developer</h2>
                    <p className='py-4 text-gray-600 max-w-[40%] m-auto font-bold'>I’m a full-stack web developer specializing in building (and
              occasionally designing) exceptional digital experiences. I handle projects involving databases,
              Application Programming Interface(API's), or designing user-facing websites, as well as interacting with clients
            during development.</p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-[#acabb8] hover:text-[#ffff] ease in duration-300'>
                            <FaLinkedinIn />
                          </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease in duration-300 hover:bg-[#acabb8] hover:text-[#ffff]'>
                            <AiOutlineGithub />
                          </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease in duration-300  hover:bg-[#acabb8] hover:text-[#ffff]'>
                            <AiOutlineTwitter />
                          </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease in duration-300  hover:bg-[#acabb8] hover:text-[#ffff]'>
                            <BsInstagram />
                          </div>
                    </div>
                </div> 
          </div>
    </div>
  )
}

export default Main;