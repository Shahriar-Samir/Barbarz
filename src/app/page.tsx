import Appointment from '@/components/Appointment';
import Banner from '@/components/Banner';
import Clients from '@/components/Clients';
import Contact from '@/components/Contact';
import Details from '@/components/Details';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Intro from '@/components/Intro';
import News from '@/components/News';
import OurWork from '@/components/OurWork';
import PricingPlan from '@/components/PricingPlan';
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
      <PricingPlan/>
      <Appointment/>
      <section className='bg-white'>
      <News/>
      <Clients/>
      <OurWork/>
      </section>
      <Footer/>
    </main>
  );
};

export default Home;