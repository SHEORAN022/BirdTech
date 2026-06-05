// src/components/sections/WhyChooseUs.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Shield, 
  Zap, 
  Users, 
  Clock, 
  Award, 
  Headphones,
  Rocket,
  TrendingUp,
  CheckCircle,
  Star,
  Heart,
  Target,
  Code,
  Globe,
  Lock,
  Smartphone,
  Cloud,
  Brain
} from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const reasons = [
    {
      icon: <Shield size={32} />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and regular security audits.',
      color: '#6366f1',
      stats: '99.9% Secure'
    },
    {
      icon: <Zap size={32} />,
      title: 'Lightning Fast',
      description: 'Optimized performance with 100+ Lighthouse score and 0.5s load times.',
      color: '#ec4899',
      stats: '0.5s Load Time'
    },
    {
      icon: <Users size={32} />,
      title: 'Expert Team',
      description: '30+ certified professionals with 5+ years average experience.',
      color: '#06b6d4',
      stats: '30+ Experts'
    },
    {
      icon: <Clock size={32} />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support with 15-minute response time.',
      color: '#f59e0b',
      stats: '15min Response'
    },
    {
      icon: <Award size={32} />,
      title: 'Quality Assured',
      description: 'ISO certified processes with 99% client satisfaction rate.',
      color: '#10b981',
      stats: '99% Satisfied'
    },
    {
      icon: <Rocket size={32} />,
      title: 'Fast Delivery',
      description: 'Agile methodology ensuring 30% faster time-to-market.',
      color: '#8b5cf6',
      stats: '30% Faster'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Results Driven',
      description: 'Focus on ROI with average 300% increase in client revenue.',
      color: '#f43f5e',
      stats: '300% ROI'
    },
    {
      icon: <Headphones size={32} />,
      title: 'Dedicated Support',
      description: 'Personal account manager and dedicated support team.',
      color: '#14b8a6',
      stats: '24/7 Available'
    }
  ];

  const features = [
    {
      icon: <Code size={24} />,
      text: 'Clean Code Architecture'
    },
    {
      icon: <Globe size={24} />,
      text: 'Global Client Base'
    },
    {
      icon: <Lock size={24} />,
      text: 'Data Protection'
    },
    {
      icon: <Smartphone size={24} />,
      text: 'Mobile-First Approach'
    },
    {
      icon: <Cloud size={24} />,
      text: 'Cloud Native'
    },
    {
      icon: <Brain size={24} />,
      text: 'AI-Powered Solutions'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Projects', color: '#6366f1' },
    { number: '100+', label: 'Clients', color: '#ec4899' },
    { number: '5+', label: 'Years', color: '#06b6d4' },
    { number: '30+', label: 'Experts', color: '#f59e0b' },
  ];

  const testimonials = [
    {
      text: "birdtech transformed our business completely. Their expertise and dedication are unmatched.",
      author: "Rahul Sharma",
      position: "CEO, TechCorp",
      rating: 5
    },
    {
      text: "Best decision we made was partnering with them. Delivered beyond our expectations.",
      author: "Priya Patel",
      position: "CTO, InnovateLabs",
      rating: 5
    },
    {
      text: "Professional, innovative, and results-driven. Highly recommended for digital transformation.",
      author: "Amit Kumar",
      position: "Founder, StartupHub",
      rating: 5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="why-choose-us" ref={ref}>
      {/* Background Elements */}
      <div className="why-choose-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="pattern-grid"></div>
        <div className="pattern-dots"></div>
      </div>

      <div className="why-choose-container">
        {/* Header Section */}
        <motion.div 
          className="why-choose-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="why-choose-badge">Why Choose Us</span>
          <h2 className="why-choose-title">
            We Don't Just Build, We 
            <span className="gradient-text"> Transform</span>
          </h2>
          <p className="why-choose-subtitle">
            With over 5 years of experience and 500+ successful projects, 
            we have the expertise to turn your ideas into reality.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="why-choose-grid">
          {/* Left Side - Main Reasons */}
          <motion.div 
            className="reasons-grid"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                className="reason-card"
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <div className="reason-icon-wrapper" style={{ background: `${reason.color}15` }}>
                  <div className="reason-icon" style={{ color: reason.color }}>
                    {reason.icon}
                  </div>
                </div>
                
                <div className="reason-content">
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                  <span className="reason-stats" style={{ color: reason.color }}>
                    {reason.stats}
                  </span>
                </div>

                <div className="reason-glow" style={{ background: reason.color }}></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Features & Achievements */}
          <motion.div 
            className="why-choose-right"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Achievement Stats */}
            <div className="achievement-grid">
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  className="achievement-card"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="achievement-number" style={{ color: achievement.color }}>
                    {achievement.number}
                  </div>
                  <div className="achievement-label">{achievement.label}</div>
                  <div className="achievement-progress" style={{ background: achievement.color }}></div>
                </motion.div>
              ))}
            </div>

            {/* Features List */}
            <div className="features-section">
              <h3 className="features-title">What Makes Us Different</h3>
              <div className="features-grid">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="feature-item"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="feature-icon" style={{ color: '#6366f1' }}>
                      {feature.icon}
                    </div>
                    <span>{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Testimonials Mini */}
            <div className="testimonials-mini">
              <h3 className="testimonials-title">What Our Clients Say</h3>
              <div className="testimonials-slider">
                {testimonials.map((testimonial, index) => (
                  <motion.div 
                    key={index}
                    className="testimonial-mini-card"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                      ))}
                    </div>
                    <p className="testimonial-text">"{testimonial.text}"</p>
                    <div className="testimonial-author">
                      <strong>{testimonial.author}</strong>
                      <span>{testimonial.position}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust Badges Section */}
        <motion.div 
          className="trust-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="trust-badges">
            <div className="trust-badge">
              <CheckCircle size={20} color="#10b981" />
              <span>ISO 27001 Certified</span>
            </div>
            <div className="trust-badge">
              <CheckCircle size={20} color="#10b981" />
              <span>GDPR Compliant</span>
            </div>
            <div className="trust-badge">
              <CheckCircle size={20} color="#10b981" />
              <span>5+ Years Excellence</span>
            </div>
            <div className="trust-badge">
              <CheckCircle size={20} color="#10b981" />
              <span>100% Client Satisfaction</span>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="why-choose-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="cta-content">
            <Heart size={24} color="#ec4899" />
            <h3>Ready to Experience the Difference?</h3>
            <p>Join 100+ happy clients who chose excellence</p>
            <button className="cta-button">
              Start Your Journey
              <Rocket size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
