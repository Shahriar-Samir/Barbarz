import React from 'react';

const Intro = () => {
    return (
        <section className='flex justify-center items-center w-11/12 mx-auto gap-20 mt-24 flex-col-reverse md:flex-row'>
            <section className='flex flex-col items-center gap-5 md:w-4/6'>
                <h3 className='text-[#CCA34C] text-4xl'>Introducing</h3>
                <h1 className='text-[#4A4845] text-center text-5xl font-poppins font-semibold leading-[80px]'>BARBERZ..The Barbershop
                Since 1990</h1>
                <figure className='w-[115px] h-[115px]'>
                <img src='/scissor-ma.jpg' className='w-full h-full'/>
                </figure>
                <p className='text-[#35312F] text-center text-xl'>Barber is a person whose occupation is mainly to cut dress groom style and shave men&apos;s and boys&apos; hair. A barber&apos;s place of work is known as a &quot;barbershop&quot; or a &quot;barber&apos;s&quot;. Barbershops are also places of social interaction and public discourse. In some instances, barbershops are also public forums.</p>
                <button className='uppercase btn bg-[#CCA34C] text-white rounded-none uppercase p-0 px-14 min-h-10 h-16 text-2xl hover:bg-[#a3833d]'>More About Us</button>
            </section>
            <section className='md:w-3/6'>
                <img src='/intro.jpg' className='w-full h-full object-cover'/>
            </section>
        </section>
    );
};

export default Intro;