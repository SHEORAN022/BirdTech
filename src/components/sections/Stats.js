// src/components/sections/Stats.js (Updated with 70vh height)
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useInView as useInViewObserver } from 'react-intersection-observer';
import { Award, Users, Clock, Code, Globe, TrendingUp } from 'lucide-react';
import './Stats.css';

const Stats = () => {
  const [ref, inView] = useInViewObserver({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: <Award size={32} />, color: '#6366f1' },
    { number: '100+', label: 'Happy Clients', icon: <Users size={32} />, color: '#ec4899' },
    { number: '5+', label: 'Years Experience', icon: <Clock size={32} />, color: '#06b6d4' },
    { number: '50+', label: 'Team Members', icon: <Code size={32} />, color: '#f59e0b' },
    { number: '15+', label: 'Countries Served', icon: <Globe size={32} />, color: '#10b981' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="stats-section" ref={ref}>
      {/* Background Elements */}
      <div className="stats-background">
        <div className="stats-gradient-orb orb-1"></div>
        <div className="stats-gradient-orb orb-2"></div>
        <div className="stats-pattern"></div>
      </div>

      <div className="stats-container">
        <motion.div 
          className="stats-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="stats-badge">Our Achievements</span>
          <h2 className="stats-title">
            Numbers That <span className="gradient-text">Speak Volumes</span>
          </h2>
          <p className="stats-subtitle">
            We take pride in our journey and the trust our clients have placed in us
          </p>
        </motion.div>

        <motion.div 
          className="stats-grid-wrapper"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-card-enhanced"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <div className="stat-icon-wrapper" style={{ background: `${stat.color}15` }}>
                <div className="stat-icon" style={{ color: stat.color }}>
                  {stat.icon}
                </div>
              </div>
              
              <div className="stat-content">
                <motion.span 
                  className="stat-number-enhanced"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.3 + index * 0.1
                  }}
                >
                  {stat.number}
                </motion.span>
                <span className="stat-label-enhanced">{stat.label}</span>
              </div>

              {/* Animated Progress Bar */}
              <motion.div 
                className="stat-progress"
                initial={{ width: '0%' }}
                animate={inView ? { width: '100%' } : {}}
                transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                style={{ background: `linear-gradient(90deg, ${stat.color}, transparent)` }}
              />

              {/* Glow Effect */}
              <div className="stat-glow" style={{ background: stat.color }}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Stats Row */}
        <motion.div 
          className="stats-footer"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="stat-quote">
            <TrendingUp size={24} color="#6366f1" />
            <p>Consistent growth and excellence in every project</p>
          </div>
          <div className="stat-award">
            <span>🏆 Best IT Service Provider 2024</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;