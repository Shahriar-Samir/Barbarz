import React from 'react';

const Intro = () => {
    return (
        <section className='flex justify-center items-center w-11/12 mx-auto h-[700px] gap-10 mt-20'>
            <section className='flex flex-col items-center gap-5 w-1/2'>
                <h3 className='text-[#CCA34C] '>Introducing</h3>
                <h1 className='text-[#4A4845] text-center text font-semibold'>BARBERZ..The Barbershop
                Since 1990</h1>
                <p className='text-[#35312F] text-center'>Barber is a person whose occupation is mainly to cut dress groom style and shave men&apos;s and boys&apos; hair. A barber&apos;s place of work is known as a &quot;barbershop&quot; or a &quot;barber&apos;s&quot;. Barbershops are also places of social interaction and public discourse. In some instances, barbershops are also public forums.</p>
                <button className='uppercase btn bg-[#CCA34C] text-white rounded-none uppercase p-0 px-14 min-h-10 h-16 text-2xl hover:bg-[#a3833d]'>More About Us</button>
            </section>
            <section className='w-1/2'>
                <img src='/intro.jpg' className='w-full h-full object-cover'/>
            </section>
        </section>
    );
};

export default Intro;