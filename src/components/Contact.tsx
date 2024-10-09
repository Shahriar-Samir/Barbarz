import React from 'react';

const Contact = () => {
    return (
        <section className='w-full flex gap-5 items-center bg-[url("/contact.jpg")]'>
            <section className='flex flex-col justify-center px-10  w-4/6 text-white h-[700px]'>
                <h3 className='text-4xl text-[#CCA34C]'>Contact</h3>
                <h1 className='font-poppins text-5xl font-semibold mt-4'>Get In Touch</h1>
                <div className="flex gap-5 mt-3">
                        <img src='/icons/line.svg' className='w-[85px]'/>
                        <img src='/icons/mustache.svg'/>
                        <img src='/icons/line.svg' className='w-[85px]'/>
                    </div>  
                <p className='w-[550px] text-lg mt-4'>Suspendisse pretium felis dolor, sed placerat diam blandit vitae. Sed eu nisl massa. Phasellus vehicula tristique orci ut ultrices. Duis eu libero augue. In vulputate sodales tempus. Phasellus dolor orci, consectetur in tincidunt eget, consectetur non orci. </p>
            </section>
            <section className='flex flex-col items-center justify-center w-3/6 h-[700px] px-3 bg-[#292727B3] text-white'>
                <h1 className='text-4xl text-[#CCA34C] font-semibold font-poppins'>Make An Appointment</h1>
                <p className='capitalize text-center font-poppins mt-2'>Barber is a person whose occupation is mainly to cut dress groom</p>
                <form className='mt-12'>
                    <section className='grid grid-cols-2 gap-5'>
                    <div className="form-control">

          <input  placeholder="Name" className="input input-bordered rounded-none bg-transparent border border-white" required />
        </div>
                    <div className="form-control">
   
          <input type="email" placeholder="Email" className="input input-bordered rounded-none bg-transparent border border-white" required />
        </div>
                    <div className="form-control mt-6">
   
          <input  placeholder="Phone" className="input input-bordered rounded-none bg-transparent border border-white" required />
        </div>
        <div className="form-control mt-6">
         
          <input placeholder="Time" className="input input-bordered rounded-none bg-transparent border border-white" required />
        </div>
        <div className="form-control mt-6">
          <select className='input input-bordered rounded-none bg-transparent border border-white'>
            <option>Services</option>
            <option>Service 1</option>
            <option>Service 2</option>
          </select>
        </div>
        <div className="form-control mt-6">
          <select className='input input-bordered rounded-none bg-transparent border border-white'>
            <option>Choose Barber</option>
            <option>Barber 1</option>
            <option>Barber 2</option>
          </select>
        </div>

                    </section>
                    <div className="form-control mt-6">
                    <button className='mt-6 btn bg-[#CCA34C] text-white rounded-none uppercase p-0 px-14 min-h-10 h-16 text-2xl hover:bg-[#a3833d]'>Make An Appointment</button>
        </div>
                </form>
            </section>
        </section>
    );
};

export default Contact;