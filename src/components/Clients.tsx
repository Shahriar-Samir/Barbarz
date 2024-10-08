import React from 'react';

const Clients = () => {
    return (
        <section className='flex flex-col gap-5 items-center p-5'>
            <section className='flex flex-col items-center g'>
                    <h1>Our Clients</h1>
            </section>
            <section className='flex flex-wrap gap-5 justify-center'>
                <figure className='h-[200px] w-[250px]'>
                <img src='/hairSalon1.jpg' className='h-full w-full object-cover'/>
                </figure>
                <figure className='h-[200px] w-[250px]'>
                <img src='/hairSalon2.jpg' className='h-full w-full object-cover'/>
                </figure>
                <figure className='h-[200px] w-[250px]'>
                <img src='/hairSalon3.jpg' className='h-full w-full object-cover'/>
                </figure>
                <figure className='h-[200px] w-[250px]'>
                <img src='/hairSalon4.jpg' className='h-full w-full object-cover'/>
                </figure>
            </section>
        </section>
    );
};

export default Clients;