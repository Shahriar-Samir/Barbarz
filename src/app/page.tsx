import Banner from '@/components/Banner';
import Header from '@/components/Header';
import Intro from '@/components/Intro';
import React from 'react';

const Home:React.FC = () => {
  return (
    <main className='bg-[#F7F7F7]'>
      <Header/>
      <Banner/>
      <Intro/>
    </main>
  );
};

export default Home;