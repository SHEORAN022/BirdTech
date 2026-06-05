// src/components/sections/About.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Target, Award, Clock, Heart, Shield, ChevronRight } from 'lucide-react';
import Button from '../common/Button';
import SectionHeader from '../common/SectionHeader';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: <Award /> },
    { number: '100+', label: 'Happy Clients', icon: <Users /> },
    { number: '5+', label: 'Years Experience', icon: <Clock /> },
    { number: '30+', label: 'Tech Experts', icon: <Target /> },
  ];

  const values = [
    {
      icon: <Heart />,
      title: 'Client First',
      description: 'We prioritize our clients\' success above everything else.',
      color: '#6366f1'
    },
    {
      icon: <Shield />,
      title: 'Quality Assured',
      description: 'We never compromise on quality and follow best practices.',
      color: '#ec4899'
    },
    {
      icon: <Target />,
      title: 'Result Oriented',
      description: 'We focus on delivering measurable business results.',
      color: '#06b6d4'
    }
  ];

  const team = [
    {
      name: 'Rahul Sharma',
      role: 'Founder & CEO',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      bio: '10+ years in tech leadership, ex-Google architect'
    },
    {
      name: 'Priya Patel',
      role: 'CTO',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      bio: 'AI/ML expert, led 50+ enterprise transformations'
    },
    {
      name: 'Amit Kumar',
      role: 'Lead Developer',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
      bio: 'Full stack expert, MERN stack specialist'
    },
    {
      name: 'Neha Singh',
      role: 'UX Director',
      image: 'https://randomuser.me/api/portraits/women/4.jpg',
      bio: 'Award-winning designer, 100+ apps designed'
    }
  ];

  return (
    <section className="about" id="about" ref={ref}>
      <div className="about-background">
        <div className="gradient-sphere"></div>
        <div className="pattern-dots"></div>
      </div>

      <div className="container">
        <SectionHeader
          badge="About Us"
          title="We're on a Mission to Transform Businesses"
          description="Since 2018, we've been helping companies leverage technology for growth and innovation."
          alignment="center"
        />

        <div className="about-grid">
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3>Your Trusted Digital Transformation Partner</h3>
            <p>
              birdtech was founded with a simple mission: to help businesses thrive in the 
              digital age through innovative technology solutions. What started as a small team 
              of passionate developers has grown into a full-service digital transformation agency.
            </p>
            <p>
              We combine technical expertise with business acumen to deliver solutions that not 
              only look great but also drive real business value. Our team of 30+ experts works 
              tirelessly to ensure every project exceeds expectations.
            </p>
            
            <div className="about-stats">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-info">
                    <span className="stat-number">{stat.number}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="primary" size="large" icon={<ChevronRight />} iconPosition="right">
              Learn More About Us
            </Button>
          </motion.div>

          <motion.div 
            className="about-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="about-3d-container">
              <div className="floating-shapes-about">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
              </div>
              
              <div className="experience-badge">
                <span className="years">5+</span>
                <span className="text">Years of Excellence</span>
              </div>

              <div className="tech-stack-visual">
                <div className="tech-item">React</div>
                <div className="tech-item">Node.js</div>
                <div className="tech-item">Python</div>
                <div className="tech-item">AWS</div>
                <div className="tech-item">MongoDB</div>
                <div className="tech-item">AI/ML</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="values-section">
          <h3 className="section-subtitle">Our Core Values</h3>
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="value-icon" style={{ background: value.color }}>
                  {value.icon}
                </div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section">
          <h3 className="section-subtitle">Meet Our Leadership</h3>
          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                className="team-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                  <div className="team-social">
                    <a href="#linkedin">in</a>
                    <a href="#twitter">𝕏</a>
                  </div>
                </div>
                <h4>{member.name}</h4>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;