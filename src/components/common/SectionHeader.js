// src/components/common/SectionHeader.js (Fixed export)
import React from 'react';
import { motion } from 'framer-motion';
import './SectionHeader.css';

const SectionHeader = ({ 
  badge,
  title,
  description,
  alignment = 'left',
  className = '' 
}) => {
  return (
    <div className={`section-header section-header-${alignment} ${className}`}>
      {badge && (
        <motion.span 
          className="section-badge"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {badge}
        </motion.span>
      )}
      
      {title && (
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {title}
        </motion.h2>
      )}
      
      {description && (
        <motion.p
          className="section-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;