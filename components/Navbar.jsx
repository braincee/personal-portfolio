import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/assets/Logo.png'
import { AiOutlineClose, AiOutlineTwitter } from 'react-icons/ai';
import { TiThMenuOutline } from 'react-icons/ti';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { BsInstagram } from 'react-icons/bs';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#03254c');
  const [linkColor, setLinkColor] = useState('#187bcd');
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === '/visit-ghana' ||
      router.asPath === '/calculator' ||
      router.asPath === '/space-hub' ||
      router.asPath === '/juice-app'
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

  const {ref, inView } = useInView();

  return (
    <div ref={ref}>
      <motion.div>
         
      </motion.div>
     
    </div>
    
  );
};

export default Navbar;
