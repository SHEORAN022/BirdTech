// src/components/sections/Courses.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BookOpen, 
  Clock, 
  Users, 
  Award, 
  ChevronRight, 
  Star, 
  TrendingUp,
  Code,
  Cloud,
  Smartphone,
  Brain,
  Shield,
  Zap,
  Download,
  Play,
  FileText,
  CheckCircle
} from 'lucide-react';
import Button from '../common/Button';
import SectionHeader from '../common/SectionHeader';
import './Courses.css';

const Courses = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const filters = [
    { id: 'all', label: 'All Courses' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Development' },
    { id: 'cloud', label: 'Cloud & DevOps' },
    { id: 'ai', label: 'AI & ML' },
  ];

  const courses = [
    {
      id: 1,
      title: 'Full Stack MERN Development',
      category: 'web',
      level: 'Advanced',
      duration: '3 Months',
      hours: '100+ Hours',
      price: '₹25,000',
      students: '500+',
      rating: 4.8,
      icon: <Code />,
      color: '#6366f1',
      description: 'Complete web development course covering MongoDB, Express, React, and Node.js with real projects.',
      curriculum: [
        'MongoDB Database Design',
        'Express.js REST APIs',
        'React.js Frontend Development',
        'Node.js Backend Development',
        'Authentication & Authorization',
        'Payment Gateway Integration',
        'Deployment & DevOps',
        'Real-time Applications with Socket.io'
      ],
      projects: [
        'E-commerce Platform',
        'Social Media App',
        'Real-time Chat Application',
        'Portfolio Website'
      ],
      instructor: {
        name: 'Rahul Sharma',
        role: 'Senior Full Stack Developer',
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        experience: '8+ years'
      },
      features: [
        'Live Interactive Sessions',
        '24/7 Doubt Support',
        'Industry Projects',
        'Certificate of Completion',
        'Job Assistance',
        'Interview Preparation'
      ]
    },
    {
      id: 2,
      title: 'Mobile App Development',
      category: 'mobile',
      level: 'Intermediate',
      duration: '2.5 Months',
      hours: '80 Hours',
      price: '₹20,000',
      students: '300+',
      rating: 4.7,
      icon: <Smartphone />,
      color: '#ec4899',
      description: 'Learn React Native and Flutter to build cross-platform mobile applications for iOS and Android.',
      curriculum: [
        'React Native Fundamentals',
        'Flutter & Dart Basics',
        'UI/UX for Mobile',
        'State Management',
        'API Integration',
        'Push Notifications',
        'App Store Deployment',
        'Performance Optimization'
      ],
      projects: [
        'Fitness Tracker App',
        'Food Delivery App',
        'Social Media App',
        'E-commerce Mobile App'
      ],
      instructor: {
        name: 'Priya Patel',
        role: 'Mobile Development Expert',
        image: 'https://randomuser.me/api/portraits/women/2.jpg',
        experience: '6+ years'
      },
      features: [
        'Live Interactive Sessions',
        '24/7 Doubt Support',
        'Industry Projects',
        'Certificate of Completion',
        'Job Assistance',
        'App Store Optimization'
      ]
    },
    {
      id: 3,
      title: 'Cloud & DevOps Mastery',
      category: 'cloud',
      level: 'Advanced',
      duration: '3 Months',
      hours: '120 Hours',
      price: '₹30,000',
      students: '200+',
      rating: 4.9,
      icon: <Cloud />,
      color: '#06b6d4',
      description: 'Master AWS, Docker, Kubernetes, and CI/CD pipelines for scalable infrastructure and deployment.',
      curriculum: [
        'AWS Cloud Architecture',
        'Docker Containerization',
        'Kubernetes Orchestration',
        'CI/CD Pipeline Setup',
        'Infrastructure as Code',
        'Monitoring & Logging',
        'Security Best Practices',
        'Multi-cloud Strategies'
      ],
      projects: [
        'Microservices Deployment',
        'Serverless Applications',
        'Kubernetes Cluster Setup',
        'CI/CD Pipeline Implementation'
      ],
      instructor: {
        name: 'Amit Kumar',
        role: 'Cloud Architect',
        image: 'https://randomuser.me/api/portraits/men/3.jpg',
        experience: '10+ years'
      },
      features: [
        'Live Interactive Sessions',
        '24/7 Doubt Support',
        'Industry Projects',
        'Certificate of Completion',
        'Job Assistance',
        'AWS Certification Prep'
      ]
    },
    {
      id: 4,
      title: 'AI & Machine Learning',
      category: 'ai',
      level: 'Advanced',
      duration: '4 Months',
      hours: '150 Hours',
      price: '₹35,000',
      students: '150+',
      rating: 4.9,
      icon: <Brain />,
      color: '#f59e0b',
      description: 'Learn Python, TensorFlow, and PyTorch to build intelligent AI/ML models and applications.',
      curriculum: [
        'Python Programming',
        'NumPy & Pandas',
        'Data Visualization',
        'Machine Learning Algorithms',
        'Deep Learning with TensorFlow',
        'PyTorch Fundamentals',
        'Computer Vision',
        'NLP & LLMs'
      ],
      projects: [
        'Image Classification',
        'Sentiment Analysis',
        'Recommendation System',
        'Chatbot Development'
      ],
      instructor: {
        name: 'Dr. Neha Singh',
        role: 'AI Research Scientist',
        image: 'https://randomuser.me/api/portraits/women/4.jpg',
        experience: '12+ years'
      },
      features: [
        'Live Interactive Sessions',
        '24/7 Doubt Support',
        'Industry Projects',
        'Certificate of Completion',
        'Job Assistance',
        'Research Paper Writing'
      ]
    },
    {
      id: 5,
      title: 'Cybersecurity Fundamentals',
      category: 'web',
      level: 'Intermediate',
      duration: '2 Months',
      hours: '60 Hours',
      price: '₹15,000',
      students: '180+',
      rating: 4.6,
      icon: <Shield />,
      color: '#10b981',
      description: 'Learn essential cybersecurity concepts, ethical hacking, and security best practices.',
      curriculum: [
        'Network Security',
        'Ethical Hacking',
        'Penetration Testing',
        'Cryptography',
        'Web Security',
        'Incident Response',
        'Security Compliance',
        'Risk Management'
      ],
      projects: [
        'Vulnerability Assessment',
        'Security Audit Report',
        'Penetration Testing Lab',
        'Security Policy Document'
      ],
      instructor: {
        name: 'Vikram Singh',
        role: 'Security Consultant',
        image: 'https://randomuser.me/api/portraits/men/5.jpg',
        experience: '9+ years'
      },
      features: [
        'Live Interactive Sessions',
        '24/7 Doubt Support',
        'Hands-on Labs',
        'Certificate of Completion',
        'Job Assistance',
        'CEH Certification Prep'
      ]
    },
    {
      id: 6,
      title: 'DevOps with Kubernetes',
      category: 'cloud',
      level: 'Advanced',
      duration: '2.5 Months',
      hours: '90 Hours',
      price: '₹28,000',
      students: '120+',
      rating: 4.8,
      icon: <Zap />,
      color: '#8b5cf6',
      description: 'Deep dive into Kubernetes orchestration and advanced DevOps practices.',
      curriculum: [
        'Kubernetes Architecture',
        'Pods & Services',
        'ConfigMaps & Secrets',
        'Ingress Controllers',
        'Helm Charts',
        'Service Mesh',
        'Kubernetes Security',
        'Monitoring with Prometheus'
      ],
      projects: [
        'Microservices on K8s',
        'CI/CD with Jenkins & K8s',
        'Service Mesh Implementation',
        'Monitoring Stack Setup'
      ],
      instructor: {
        name: 'Rajesh Kumar',
        role: 'DevOps Engineer',
        image: 'https://randomuser.me/api/portraits/men/6.jpg',
        experience: '7+ years'
      },
      features: [
        'Live Interactive Sessions',
        '24/7 Doubt Support',
        'Industry Projects',
        'Certificate of Completion',
        'Job Assistance',
        'CKA Certification Prep'
      ]
    }
  ];

  const filteredCourses = activeFilter === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="courses" id="courses" ref={ref}>
      <div className="courses-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="pattern-grid"></div>
      </div>

      <div className="container">
        <SectionHeader
          badge="Our Courses"
          title="Professional IT Training Programs"
          description="Learn in-demand skills with our industry-focused training programs"
          alignment="center"
        />

        {/* Filters */}
        <motion.div 
          className="course-filters"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Courses Grid */}
        <motion.div 
          className="courses-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedCourse(course)}
              className="course-card-wrapper"
            >
              <div className="course-card" style={{ borderColor: course.color }}>
                <div className="course-header" style={{ background: `linear-gradient(135deg, ${course.color}20, transparent)` }}>
                  <div className="course-icon" style={{ background: course.color }}>
                    {course.icon}
                  </div>
                  <div className="course-badge">{course.level}</div>
                </div>

                <div className="course-body">
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-description">{course.description}</p>

                  <div className="course-meta">
                    <div className="meta-item">
                      <Clock size={16} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="meta-item">
                      <BookOpen size={16} />
                      <span>{course.hours}</span>
                    </div>
                    <div className="meta-item">
                      <Users size={16} />
                      <span>{course.students}</span>
                    </div>
                  </div>

                  <div className="course-rating">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill={i < Math.floor(course.rating) ? course.color : 'none'}
                          color={course.color}
                        />
                      ))}
                    </div>
                    <span className="rating-text">{course.rating} (120+ reviews)</span>
                  </div>

                  <div className="course-footer">
                    <div className="course-price">
                      <span className="price">{course.price}</span>
                      <span className="price-label">Full Course</span>
                    </div>
                    <Button 
                      variant="outline" 
                      size="small"
                      icon={<ChevronRight size={16} />}
                      iconPosition="right"
                    >
                      Enroll Now
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div 
          className="view-all-courses"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button variant="primary" size="large" icon={<ChevronRight />} iconPosition="right">
            View All Courses
          </Button>
        </motion.div>
      </div>

      {/* Course Detail Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div 
            className="course-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCourse(null)}
          >
            <motion.div 
              className="course-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedCourse(null)}>×</button>

              <div className="modal-header" style={{ background: `linear-gradient(135deg, ${selectedCourse.color}20, transparent)` }}>
                <div className="modal-icon" style={{ background: selectedCourse.color }}>
                  {selectedCourse.icon}
                </div>
                <div>
                  <h2>{selectedCourse.title}</h2>
                  <div className="modal-meta">
                    <span><Clock size={16} /> {selectedCourse.duration}</span>
                    <span><BookOpen size={16} /> {selectedCourse.hours}</span>
                    <span><Users size={16} /> {selectedCourse.students} Students</span>
                  </div>
                </div>
              </div>

              <div className="modal-content">
                <div className="modal-section">
                  <h3>About This Course</h3>
                  <p>{selectedCourse.description}</p>
                </div>

                <div className="modal-section">
                  <h3>What You'll Learn</h3>
                  <div className="curriculum-list">
                    {selectedCourse.curriculum.map((item, index) => (
                      <div key={index} className="curriculum-item">
                        <CheckCircle size={18} color={selectedCourse.color} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="modal-section">
                  <h3>Hands-on Projects</h3>
                  <div className="projects-list">
                    {selectedCourse.projects.map((project, index) => (
                      <div key={index} className="project-item">
                        <div className="project-icon">
                          <FileText size={16} />
                        </div>
                        <span>{project}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="modal-section">
                  <h3>Course Features</h3>
                  <div className="features-grid">
                    {selectedCourse.features.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <CheckCircle size={16} color={selectedCourse.color} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="modal-section">
                  <h3>Your Instructor</h3>
                  <div className="instructor-info">
                    <img src={selectedCourse.instructor.image} alt={selectedCourse.instructor.name} />
                    <div>
                      <h4>{selectedCourse.instructor.name}</h4>
                      <p>{selectedCourse.instructor.role}</p>
                      <p className="experience">Experience: {selectedCourse.instructor.experience}</p>
                    </div>
                  </div>
                </div>

                <div className="modal-pricing">
                  <div className="price-details">
                    <span className="price-label">Course Fee</span>
                    <span className="price-amount">{selectedCourse.price}</span>
                    <span className="price-note">Includes all materials & certificate</span>
                  </div>
                  <Button variant="primary" size="large" fullWidth>
                    Enroll Now
                  </Button>
                  <Button variant="outline" size="large" fullWidth icon={<Download size={18} />}>
                    Download Syllabus
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Courses;