import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu, AiOutlineTwitter, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import  { useState } from 'react';

const Navbar = () => {

    const [ nav, setNav ] = useState( false );

    const handleNav = () =>
    {
        setNav(!nav)
    }
  return (
      <div className='fixed w-full h-20 shadow-xl z-[100]'>
          <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
              <Image
                  src="/../public/assets/NavLogo.png"
                  alt="/"
                  width='125'
                  height='50'
              />
              <div>
                  <ul className='hidden md:flex'>
                      <Link href='/'>
                          <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                      </Link>
                      <Link href='/'>
                          <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                      </Link>
                      <Link href='/'>
                          <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                      </Link>
                      <Link href='/'>
                          <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                      </Link>
                      <Link href='/'>
                          <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                      </Link>
                  </ul>
                  <div onClick={handleNav} className='md:hidden'>
                      <AiOutlineMenu size={25} />
                  </div>
              </div>
          </div>
            <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70 md:hidden' : ''}>
              <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' :
                  'fixed left-[-100%] top-0  p-10 ease-in duration-500' }>
                  <div>
                      <div className='flex w-full items-center justify-between'>
                          <Image src="/../public/assets/navLogo.png" width='87' height='35' alt="/" />
                          <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 duration-300'>
                             <AiOutlineClose />
                          </div>
                      </div>
                      <div className='border-b border-gray-300 my-4'>
                          <p className='w-[85%] md:w-[90%] py-4'>Let's build something legendary together</p>
                      </div>
                  </div>
                  <div className='py-4 flex flex-col'>
                      <ul className='uppercase'>
                          <Link href='/'>
                              <li className='py-4'>Home</li>
                          </Link>
                          <Link href='/'>
                              <li className='py-4'>About</li>
                          </Link>
                          <Link href='/'>
                              <li className='py-4'>Skills</li>
                          </Link>
                          <Link href='/'>
                              <li className='py-4'>Projects</li>
                          </Link>
                          <Link href='/'>
                              <li className='py-4'>Contact</li>
                          </Link>
                      </ul>
                      <div className='py-10'>
                          <p className='uppercase tracking-widest text-[#5651e5]'>
                              Let's connect</p>
                          <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease in duration-300'>
                                 <FaLinkedinIn />
                              </div>
                              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease in duration-300'>
                                 <AiOutlineGithub />
                              </div>
                              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease in duration-300'>
                                 <AiOutlineTwitter />
                              </div>
                              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease in duration-300'>
                                 <AiOutlineMail />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
  )
}

export default Navbar;