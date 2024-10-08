import React from 'react';

const Appointment = () => {
    return (
        <section className='h-[100vh] w-full bg-[url("/appointment.jpg")] flex flex-col justify-center items-center text-white gap-10'>
                <h2>Best Barbershop In The City</h2>
                <h1 className='text-6xl'>Making You Look Good Is In Our Heritage</h1>
                <p>Barber is a person whose occupation is mainly to cut dress groome style
                and shave men’s and boy’s hair</p>
                <button className='btn bg-[#CCA34C] text-white rounded-none uppercase p-0 px-14 min-h-10 h-16 text-2xl hover:bg-[#a3833d]'>Make An Appointment</button>
        </section>
    );
};

export default Appointment;