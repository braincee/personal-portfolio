import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] flex flex-col mx-auto justify-center h-full'>
        <p className='uppercase text-xl tracking-widest text-[#5651e5] '>skills</p>
        <h2 className='py-4'>What i can do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease in duration-300'>
            <div className='grid grid-cols-2 gap-4 jsutify-center items-center'>
              <div className='m-auto'>
                 <Image src='/../public/assets/skills/html.png' width="64px" height="64px" alt='/'/>
              </div>
              <div>
                <h3 className='flex flex-col items-center justify-center'>
                  HTML
                </h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease in duration-300'>
            <div className='grid grid-cols-2 gap-4 jsutify-center items-center'>
              <div className='m-auto'>
                 <Image src='/../public/assets/skills/css.png' width="64px" height="64px" alt='/'/>
              </div>
              <div>
                <h3 className='flex flex-col items-center justify-center'>
                  CSS
                </h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease in duration-300'>
            <div className='grid grid-cols-2 gap-4 jsutify-center items-center'>
              <div className='m-auto'>
                 <Image src='/../public/assets/skills/javascript.png' width="64px" height="64px" alt='/'/>
              </div>
              <div>
                <h3 className='flex flex-col items-center justify-center'>
                  JavaScript
                </h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease in duration-300'>
            <div className='grid grid-cols-2 gap-4 jsutify-center items-center'>
              <div className='m-auto'>
                 <Image src='/../public/assets/skills/react.png' width="64px" height="64px" alt='/'/>
              </div>
              <div>
                <h3 className='flex flex-col items-center justify-center'>
                  React
                </h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease in duration-300'>
            <div className='grid grid-cols-2 gap-4 jsutify-center items-center'>
              <div className='m-auto'>
                 <Image src='/../public/assets/skills/redux2.png' width="70px" height="64px" alt='/'/>
              </div>
              <div>
                <h3 className='flex flex-col items-center justify-center'>
                  Redux
                </h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease in duration-300'>
            <div className='grid grid-cols-2 gap-4 jsutify-center items-center'>
              <div className='m-auto'>
                 <Image src='/../public/assets/skills/ruby.png' width="100px" height="64px" alt='/'/>
              </div>
              <div>
                <h3 className='flex flex-col items-center justify-center'>
                  Ruby
                </h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease in duration-300'>
            <div className='grid grid-cols-2 gap-4 jsutify-center items-center'>
              <div className='m-auto'>
                 <Image src='/../public/assets/skills/rails5.png' width="100px" height="90px" alt='/'/>
              </div>
              <div>
                <h3 className='flex flex-col items-center justify-center'>
                  Ruby On Rails
                </h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease in duration-300'>
            <div className='grid grid-cols-2 gap-4 jsutify-center items-center'>
              <div className='m-auto'>
                 <Image src='/../public/assets/skills/firebase.png' width="64px" height="64px" alt='/'/>
              </div>
              <div>
                <h3 className='flex flex-col items-center justify-center'>
                  Firebase
                </h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease in duration-300'>
            <div className='grid grid-cols-2 gap-4 jsutify-center items-center'>
              <div className='m-auto'>
                 <Image src='/../public/assets/skills/postgresql.png' width="64px" height="64px" alt='/'/>
              </div>
              <div>
                <h3 className='flex flex-col items-center justify-center'>
                  PostgreSQL
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Skills;