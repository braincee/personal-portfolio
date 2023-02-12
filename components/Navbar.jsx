import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineTwitter } from 'react-icons/ai';
import { TiThMenuOutline } from 'react-icons/ti';
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
        <div className='logo'>
        <Link href='/'>
          <Image
            src='/../public/assets/Logo.png'
            alt='/'
            width='70'
            height='50'
          />
        </Link>
        </div>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <Link href='/#about' as='/#about'>
              <li className={`ml-10 text-sm uppercase hover:border-b text-yellow-500`}
              >
              About</li>
            </Link>
            <Link href='/#skills' as='/#skills'>
              <li className={`ml-10 text-sm uppercase hover:border-b text-yellow-500`}
              >
                Skills
              </li>
            </Link>
            <Link href='/#projects' as='/#projects'>
              <li className={`ml-10 text-sm uppercase hover:border-b text-yellow-500`}
              >
                Projects
              </li>
            </Link>
            <Link href='/#recommendations' as='/#recommendations'>
              <li className={`ml-10 text-sm uppercase hover:border-b text-yellow-500`}
              >
                Recommendations
              </li>
            </Link>
            <Link href='/#contact' as='/#contact'>
              <li className={`ml-10 text-sm uppercase hover:border-b text-yellow-500`}
              >
                Contact
              </li>
            </Link>

          </ul>
          {/* Hamburger Icon */}
          <div
            onClick={handleNav}
            className='md:hidden mr-[30px] mt-2 text-yellow-600'
          >
            <TiThMenuOutline size={50} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-[100%] bg-[#03254cd0]' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[100%] sm:w-[100%] md:w-[100%] h-[100%] bg-[#03254c] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <Image
                  src='/../public/assets/Logo.png'
                  width='70'
                  height='50'
                  alt='/'
                />
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full bg-yellow-500 p-5 cursor-pointer hover:scale-110 ease in duration-300'
              >
                <AiOutlineClose size={20} />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4 drawer-head'>
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col drawer-links'>
            <ul className='m-auto'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4'>
                  HOME
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4'>
                  ABOUT
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4'>
                  SKILLS
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4'>
                  PROJECTS
                </li>
              </Link>
              <Link href='/#recommendations'>
                <li onClick={() => setNav(false)} className='py-4'>
                  RECOMMENDATIONS
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4'>
                  CONTACT
                </li>
              </Link>
            </ul>
            <div className='drawer-bottom pt-40'>
              <p className='text-yellow-600 uppercase tracking-widest'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-around my-4 w-full sm:w-[80%] drawer-icons'>
                <Link href='https://www.linkedin.com/in/stephen-annor/'
                  target='_blank'
                >
                  <div className='rounded-full bg-yellow-600 p-5'>
                    <FaLinkedinIn />
                  </div>
                </Link>
                <Link
                  href='https://github.com/braincee'
                  target='_blank'
                >
                  <div className='rounded-full bg-yellow-600 p-5'>
                    <FaGithub />
                  </div>
                </Link>
                <Link href='https://twitter.com/annor0543' target='_blank'>
                  <div className='rounded-full bg-yellow-600 p-5'>
                    <AiOutlineTwitter />
                  </div>
                </Link>
                <Link href="https://www.instagram.com/appiah.korang/" target="_blank">
                <div className='rounded-full bg-yellow-600 p-5'>
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
