import Banner from '@/components/Banner';
import Contact from '@/components/Contact';
import Details from '@/components/Details';
import Header from '@/components/Header';
import Intro from '@/components/Intro';
import Services from '@/components/Services';
import Specialists from '@/components/Specialists';
import Testimonials from '@/components/Testimonials';
import React from 'react';

const Home:React.FC = () => {
  return (
    <main className='bg-[#F7F7F7]'>
      <Header/>
      <Banner/>
      <Intro/>
      <Services/>
      <Contact/>
      <Details/>
      <Specialists/>
      <Testimonials/>
    </main>
  );
};

export default Home;