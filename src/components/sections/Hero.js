// // src/components/sections/Hero.js (Updated with 3D effects)
// import React from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import Button from '../common/Button';
// import { ChevronRight, Play, Zap, Shield, Cpu } from 'lucide-react';
// import './Hero.css';

// const Hero = () => {
//   const { scrollY } = useScroll();
//   const opacity = useTransform(scrollY, [0, 300], [1, 0]);
//   const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
//   const y = useTransform(scrollY, [0, 300], [0, 100]);

//   return (
//     <section className="hero" id="home">
//       {/* Animated Background */}
//       <div className="hero-background">
//         <div className="gradient-sphere"></div>
//         <div className="grid-overlay"></div>
        
//         {/* Floating 3D Orbs */}
//         <motion.div 
//           className="floating-orb orb-1"
//           animate={{
//             x: [0, 100, 0],
//             y: [0, -100, 0],
//             scale: [1, 1.2, 1],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "linear"
//           }}
//         />
//         <motion.div 
//           className="floating-orb orb-2"
//           animate={{
//             x: [0, -100, 0],
//             y: [0, 100, 0],
//             scale: [1.2, 1, 1.2],
//           }}
//           transition={{
//             duration: 25,
//             repeat: Infinity,
//             ease: "linear"
//           }}
//         />
//         <motion.div 
//           className="floating-orb orb-3"
//           animate={{
//             x: [0, 50, 0],
//             y: [0, 50, 0],
//             scale: [1, 1.1, 1],
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             ease: "linear"
//           }}
//         />
//       </div>

//       {/* Floating Tech Icons */}
//       <div className="floating-tech-icons">
//         <motion.div 
//           className="tech-icon react-icon"
//           animate={{
//             rotate: [0, 360],
//             y: [0, -20, 0],
//           }}
//           transition={{
//             rotate: { duration: 20, repeat: Infinity, ease: "linear" },
//             y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
//           }}
//         >
//           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
//         </motion.div>

//         <motion.div 
//           className="tech-icon node-icon"
//           animate={{
//             rotate: [0, -360],
//             y: [0, 20, 0],
//           }}
//           transition={{
//             rotate: { duration: 25, repeat: Infinity, ease: "linear" },
//             y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
//           }}
//         >
//           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
//         </motion.div>

//         <motion.div 
//           className="tech-icon python-icon"
//           animate={{
//             rotate: [0, 360],
//             y: [0, -15, 0],
//           }}
//           transition={{
//             rotate: { duration: 22, repeat: Infinity, ease: "linear" },
//             y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
//           }}
//         >
//           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
//         </motion.div>

//         <motion.div 
//           className="tech-icon aws-icon"
//           animate={{
//             rotate: [0, -360],
//             y: [0, 15, 0],
//           }}
//           transition={{
//             rotate: { duration: 18, repeat: Infinity, ease: "linear" },
//             y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
//           }}
//         >
//           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt="AWS" />
//         </motion.div>

//         <motion.div 
//           className="tech-icon docker-icon"
//           animate={{
//             rotate: [0, 360],
//             y: [0, -25, 0],
//           }}
//           transition={{
//             rotate: { duration: 30, repeat: Infinity, ease: "linear" },
//             y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
//           }}
//         >
//           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
//         </motion.div>

//         <motion.div 
//           className="tech-icon mongo-icon"
//           animate={{
//             rotate: [0, -360],
//             y: [0, 25, 0],
//           }}
//           transition={{
//             rotate: { duration: 28, repeat: Infinity, ease: "linear" },
//             y: { duration: 4.2, repeat: Infinity, ease: "easeInOut" }
//           }}
//         >
//           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
//         </motion.div>
//       </div>

//       <div className="hero-container">
//         <div className="hero-content">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <span className="hero-badge">
//               <Zap size={16} />
//               Digital Transformation Partner
//             </span>
//           </motion.div>

//           <motion.h1
//             className="hero-title"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Transforming Ideas Into
//             <span className="gradient-text"> Scalable Digital Solutions</span>
//           </motion.h1>

//           <motion.p
//             className="hero-description"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             We design, develop, and deploy enterprise-grade software, cloud-native systems, 
//             AI-powered automation, and future-ready IT solutions.
//           </motion.p>

//           <motion.div
//             className="hero-buttons"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//           >
//             <Button 
//               variant="primary" 
//               size="large"
//               icon={<ChevronRight size={20} />}
//               iconPosition="right"
//             >
//               Explore Services
//             </Button>
//             <Button 
//               variant="outline" 
//               size="large"
//               icon={<Play size={20} />}
//             >
//               Watch Demo
//             </Button>
//           </motion.div>

//           <motion.div
//             className="hero-features"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//           >
//             <div className="feature-item">
//               <Shield size={18} />
//               <span>Enterprise Grade</span>
//             </div>
//             <div className="feature-item">
//               <Cpu size={18} />
//               <span>AI Powered</span>
//             </div>
//             <div className="feature-item">
//               <Zap size={18} />
//               <span>Cloud Native</span>
//             </div>
//           </motion.div>
//         </div>

//         <motion.div 
//           className="hero-visual"
//           style={{ scale, y }}
//         >
//           <div className="hero-3d-container">
//             {/* 3D Cube */}
//             <div className="cube-container">
//               <div className="cube">
//                 <div className="cube-face front"></div>
//                 <div className="cube-face back"></div>
//                 <div className="cube-face right"></div>
//                 <div className="cube-face left"></div>
//                 <div className="cube-face top"></div>
//                 <div className="cube-face bottom"></div>
//               </div>
//             </div>

//             {/* Floating Cards */}
//             <motion.div 
//               className="floating-card card-1"
//               animate={{
//                 y: [0, -20, 0],
//                 rotate: [0, 5, 0],
//               }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//             >
//               <div className="card-glow"></div>
//               <div className="card-icon">🚀</div>
//               <div className="card-content">
//                 <h4>AI Integration</h4>
//                 <p>120+ Projects</p>
//               </div>
//             </motion.div>

//             <motion.div 
//               className="floating-card card-2"
//               animate={{
//                 y: [0, 20, 0],
//                 rotate: [0, -5, 0],
//               }}
//               transition={{
//                 duration: 5,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//             >
//               <div className="card-glow"></div>
//               <div className="card-icon">⚡</div>
//               <div className="card-content">
//                 <h4>Cloud Native</h4>
//                 <p>99.9% Uptime</p>
//               </div>
//             </motion.div>

//             <motion.div 
//               className="floating-card card-3"
//               animate={{
//                 y: [0, -15, 0],
//                 rotate: [0, 10, 0],
//               }}
//               transition={{
//                 duration: 4.5,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//             >
//               <div className="card-glow"></div>
//               <div className="card-icon">📱</div>
//               <div className="card-content">
//                 <h4>Mobile First</h4>
//                 <p>50+ Apps</p>
//               </div>
//             </motion.div>

//             {/* Stats Circle */}
//             <div className="stats-circle">
//               <svg viewBox="0 0 100 100">
//                 <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(99,102,241,0.2)" strokeWidth="2"/>
//                 <circle 
//                   cx="50" 
//                   cy="50" 
//                   r="45" 
//                   fill="none" 
//                   stroke="url(#gradient)" 
//                   strokeWidth="2"
//                   strokeDasharray="283"
//                   strokeDashoffset="70"
//                   transform="rotate(-90 50 50)"
//                 />
//                 <defs>
//                   <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                     <stop offset="0%" stopColor="#6366f1" />
//                     <stop offset="100%" stopColor="#ec4899" />
//                   </linearGradient>
//                 </defs>
//               </svg>
//               <div className="stats-circle-content">
//                 <span className="stats-number">500+</span>
//                 <span className="stats-label">Projects</span>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       <motion.div 
//         className="scroll-indicator"
//         style={{ opacity }}
//         animate={{
//           y: [0, 10, 0],
//         }}
//         transition={{
//           duration: 2,
//           repeat: Infinity,
//           ease: "easeInOut"
//         }}
//       >
//         <div className="mouse">
//           <div className="wheel"></div>
//         </div>
//         <span>Scroll to explore</span>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;
// src/components/sections/Hero.js (Enhanced Version)
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../common/Button';
import { ChevronRight, Play, Zap, Shield, Cpu, Sparkles, Rocket, Globe, Star } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);
  const y = useTransform(scrollY, [0, 300], [0, 150]);
  const rotate = useTransform(scrollY, [0, 300], [0, 10]);

  return (
    <section className="hero" id="home">
      {/* Animated Background with Particles */}
      <div className="hero-background">
        <div className="gradient-sphere"></div>
        <div className="gradient-sphere-2"></div>
        <div className="grid-overlay"></div>
        
        {/* Animated Particles */}
        <div className="particles">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                transition: {
                  duration: Math.random() * 20 + 10,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              style={{
                background: `radial-gradient(circle, ${
                  i % 3 === 0 ? '#6366f1' : i % 3 === 1 ? '#ec4899' : '#06b6d4'
                }, transparent)`,
              }}
            />
          ))}
        </div>
        
        {/* Floating Orbs with Enhanced Animation */}
        <motion.div 
          className="floating-orb orb-1"
          animate={{
            x: [0, 150, 0, -150, 0],
            y: [0, -100, 200, -100, 0],
            scale: [1, 1.3, 0.8, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="floating-orb orb-2"
          animate={{
            x: [0, -150, 100, 150, 0],
            y: [0, 150, -150, 100, 0],
            scale: [1.2, 0.9, 1.4, 0.8, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="floating-orb orb-3"
          animate={{
            x: [0, 100, -100, 50, 0],
            y: [0, -150, 150, -50, 0],
            scale: [0.8, 1.2, 0.9, 1.1, 0.8],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Floating Tech Icons with Enhanced Animation */}
      <div className="floating-tech-icons">
        <motion.div 
          className="tech-icon react-icon"
          animate={{
            rotate: [0, 360],
            y: [0, -30, 0],
            x: [0, 15, 0, -15, 0],
            scale: [1, 1.2, 0.9, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
          <motion.div className="tech-glow" 
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        <motion.div 
          className="tech-icon node-icon"
          animate={{
            rotate: [0, -360],
            y: [0, 30, 0],
            x: [0, -20, 0, 20, 0],
            scale: [1, 1.3, 0.8, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
          <motion.div className="tech-glow" 
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </motion.div>

        <motion.div 
          className="tech-icon python-icon"
          animate={{
            rotate: [0, 360],
            y: [0, -25, 0],
            x: [0, 25, 0, -25, 0],
            scale: [1, 1.4, 0.7, 1.3, 1],
          }}
          transition={{
            rotate: { duration: 18, repeat: Infinity, ease: "linear" },
            y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
          <motion.div className="tech-glow" 
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 2.2, repeat: Infinity }}
          />
        </motion.div>

        <motion.div 
          className="tech-icon aws-icon"
          animate={{
            rotate: [0, -360],
            y: [0, 25, 0],
            x: [0, -30, 0, 30, 0],
            scale: [1, 1.2, 0.9, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 22, repeat: Infinity, ease: "linear" },
            y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 9, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 6.5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt="AWS" />
          <motion.div className="tech-glow" 
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 2.8, repeat: Infinity }}
          />
        </motion.div>

        <motion.div 
          className="tech-icon docker-icon"
          animate={{
            rotate: [0, 360],
            y: [0, -35, 0],
            x: [0, 20, 0, -20, 0],
            scale: [1, 1.3, 0.8, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 8.5, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 7, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
          <motion.div className="tech-glow" 
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        <motion.div 
          className="tech-icon mongo-icon"
          animate={{
            rotate: [0, -360],
            y: [0, 35, 0],
            x: [0, -25, 0, 25, 0],
            scale: [1, 1.4, 0.7, 1.3, 1],
          }}
          transition={{
            rotate: { duration: 23, repeat: Infinity, ease: "linear" },
            y: { duration: 5.8, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 7.5, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 6.8, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
          <motion.div className="tech-glow" 
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 2.6, repeat: Infinity }}
          />
        </motion.div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-badge">
              <Sparkles size={16} />
              <span>Digital Transformation Partner</span>
              <motion.div 
                className="badge-glow"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforming Ideas Into
            <span className="gradient-text">
              <motion.span
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundImage: 'linear-gradient(90deg, #6366f1, #ec4899, #06b6d4, #6366f1)',
                  backgroundSize: '300% auto',
                }}
              >
                {' '}Scalable Digital Solutions
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We design, develop, and deploy enterprise-grade software, cloud-native systems, 
            AI-powered automation, and future-ready IT solutions that help businesses grow 
            faster in the digital age.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              variant="primary" 
              size="large"
              icon={<Rocket size={20} />}
              iconPosition="right"
            >
              Explore Services
            </Button>
            <Button 
              variant="outline" 
              size="large"
              icon={<Play size={20} />}
            >
              Watch Demo
            </Button>
          </motion.div>

          <motion.div
            className="hero-features"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { icon: Shield, text: 'Enterprise Grade', color: '#6366f1' },
              { icon: Cpu, text: 'AI Powered', color: '#ec4899' },
              { icon: Globe, text: 'Cloud Native', color: '#06b6d4' },
              { icon: Star, text: '5+ Years Excellence', color: '#f59e0b' },
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="feature-item"
                whileHover={{ scale: 1.1, x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <item.icon size={18} color={item.color} />
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            className="trust-badges"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="trust-badge">
              <span className="badge-number">500+</span>
              <span className="badge-text">Projects</span>
            </div>
            <div className="trust-badge">
              <span className="badge-number">100+</span>
              <span className="badge-text">Clients</span>
            </div>
            <div className="trust-badge">
              <span className="badge-number">15+</span>
              <span className="badge-text">Countries</span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="hero-visual"
          style={{ scale, y, rotate }}
        >
          <div className="hero-3d-container">
            {/* Main 3D Cube with Enhanced Effects */}
            <div className="cube-wrapper">
              <motion.div 
                className="cube"
                animate={{
                  rotateX: [0, 360],
                  rotateY: [0, 360],
                  rotateZ: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="cube-face front"></div>
                <div className="cube-face back"></div>
                <div className="cube-face right"></div>
                <div className="cube-face left"></div>
                <div className="cube-face top"></div>
                <div className="cube-face bottom"></div>
              </motion.div>
              <motion.div 
                className="cube-glow"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>

            {/* Floating Cards with Enhanced Effects */}
            <motion.div 
              className="floating-card card-1"
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0, -20, 0],
                rotate: [0, 10, 0, -10, 0],
                scale: [1, 1.1, 0.9, 1.05, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="card-glow"></div>
              <motion.div 
                className="card-icon"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                🤖
              </motion.div>
              <div className="card-content">
                <h4>AI Integration</h4>
                <p>120+ Projects</p>
                <motion.div 
                  className="card-progress"
                  initial={{ width: '0%' }}
                  animate={{ width: '75%' }}
                  transition={{ duration: 2, delay: 1 }}
                />
              </div>
            </motion.div>

            <motion.div 
              className="floating-card card-2"
              animate={{
                y: [0, 30, 0],
                x: [0, -25, 0, 25, 0],
                rotate: [0, -15, 0, 15, 0],
                scale: [1, 1.2, 0.8, 1.1, 1],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="card-glow"></div>
              <motion.div 
                className="card-icon"
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              >
                ⚡
              </motion.div>
              <div className="card-content">
                <h4>Cloud Native</h4>
                <p>99.9% Uptime</p>
                <motion.div 
                  className="card-progress"
                  initial={{ width: '0%' }}
                  animate={{ width: '99%' }}
                  transition={{ duration: 2, delay: 1.2 }}
                />
              </div>
            </motion.div>

            <motion.div 
              className="floating-card card-3"
              animate={{
                y: [0, -25, 0],
                x: [0, 30, 0, -30, 0],
                rotate: [0, 20, 0, -20, 0],
                scale: [1, 1.15, 0.85, 1.08, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="card-glow"></div>
              <motion.div 
                className="card-icon"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                📱
              </motion.div>
              <div className="card-content">
                <h4>Mobile First</h4>
                <p>50+ Apps</p>
                <motion.div 
                  className="card-progress"
                  initial={{ width: '0%' }}
                  animate={{ width: '85%' }}
                  transition={{ duration: 2, delay: 1.4 }}
                />
              </div>
            </motion.div>

            {/* Stats Circle with Animation */}
            <motion.div 
              className="stats-circle"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(99,102,241,0.2)" strokeWidth="2"/>
                <motion.circle 
                  cx="50" 
                  cy="50" 
                  r="45" 
                  fill="none" 
                  stroke="url(#gradient)" 
                  strokeWidth="2"
                  strokeDasharray="283"
                  animate={{ strokeDashoffset: [283, 70, 283] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  transform="rotate(-90 50 50)"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="50%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="stats-circle-content">
                <motion.span 
                  className="stats-number"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  500+
                </motion.span>
                <span className="stats-label">Projects</span>
              </div>
            </motion.div>

            {/* Floating Dots */}
            <div className="floating-dots">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="dot"
                  animate={{
                    y: [0, -50, 0],
                    x: [0, Math.sin(i) * 30, 0],
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        style={{ opacity }}
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="mouse">
          <motion.div 
            className="wheel"
            animate={{
              y: [0, 15, 0],
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        <span>Scroll to explore</span>
        <motion.div 
          className="scroll-glow"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;