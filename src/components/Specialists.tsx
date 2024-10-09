import React from 'react';
import Image from 'next/image';
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
        <section className='px-5 py-24 pb-32'>
            <section className='flex flex-col items-center gap-5'>
            <h3 className='text-4xl text-[#CCA34C]'>Specialists</h3>
                <h1 className='font-poppins text-5xl font-semibold mt-4'>Our Team</h1>
                <div className="flex gap-5 mt-3">
                        <Image alt='line' width={100} height={100} src='/icons/line.svg' className='w-[85px]'/>
                        <Image alt='line' width={100} height={100} src='/icons/mustache.svg'/>
                        <Image alt='line' width={100} height={100} src='/icons/line.svg' className='w-[85px]'/>
                    </div>  
            </section>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 md:gap-4 mt-14'>
                {specialists.map(item=>{
                    return <article key={item.id} className='bg-[#B78E36] text-white text-center flex flex-col gap-3 pb-8   '>
                            <Image alt='line' width={1000} height={1000} src={item.img}/>
                            <h1 className='text-4xl font-semibold mt-1'>{item.name}</h1>
                            <p className='text-xl font-medium'>{item.expertise}</p>
                    </article>
                })}
            </section>
        </section>
    );
};

export default Specialists;