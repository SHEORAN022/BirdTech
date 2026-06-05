// src/pages/Home.js
import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import Stats from '../components/sections/Stats';
import Services from '../components/sections/Services';
import WhyChooseUs from "../components/sections/WhyChooseUs"
import './Home.css';

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="home-page">
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
    </div>
  );
};

export default Home;