import React from 'react'
import Link from 'next/link';
import Image from 'next/image';


const ProjectItem = ({ title, backgroundImg, projectUrl }) => {
    return (
      
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
            <Image className='rounded-xl group-hover:opacity-25' src={ backgroundImg } alt='/' />
            <div className='rounded-xl hidden group-hover:block absolute top-[%50] left-[%50] translate-x-[-%50] translate-y-[-%50]'> 
                <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
              <p className='py-4 text-white text-center'>React Js</p>
              <Link href={projectUrl}>
                <p className='text-center py-4 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer uppercase'>more info</p>
              </Link>
            </div>
         </div>
  )
}

export default ProjectItem;