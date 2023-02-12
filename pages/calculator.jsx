import Image from 'next/image';
import React from 'react';
import calculatorImg from '../public/assets/projects/calculator.png';
import { RiRadioButtonFill, RiLiveFill } from 'react-icons/ri';
import { FaBackward } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi'
import Link from 'next/link';

const calculator = () => {
  return (
    <div className='project'>
      <div className='lg:h-[40vh] project-image'>
        <div className='relative top-0 left-0 w-full bg-black/80 z-10 project-image-1' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={calculatorImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2 text-yellow-600'>Calculator App</h2>
          <p>React JS</p>
        </div>
      </div>

      <div className='mx-auto p-2 pt-8'>
        <div>
          <p className='text-yellow-600 text-4xl py-5'>Project Outline</p>
          <p className='italic text-xl m-2'>
            This app was built using React JS and is hosted on Firebase. Users
            are able to search properties based on an Address, City, or ZIP code
            to retrieve a list of active properties currently for sale. You will
            be able to view property information as well as the specific
            location of the property integrated with the Google Maps API. User
            authentication is available so you can signup & signin to your
            account with an email address in order to save your favorite
            properties. This is made possible with Zillow API.
          </p>
        </div>
        <div className='flex justify-around m-2 py-10'>
            <div className='relative'>
              <Link href='/'>
                <p className='rounded-full py-2 px-[30px] bg-yellow-600 flex items-center'>
                  <RiLiveFill size={20} className='pr-1' /> Live 
                </p>
                </Link>
              </div>
            <div className='relative'>
              <Link href='/'>
                <p className='rounded-full py-2 px-[30px] bg-yellow-600 flex items-center'>
                  <FiGithub size={20} className='pr-1' /> GitHub 
                </p>
              </Link> 
            </div>
            <div className=' relative group'>
            <Link href='/#projects'>
              <p className='rounded-full py-2 px-[30px] bg-yellow-600 cursor-pointer flex items-center'>
                <FaBackward className='pr-1' size={20} /> Back
              </p>
            </Link>
            </div>
          </div>
        <div className='col-span-4 md:col-span-1 shadow-sm shadow-yellow-400 rounded-2xl p-4 mt-20'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='flex items-center justify-around'>
              <p className='text-yellow-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> JavaScript
              </p>
              <p className='text-yellow-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React JS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default calculator;
