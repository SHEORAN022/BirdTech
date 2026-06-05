// src/components/sections/Services.js (Enhanced with 3D effects)
import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeader from '../common/SectionHeader';
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  Brain, 
  Palette, 
  Megaphone, 
  Zap,
  ArrowRight,
  Sparkles,
  Rocket,
  Shield
} from 'lucide-react';
import './Services.css';

// Enhanced 3D Service Card Component
const ServiceCard3D = ({ service, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Mouse move for 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="service-card-3d-wrapper"
      initial={{ opacity: 0, y: 100, rotateX: -15 }}
      animate={inView ? { 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
        transition: { 
          type: "spring", 
          stiffness: 100, 
          damping: 12,
          delay: index * 0.1 
        }
      } : {}}
      whileHover={{ scale: 1.02 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1200,
      }}
    >
      <motion.div 
        className="service-card-3d"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Front Face */}
        <div className="service-card-front">
          <div className="service-card-glow-3d" style={{ background: service.gradient }}></div>
          
          <div className="service-icon-3d-wrapper">
            <motion.div 
              className="service-icon-3d"
              style={{ background: service.gradient }}
              animate={{
                rotateY: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              {service.icon}
            </motion.div>
            
            {/* Floating particles around icon */}
            <motion.div 
              className="icon-particles"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles size={20} />
            </motion.div>
          </div>

          <h3 className="service-title-3d">{service.title}</h3>
          <p className="service-description-3d">{service.description}</p>

          <div className="service-features-3d">
            {service.features.slice(0, 3).map((feature, idx) => (
              <motion.div 
                key={idx}
                className="feature-item-3d"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + idx * 0.1 }}
              >
                <motion.span 
                  className="feature-bullet-3d"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 360],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                >
                  ●
                </motion.span>
                {feature}
              </motion.div>
            ))}
          </div>

          <motion.button 
            className="service-btn-3d"
            
          >
            
            <motion.div
              
            >
              
            </motion.div>
          </motion.button>
        </div>

        {/* Back Face (for 3D effect) */}
        <div className="service-card-back" style={{ background: service.gradient }}>
          <Rocket size={40} />
          <h4>Advanced Technology</h4>
          <p>Cutting-edge solutions with latest tech stack</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Globe size={32} />,
      title: "Web Development",
      fullTitle: "Web Development (MERN Stack)",
      description: "High-performance websites and web applications using cutting-edge technologies.",
      features: [
        "React.js & Next.js Frontend",
        "Node.js & Express Backend",
        "MongoDB Database Solutions",
        "RESTful & GraphQL APIs",
        "Real-time Applications"
      ],
      gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
      color: "#6366f1",
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile Apps",
      fullTitle: "Mobile Applications",
      description: "Native and cross-platform mobile apps for Android & iOS with smooth UI.",
      features: [
        "React Native Development",
        "Flutter & Dart",
        "iOS Swift & Android Kotlin",
        "PWA Development",
        "App Store Optimization"
      ],
      gradient: "linear-gradient(135deg, #ec4899, #f43f5e)",
      color: "#ec4899",
      tech: ["React Native", "Flutter", "Swift"]
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud & DevOps",
      fullTitle: "Cloud & DevOps",
      description: "AWS, Azure & GCP solutions with CI/CD pipelines and containerization.",
      features: [
        "AWS Cloud Architecture",
        "Docker & Kubernetes",
        "CI/CD Pipeline Setup",
        "Serverless Computing",
        "Infrastructure as Code"
      ],
      gradient: "linear-gradient(135deg, #06b6d4, #0891b2)",
      color: "#06b6d4",
      tech: ["AWS", "Docker", "K8s"]
    },
    {
      icon: <Brain size={32} />,
      title: "AI & ML",
      fullTitle: "AI & Machine Learning",
      description: "Intelligent solutions using AI/ML, computer vision, and predictive analytics.",
      features: [
        "Custom ML Models",
        "Computer Vision Solutions",
        "Natural Language Processing",
        "Predictive Analytics",
        "AI Integration"
      ],
      gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
      color: "#f59e0b",
      tech: ["Python", "TensorFlow", "PyTorch"]
    },
    {
      icon: <Palette size={32} />,
      title: "UI/UX Design",
      fullTitle: "UI/UX Design",
      description: "User-centered design, prototyping, and design systems for exceptional experiences.",
      features: [
        "User Research & Testing",
        "Wireframing & Prototyping",
        "Design Systems",
        "Interactive Design",
        "Mobile & Web Design"
      ],
      gradient: "linear-gradient(135deg, #10b981, #059669)",
      color: "#10b981",
      tech: ["Figma", "Adobe XD", "Sketch"]
    },
    {
      icon: <Megaphone size={32} />,
      title: "Digital Marketing",
      fullTitle: "Digital Marketing",
      description: "Complete digital marketing solutions including SEO, social media, and PPC.",
      features: [
        "SEO & ASO Optimization",
        "Social Media Marketing",
        "PPC Campaign Management",
        "Content Strategy",
        "Analytics & Reporting"
      ],
      gradient: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
      color: "#8b5cf6",
      tech: ["SEO", "Social Media", "Analytics"]
    }
  ];

  return (
    <section className="services-3d" id="services" ref={ref}>
      {/* 3D Background Elements */}
      <div className="services-3d-background">
        <div className="floating-cubes">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="floating-cube"
              animate={{
                y: [0, -50, 0],
                x: [0, 30, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5,
              }}
              style={{
                background: `linear-gradient(135deg, ${services[i % 6].color}30, transparent)`,
                left: `${i * 15}%`,
                top: `${i * 10}%`,
              }}
            />
          ))}
        </div>
        
        <div className="floating-spheres">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="floating-sphere"
              animate={{
                y: [0, -100, 0],
                x: [0, 50, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 15 + i * 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container-3d">
        <SectionHeader 
          badge={
            <motion.span
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles size={16} /> Our Services <Sparkles size={16} />
            </motion.span>
          }
          title={
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              Complete IT Solutions for 
              <motion.span 
                className="gradient-text-3d"
                animate={{
                  textShadow: [
                    "0 0 10px #6366f1",
                    "0 0 20px #ec4899",
                    "0 0 10px #6366f1",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {" "}Your Business
              </motion.span>
            </motion.h2>
          }
          description="We provide end-to-end digital transformation services using cutting-edge technologies"
          alignment="center"
        />

        <motion.div 
          className="services-grid-3d"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <ServiceCard3D key={index} service={service} index={index} />
          ))}
        </motion.div>

        {/* 3D Stats Strip */}
        <motion.div 
          className="services-stats-3d"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { number: "500+", label: "Projects", color: "#6366f1" },
            { number: "100+", label: "Clients", color: "#ec4899" },
            { number: "5+", label: "Years", color: "#06b6d4" },
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-item-3d"
              whileHover={{ scale: 1.1, rotateY: 180 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.span 
                className="stat-number-3d"
                style={{ color: stat.color }}
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              >
                {stat.number}
              </motion.span>
              <span className="stat-label-3d">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;