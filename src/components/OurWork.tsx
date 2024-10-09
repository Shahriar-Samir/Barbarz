import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
const OurWork = () => {
    const variants= {
        hidden:{
          x:100, opacity:0,
        },
        show:{
          x:0,opacity:1,
          transition:{
            type:"spring", stiffness:500 , staggerChildren: 0.4,
            delayChildren: 0.3
          }
        }
      }
      const listItem = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
      };

    return (
        <motion.section variants={variants} initial='hidden' whileInView='show' className='w-11/12 mx-auto mt-20'>
            <section className='flex flex-col justify-center items-center'>
                <h1 className='font-poppins text-5xl font-semibold mt-4 text-center'>Our Work</h1>
                <div className="flex gap-5 mt-3">
                        <Image alt='line' width={100} height={100} src='/icons/line.svg' className='w-[85px]'/>
                        <Image alt='line' width={100} height={100} src='/icons/mustache.svg'/>
                        <Image alt='line' width={100} height={100} src='/icons/line.svg' className='w-[85px]'/>
                    </div>  
            </section>
            <motion.section variants={variants} initial='hidden' whileInView='show'  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-11'>
                <motion.figure variants={listItem}><Image alt='line' width={1000} height={1000} src='/work1.jpg'/></motion.figure>
                <motion.figure variants={listItem}><Image alt='line' width={1000} height={1000} src='/work2.jpg'/></motion.figure>
                <motion.figure variants={listItem}><Image alt='line' width={1000} height={1000} src='/work3.jpg'/></motion.figure>
                <motion.figure variants={listItem}><Image alt='line' width={1000} height={1000} src='/work4.jpg'/></motion.figure>
                <motion.figure variants={listItem}><Image alt='line' width={1000} height={1000} src='/work5.jpg'/></motion.figure>
                <motion.figure variants={listItem}><Image alt='line' width={1000} height={1000} src='/work6.jpg'/></motion.figure>
            </motion.section>
        </motion.section>
    );
};

export default OurWork;