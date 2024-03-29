import Image from 'next/image';
import React from 'react';
import spaceImg from '../public/assets/projects/space-hub.png';
import { RiRadioButtonFill, RiLiveFill } from 'react-icons/ri';
import { FaBackward } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi'
import Link from 'next/link';

const calculator = () => {
  return (
    <div className='project'>
      <div className='project-image'>
        <div className='relative top-0 left-0 w-full bg-black/80 z-10 project-image-1' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={spaceImg}
          alt='/calculator-image'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2 text-yellow-600'>Space Traveller Hub</h2>
          <p>JavaScript | React JS | Redux | Space Hub API</p>
        </div>
      </div>

      <div className='mx-auto p-2 pt-20 grid grid-cols-12 lg:pt-2 project-outline'>
        <div className='col-span-10 lg:m-[20px]'>
          <p className='text-yellow-600 text-[70px] py-10 tracking-widest lg:text-[40px]'>Project Outline</p>
          <p className='italic text-[30px] m-4 lg:text-[25px]'>
          The Space Travellers is a web application that provides 
          commercial and scientific space travel services. 
          This application will allow users to book rockets 
          and join selected space missions : User can go to My Profile that section displays 
          all reserved rockets and space missions.
          </p>
        <div className='flex justify-around m-2 py-20'>
            <div className='relative'>
              <Link href='https://space-travellers-hub-09.vercel.app/' passHref>
                <a target="_blank">
                 <p className='rounded-full py-5 px-[50px] bg-yellow-600 flex items-center text-[30px] md:text-[10px] lg:text-[10px] md:py-[20px] lg:py-[20px]'>
                  <RiLiveFill size={20} className='pr-1' /> View Live Demo
                 </p>
                </a>
                </Link>
              </div>
            <div className='relative'>
              <Link href='https://github.com/braincee/React-Redux-group-project' passHref>
                <a target="_blank">
                 <p className='rounded-full py-5 px-[50px] bg-yellow-600 flex items-center text-[30px] md:text-[10px] lg:text-[10px] md:py-[20px] lg:py-[20px]'>
                   <FiGithub size={20} className='pr-1' /> GitHub 
                 </p>
                </a>
              </Link> 
            </div>
            <div className=' relative group'>
            <Link href='/#projects'>
              <p className='rounded-full py-5 px-[50px] bg-yellow-600 cursor-pointer flex items-center text-[30px] md:text-[10px] lg:text-[10px] md:py-[20px] lg:py-[20px]'>
                <FaBackward className='pr-1' size={20} /> Back
              </p>
            </Link>
            </div>
          </div>
        </div>
        <div className='col-span-2 shadow-sm shadow-yellow-400 rounded-2xl p-4 mt-20 h-[50vh]'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='flex items-center justify-around flex-col'>
              <p className='text-yellow-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> JavaScript
              </p>
              <p className='text-yellow-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React JS
              </p>
              <p className='text-yellow-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Redux JS
              </p>
              <p className='text-yellow-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Space Hub API
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default calculator;
