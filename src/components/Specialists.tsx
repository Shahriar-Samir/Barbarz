import React from 'react';

type specialistsType = {
    name:string,
    expertise: string,
    img:string,
    id:number
}

const Specialists = () => {

    const specialists:specialistsType[] = [
        {   id: 1,
            name:'David',
            expertise:'Hair Cut Specialist',
            img: '/david.jpg'
        },
        {   id: 2,
            name:'Paul',
            expertise:'Beard & Trimming',
            img: '/paul.jpg'
        },
        {   id: 3,
            name:'Charlie',
            expertise:'Hair Color Specialist',
            img: '/charlie.jpg'
        },
        {   id: 4,
            name:'David',
            expertise:'Hair Cut Specialist',
            img: '/david.jpg'
        },
    ]

    return (
        <section className='px-5 py-20'>
            <section className='flex flex-col items-center gap-5'>
            <h2 className='text-[#CCA34C] text-'>Services</h2>
                    <h1 className='text-[#4A4845] text font-semibold'>Our Services</h1>
                    <div className='divide-x-0'>
                    mustache
                    </div>
            </section>
            <section className='grid grid-cols-4 gap-4'>
                {specialists.map(item=>{
                    return <article key={item.id} className='bg-[#B78E36] text-white text-center flex flex-col gap-3'>
                            <img src={item.img}/>
                            <h1 className='text-4xl font-semibold'>{item.name}</h1>
                            <p className='text-xl font-medium'>{item.expertise}</p>
                    </article>
                })}
            </section>
        </section>
    );
};

export default Specialists;