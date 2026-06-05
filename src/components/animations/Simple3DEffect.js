// src/components/animations/Simple3DEffect.js (Alternative to ThreeDSphere)
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Simple3DEffect.css';

const Simple3DEffect = () => {
  const sphereRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sphereRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      
      sphereRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="simple-3d-container">
      <motion.div 
        ref={sphereRef}
        className="simple-3d-sphere"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="sphere-layer layer-1"></div>
        <div className="sphere-layer layer-2"></div>
        <div className="sphere-layer layer-3"></div>
        <div className="sphere-core"></div>
        <div className="sphere-rings">
          <div className="ring"></div>
          <div className="ring"></div>
          <div className="ring"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Simple3DEffect;