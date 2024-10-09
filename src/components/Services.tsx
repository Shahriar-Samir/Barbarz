import React from 'react';

type serviceType =  {
        id:number,
        img:string
        heading:string,
        description:string
    }


const Services = () => {

    const services: serviceType[] = [
        {
            id:1,
            img:'/icons/scissor.jpg',
            heading:'Hair Cut',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at. Dolor sit amet consectetur adipiscing. Et malesuada fames ac turpis egestas. Neque viverra justo nec ultrices dui sapien.'
        },
        {
            id:2,
            img:'/icons/paste.jpg',
            heading:'Shaving',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at. Dolor sit amet consectetur adipiscing. Et malesuada fames ac turpis egestas. Neque viverra justo nec ultrices dui sapien.'
        },
        {
            id:3,
            img:'/icons/spoone.jpg',
            heading:'Hair Color',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at. Dolor sit amet consectetur adipiscing. Et malesuada fames ac turpis egestas. Neque viverra justo nec ultrices dui sapien.'
        },
        {
            id:4,
            img:'/icons/rezer.jpg',
            heading:'Beard Trim',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at. Dolor sit amet consectetur adipiscing. Et malesuada fames ac turpis egestas. Neque viverra justo nec ultrices dui sapien.'
        },
    ]

    return (
        <section className='bg-[#FDF8E9] flex flex-col items-center px-10 gap-5 py-28 my-16'>
                <header className='flex flex-col items-center'>
                    <h2 className='text-[#CCA34C] text-4xl'>Services</h2>
                    <h1 className='text-[#4A4845] text-5xl font-semibold font-poppins mt-3'>Our Services</h1>
                    <div className="flex gap-5 mt-3">
                        <img src='/icons/line.svg'/>
                        <img src='/icons/mustache.svg'/>
                        <img src='/icons/line.svg'/>
                    </div>
                </header>
                <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-20'>
                    {services.map(item=>{
                        return <article key={item.id} className='bg-[#F7F7F7]  text-[#35312F] p-4 text-center flex flex-col items-center gap-5'>
                                <img src={item.img} className='w-[80px] h-[80px]'/>
                                <h1 className='text-3xl lg:text-2xl font-medium'>{item.heading}</h1>
                                <p className='text-xl lg:text-base'>{item.description}</p>
                                <button className='btn font-semibold bg-transparent shadow-none border-2 border-[#CCA34C] text-[#CCA34C] text-lg uppercase'>Read More</button>
                        </article>
                    })}
                </section>
        </section>
    );
};

export default Services;