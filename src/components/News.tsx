import React from 'react';

const News = () => {
    return (
        <section className='pt-14 flex flex-col items-center'>
            <section className='flex flex-col items-center'>
            <h3 className='text-4xl text-[#CCA34C] text-center'>News From Blog</h3>
                <h1 className='font-poppins text-5xl font-semibold mt-4 text-center'>What's On Our Mind</h1>
                <div className="flex gap-5 mt-3">
                        <img src='/icons/line.svg' className='w-[85px]'/>
                        <img src='/icons/mustache.svg'/>
                        <img src='/icons/line.svg' className='w-[85px]'/>
                    </div> 
            </section>
            <section className='grid md:grid-cols-3 mt-16 gap-10 w-10/12 mx-auto'>
                <article>
                    <div className='relative z-[10]'>
                    <img src='/post1.jpg'/>
                    <div className='absolute right-0 bottom-[-20px] text-lg font-semibold text-black text-center py-1 bg-[#CCA34C] flex flex-col px-2'>
                   <span className=''>Mar</span>
                   <span className=''>20</span>

                    </div>
                    </div>
                    <div className='flex flex-col py-2 mt-[20px] w-[98%] px-4 mx-auto border-s-4 border-[#CCA34C]'>
                        <h2 className='text-[#726F6E] text-lg font-medium'>Beard Styles / BY ADMIN</h2>
                        <h1 className='font-semibold text-black text-2xl w-10/12'>The best barbershop in 
                        the town</h1>
                    </div>
                    <p className='text-lg text-black'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                </article>
                <article>
                    <div className='relative z-[10]'>
                    <img src='/post2.jpg'/>
                    <div className='absolute right-0 bottom-[-20px] text-lg font-semibold text-black text-center py-1 bg-[#CCA34C] flex flex-col px-2'>
                   <span className=''>Mar</span>
                   <span className=''>20</span>

                    </div>
                    </div>
                    <div className='flex flex-col py-2 mt-[20px] w-[98%] px-4 mx-auto border-s-4 border-[#CCA34C]'>
                        <h2 className='text-[#726F6E] text-lg font-medium'>Beard Styles / BY ADMIN</h2>
                        <h1 className='font-semibold text-black text-2xl w-10/12'>The best barbershop in 
                        the town</h1>
                    </div>
                    <p className='text-lg text-black'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                </article>
                <article>
                    <div className='relative z-[10]'>
                    <img src='/post3.jpg'/>
                    <div className='absolute right-0 bottom-[-20px] text-lg font-semibold text-black text-center py-1 bg-[#CCA34C] flex flex-col px-2'>
                   <span className=''>Mar</span>
                   <span className=''>20</span>

                    </div>
                    </div>
                    <div className='flex flex-col py-2 mt-[20px] w-[98%] px-4 mx-auto border-s-4 border-[#CCA34C]'>
                        <h2 className='text-[#726F6E] text-lg font-medium'>Beard Styles / BY ADMIN</h2>
                        <h1 className='font-semibold text-black text-2xl w-10/12'>The best barbershop in 
                        the town</h1>
                    </div>
                    <p className='text-lg text-black'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                </article>
            </section>
        </section>
    );
};

export default News;