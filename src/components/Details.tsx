import React from 'react';

const Details = () => {
    return (
        <section className='flex justify-center items-center py-20 gap-5 bg-[#FDF8E9] font-semibold text-6xl flex-col  md:flex-row'>
            <div className='flex flex-col items-center'>
            <h1>2000+</h1>
            <h2 className='text-xl uppercase font-medium'>Happy Clients</h2>
            </div>
            <img src='/icons/scissor.svg' className='w-[93px] h-[93px]'/>
            <div className='flex flex-col items-center'>
            <h1>500</h1>
            <h2 className='text-xl uppercase font-medium'>Hair Cuts</h2>
            </div>
            <img src='/icons/scissor.svg' className='w-[93px] h-[93px]'/>
            <div className='flex flex-col items-center'>
            <h1>150</h1>
            <h2 className='text-xl uppercase font-medium'>Stylers</h2>
            </div>
            <img src='/icons/scissor.svg' className='w-[93px] h-[93px]'/>
            <div className='flex flex-col items-center'>
            <h1>35</h1>
            <h2 className='text-xl uppercase font-medium'>Branches</h2>
            </div>
        </section>
    );
};

export default Details;