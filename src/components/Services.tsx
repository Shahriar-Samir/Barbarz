import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
type serviceType =  {
        id:number,
        img:string
        heading:string,
        description:string
    }


const Services = () => {

    const services: serviceType[] = [
        {
            id:1,
            img:'/icons/scissor.jpg',
            heading:'Hair Cut',
            description:"Whether you're looking for a sleek fade, a traditional cut, or a modern twist, our expert barbers are here to make it happen. We believe a great haircut isn't just about appearance—it's about confidence. That's why we focus on precision, quality, and an enjoyable experience for every client."
        },
        {
            id:2,
            img:'/icons/paste.jpg',
            heading:'Shaving',
            description:"Our skilled barbers provide a clean, smooth shave tailored to your preferences, whether it's a close razor shave or a neatly trimmed beard. Using premium products and techniques, we ensure your skin feels refreshed and rejuvenated, while giving you a sharp, polished look."
        },
        {
            id:3,
            img:'/icons/spoone.jpg',
            heading:'Hair Color',
            description:"Whether you're looking to cover grays, add subtle highlights, or make a bold statement with vibrant hues, our expert colorists are here to help. We use top-quality products to ensure lasting color and a healthy, natural shine. From classic tones to modern trends, Barberz delivers the perfect shade to complement your look."
        },
        {
            id:4,
            img:'/icons/rezer.jpg',
            heading:'Beard Trim',
            description:"A well-groomed beard speaks volumes about your style. Our barbers specialize in precision beard trimming, shaping each line to perfection while maintaining the natural look of your facial hair. We ensure your beard complements your facial features and personal style. Using high-quality tools and products, we provide a clean, sharp finish that enhances your overall look."
        },
    ]

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
        <section  className='bg-[#FDF8E9] flex flex-col items-center px-10 gap-5 py-28 my-16'>
                <motion.header variants={variants} initial='hidden' whileInView='show' className='flex flex-col items-center'>
                <h3 className='text-4xl text-[#CCA34C] text-center'>Services</h3>
                <h1 className='font-poppins text-5xl font-semibold mt-4 text-center'>Our Services</h1>
                <div className="flex gap-5 mt-3 justify-center">
                        <Image alt='line' width={100} height={100} src='/icons/line.svg' className='max-w-[85px]'/>
                        <Image alt='line' width={100} height={100} src='/icons/mustache.svg'/>
                        <Image alt='line' width={100} height={100} src='/icons/line.svg' className='max-w-[85px]'/>
                    </div> 
                </motion.header>
                <motion.section variants={variants} initial='hidden' whileInView='show' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-20'>
                    {services.map(item=>{
                        return <motion.article variants={listItem} key={item.id} className='bg-[#F7F7F7]  text-[#35312F] p-4 text-center flex flex-col items-center justify-between gap-10'>
                                <div className='flex flex-col items-center gap-5'>
                                <Image alt='line' width={1000} height={1000} src={item.img} className='w-[80px] h-[80px]'/>
                                <h1 className='text-3xl lg:text-2xl font-medium'>{item.heading}</h1>
                                <p className='text-xl lg:text-base'>{item.description}</p>
                                </div>
                                <button className='btn font-semibold bg-transparent shadow-none border-2 border-[#CCA34C] text-[#CCA34C] text-lg uppercase'>Read More</button>
                        </motion.article>
                    })}
                </motion.section>
        </section>
    );
};

export default Services;