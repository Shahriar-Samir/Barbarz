import React from 'react';
import Image from 'next/image';
const PricingPlan = () => {
    return (
        <section className='px-5 md:px-16 py-16 mt-16 bg-[#FDF8E9] flex flex-col items-center gap-10 w-full'>
            <section className='flex flex-col items-center w-full'>
            <h3 className='text-4xl text-[#CCA34C]'>Specialists</h3>
                <h1 className='font-poppins text-5xl font-semibold mt-4'>Our Team</h1>
                <div className="flex gap-5 mt-3">
                        <Image alt='line' width={100} height={100} src='/icons/line.svg' className='w-[85px]'/>
                        <Image alt='line' width={100} height={100} src='/icons/mustache.svg'/>
                        <Image alt='line' width={100} height={100} src='/icons/line.svg' className='w-[85px]'/>
                    </div>  
            </section>
            <section className='flex justify-between flex-col lg:flex-row items-center gap-5 lg:gap-20'>
                <article className=' flex flex-col gap-5'>
                    <div className='w-full flex flex-col gap-4'>
                    <div className='flex gap-5 w-full '>
                        <div className='flex w-full justify-between items-center'>
                        <h2 className='font-semibold text-3xl  text-black'>Hair Cut</h2>
                        <Image alt='line' width={1000} height={1000} src='/icons/line2.svg' className='w-1/2'/>
                        <h1 className='font-semibold text-4xl font-poppins text-[#D9A536]'>$10</h1>
                        </div>
                    </div>
                    <p className='text-lg w-full text-black'>Precision cuts tailored to enhance your unique style and personality</p>
                    </div>
                    <div className='w-full flex flex-col gap-4'>
                    <div className='flex gap-5 w-full '>
                        <div className='flex w-full justify-between items-center'>
                        <h2 className='font-semibold text-3xl  text-black'>Hair Styling</h2>
                        <Image alt='line' width={1000} height={1000} src='/icons/line2.svg' className='w-1/2'/>
                        <h1 className='font-semibold text-4xl font-poppins text-[#D9A536]'>$10</h1>
                        </div>
                    </div>
                    <p className='text-lg w-full text-black'>Expert styling that transforms your look for any occasion with creativity and flair.</p>
                    </div>
                    <div className='w-full flex flex-col gap-4'>
                    <div className='flex gap-5 w-full '>
                        <div className='flex w-full justify-between items-center'>
                        <h2 className='font-semibold text-3xl  text-black'>Hair Trimming</h2>
                        <Image alt='line' width={1000} height={1000} src='/icons/line2.svg' className='w-1/2'/>
                        <h1 className='font-semibold text-4xl font-poppins text-[#D9A536]'>$10</h1>
                        </div>
                    </div>
                    <p className='text-lg w-full text-black'>Subtle trims to maintain healthy hair and keep your style looking fresh.</p>
                    </div>
                    <div className='w-full flex flex-col gap-4'>
                    <div className='flex gap-5 w-full '>
                        <div className='flex w-full justify-between items-center'>
                        <h2 className='font-semibold text-3xl  text-black'>Kids Hair Cut</h2>
                        <Image alt='line' width={1000} height={1000} src='/icons/line2.svg' className='w-1/2'/>
                        <h1 className='font-semibold text-4xl font-poppins text-[#D9A536]'>$10</h1>
                        </div>
                    </div>
                    <p className='text-lg w-full text-black'>Fun and friendly haircuts for children that ensure a comfortable experience.</p>
                    </div>
                   
                </article>
                <article className='flex flex-col gap-5'>
                <div className='w-full flex flex-col gap-4'>
                    <div className='flex gap-5 w-full '>
                        <div className='flex w-full justify-between items-center'>
                        <h2 className='font-semibold text-3xl  text-black'>Shaving</h2>
                        <Image alt='line' width={1000} height={1000} src='/icons/line2.svg' className='w-1/2'/>
                        <h1 className='font-semibold text-4xl font-poppins text-[#D9A536]'>$10</h1>
                        </div>
                    </div>
                    <p className='text-lg w-full text-black'> A clean, smooth shave that refreshes your look while caring for your skin.</p>
                    </div>
                    <div className='w-full flex flex-col gap-4'>
                    <div className='flex gap-5 w-full '>
                        <div className='flex w-full justify-between items-center'>
                        <h2 className='font-semibold text-3xl  text-black'>Beard Trimming</h2>
                        <Image alt='line' width={1000} height={1000} src='/icons/line2.svg' className='w-1/2'/>
                        <h1 className='font-semibold text-4xl font-poppins text-[#D9A536]'>$10</h1>
                        </div>
                    </div>
                    <p className='text-lg w-full text-black'>Skillful beard trimming that shapes and defines your facial hair for a polished appearance.</p>
                    </div>
                    <div className='w-full flex flex-col gap-4'>
                    <div className='flex gap-5 w-full '>
                        <div className='flex w-full justify-between items-center'>
                        <h2 className='font-semibold text-3xl  text-black'>Face Cleaning</h2>
                        <Image alt='line' width={1000} height={1000} src='/icons/line2.svg' className='w-1/2'/>
                        <h1 className='font-semibold text-4xl font-poppins text-[#D9A536]'>$10</h1>
                        </div>
                    </div>
                    <p className='text-lg w-full text-black'>Deep cleansing treatments that rejuvenate your skin and promote a fresh, healthy glow.</p>
                    </div>
                    <div className='w-full flex flex-col gap-4'>
                    <div className='flex gap-5 w-full '>
                        <div className='flex w-full justify-between items-center'>
                        <h2 className='font-semibold text-3xl  text-black'>Mustache Trim</h2>
                        <Image alt='line' width={1000} height={1000} src='/icons/line2.svg' className='w-1/2'/>
                        <h1 className='font-semibold text-4xl font-poppins text-[#D9A536]'>$10</h1>
                        </div>
                    </div>
                    <p className='text-lg w-full text-black'>Precision mustache trimming to complement your style and maintain a sharp look.</p>
                    </div>
                   
                </article>
            </section>
            <button className='uppercase btn bg-[#CCA34C] text-white w-[150px] hover:bg-[#a3833d]'>View More</button>
        </section>
    );
};

export default PricingPlan;