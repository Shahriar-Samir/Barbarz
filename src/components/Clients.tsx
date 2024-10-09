import React from 'react';
import Image from 'next/image';

const Clients = () => {
    return (
        <section className='flex flex-col items-center p-5 mt-32'>
             <section className='flex flex-col items-center'>
                <h1 className='font-poppins text-5xl font-semibold mt-4'>Our Clients</h1>
                <div className="flex gap-5 mt-3">
                        <Image alt='line' width={100} height={100} src='/icons/line.svg' className='w-[85px]'/>
                        <Image alt='line' width={100} height={100} src='/icons/mustache.svg'/>
                        <Image alt='line' width={100} height={100} src='/icons/line.svg' className='w-[85px]'/>
                    </div> 
            </section>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  mt-10'>
                <figure className='h-[160px] w-[220px]'>
                <Image alt='line' width={1000} height={1000}  src='/hairSalon1.svg' className='h-full w-full object-cover'/>
                </figure>
                <figure className='h-[160px] w-[220px]'>
                <Image alt='line' width={1000} height={1000} src='/hairSalon2.svg' className='h-full w-full object-cover'/>
                </figure>
                <figure className='h-[160px] w-[220px]'>
                <Image alt='line' width={1000} height={1000} src='/hairSalon3.svg' className='h-full w-full object-cover'/>
                </figure>
                <figure className='h-[160px] w-[220px]'>
                <Image alt='line' width={1000} height={1000} src='/hairSalon4.svg' className='h-full w-full object-cover'/>
                </figure>
            </section>
        </section>
    );
};

export default Clients;