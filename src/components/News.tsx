import React from 'react';

const News = () => {
    return (
        <section className='pt-14 flex flex-col items-center'>
            <section className='flex flex-col items-center'>
            <h3 className='text-4xl text-[#CCA34C] text-center'>News From Blog</h3>
                <h1 className='font-poppins text-5xl font-semibold mt-4'>What's On Our Mind</h1>
                <div className="flex gap-5 mt-3">
                        <img src='/icons/line.svg' className='w-[85px]'/>
                        <img src='/icons/mustache.svg'/>
                        <img src='/icons/line.svg' className='w-[85px]'/>
                    </div> 
            </section>
            <section className='grid grid-cols-3'>
                <article>
                    <img/>
                    <span></span>
                </article>
            </section>
        </section>
    );
};

export default News;