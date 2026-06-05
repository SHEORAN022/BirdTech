// src/components/common/ServiceCard.js
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import './ServiceCard.css';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div 
      className="service-card"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="service-card-inner">
        <div className="service-icon-wrapper" style={{ background: service.gradient }}>
          <div className="service-icon">
            {service.icon}
          </div>
        </div>
        
        <h3 className="service-title">{service.title}</h3>
        <p className="service-description">{service.description}</p>
        
        <ul className="service-features">
          {service.features.slice(0, 3).map((feature, idx) => (
            <li key={idx}>
              <span className="feature-bullet">•</span>
              {feature}
            </li>
          ))}
        </ul>
        
        <motion.button 
          className="service-learn-more"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          Learn More <ChevronRight size={16} />
        </motion.button>
      </div>
      
      <div className="service-card-glow" style={{ background: service.gradient }} />
    </motion.div>
  );
};

export default ServiceCard;