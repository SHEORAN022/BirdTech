// src/components/animations/FloatingShapes.js
import React from 'react';
import { motion } from 'framer-motion';
import './FloatingShapes.css';

const FloatingShapes = () => {
  const shapes = [
    { type: 'circle', size: 60, color: 'var(--primary)', delay: 0 },
    { type: 'square', size: 40, color: 'var(--secondary)', delay: 1 },
    { type: 'triangle', size: 50, color: 'var(--accent)', delay: 2 },
    { type: 'circle', size: 30, color: 'var(--warning)', delay: 1.5 },
    { type: 'square', size: 70, color: 'var(--success)', delay: 0.5 },
  ];

  return (
    <div className="floating-shapes">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`shape shape-${shape.type}`}
          style={{
            width: shape.size,
            height: shape.size,
            background: shape.color,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 100 - 50, 0],
            x: [0, Math.random() * 100 - 50, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            delay: shape.delay,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;