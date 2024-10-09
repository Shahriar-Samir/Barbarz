

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Header = () => {

  const container = {
    hidden: { opacity: 0, scale:0 },
    show: {
      opacity: 1,
      scale:1,
      transition: {
        staggerChildren: 0.5
      }
    }
  };
  
  const listItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  };

    return (
        <motion.div variants={container} initial='hidden' animate='show'  transition={{duration: 0.2}} >
            <div className="z-[20] navbar md:flex md:justify-center bg-[#292727B3] text-white fixed ">
  <div className="navbar-start lg:hidden">
  <Image alt='line' width={1000} height={1000} src='/title.svg' className='p-0 w-[220px] h-[120px] md:w-[200px] md:h-[100px]'/>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal flex items-center gap-10 px-1 p-0 text-lg">
      <motion.li variants={listItem}><a>Home</a></motion.li>
      <motion.li variants={listItem}>
      <details>
          <summary>Services</summary>
          <ul className="p-2 bg-[#292727B3]">
            <li><a>Service 1</a></li>
            <li><a>Service 2</a></li>
          </ul>
        </details>
      </motion.li>
      <motion.li variants={listItem}><a>About Us</a></motion.li>
      <motion.li>
        <Image alt='line' width={1000} height={1000} src='/title.svg' className='p-0 w-[200px] h-[100px]'/>
      </motion.li>
      <motion.li variants={listItem}><a>Team</a></motion.li>
      <motion.li variants={listItem}><a>Booking</a></motion.li>
      <motion.li variants={listItem}><a>Contact Us</a></motion.li>
    </ul>
  </div>
  <div className="navbar-end lg:hidden">
  <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow right-1 bg-[#292727B3] ">
         <motion.li variants={listItem}><a className='text-2xl'> Home</a></motion.li>
      <motion.li variants={listItem}>
      <details>
          <summary className='text-2xl'>Services</summary>
          <ul className="p-2 ">
            <li><a className='text-2xl'>Service 1</a></li>
            <li><a className='text-2xl'>Service 2</a></li>
          </ul>
        </details>
      </motion.li>
      <motion.li variants={listItem}><a className='text-2xl'>About Us</a></motion.li>
      <motion.li variants={listItem}><a className='text-2xl'>Team</a></motion.li>
      <motion.li variants={listItem}><a className='text-2xl'>Booking</a></motion.li>
      <motion.li variants={listItem}><a className='text-2xl'>Contact Us</a></motion.li>
      </ul>
    </div>
  </div>
</div>
        </motion.div>
    );
};

export default Header;