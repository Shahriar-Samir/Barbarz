import React from 'react';

const Clients = () => {
    return (
        <section className='flex flex-col items-center p-5 mt-32'>
             <section className='flex flex-col items-center'>
                <h1 className='font-poppins text-5xl font-semibold mt-4'>Our Clients</h1>
                <div className="flex gap-5 mt-3">
                        <img src='/icons/line.svg' className='w-[85px]'/>
                        <img src='/icons/mustache.svg'/>
                        <img src='/icons/line.svg' className='w-[85px]'/>
                    </div> 
            </section>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  mt-10'>
                <figure className='h-[160px] w-[220px]'>
                <img src='/hairSalon1.svg' className='h-full w-full object-cover'/>
                </figure>
                <figure className='h-[160px] w-[220px]'>
                <img src='/hairSalon2.svg' className='h-full w-full object-cover'/>
                </figure>
                <figure className='h-[160px] w-[220px]'>
                <img src='/hairSalon3.svg' className='h-full w-full object-cover'/>
                </figure>
                <figure className='h-[160px] w-[220px]'>
                <img src='/hairSalon4.svg' className='h-full w-full object-cover'/>
                </figure>
            </section>
        </section>
    );
};

export default Clients;