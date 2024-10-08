import React from 'react';

const Banner = () => {
    return (
        <section className='w-full bg-[url("/banner.jpg")] bg-cover h-[100vh] flex justify-center items-center flex-col text-white gap-7'>
            <h1 className='font-semibold text-5xl text-center'>Our Hairstyle Enhances Your Smile!!</h1>
            <p className='text-3xl text-center max-w-[800px]'>Our barbershop is the territory created purely for males who
            appreciate premium quality, time and flawless look.</p>
            <button className='btn bg-[#CCA34C] text-white rounded-none uppercase p-0 px-14 min-h-10 h-16 text-2xl hover:bg-[#a3833d]'>Make An Appointment</button>
        </section>
    );
};

export default Banner;