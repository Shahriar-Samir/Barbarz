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
        <section className='bg-[#FDF8E9] flex flex-col items-center p-10 gap-5'>
                <header className='flex flex-col items-center'>
                    <h2 className='text-[#CCA34C] text-'>Services</h2>
                    <h1 className='text-[#4A4845] text font-semibold'>Our Services</h1>
                    <div className='divide-x-0'>
                    mustache
                    </div>
                </header>
                <section className='flex gap-5'>
                    {services.map(item=>{
                        return <article key={item.id} className='bg-[#F7F7F7]  text-black p-5 text-center flex flex-col items-center gap-5'>
                                <img src={item.img} className='w-[50px]'/>
                                <h1>{item.heading}</h1>
                                <h1>{item.description}</h1>
                                <button className='btn'>Read More</button>
                        </article>
                    })}
                </section>
        </section>
    );
};

export default Services;