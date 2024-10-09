import React from 'react';
import Image from 'next/image';
const OurWork = () => {
    return (
        <section className='w-11/12 mx-auto mt-20'>
            <section className='flex flex-col justify-center items-center'>
                <h1 className='font-poppins text-5xl font-semibold mt-4 text-center'>Our Work</h1>
                <div className="flex gap-5 mt-3">
                        <Image alt='line' width={100} height={100} src='/icons/line.svg' className='w-[85px]'/>
                        <Image alt='line' width={100} height={100} src='/icons/mustache.svg'/>
                        <Image alt='line' width={100} height={100} src='/icons/line.svg' className='w-[85px]'/>
                    </div>  
            </section>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-11'>
                <figure><Image alt='line' width={1000} height={1000} src='/work1.jpg'/></figure>
                <figure><Image alt='line' width={1000} height={1000} src='/work2.jpg'/></figure>
                <figure><Image alt='line' width={1000} height={1000} src='/work3.jpg'/></figure>
                <figure><Image alt='line' width={1000} height={1000} src='/work4.jpg'/></figure>
                <figure><Image alt='line' width={1000} height={1000} src='/work5.jpg'/></figure>
                <figure><Image alt='line' width={1000} height={1000} src='/work6.jpg'/></figure>
            </section>
        </section>
    );
};

export default OurWork;