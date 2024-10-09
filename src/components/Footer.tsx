import React from 'react';

const Footer = () => {
    return (
     <footer className="bg-[url('/footer.jpg')] font-poppins pb-10">
           <footer className="footer text-white  p-10 mt-10 grid  lg:grid-cols-4 gap-10">
  <section className='flex flex-col items-center'>
    <img src='/title.svg'/>
  <p className='max-w-[300px] font-poppins text-center'>There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form.</p>
  <input type='email' placeholder='Email*' className='mt-10 w-full text-lg text-black p-2 px-4'/>
  <button className='py-1 text-lg mt-2 uppercase px-4 text-white bg-[#D9A536D4] rounded-2xl border-2 border-white'>Subscribe</button>
  </section>
  <nav className='uppercase flex flex-col '>
                <h1 className='font-poppins text-2xl font-semibold mt-4'>Get In Touch</h1>
                <div className="flex gap-2 mt-3">
                        <img src='/icons/line.svg' className='w-[50px]'/>
                        <img src='/icons/mustache.svg' className='w-[50px]'/>
                        <img src='/icons/line.svg' className='w-[50px]'/>
                    </div>  
    <a className="link link-hover flex gap-3 items-center text-xl uppercase"><img src='/icons/bullet.svg'/> Home</a>
    <a className="link link-hover flex gap-3 items-center text-xl uppercase"><img src='/icons/bullet.svg'/> About Us</a>
    <a className="link link-hover flex gap-3 items-center text-xl uppercase"><img src='/icons/bullet.svg'/> Gallery</a>
    <a className="link link-hover flex gap-3 items-center text-xl uppercase"><img src='/icons/bullet.svg'/> Contact US</a>

  </nav>
  <nav className='uppercase flex flex-col '>
                <h1 className='font-poppins text-2xl font-semibold mt-4'>Get In Touch</h1>
                <div className="flex gap-2 mt-3">
                        <img src='/icons/line.svg' className='w-[50px]'/>
                        <img src='/icons/mustache.svg' className='w-[50px]'/>
                        <img src='/icons/line.svg' className='w-[50px]'/>
                    </div>  
    <a className="link link-hover flex gap-3 items-center text-xl uppercase"><img src='/icons/bullet.svg'/> Hairs</a>
    <a className="link link-hover flex gap-3 items-center text-xl uppercase"><img src='/icons/bullet.svg'/> Beauty</a>
    <a className="link link-hover flex gap-3 items-center text-xl uppercase"><img src='/icons/bullet.svg'/> Spa</a>
    <a className="link link-hover flex gap-3 items-center text-xl uppercase"><img src='/icons/bullet.svg'/> Massage</a>

  </nav>
  <nav className='uppercase flex flex-col gap-4 '>
                <div className='w-fit md:mx-auto'>
                <h1 className='w-full font-poppins text-2xl font-semibold mt-4'>Contact</h1>
                <div className="flex gap-2 mt-3">
                        <img src='/icons/line.svg' className='w-[50px]'/>
                        <img src='/icons/mustache.svg' className='w-[50px]'/>
                        <img src='/icons/line.svg' className='w-[50px]'/>
                    </div> </div> 
    <a className="link link-hover flex gap-3 items-center text-lg uppercase"><img src='/icons/tele.svg'/> +4125987645</a>
    <a className="link link-hover flex gap-3 items-center text-lg uppercase"><img src='/icons/message.svg'/> barberz.123@info.com</a>
    <a className="link link-hover flex gap-3 items-center text-lg uppercase"><img src='/icons/gps.svg'/> golden street, chinatown
    san  francisco</a>
    <div className='flex gap-5 md:justify-between w-full mt-5'>
      <img src='/icons/facebook.svg'/>
      <img src='/icons/twitter.svg'/>
      <img src='/icons/youtube.svg'/>
      <img src='/icons/insta.svg'/>
    </div>
  </nav>

</footer>
<h6 className='text-center text-white mt-2'>Copyright 2024 All Rights Reserved</h6>
     </footer>
    );
};

export default Footer;