import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({title, backgroundImg, projectUrl, Technology}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full rounded-xl p-4 group hover:bg-gradient-to-r from-[#2a9df4] to-[#2a9cf44d]'>
    <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' /> 
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-[40px] text-white tracking-wide text-center md:text-[10px] lg:text-[20px]'>{title}</h3>
        <p className='text-[40px] pb-4 pt-1 text-white text-center md:text-[10px] lg:text-[20px]'>{Technology}</p>
        <Link href={projectUrl}>
            <p className='text-[40px] text-center py-2 rounded-lg bg-yellow-300 text-gray-700 hover:bg-yellow-200 font-bold cursor-pointer md:text-[10px] lg:text-[20px]'>Project Info</p>
        </Link>
    </div>
 </div>
  )
}

export default ProjectItem