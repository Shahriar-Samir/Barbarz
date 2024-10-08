import React from 'react';

const OurWork = () => {
    return (
        <section className='w-11/12 mx-auto mt-10'>
            <section className='flex justify-center items-center'>
        	    <h1>Our Work</h1>
            </section>
            <section className='grid grid-cols-3 gap-5 mt-5'>
                <figure><img src='/work1.jpg'/></figure>
                <figure><img src='/work2.jpg'/></figure>
                <figure><img src='/work3.jpg'/></figure>
                <figure><img src='/work4.jpg'/></figure>
                <figure><img src='/work5.jpg'/></figure>
                <figure><img src='/work6.jpg'/></figure>
            </section>
        </section>
    );
};

export default OurWork;