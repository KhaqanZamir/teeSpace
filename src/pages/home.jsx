import React from 'react';
import Topbar from '../components/topbar';
import Navbar from '../components/Navbar';
import Hero from '../components/Home/hero';
import Brands from '../components/Home/brands';

const Home = () => {
  return (
    <>
        <Topbar />
        <Navbar />
        <Hero />
        <Brands />
    </>
  );
};

export default Home;
