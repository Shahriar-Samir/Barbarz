import React from 'react';

const Testimonials = () => {
    return (
        <section className='bg-[url("/review.jpg")] bg-cover flex justify-center items-center flex-col gap-28 py-24'>
             <section className='flex flex-col items-center gap-5'>
             <h3 className='text-4xl text-[#CCA34C]'>Testimonials</h3>
                <h1 className='font-poppins text-5xl font-semibold mt-4 text-white capitalize text-center'>Hear from our customers</h1>
                <div className="flex gap-5 mt-3">
                        <img src='/icons/line.svg' className='w-[85px]'/>
                        <img src='/icons/mustache.svg'/>
                        <img src='/icons/line.svg' className='w-[85px]'/>
                    </div>
            </section>
            <section className='grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-5 w-11/12 mx-auto'>
                
                <article className='bg-[#252424] text-white p-5 flex gap-5 flex-col lg:flex-row'>
                <figure className='w-[150px] h-[150px] lg:w-[350px] lg:h-[250px]'>
                <img src='/icons/testimonial1.svg' className='w-full h-fit object-cover'/>
                </figure>
                    <div className='h-full flex flex-col justify-between gap-12'>
                    <p className="text-xl font-medium font-poppins">“Amazing service! Claire helped me to reduce the shipping price a little and shipped it immediately after purchasing. The amethyst cave I got is a beauty and I c...”</p>
                <div className=' flex justify-between w-full'>
                <div className='w-full flex flex-col gap-3'>
                <h1 className='text-4xl font-medium text-[#B78E36] font-poppins'>Robert Fox</h1>
                   <div className='w-full flex justify-between'>
                  <div className='flex flex-col gap-2'>
                  <h6 className=''>Writer</h6>
                    <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled/>
</div>
                  </div>
<img src='/icons/quote.svg'/>
                   </div>
                </div>
           
                </div>

                    </div>
                </article>
                <article className='bg-[#252424] text-white p-5 flex flex-col lg:flex-row gap-5'>
                 <figure className='w-[150px] h-[150px] lg:w-[350px] lg:h-[250px]'>
                <img src='/icons/testimonial2.svg' className='w-full h-fit object-cover'/>
                </figure>
                    <div className='h-full flex flex-col justify-between gap-12'>
                    <p className="text-xl font-medium font-poppins">“Just came back to home and should say that it is definitely a great experience. I would recommend it for everyone who needs a bike for a short term or want to t...”</p>
                <div className=' flex justify-between w-full'>
                <div className='w-full flex flex-col gap-3'>
                <h1 className='text-4xl font-medium text-[#B78E36] font-poppins'>Marvin McKinney</h1>
                   <div className='w-full flex justify-between'>
                  <div className='flex flex-col gap-2'>
                  <h6 className=''>Businessman</h6>
                    <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled/>
</div>
                  </div>
<img src='/icons/quote.svg'/>
                   </div>
                </div>
           
                </div>

                    </div>
                </article>
                
            </section>
        </section>
    );
};

export default Testimonials;