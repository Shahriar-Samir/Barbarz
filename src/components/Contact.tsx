import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Contact = () => {
  const container = {
    hidden: { opacity: 0, scale:0 },
    show: {
      opacity: 1,
      scale:1,
      transition: {
        delayChildren:0.2,  
        staggerChildren: 0.5
      }
    }
  };
  
  const listItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  };
  
  
  return (
        <motion.section variants={container} initial='hidden' whileInView='show' className='w-full flex flex-col md:flex-row gap-5 items-center bg-[url("/contact.jpg")] pb-10 md:pb-0'>
            <motion.section variants={listItem} className='flex flex-col justify-center px-10 items-center md:items-start  md:w-4/6 text-white h-[700px]'>
                <h3 className='text-4xl text-[#CCA34C] text-center'>Contact</h3>
                <h1 className='font-poppins text-5xl font-semibold mt-4 text-center'>Get In Touch</h1>
                <div className="flex gap-5 mt-3 justify-center">
                        <Image alt='line' width={100} height={100} src='/icons/line.svg' className='max-w-[85px]'/>
                        <Image alt='line' width={100} height={100} src='/icons/mustache.svg'/>
                        <Image alt='line' width={100} height={100} src='/icons/line.svg' className='max-w-[85px]'/>
                    </div>  
                <p className='w-11/12 max-w-[550px] text-lg mt-4 text-center md:text-start'>Suspendisse pretium felis dolor, sed placerat diam blandit vitae. Sed eu nisl massa. Phasellus vehicula tristique orci ut ultrices. Duis eu libero augue. In vulputate sodales tempus. Phasellus dolor orci, consectetur in tincidunt eget, consectetur non orci. </p>
            </motion.section>
            <motion.section variants={listItem} className='flex flex-col items-center justify-center md:w-3/6 h-[700px] px-3 bg-[#292727B3] text-white w-11/12 '>
                <h1 className='text-4xl text-center text-[#CCA34C] font-semibold font-poppins'>Make An Appointment</h1>
                <p className='capitalize text-center font-poppins mt-2'>Barber is a person whose occupation is mainly to cut dress groom</p>
                <form className='mt-12'>
                    <section className='grid grid-cols-2 gap-5'>
                    <div className="form-control">

          <input  placeholder="Name" className="input input-bordered rounded-none bg-transparent border border-white" required />
        </div>
                    <div className="form-control">
   
          <input type="email" placeholder="Email" className="input input-bordered rounded-none bg-transparent border border-white" required />
        </div>
                    <div className="form-control mt-6">
   
          <input  placeholder="Phone" className="input input-bordered rounded-none bg-transparent border border-white" required />
        </div>
        <div className="form-control mt-6">
         
          <input placeholder="Time" className="input input-bordered rounded-none bg-transparent border border-white" required />
        </div>
        <div className="form-control mt-6">
          <select className='input input-bordered rounded-none bg-transparent border border-white'>
            <option>Services</option>
            <option>Service 1</option>
            <option>Service 2</option>
          </select>
        </div>
        <div className="form-control mt-6">
          <select className='input input-bordered rounded-none bg-transparent border border-white'>
            <option>Choose Barber</option>
            <option>Barber 1</option>
            <option>Barber 2</option>
          </select>
        </div>

                    </section>
                    <div className="form-control mt-6">
                    <button className='mt-6 btn bg-[#CCA34C] text-white rounded-none uppercase p-0 px-14 min-h-10 h-16 text-md lg:text-2xl hover:bg-[#a3833d]'>Make An Appointment</button>
        </div>
                </form>
            </motion.section>
        </motion.section>
    );
};

export default Contact;