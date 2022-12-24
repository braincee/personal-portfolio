import React, { useState } from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineTwitter, AiOutlineGithub } from 'react-icons/ai';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Link from 'next/link';
import Image from 'next/image';
import { BsInstagram } from 'react-icons/bs';

const Contact = () => {

    const [query, setQuery] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
      });

    const [sucessAlert, setSuccessAlert ] = useState(false);
    
      // Update inputs value
      const handleParam = () => (e) => {
        const name = e.target.name;
        const phone = e.target.phone;
        const email = e.target.email;
        const message = e.target.message;
        const value = e.target.value;
        setQuery((prevState) => ({
          ...prevState,
          [name]: value,
          [phone]: value,
          [email]: value,
          [message]: value
        }));
      };
      // Form Submit function
      const formSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(query).forEach(([key, value]) => {
          formData.append(key, value);
        });
        fetch("https://getform.io/f/e97fa24b-987e-4516-88e1-3dd24a4aa412", {
          method: "POST",
          body: formData
        }).then(() => setQuery({ name: "", phone: "", email: "", message: "" }));
        
        setSuccessAlert(true);
        setTimeout(() => {
            setSuccessAlert(false);
        }, 4000);
      };

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
                              <Image
                                  className='rounded-xl hover:scale-110 ease-in duration-300'
                                  src='/../public/assets/laptop2.jpg'
                                  width='800'
                                  height='400'
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
                            <Link href="https://www.linkedin.com/in/stephen-annor/" target="_blank">
                             <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-[#acabb8] hover:text-[#ffff] ease in duration-300'>
                              <FaLinkedinIn />
                             </div>
                          </Link>
                          <Link href="https://github.com/braincee" target="_blank">
                           <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease in duration-300 hover:bg-[#acabb8] hover:text-[#ffff]'>
                            <AiOutlineGithub />
                          </div>
                          </Link>
                          <Link href="https://twitter.com/annor0543" target="_blank">
                          <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease in duration-300  hover:bg-[#acabb8] hover:text-[#ffff]'>
                            <AiOutlineTwitter />
                          </div>
                          </Link>
                          <Link href="https://www.instagram.com/appiah.korang/" target="_blank">
                          <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease in duration-300  hover:bg-[#acabb8] hover:text-[#ffff]'>
                            <BsInstagram />
                          </div>
                          </Link>
                        </div>
                      </div>
                      </div>
                      
                  </div>
                  {/*right*/ }
                  <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                      <div className='p-4'>

                          <form onSubmit={formSubmit}>
                              <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                  <div className='flex flex-col'>
                                      <label htmlFor='name' className='uppercase text-sm py-2'>Full Name</label>
                                      <input 
                                      name='name'
                                      id='name'
                                      className='border-2 rounded-lg p-3 flex border-gray-300'
                                      type="text"
                                      required
                                      value={query.name}
                                      onChange={handleParam()}
                                      />
                                  </div>
                                    <div className='flex flex-col'>
                                      <label htmlFor='phone' className='uppercase text-sm py-2'>Phone Number</label>
                                      <input 
                                      name='phone'
                                      id='phone'
                                      className='border-2 rounded-lg p-3 flex border-gray-300'
                                      type="text"
                                      required
                                      value={query.phone}
                                      onChange={handleParam()}
                                      />
                                  </div>
                              </div>
                              <div className='flex flex-col py-4'>
                                  <label htmlFor='email' className='uppercase text-sm py-2'>Email</label>
                                   <input 
                                   name='email'
                                   id='email'
                                   type='email'
                                   className='border-2 rounded-lg p-3 flex border-gray-300'
                                   required
                                   value={query.email}
                                   onChange={handleParam()}
                                   />
                              </div>
                              <div className='flex flex-col py-4'>
                                  <label  htmlFor='message' className='uppercase text-sm py-2'>Message</label>
                                   <textarea 
                                   name="message"
                                   id='message'
                                   className='border-2 rounded-lg p-3 border-gray-300'
                                   rows='4'
                                   required
                                   value={query.message}
                                   onChange={handleParam()}
                                   >
                                   </textarea>
                              </div>
                              <div className='flex flex-col items-center'>
                              <button 
                               type='submit' 
                               className='w-[50%] py-4 text-black mt-4 hover:scale-105 ease in duration-300 hover:bg-[#acabb8] hover:text-[#ffff]'>
                                SEND MESSAGE
                              </button>
                              </div>
                              {sucessAlert && (
                                <p className='text-[#064e3b] text-center mt-10 tracking-widest text-2xl'>Thanks for contacting Stephen</p>
                              )}
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