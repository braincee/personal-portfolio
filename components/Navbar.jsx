import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu, AiOutlineTwitter } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { BsInstagram } from 'react-icons/bs';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#03254c');
  const [linkColor, setLinkColor] = useState('#187bcd');
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === '/property' ||
      router.asPath === '/crypto' ||
      router.asPath === '/netflix' ||
      router.asPath === '/twitch'
    ) {
      setNavBg('transparent');
      setLinkColor('#187bcd');
    } else {
      setNavBg('#03254c');
      setLinkColor('#187bcd');
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);
  
  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <Image
            src='/../public/assets/stephenLogo.png'
            alt='/'
            width='80'
            height='50'
            borderRadius='100'
            className='cursor-pointer'
          />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <Link href='/#home' as='/#home'>
              <li className={`ml-10 text-sm uppercase hover:border-b 
              ${router.asPath === '/#home' ? 'border-b-2' : ''}`}
              >
              Home</li>
            </Link>
            <Link href='/#about' as='/#about'>
              <li className={`ml-10 text-sm uppercase hover:border-b 
              ${router.asPath === '/#about' ? 'border-b-2' : ''}`}
              >
              About</li>
            </Link>
            <Link href='/#skills' as='/#skills'>
              <li className={`ml-10 text-sm uppercase hover:border-b 
              ${router.asPath === '/#skills' ? 'border-b-2' : ''}`}
              >
                Skills
              </li>
            </Link>
            <Link href='/#projects' as='/#projects'>
              <li className={`ml-10 text-sm uppercase hover:border-b 
              ${router.asPath === '/#projects' ? 'border-b-2' : ''}`}
              >
                Projects
              </li>
            </Link>
            <Link href='/#recommendations' as='/#recommendations'>
              <li className={`ml-10 text-sm uppercase hover:border-b 
              ${router.asPath === '/#recommendations' ? 'border-b-2' : ''}`}
              >
                Recommendations
              </li>
            </Link>
            <Link href='/#contact' as='/#contact'>
              <li className={`ml-10 text-sm uppercase hover:border-b 
              ${router.asPath === '/#contact' ? 'border-b-2' : ''}`}
              >
                Contact
              </li>
            </Link>

          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#03254c] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <Image
                  src='/../public/assets/stephenLogo.png'
                  width='70'
                  height='50'
                  alt='/'
                />
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full bg-[#2a9cf45d] p-5 cursor-pointer hover:scale-110 ease in duration-300 hover:bg-[#0403072a] hover:text-[#d0efff]'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Lets Build Something New.
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  HOME
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  ABOUT
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  SKILLS
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  PROJECTS
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  CONTACT
                </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='tracking-widest text-[#d0efff]'>
                LETS CONNECT
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <Link href='https://www.linkedin.com/in/stephen-annor/'
                  target='_blank'
                >
                  <div className='rounded-full bg-[#2a9cf45d] p-5'>
                    <FaLinkedinIn />
                  </div>
                </Link>
                <Link
                  href='https://github.com/braincee'
                  target='_blank'
                >
                  <div className='rounded-full bg-[#2a9cf45d] p-5'>
                    <FaGithub />
                  </div>
                </Link>
                <Link href='https://twitter.com/annor0543' target='_blank'>
                  <div className='rounded-full bg-[#2a9cf45d] p-5'>
                    <AiOutlineTwitter />
                  </div>
                </Link>
                <Link href="https://www.instagram.com/appiah.korang/" target="_blank">
                <div className='rounded-full bg-[#2a9cf45d] p-5'>
                  <BsInstagram />
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
