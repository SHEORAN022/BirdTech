// src/pages/Services.js
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  Brain, 
  Palette, 
  Megaphone,
  Database,
  Code,
  Shield,
  Zap,
  Layers,
  Users,
  ChevronRight,
  CheckCircle,
  Clock,
  Award,
  TrendingUp,
  DollarSign,
  Headphones,
  Rocket,
  Server,
  GitBranch,
  Box,
  Cpu,
  Sparkles
} from 'lucide-react';
import Button from '../components/common/Button';
import SectionHeader from '../components/common/SectionHeader';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <Globe size={32} />,
      title: "Web Development (MERN Stack)",
      shortDesc: "High-performance websites and web applications",
      description: "We build scalable, responsive, and SEO-optimized web applications using cutting-edge technologies. Our MERN stack expertise ensures robust solutions that drive business growth.",
      features: [
        "React.js & Next.js Frontend Development",
        "Node.js & Express Backend APIs",
        "MongoDB Database Design & Optimization",
        "RESTful & GraphQL API Integration",
        "Real-time Applications with Socket.io",
        "E-commerce Platforms & Payment Integration",
        "Progressive Web Apps (PWA)",
        "Performance Optimization & SEO"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Next.js", "GraphQL"],
      gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
      color: "#6366f1",
      stats: {
        projects: "200+",
        clients: "150+",
        satisfaction: "99%"
      },
      price: "Starting at ₹50,000",
      delivery: "4-8 weeks"
    },
    {
      id: 2,
      icon: <Smartphone size={32} />,
      title: "Mobile Applications",
      shortDesc: "Native and cross-platform mobile apps",
      description: "Create stunning mobile experiences for iOS and Android. We build high-performance apps with smooth UI, offline capabilities, and seamless backend integration.",
      features: [
        "React Native Cross-platform Development",
        "Flutter & Dart Applications",
        "Native iOS (Swift) & Android (Kotlin)",
        "Progressive Web Apps (PWA)",
        "App Store & Google Play Deployment",
        "Push Notifications & Real-time Features",
        "Offline-first Architecture",
        "App Analytics & Performance Monitoring"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      gradient: "linear-gradient(135deg, #ec4899, #f43f5e)",
      color: "#ec4899",
      stats: {
        projects: "150+",
        clients: "100+",
        satisfaction: "98%"
      },
      price: "Starting at ₹40,000",
      delivery: "6-10 weeks"
    },
    {
      id: 3,
      icon: <Cloud size={32} />,
      title: "Cloud & DevOps",
      shortDesc: "Scalable cloud infrastructure & automation",
      description: "Transform your infrastructure with cloud-native solutions. We implement CI/CD pipelines, containerization, and automated deployment for maximum reliability.",
      features: [
        "AWS, Azure & GCP Architecture",
        "Docker Containerization & Orchestration",
        "Kubernetes Cluster Management",
        "CI/CD Pipeline Setup (Jenkins, GitLab CI)",
        "Infrastructure as Code (Terraform)",
        "Serverless Computing",
        "Cloud Migration & Optimization",
        "24/7 Monitoring & Logging"
      ],
      technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Jenkins"],
      gradient: "linear-gradient(135deg, #06b6d4, #0891b2)",
      color: "#06b6d4",
      stats: {
        projects: "100+",
        clients: "80+",
        satisfaction: "97%"
      },
      price: "Starting at ₹60,000",
      delivery: "6-12 weeks"
    },
    {
      id: 4,
      icon: <Brain size={32} />,
      title: "AI & Machine Learning",
      shortDesc: "Intelligent solutions for modern business",
      description: "Harness the power of AI to automate processes, gain insights, and create intelligent applications. We build custom ML models for your specific needs.",
      features: [
        "Custom Machine Learning Models",
        "Computer Vision & Image Recognition",
        "Natural Language Processing (NLP)",
        "Predictive Analytics & Forecasting",
        "Recommendation Systems",
        "Chatbots & Virtual Assistants",
        "LLM Integration & Fine-tuning",
        "Data Processing & Visualization"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV"],
      gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
      color: "#f59e0b",
      stats: {
        projects: "80+",
        clients: "60+",
        satisfaction: "96%"
      },
      price: "Starting at ₹80,000",
      delivery: "8-16 weeks"
    },
    {
      id: 5,
      icon: <Palette size={32} />,
      title: "UI/UX Design",
      shortDesc: "User-centered design for exceptional experiences",
      description: "Create beautiful, intuitive interfaces that users love. Our design process focuses on user research, wireframing, prototyping, and creating design systems.",
      features: [
        "User Research & Persona Development",
        "Wireframing & Interactive Prototyping",
        "User Interface (UI) Design",
        "User Experience (UX) Strategy",
        "Design Systems & Component Libraries",
        "Usability Testing & Analytics",
        "Mobile & Web Design",
        "Brand Identity & Visual Design"
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Framer"],
      gradient: "linear-gradient(135deg, #10b981, #059669)",
      color: "#10b981",
      stats: {
        projects: "180+",
        clients: "120+",
        satisfaction: "99%"
      },
      price: "Starting at ₹30,000",
      delivery: "3-6 weeks"
    },
    {
      id: 6,
      icon: <Megaphone size={32} />,
      title: "Digital Marketing",
      shortDesc: "Complete digital marketing solutions",
      description: "Grow your online presence with data-driven marketing strategies. We help you reach the right audience and convert them into loyal customers.",
      features: [
        "Search Engine Optimization (SEO)",
        "Social Media Marketing",
        "PPC Campaign Management",
        "Content Marketing Strategy",
        "Email Marketing Automation",
        "Analytics & Performance Tracking",
        "Conversion Rate Optimization",
        "Brand Strategy & Positioning"
      ],
      technologies: ["Google Analytics", "SEMrush", "HubSpot", "Mailchimp", "Meta Ads"],
      gradient: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
      color: "#8b5cf6",
      stats: {
        projects: "120+",
        clients: "90+",
        satisfaction: "95%"
      },
      price: "Starting at ₹25,000/month",
      delivery: "Ongoing"
    }
  ];

  const processSteps = [
    {
      icon: <Users size={24} />,
      title: "1. Discovery",
      description: "We understand your business goals, target audience, and requirements through in-depth consultation."
    },
    {
      icon: <Rocket size={24} />,
      title: "2. Planning",
      description: "We create a detailed roadmap, architecture, and timeline for your project."
    },
    {
      icon: <Code size={24} />,
      title: "3. Design & Development",
      description: "Our experts build your solution using agile methodology with regular updates."
    },
    {
      icon: <Server size={24} />,
      title: "4. Testing & QA",
      description: "Rigorous testing ensures your product is bug-free and performs optimally."
    },
    {
      icon: <Rocket size={24} />,
      title: "5. Deployment",
      description: "We deploy your solution and ensure smooth transition to production."
    },
    {
      icon: <Headphones size={24} />,
      title: "6. Support & Growth",
      description: "Ongoing maintenance, support, and continuous improvement."
    }
  ];

  const whyChooseUs = [
    {
      icon: <Award size={24} />,
      title: "5+ Years Experience",
      description: "Proven track record of delivering successful projects"
    },
    {
      icon: <Users size={24} />,
      title: "Expert Team",
      description: "30+ certified professionals in various technologies"
    },
    {
      icon: <Clock size={24} />,
      title: "On-Time Delivery",
      description: "We respect your timeline and budget"
    },
    {
      icon: <Shield size={24} />,
      title: "Quality Assured",
      description: "Enterprise-grade quality standards"
    },
    {
      icon: <Headphones size={24} />,
      title: "24/7 Support",
      description: "Round-the-clock technical assistance"
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Result Oriented",
      description: "Focus on measurable business outcomes"
    }
  ];

  const technologies = [
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "Node.js", icon: "🟢", category: "Backend" },
    { name: "Python", icon: "🐍", category: "AI/ML" },
    { name: "MongoDB", icon: "🍃", category: "Database" },
    { name: "AWS", icon: "☁️", category: "Cloud" },
    { name: "Docker", icon: "🐳", category: "DevOps" },
    { name: "TensorFlow", icon: "🧠", category: "AI/ML" },
    { name: "Flutter", icon: "📱", category: "Mobile" },
    { name: "GraphQL", icon: "◉", category: "API" },
    { name: "Kubernetes", icon: "⚙️", category: "DevOps" },
    { name: "TypeScript", icon: "📘", category: "Language" },
    { name: "Next.js", icon: "▲", category: "Frontend" }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "₹25,000",
      period: "Starting price",
      features: [
        "Single Page Application",
        "Responsive Design",
        "Basic SEO",
        "5 Pages",
        "Contact Form",
        "1 Month Support"
      ],
      recommended: false
    },
    {
      name: "Professional",
      price: "₹50,000",
      period: "Starting price",
      features: [
        "Multi-page Website",
        "Custom Design",
        "Advanced SEO",
        "CMS Integration",
        "Payment Gateway",
        "3 Months Support",
        "Performance Optimization"
      ],
      recommended: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Tailored solution",
      features: [
        "Custom Web Application",
        "Mobile Apps Included",
        "AI/ML Integration",
        "Cloud Infrastructure",
        "Dedicated Team",
        "12 Months Support",
        "SLA Agreement"
      ],
      recommended: false
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
          <div className="pattern-grid"></div>
        </div>

        <div className="container">
          <motion.div 
            className="services-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="services-badge">Our Services</span>
            <h1 className="services-hero-title">
              Complete IT Solutions for
              <span className="gradient-text"> Your Business</span>
            </h1>
            <p className="services-hero-description">
              We provide end-to-end digital transformation services using cutting-edge technologies. 
              From web development to AI solutions, we've got you covered.
            </p>
            <div className="services-hero-buttons">
              <Button variant="primary" size="large" icon={<ChevronRight />} iconPosition="right">
                Explore All Services
              </Button>
              <Button variant="outline" size="large">
                Get Free Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <SectionHeader
            badge="What We Offer"
            title="Comprehensive Digital Solutions"
            description="From concept to launch, we handle everything"
            alignment="center"
          />

          <div className="services-grid-detailed">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="service-detailed-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="service-detailed-header" style={{ borderColor: service.color }}>
                  <div className="service-detailed-icon" style={{ background: service.gradient }}>
                    {service.icon}
                  </div>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.shortDesc}</p>
                  </div>
                </div>

                <div className="service-detailed-body">
                  <p className="service-description">{service.description}</p>

                  <div className="service-stats-mini">
                    <div className="service-stat">
                      <Rocket size={16} color={service.color} />
                      <span>{service.stats.projects} Projects</span>
                    </div>
                    <div className="service-stat">
                      <Users size={16} color={service.color} />
                      <span>{service.stats.clients} Clients</span>
                    </div>
                    <div className="service-stat">
                      <Award size={16} color={service.color} />
                      <span>{service.stats.satisfaction} Satisfied</span>
                    </div>
                  </div>

                  <div className="service-features-list">
                    <h4>Key Features:</h4>
                    <ul>
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx}>
                          <CheckCircle size={16} color={service.color} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-tech-tags">
                    {service.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag" style={{ background: `${service.color}20`, color: service.color }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="service-footer">
                    <div className="service-price">
                      <span className="price-label">Starting from</span>
                      <span className="price-value" style={{ color: service.color }}>{service.price}</span>
                    </div>
                    <Button variant="outline" size="small" icon={<ChevronRight size={16} />} iconPosition="right">
                      Learn More
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <SectionHeader
            badge="Our Process"
            title="How We Work"
            description="A systematic approach to deliver excellence"
            alignment="center"
          />

          <div className="process-grid">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="process-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="process-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div className="process-number">{index + 1}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <div className="container">
          <div className="why-choose-grid">
            <motion.div 
              className="why-choose-content"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-badge">Why Choose Us</span>
              <h2>We Don't Just Build, We <span className="gradient-text">Transform</span></h2>
              <p className="why-choose-description">
                With over 5 years of experience and 500+ successful projects, we have the expertise 
                to turn your ideas into reality. Our client-centric approach ensures your success is our priority.
              </p>

              <div className="why-choose-features">
                {whyChooseUs.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="why-choose-feature"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="feature-icon-wrapper" style={{ background: `linear-gradient(135deg, var(--primary), var(--secondary))` }}>
                      {item.icon}
                    </div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="why-choose-stats"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="stats-grid-why">
                <div className="stat-card-why">
                  <span className="stat-value">500+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat-card-why">
                  <span className="stat-value">100+</span>
                  <span className="stat-label">Clients</span>
                </div>
                <div className="stat-card-why">
                  <span className="stat-value">5+</span>
                  <span className="stat-label">Years</span>
                </div>
                <div className="stat-card-why">
                  <span className="stat-value">30+</span>
                  <span className="stat-label">Experts</span>
                </div>
              </div>

              <div className="testimonial-mini">
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">
                  birdtech transformed our business with their innovative solutions. 
                  Highly recommended!
                </p>
                <div className="testimonial-author">
                  <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="Client" />
                  <div>
                    <h4>Sarah Khan</h4>
                    <p>CEO, StyleHub</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies-section">
        <div className="container">
          <SectionHeader
            badge="Tech Stack"
            title="Technologies We Master"
            description="We work with modern technologies to build scalable solutions"
            alignment="center"
          />

          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="tech-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="tech-icon-large">{tech.icon}</div>
                <h4>{tech.name}</h4>
                <span className="tech-category">{tech.category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="container">
          <SectionHeader
            badge="Pricing"
            title="Flexible Pricing Plans"
            description="Choose the plan that fits your needs"
            alignment="center"
          />

          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                className={`pricing-card ${plan.recommended ? 'recommended' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {plan.recommended && <div className="recommended-badge">Most Popular</div>}
                <h3>{plan.name}</h3>
                <div className="pricing-price">
                  <span className="price">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
                <ul className="pricing-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle size={16} color={plan.recommended ? 'var(--primary)' : 'var(--text-secondary)'} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={plan.recommended ? 'primary' : 'outline'} 
                  fullWidth
                  icon={<ChevronRight size={16} />}
                  iconPosition="right"
                >
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="services-faq">
        <div className="container">
          <SectionHeader
            badge="FAQ"
            title="Frequently Asked Questions"
            description="Got questions? We've got answers"
            alignment="center"
          />

          <div className="faq-grid-services">
            {[
              {
                q: "How long does a typical project take?",
                a: "Project timelines vary based on complexity. A simple website takes 2-4 weeks, while complex web applications can take 2-3 months. We provide detailed timelines during consultation."
              },
              {
                q: "Do you provide maintenance after launch?",
                a: "Yes, we offer comprehensive maintenance packages. All projects include 30 days of free support, and we have flexible maintenance plans for ongoing support."
              },
              {
                q: "What technologies do you specialize in?",
                a: "We specialize in MERN stack, React Native, Flutter, AWS, Azure, Docker, Kubernetes, Python, TensorFlow, and many modern technologies."
              },
              {
                q: "How do you handle project pricing?",
                a: "We offer flexible pricing: fixed-price for defined projects, hourly rates for ongoing work, and dedicated team models for long-term partnerships."
              },
              {
                q: "Can you help with scaling my existing application?",
                a: "Absolutely! We specialize in scaling applications, optimizing performance, and migrating to modern architectures."
              },
              {
                q: "Do you work with startups?",
                a: "Yes, we love working with startups! We offer special packages for early-stage companies and can help you build MVP quickly."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="faq-item-services"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <h4>{faq.q}</h4>
                <p>{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta-section">
        <div className="container">
          <motion.div 
            className="services-cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Start Your Project?</h2>
            <p>Let's discuss how we can help you achieve your business goals</p>
            <div className="services-cta-buttons">
              <Button variant="primary" size="large" icon={<Rocket size={18} />}>
                Start Your Project
              </Button>
              <Button variant="outline" size="large" icon={<Headphones size={18} />}>
                Talk to Consultant
              </Button>
            </div>
            <div className="cta-contact-info">
              <span>📞 +91 90506 22065</span>
              <span>✉️ info@birdtech.com</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;