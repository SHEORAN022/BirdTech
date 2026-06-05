// src/components/sections/Contact.js (Fixed with all imports)
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock, 
  Users,
  Globe,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Linkedin,
  Twitter,
  Github,
  Instagram,
  ChevronRight
} from 'lucide-react';
import Button from '../common/Button';
import SectionHeader from '../common/SectionHeader';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const [activeFaq, setActiveFaq] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for contacting us! We\'ll get back to you within 24 hours.'
    });
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: ''
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        budget: '',
        timeline: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone />,
      title: 'Phone',
      details: ['+91 XXXXXXXXXX', '+91 XXXXXXXXXX'],
      action: 'Call us now',
      link: 'tel:+91XXXXXXXXXX',
      color: '#6366f1'
    },
    {
      icon: <Mail />,
      title: 'Email',
      details: ['info@birdtech.com', 'support@birdtech.com'],
      action: 'Send email',
      link: 'mailto:info@birdtech.com',
      color: '#ec4899'
    },
    {
      icon: <MapPin />,
      title: 'Office',
      details: ['Noida, India', ],
      action: 'Get directions',
      link: 'https://maps.google.com',
      color: '#06b6d4'
    },
    {
      icon: <Clock />,
      title: 'Working Hours',
      details: ['Mon - Fri: 9:00 - 18:00', 'Sat: 10:00 - 16:00'],
      action: '24/7 Support',
      link: '#',
      color: '#f59e0b'
    }
  ];

  const services = [
    'Web Development',
    'Mobile Development',
    'Cloud & DevOps',
    'AI/ML Solutions',
    'UI/UX Design',
    'Digital Marketing'
  ];

  const faqs = [
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity. A typical website takes 4-6 weeks, mobile apps 8-12 weeks, and enterprise solutions 12-16 weeks. We provide detailed timelines during consultation.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer comprehensive maintenance and support packages. All projects include 30 days of free support, with extended support plans available.'
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in MERN stack, React Native, Flutter, AWS, Azure, Docker, Kubernetes, Python, TensorFlow, and many modern technologies.'
    },
    {
      question: 'How do you handle project pricing?',
      answer: 'We offer flexible pricing models: fixed-price for defined projects, hourly rates for ongoing work, and dedicated team models for long-term partnerships.'
    }
  ];

  const socialLinks = [
    { icon: <Linkedin />, name: 'LinkedIn', url: 'https://linkedin.com/company/birdtech', color: '#0077b5' },
    { icon: <Twitter />, name: 'Twitter', url: 'https://twitter.com/birdtech', color: '#1da1f2' },
    { icon: <Github />, name: 'GitHub', url: 'https://github.com/birdtech', color: '#333' },
    { icon: <Instagram />, name: 'Instagram', url: 'https://instagram.com/birdtech', color: '#e4405f' }
  ];

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="contact-background">
        <div className="gradient-sphere"></div>
        <div className="pattern-dots"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="container">
        <SectionHeader
          badge="Get In Touch"
          title="Let's Discuss Your Project"
          description="Ready to transform your business? We're just a message away."
          alignment="center"
        />

        <div className="contact-grid">
          {/* Contact Information */}
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3>We'd love to hear from you</h3>
            <p className="contact-description">
              Whether you have a question about our services, pricing, or anything else, 
              our team is ready to answer all your questions.
            </p>

            <div className="info-cards">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  className="info-card"
                  whileHover={{ y: -5, x: 5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="info-icon" style={{ background: `${info.color}20`, color: info.color }}>
                    {info.icon}
                  </div>
                  <div className="info-content">
                    <h4>{info.title}</h4>
                    {info.details.map((detail, i) => (
                      <p key={i}>{detail}</p>
                    ))}
                    <span className="info-action">
                      {info.action} <ChevronRight size={14} />
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="social-section">
              <h4>Connect With Us</h4>
              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-card"
                    style={{ '--social-color': social.color }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="social-icon">{social.icon}</div>
                    <span>{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="stats-mini">
              <div className="stat-mini">
                <Users size={20} />
                <div>
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
              </div>
              <div className="stat-mini">
                <Globe size={20} />
                <div>
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Countries</span>
                </div>
              </div>
              <div className="stat-mini">
                <MessageSquare size={20} />
                <div>
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Support</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="form-header">
              <h3>Send us a message</h3>
              <p>We'll get back to you within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interested In *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="budget">Budget Range</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Select budget range</option>
                    <option value="< ₹5L">Less than ₹5 Lakhs</option>
                    <option value="₹5L - ₹10L">₹5 Lakhs - ₹10 Lakhs</option>
                    <option value="₹10L - ₹25L">₹10 Lakhs - ₹25 Lakhs</option>
                    <option value="> ₹25L">More than ₹25 Lakhs</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="timeline">Project Timeline</label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                  >
                    <option value="">Select timeline</option>
                    <option value="< 1 month">Less than 1 month</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="> 6 months">More than 6 months</option>
                  </select>
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <div className="form-footer">
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="large"
                  icon={<Send size={18} />}
                  iconPosition="right"
                  disabled={formStatus.submitted}
                  fullWidth
                >
                  {formStatus.submitted ? 'Sending...' : 'Send Message'}
                </Button>

                <p className="form-note">
                  By submitting, you agree to our <a href="#privacy">Privacy Policy</a>
                </p>
              </div>

              {/* Form Status Message */}
              <AnimatePresence>
                {formStatus.message && (
                  <motion.div 
                    className={`form-status ${formStatus.success ? 'success' : 'error'}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    {formStatus.success ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                    <span>{formStatus.message}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h3 className="faq-title">Frequently Asked Questions</h3>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <div 
                  className="faq-question"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <h4>{faq.question}</h4>
                  <span className="faq-icon">{activeFaq === index ? '−' : '+'}</span>
                </div>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div 
                      className="faq-answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        {/* <motion.div 
          className="map-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="map-container">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13720.921835678982!2d76.763575!3d30.733319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sNoida!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              title="Bird Tech Office Location"
            ></iframe>
            <div className="map-overlay">
              <div className="map-pin">
                <MapPin size={24} />
                <span>Bird Tech</span>
              </div>
            </div>
          </div>
        </motion.div> */}
        <motion.div 
  className="map-section"
  initial={{ opacity: 0, y: 30 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.5, delay: 0.8 }}
>
  <div className="map-container">
    <iframe
      title="Bird Tech Office Location"
      src="https://www.google.com/maps?q=Noida,+Uttar+Pradesh,+India&output=embed"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      style={{
        width: "100%",
        height: "450px",
        border: "0",
        borderRadius: "20px"
      }}
    ></iframe>

    <div className="map-overlay">
      <div className="map-pin">
        <MapPin size={24} />
        <span>Bird Tech - Noida Office</span>
      </div>
    </div>
  </div>
</motion.div>
      </div>
    </section>
  );
};

export default Contact;