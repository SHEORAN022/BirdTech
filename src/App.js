// src/App.js (Updated with ScrollToTop component)
import React, { useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const { scrollYProgress } = useScroll();
  
  return (
    <div className="app">
      <ScrollToTop />
      <motion.div 
        className="scroll-progress"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;