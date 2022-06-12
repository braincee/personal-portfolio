import React from 'react'

const About = () => {
  return (
      <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
          <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
              <div className='col-span-2'>
                  <h2 class='uppercase text-xl tracking-widest text-[#5651e5]'>About Me</h2>
          <p className='py-4 text-gray-600 text-2xl'>I am a Full-Stack developer currently using modern technologies to plan, build and
            implement reusable user interfaces and user experience systems of websites, software programs, and web-based
            applications. I am passionate about researching and acquiring new ideas to break down complex problems into
            smaller component solutions. I view product development as a team effort, accept challenges, enjoy constructive
            criticism, contribute tactically and communicate effectively with team members and clients. As technologies are
            emerging with improvements in libraries and frameworks,
            I am determined to equip myself with the most trending and advanced technologies for a brighter future.</p>
             </div>
              <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-2 hover:scale-110 ease in duration-300'>
                   <img
            className='rounded-xl'
            src='https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80'
            alt='/'
          />
             </div>
          </div>
    </div>
  )
}

export default About;