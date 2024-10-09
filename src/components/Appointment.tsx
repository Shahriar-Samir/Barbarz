import React from 'react';

const Appointment = () => {
    return (
        <section className='mt-14 h-[100vh] w-full bg-[url("/appointment.jpg")] flex flex-col justify-center items-center text-white gap-10'>
                <h2 className='text-4xl text-[#CCA34C] text-center'>Best Barbershop In The City</h2>
                <h1 className='text-6xl font-prata max-w-[600px] text-center'>Making You Look Good Is In Our Heritage</h1>
                <p className='font-poppins text-2xl text-center w-11/12 max-w-[900px]'>Barber is a person whose occupation is mainly to cut dress groome style
                and shave men’s and boy’s hair</p>
                <button className='w-10/12 max-w-[400px] btn bg-[#CCA34C] text-white rounded-none uppercase p-0 px-14 min-h-10 h-16 text-lg md:text-2xl hover:bg-[#a3833d]'>Make An Appointment</button>
        </section>
    );
};

export default Appointment;