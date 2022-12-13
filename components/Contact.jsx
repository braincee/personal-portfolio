import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineTwitter, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import Link from 'next/link'

const Contact = () => {
  return (
      <div>
          <div id='contact' className='max-w-[1240px] m-auto px-2 py-16 w-full'>
              <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
              <h2 className='py-4'>Get In Touch</h2>
              <div className='grid lg:grid-cols-5 gap-8'>
                  {/*left*/ }

                  <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                      <div className='lg:p-4 h-full'>
                          <div>
                              <img
                                  className='rounded-xl hover:scale-110 ease-in duration-300'
                                  src='https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80'
                                  alt='/' />
                          </div>
                          <div>
                              <h2 className='py-2'>Stephen Annnor</h2>
                              <p>Full-Stack Developer</p>
                              <p className='py-4'> I am available for freelance or full-time positions. Contact
                                 me and let's talk.</p>
                          </div>
                          <div>
                          <p className='uppercase pt-8'>Connect With Me</p>
                          <div className='flex items-center justify-between py-4'>
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
                            <AiOutlineMail />
                          </div>
                          </div>
                      </div>
                      </div>
                      
                  </div>
                  {/*right*/ }
                  <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                      <div className='p-4'>

                          <form>
                              <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                  <div className='flex flex-col'>
                                      <label className='uppercase text-sm py-2'>Name</label>
                                      <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text"/>
                                  </div>
                                    <div className='flex flex-col'>
                                      <label className='uppercase text-sm py-2'>Phone Number</label>
                                      <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text"/>
                                  </div>
                              </div>
                              <div className='flex flex-col py-4'>
                                  <label className='uppercase text-sm py-2'>Email</label>
                                   <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email"/>
                              </div>
                              <div className='flex flex-col py-4'>
                                  <label className='uppercase text-sm py-2'>Subject</label>
                                   <input className='border-2 rounded-lg p-3 flex border-gray-300' type="subject"/>
                              </div>
                              <div className='flex flex-col py-4'>
                                  <label className='uppercase text-sm py-2'>Message</label>
                                   <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='6'></textarea>
                              </div>
                              <button className='w-full py-4 text-gray-300 mt-4'>SEND MESSAGE</button>
                          </form>
                     </div>
                  </div>
              </div>
              <div className='flex justify-center py-12'> 
                  <Link href='/'>
                      <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 hover:bg-slate-400 hover:text-white ease-in duration-300 text-[#5651e5]'>
                          <HiOutlineChevronDoubleUp size={30} />
                      </div>
                  </Link>
              </div>
          </div>
    </div>
  )
}

export default Contact;