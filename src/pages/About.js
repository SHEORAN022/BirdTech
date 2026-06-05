// src/pages/About.js
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { 
  Users, 
  Target, 
  Award, 
  Clock, 
  Heart, 
  Shield, 
  Zap,
  Code,
  Globe,
  Briefcase,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Twitter,
  Github,
  Sparkles,
  Rocket,
  Star,
  MessageCircle
} from 'lucide-react';
import Button from '../components/common/Button';
import image1 from "../assets/sandeep.jpeg";
import image2 from "../assets/bhati.jpeg";
import image3 from "../assets/charvi.jpeg";
import './About.css';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: <Award size={32} />, color: '#6366f1' },
    { number: '100+', label: 'Happy Clients', icon: <Users size={32} />, color: '#ec4899' },
    { number: '5+', label: 'Years Experience', icon: <Clock size={32} />, color: '#06b6d4' },
    { number: '30+', label: 'Tech Experts', icon: <Code size={32} />, color: '#f59e0b' },
    { number: '15+', label: 'Countries', icon: <Globe size={32} />, color: '#10b981' },
    { number: '50+', label: 'Team Members', icon: <Users size={32} />, color: '#8b5cf6' }
  ];

  const values = [
    {
      icon: <Heart size={40} />,
      title: 'Client First',
      description: 'We prioritize our clients\' success above everything else. Your growth is our growth.',
      color: '#6366f1',
      gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)'
    },
    {
      icon: <Shield size={40} />,
      title: 'Quality Assured',
      description: 'We never compromise on quality. Every line of code is tested and optimized.',
      color: '#ec4899',
      gradient: 'linear-gradient(135deg, #ec4899, #f43f5e)'
    },
    {
      icon: <Target size={40} />,
      title: 'Result Oriented',
      description: 'We focus on delivering measurable business results, not just красивые интерфейсы.',
      color: '#06b6d4',
      gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)'
    },
    {
      icon: <Zap size={40} />,
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to bring you cutting-edge solutions.',
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b, #f97316)'
    }
  ];

  const timeline = [
    {
      year: '2018',
      title: 'The Beginning',
      description: 'birdtech was founded with a vision to transform businesses through technology.',
      icon: '🚀',
      color: '#6366f1'
    },
    {
      year: '2019',
      title: 'First Milestone',
      description: 'Completed 50+ projects and expanded team to 10 experts.',
      icon: '🎯',
      color: '#ec4899'
    },
    {
      year: '2020',
      title: 'Global Expansion',
      description: 'Started serving international clients from USA, UK, and Australia.',
      icon: '🌍',
      color: '#06b6d4'
    },
    {
      year: '2021',
      title: 'AI & ML Division',
      description: 'Launched dedicated AI/ML division for intelligent solutions.',
      icon: '🤖',
      color: '#f59e0b'
    },
    {
      year: '2022',
      title: '100+ Clients',
      description: 'Celebrated 100+ happy clients and 300+ successful projects.',
      icon: '🎉',
      color: '#10b981'
    },
    {
      year: '2023',
      title: 'Training Programs',
      description: 'Launched professional IT training programs for aspiring developers.',
      icon: '📚',
      color: '#8b5cf6'
    },
    {
      year: '2024',
      title: 'Innovation Hub',
      description: 'Opened new innovation hub for R&D in emerging technologies.',
      icon: '💡',
      color: '#f43f5e'
    },
    {
      year: '2025',
      title: 'Future Ready',
      description: 'Continuing to lead digital transformation with cutting-edge solutions.',
      icon: '⭐',
      color: '#3b82f6'
    }
  ];

  // const team = [
  //   {
  //     name: 'Sandeep',
  //     role: 'Co-Founder',
  //     image: image1,
  //     bio: 'Digital marketing specialist with 3+ years experience. Expert in UX design and app development.',
  //     social: {
  //       linkedin: 'https://linkedin.com/in/sandeep',
  //       twitter: 'https://twitter.com/sandeep',
  //       github: 'https://github.com/sandeep'
  //     },
  //     expertise: ['Digital Marketing', 'UX Design', 'App Strategy']
  //   },
  //   {
  //     name: 'Amit Bhati',
  //     role: 'Co-Founder',
  //     image: image2,
  //     bio: 'Certified expert with 6+ years in Software Development and DevOps specialization.',
  //     social: {
  //       linkedin: 'https://linkedin.com/in/amitbhati',
  //       twitter: 'https://twitter.com/amitbhati',
  //       github: 'https://github.com/amitbhati'
  //     },
  //     expertise: ['AWS', 'Kubernetes', 'Security', 'DevOps']
  //   },
  //   {
  //     name: 'Charvi Ahuja',
  //     role: 'HR Manager',
  //     image: image3,
  //     bio: 'Dedicated HR professional focused on building strong teams and positive work culture.',
  //     social: {
  //       linkedin: 'https://linkedin.com/in/charviahuja',
  //       twitter: 'https://twitter.com/charviahuja',
  //       github: 'https://github.com/charviahuja'
  //     },
  //     expertise: ['Recruitment', 'Employee Relations', 'Culture Building']
  //   }
  // ];
const team = [
  {
    name: 'Priyanshu',
    role: 'Co-Founder',
    image: null,
    bio: 'Digital marketing specialist with 3+ years experience. Expert in UX design and app development.',
    social: {
      linkedin: 'https://linkedin.com/in/priyanshu',
      twitter: 'https://twitter.com/priyanshu',
      github: 'https://github.com/priyanshu'
    },
    expertise: ['Digital Marketing', 'UX Design', 'App Strategy']
  }
];
  const partners = [
    { name: 'Microsoft', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg' },
    { name: 'Amazon', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
    { name: 'Google', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
    { name: 'IBM', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ibm/ibm-original.svg' },
    { name: 'Oracle', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
    { name: 'Salesforce', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg' }
  ];

  return (
    <div className="about-page" ref={containerRef}>
      {/* Progress Bar */}
      <motion.div 
        className="progress-bar"
        style={{ scaleX: scaleX }}
      />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-background">
          <motion.div 
            className="gradient-orb orb-1"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              borderRadius: ["50%", "40%", "50%"]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="gradient-orb orb-2"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
              borderRadius: ["40%", "50%", "40%"]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="gradient-orb orb-3"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container">
          <motion.div 
            className="about-hero-content"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1,
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
          >
            <motion.span 
              className="about-badge"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <Sparkles size={16} />
              About birdtech
            </motion.span>
            
            <motion.h1 
              className="about-hero-title"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              We're on a Mission to
              <motion.span 
                className="gradient-text"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%']
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {' '}Transform Businesses
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="about-hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Since 2018, we've been helping companies leverage technology for growth and innovation. 
              What started as a small team of passionate developers has grown into a full-service 
              digital transformation agency with 30+ experts serving clients worldwide.
            </motion.p>
            
            <motion.div 
              className="about-hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button variant="primary" size="large" icon={<Rocket />} iconPosition="right">
                Meet Our Team
              </Button>
              <Button variant="outline" size="large" icon={<Star />}>
                View Our Work
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection stats={stats} />

      {/* Story Section */}
      <StorySection timeline={timeline} />

      {/* Timeline Section */}
      <TimelineSection timeline={timeline} />

      {/* Values Section */}
      <ValuesSection values={values} />

      {/* Team Section */}
      <TeamSection team={team} />

      {/* Partners Section */}
      <PartnersSection partners={partners} />

      {/* CTA Section */}
      <CTASection />

      {/* Contact Bar */}
      <ContactBar />
    </div>
  );
};

// Stats Section Component
const StatsSection = ({ stats }) => {
  return (
    <section className="about-stats-section">
      <div className="container">
        <motion.div 
          className="stats-grid-about"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Stat Card Component
const StatCard = ({ stat }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  
  return (
    <motion.div 
      ref={ref}
      className="stat-card-about"
      variants={{
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 }
      }}
      whileHover={{ 
        y: -20,
        scale: 1.05,
        boxShadow: `0 20px 40px ${stat.color}40`
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div 
        className="stat-icon-wrapper"
        style={{ background: stat.color }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {stat.icon}
      </motion.div>
      
      <motion.h3
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
      >
        <Counter value={parseInt(stat.number)} inView={inView} />
        {stat.number.includes('+') && '+'}
      </motion.h3>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
      >
        {stat.label}
      </motion.p>
    </motion.div>
  );
};

// Story Section Component
const StorySection = ({ timeline }) => {
  return (
    <section className="story-section">
      <div className="container">
        <div className="story-grid">
          <motion.div 
            className="story-content"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="section-badge"
              whileHover={{ scale: 1.1 }}
            >
              Our Story
            </motion.span>
            
            <h2>From Passion to <span className="gradient-text">Purpose</span></h2>
            
            <motion.p 
              className="story-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              birdtech was born from a simple idea: technology should empower businesses, 
              not complicate them. Our founders started this journey with a vision to create meaningful digital solutions.
            </motion.p>
            
            <motion.p 
              className="story-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Today, we're a team of experts delivering enterprise-grade solutions to clients worldwide. 
              But our core philosophy remains the same: put clients first, deliver quality, and innovate constantly.
            </motion.p>
            
            <motion.div 
              className="story-features"
              variants={{
                animate: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { title: 'Client-Centric Approach', desc: 'Your success is our success' },
                { title: 'Quality First', desc: 'Enterprise-grade standards' },
                { title: 'Innovation Driven', desc: 'Cutting-edge technologies' }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="story-feature"
                  variants={{
                    initial: { opacity: 0, x: -30 },
                    animate: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div 
                    className="feature-check"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    ✓
                  </motion.div>
                  <div>
                    <h4>{feature.title}</h4>
                    <p>{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="story-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="story-3d-container">
              {/* 3D Rotating Cube */}
              <motion.div 
                className="story-cube-3d"
                animate={{
                  rotateX: [0, 360],
                  rotateY: [0, 360]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {[0, 1, 2, 3, 4, 5].map((face) => (
                  <div key={face} className={`cube-face face-${face}`}>
                    <div className="face-content">
                      <Rocket size={40} />
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Floating Cards */}
              {timeline.slice(0, 4).map((item, index) => (
                <motion.div 
                  key={index}
                  className={`floating-card-3d card-${index + 1}`}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, 20, 0],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 5 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                  whileHover={{
                    scale: 1.2
                  }}
                >
                  <div className="floating-card-inner">
                    <div className="floating-card-front">
                      <span className="year">{item.year}</span>
                      <span className="event">{item.icon}</span>
                    </div>
                    <div className="floating-card-back">
                      <span>{item.title}</span>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Pulsing Core */}
              <motion.div 
                className="story-core"
                animate={{
                  scale: [1, 1.5, 1],
                  boxShadow: [
                    '0 0 50px #6366f1',
                    '0 0 100px #ec4899',
                    '0 0 50px #6366f1'
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="core-pulse" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Timeline Section Component
const TimelineSection = ({ timeline }) => {
  return (
    <section className="timeline-section">
      <div className="container">
        <motion.div 
          className="section-header-centered"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="section-badge"
            whileHover={{ scale: 1.1 }}
          >
            Our Journey
          </motion.span>
          <h2>Evolution of <span className="gradient-text">Excellence</span></h2>
          <p>From startup to industry leader - our path of continuous growth</p>
        </motion.div>

        <motion.div 
          className="timeline-grid-3d"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {timeline.map((item, index) => (
            <TimelineCard key={index} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Timeline Card Component
const TimelineCard = ({ item }) => {
  return (
    <motion.div 
      className="timeline-card-3d"
      variants={{
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 }
      }}
      whileHover={{
        rotateY: 180,
        scale: 1.1
      }}
      transition={{
        duration: 0.8,
        type: "spring"
      }}
      style={{
        transformStyle: "preserve-3d"
      }}
    >
      <div className="timeline-card-front">
        <div className="timeline-icon-3d" style={{ background: item.color }}>
          <span>{item.icon}</span>
        </div>
        <h3>{item.year}</h3>
        <p>{item.title}</p>
      </div>
      <div className="timeline-card-back" style={{ background: item.color }}>
        <p>{item.description}</p>
        <motion.div
          animate={{
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        >
          {item.icon}
        </motion.div>
      </div>
    </motion.div>
  );
};

// Values Section Component
const ValuesSection = ({ values }) => {
  return (
    <section className="values-section-about">
      <div className="container">
        <motion.div 
          className="section-header-centered"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="section-badge"
            whileHover={{ scale: 1.1 }}
          >
            Our Values
          </motion.span>
          <h2>What Drives <span className="gradient-text">Us Forward</span></h2>
          <p>The principles that guide every decision we make</p>
        </motion.div>

        <motion.div 
          className="values-grid-3d"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <ValueCard key={index} value={value} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Value Card Component
const ValueCard = ({ value }) => {
  return (
    <motion.div 
      className="value-card-3d"
      variants={{
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 }
      }}
      whileHover={{
        rotateY: 180,
        scale: 1.05
      }}
      transition={{
        duration: 0.8,
        type: "spring"
      }}
      style={{
        transformStyle: "preserve-3d"
      }}
    >
      <div className="value-card-front">
        <div className="value-icon-3d" style={{ background: value.gradient }}>
          {value.icon}
        </div>
        <h3>{value.title}</h3>
      </div>
      <div className="value-card-back" style={{ background: value.gradient }}>
        <p>{value.description}</p>
        <motion.div
          animate={{
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        >
          {value.icon}
        </motion.div>
      </div>
    </motion.div>
  );
};

// Team Section Component
const TeamSection = ({ team }) => {
  return (
    <section className="team-section-about">
      <div className="container">
        <motion.div 
          className="section-header-centered"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="section-badge"
            whileHover={{ scale: 1.1 }}
          >
            Leadership Team
          </motion.span>
          <h2>Meet the <span className="gradient-text">Minds Behind</span> the Magic</h2>
          <p>Passionate experts dedicated to your success</p>
        </motion.div>

        <motion.div 
          className="team-grid-3d"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {team.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Team Card Component
// const TeamCard = ({ member }) => {
//   const [imageError, setImageError] = useState(false);
  
//   const handleImageError = () => {
//     setImageError(true);
//   };

//   return (
//     <motion.div 
//       className="team-card-3d"
//       variants={{
//         initial: { opacity: 0, y: 50 },
//         animate: { opacity: 1, y: 0 }
//       }}
//       whileHover={{
//         y: -30,
//         scale: 1.05
//       }}
//       transition={{
//         type: "spring",
//         stiffness: 300,
//         damping: 20
//       }}
//     >
//       {/* <div className="team-card-inner"> */}
//       <div 
//   className="team-card-inner"
//   style={{
//     display: 'flex',
//     alignItems: 'center',
//     gap: '30px',
//     padding: '20px'
//   }}
// >
//         {/* <div className="team-image-3d"> */}
//         <div 
//   className="team-image-3d"
//   style={{
//     width: '250px',
//     height: '250px',
//     flexShrink: 0
//   }}
// >
//           {!imageError ? (
//             <img 
//               src={member.image} 
//               alt={member.name} 
//               onError={handleImageError}
//             />
//           ) : (
//             <div className="team-image-placeholder">
//               <Users size={50} />
//             </div>
//           )}
//           <motion.div 
//             className="team-overlay-3d"
//             initial={{ opacity: 0 }}
//             whileHover={{ opacity: 1 }}
//           >
//             <div className="team-expertise">
//               {member.expertise.map((skill, i) => (
//                 <motion.span 
//                   key={i}
//                   className="expertise-tag"
//                   initial={{ scale: 0 }}
//                   whileInView={{ scale: 1 }}
//                   transition={{ delay: i * 0.1 }}
//                 >
//                   {skill}
//                 </motion.span>
//               ))}
//             </div>
//           </motion.div>
//         </div>
        
//         <motion.div 
//           className="team-info-3d"
//           initial={{ y: 0 }}
//           whileHover={{ y: -10 }}
//         >
//           <h3>{member.name}</h3>
//           <p className="team-role-3d">{member.role}</p>
//           <p className="team-bio-3d">{member.bio}</p>
          
//           <motion.div 
//             className="team-social-3d"
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             transition={{ delay: 0.2 }}
//           >
//             <motion.a 
//               href={member.social.linkedin}
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ y: -5, scale: 1.2 }}
//             >
//               <Linkedin size={18} />
//             </motion.a>
//             <motion.a 
//               href={member.social.twitter}
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ y: -5, scale: 1.2 }}
//             >
//               <Twitter size={18} />
//             </motion.a>
//             <motion.a 
//               href={member.social.github}
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ y: -5, scale: 1.2 }}
//             >
//               <Github size={18} />
//             </motion.a>
//           </motion.div>

//           {/* WhatsApp Chat Button for Team Member */}
//           <motion.button
//             className="team-whatsapp-btn"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => window.open(`https://wa.me/91XXXXXXXXXX?text=Hi! I want to connect with ${member.name} regarding ${member.role} position`, '_blank')}
//           >
//             <MessageCircle size={16} />
//             Chat on WhatsApp
//           </motion.button>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };
const TeamCard = ({ member }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <motion.div
      className="team-card-3d"
      variants={{
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 }
      }}
      whileHover={{
        y: -15,
        scale: 1.02
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      style={{
        width: "100%",
        borderRadius: "30px",
        overflow: "hidden",
        background: "rgba(15, 23, 42, 0.9)",
        backdropFilter: "blur(15px)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 20px 50px rgba(0,0,0,0.35)"
      }}
    >
      <div
  className="team-card-inner"
  style={{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "50px",
    padding: "40px",
    width: "100%"
  }}
>
        {/* LEFT SIDE IMAGE */}
       <div
  className="team-image-3d"
  style={{
    width: "320px",
    height: "320px",
    minWidth: "320px",
    borderRadius: "25px",
    overflow: "hidden",
    position: "relative"
  }}
>
          {!imageError && member.image ? (
            <img
              src={member.image}
              alt={member.name}
              onError={handleImageError}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transition: "transform 0.5s ease"
              }}
            />
          ) : (
            <div
              className="team-image-placeholder"
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                color: "#fff",
                background:
                  "linear-gradient(135deg, #2563eb, #06b6d4)"
              }}
            >
              <Users size={70} />
              <h3
                style={{
                  marginTop: "15px",
                  fontSize: "24px",
                  fontWeight: "700"
                }}
              >
                {member.name}
              </h3>
            </div>
          )}

          {/* DARK OVERLAY */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.7), transparent 60%)"
            }}
          />

          {/* NAME OVER IMAGE */}
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              zIndex: 2,
              color: "#fff"
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: "28px",
                fontWeight: "700"
              }}
            >
              {member.name}
            </h2>

            <p
              style={{
                margin: "5px 0 0",
                opacity: 0.85,
                fontSize: "15px"
              }}
            >
              {member.role}
            </p>
          </div>
        </div>

        {/* RIGHT SIDE DETAILS */}
      <motion.div
  className="team-info-3d"
  style={{
    flex: 1,
    color: "#fff",
    textAlign: "left"
  }}
        >
          <span
            style={{
              padding: "8px 16px",
              borderRadius: "50px",
              background:
                "linear-gradient(135deg, #2563eb, #06b6d4)",
              fontSize: "14px",
              fontWeight: "600",
              display: "inline-block",
              marginBottom: "20px"
            }}
          >
            Team Member
          </span>

          <h2
            style={{
              fontSize: "42px",
              fontWeight: "800",
              marginBottom: "10px",
              lineHeight: 1.1
            }}
          >
            {member.name}
          </h2>

          <p
            className="team-role-3d"
            style={{
              fontSize: "20px",
              color: "#38bdf8",
              marginBottom: "20px",
              fontWeight: "600"
            }}
          >
            {member.role}
          </p>

          <p
            className="team-bio-3d"
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#cbd5e1",
              marginBottom: "25px"
            }}
          >
            {member.bio}
          </p>

          {/* SKILLS */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              marginBottom: "30px"
            }}
          >
            {member.expertise.map((skill, i) => (
              <span
                key={i}
                style={{
                  padding: "10px 18px",
                  borderRadius: "50px",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  fontSize: "14px",
                  color: "#fff"
                }}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* SOCIAL ICONS */}
          <motion.div
            className="team-social-3d"
            style={{
              display: "flex",
              gap: "15px",
              marginBottom: "30px"
            }}
          >
            <motion.a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.15 }}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#0A66C2",
                color: "#fff"
              }}
            >
              <Linkedin size={20} />
            </motion.a>

            <motion.a
              href={member.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.15 }}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#1DA1F2",
                color: "#fff"
              }}
            >
              <Twitter size={20} />
            </motion.a>

            <motion.a
              href={member.social.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.15 }}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#111827",
                color: "#fff"
              }}
            >
              <Github size={20} />
            </motion.a>
          </motion.div>

          {/* BUTTON */}
          <motion.button
            className="team-whatsapp-btn"
            whileHover={{
              scale: 1.03
            }}
            whileTap={{
              scale: 0.95
            }}
            onClick={() =>
              window.open(
                `https://wa.me/91XXXXXXXX?text=Hi! I want to connect with ${member.name}`,
                "_blank"
              )
            }
            style={{
              padding: "16px 28px",
              borderRadius: "14px",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "700",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background:
                "linear-gradient(135deg, #22c55e, #16a34a)",
              color: "#fff",
              boxShadow: "0 10px 25px rgba(34,197,94,0.3)"
            }}
          >
            <MessageCircle size={20} />
            Chat on WhatsApp
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Partners Section Component
const PartnersSection = ({ partners }) => {
  return (
    <section className="partners-section">
      <div className="container">
        <motion.div 
          className="section-header-centered"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="section-badge"
            whileHover={{ scale: 1.1 }}
          >
            Our Partners
          </motion.span>
          <h2>Trusted by <span className="gradient-text">Industry Leaders</span></h2>
          <p>We collaborate with the best in the business</p>
        </motion.div>

        <motion.div 
          className="partners-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {partners.map((partner, index) => (
            <motion.div 
              key={index}
              className="partner-logo"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={partner.logo} alt={partner.name} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// CTA Section Component
const CTASection = () => {
  return (
    <section className="about-cta">
      <div className="container">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Ready to Start Your Journey?</h2>
          <p>Let's work together to bring your vision to life</p>
          <div className="cta-buttons">
            <Button variant="primary" size="large" icon={<Briefcase size={18} />}>
              Start a Project
            </Button>
            <Button variant="outline" size="large" icon={<Mail size={18} />}>
              Contact Us
            </Button>
          </div>
          
          {/* WhatsApp CTA Button */}
          <motion.button
            className="cta-whatsapp-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://wa.me/91XXXXXXXX?text=Hi! I want to discuss a project with your team.', '_blank')}
          >
            <MessageCircle size={20} />
            Chat on WhatsApp
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// Contact Bar Component
const ContactBar = () => {
  return (
    <div className="contact-bar">
      <div className="container">
        <div className="contact-bar-content">
          <motion.div 
            className="contact-bar-item"
            whileHover={{ scale: 1.1, color: '#25D366' }}
            onClick={() => window.open('https://wa.me/91XXXXXXXX', '_blank')}
            style={{ cursor: 'pointer' }}
          >
            <MessageCircle size={20} />
            <span>Chat on WhatsApp</span>
          </motion.div>
          <motion.div 
            className="contact-bar-item"
            whileHover={{ scale: 1.1 }}
            onClick={() => window.location.href = 'mailto:info@birdtech.com'}
            style={{ cursor: 'pointer' }}
          >
            <Mail size={20} />
            <span>info@birdtech.com</span>
          </motion.div>
          <motion.div 
            className="contact-bar-item"
            whileHover={{ scale: 1.1 }}
          >
            <MapPin size={20} />
            <span>Noida, India</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Counter Component for Stats
const Counter = ({ value, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return <span>{count}</span>;
};

export default About;