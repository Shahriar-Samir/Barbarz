import React from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
    return (
        <section className='w-full bg-[url("/banner.jpg")] bg-cover h-[120vh] flex justify-center items-center flex-col text-white gap-7'>
            <motion.h1 initial={{x:-2000}} animate={{x:0}} whileInView={{x:0}} transition={{duration:0.4,ease:'circOut'}} className='text-5xl text-center font-poppins font-semibold w-11/12'>Our Hairstyle Enhances Your Smile!!</motion.h1>
            <motion.p initial={{x:-2000}} animate={{x:0}} whileInView={{x:0}} transition={{duration:0.4,ease:'circOut'}} className='text-3xl text-center w-11/12 max-w-[800px]'>Our barbershop is the territory created purely for males who
            appreciate premium quality, time and flawless look.</motion.p>
            <motion.button initial={{scale:0.3,opacity:0}} animate={{scale:1,opacity:1}} whileInView={{scale:1,opacity:1}} transition={{duration:0.4,ease:'circOut'}} className='w-10/12 max-w-[400px] btn bg-[#CCA34C] text-white rounded-none uppercase p-0 px-14 min-h-10 h-16 text-lg md:text-2xl hover:bg-[#a3833d]'>Make An Appointment</motion.button>
        </section>
    );
};

export default Banner;