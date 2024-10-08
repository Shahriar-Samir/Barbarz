import React from 'react';

const Testimonials = () => {
    return (
        <section className='bg-[url("/review.jpg")] h-[100vh] bg-cover flex justify-center items-center flex-col'>
             <section className='flex flex-col items-center gap-5'>
            <h2 className='text-[#CCA34C] text-'>Testimonials</h2>
                    <h1 className=' text-white font-semibold'>Hear From Our Customers</h1>
                    <div className='divide-x-0'>
                    mustache
                    </div>
            </section>
            <section className='flex gap-5 w-11/12 mx-auto'>
                <article className='bg-[#252424] text-white p-5'>
                    <div>
                    <img src='/icons/testimonial1.svg'/>
                    <p>“Amazing service! Claire helped me to reduce the shipping price a little and shipped it immediately after purchasing. The amethyst cave I got is a beauty and I c...”</p>
                    <div className='flex justify-between w-full'>
                <div>
                <h1>Robert Fox</h1>
                    <h6>Writer</h6>
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
                </article>
                <article className='bg-[#252424] text-white p-5'>
                    <div>
                    <img src='/icons/testimonial2.svg'/>
                    <p>“Amazing service! Claire helped me to reduce the shipping price a little and shipped it immediately after purchasing. The amethyst cave I got is a beauty and I c...”</p>
                    <div className='flex justify-between w-full'>
                <div>
                <h1>Robert Fox</h1>
                    <h6>Writer</h6>
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
                </article>
            </section>
        </section>
    );
};

export default Testimonials;