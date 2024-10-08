import React from 'react';

const Contact = () => {
    return (
        <section className='w-full flex gap-5 items-center bg-[url("/contact.jpg")]'>
            <section className='flex flex-col justify-center px-10  w-2/3 text-white h-[700px]'>
                <h3>Contact</h3>
                <h1>Get In Touch</h1>
                <p>Suspendisse pretium felis dolor, sed placerat diam blandit vitae. Sed eu nisl massa. Phasellus vehicula tristique orci ut ultrices. Duis eu libero augue. In vulputate sodales tempus. Phasellus dolor orci, consectetur in tincidunt eget, consectetur non orci. </p>
            </section>
            <section className='flex flex-col items-center justify-center w-1/3 h-[700px] px-3 bg-[#000000] text-white'>
                <h1>Make An Appointment</h1>
                <p className='uppercase text-center'>Barber is a person whose occupation is mainly to cut dress groom</p>
                <form className=''>
                    <section className='grid grid-cols-2 gap-3'>
                    <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
                    <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
                    <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>

                    </section>
                    <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
                </form>
            </section>
        </section>
    );
};

export default Contact;