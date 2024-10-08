import React from 'react';

const Banner = () => {
    return (
        <section className='w-full bg-[url("/banner.jpg")] bg-cover h-[120vh] flex justify-center items-center flex-col text-white gap-7'>
            <h1 className='text-5xl text-center font-poppins font-semibold w-11/12'>Our Hairstyle Enhances Your Smile!!</h1>
            <p className='text-3xl text-center w-11/12 max-w-[800px]'>Our barbershop is the territory created purely for males who
            appreciate premium quality, time and flawless look.</p>
            <button className='mt-6 btn bg-[#CCA34C] text-white rounded-none uppercase p-0 px-14 min-h-10 h-16 text-2xl hover:bg-[#a3833d]'>Make An Appointment</button>
        </section>
    );
};

export default Banner;