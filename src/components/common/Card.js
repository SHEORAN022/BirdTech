// src/components/common/Card.js
import React from 'react';
import { motion } from 'framer-motion';
import './Card.css';

const Card = ({ 
  children, 
  className = '',
  hoverEffect = 'lift',
  onClick,
  ...props 
}) => {
  const cardClasses = ['card', `card-${hoverEffect}`, className].join(' ');

  return (
    <motion.div
      className={cardClasses}
      onClick={onClick}
      whileHover={{ 
        y: hoverEffect === 'lift' ? -5 : 0,
        scale: hoverEffect === 'scale' ? 1.05 : 1,
      }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;