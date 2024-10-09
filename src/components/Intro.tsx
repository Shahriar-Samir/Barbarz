import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
const Intro = () => {
    const variants= {
        hidden:{
          x:100, opacity:0
        },
        show:{
          x:0,opacity:1,
          transition:{
            type:"spring", stiffness:500 , staggerChildren: 0.4,
            delayChildren: 0.3
          }
        }
      }
    return (
        <section className='flex justify-center items-center w-11/12 mx-auto gap-20 mt-24 flex-col-reverse md:flex-row'>
            <motion.section variants={variants}  initial='hidden' whileInView='show' viewport={{amount:0.4}}  className='flex flex-col items-center gap-5 md:w-4/6'>
                <h3 className='text-[#CCA34C] text-4xl'>Introducing</h3>
                <h1 className='text-[#4A4845] text-center text-5xl font-poppins font-semibold leading-[80px]'>BARBERZ..The Barbershop
                Since 1990</h1>
                <figure className='w-[115px] h-[115px]'>
                <Image alt='line' width={1000} height={1000} src='/scissor-ma.jpg' className='w-full h-full'/>
                </figure>
                <p className='text-[#35312F] text-center text-xl'>Barber is a person whose occupation is mainly to cut dress groom style and shave men&apos;s and boys&apos; hair. A barber&apos;s place of work is known as a &quot;barbershop&quot; or a &quot;barber&apos;s&quot;. Barbershops are also places of social interaction and public discourse. In some instances, barbershops are also public forums.</p>
                <button className='uppercase btn bg-[#CCA34C] text-white rounded-none uppercase p-0 px-14 min-h-10 h-16 text-2xl hover:bg-[#a3833d]'>More About Us</button>
            </motion.section>
            <motion.section variants={variants}  initial='hidden' whileInView='show' viewport={{amount:0.4}} className='md:w-3/6' >
                <Image alt='line' width={1000} height={1000} src='/intro.jpg' className='w-full h-full object-cover'/>
            </motion.section>
        </section>
    );
};

export default Intro;