import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../common/Button';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const handleWhatsAppClick = (e, message = "Hi! I'm interested in your services.") => {
    e.preventDefault();
    const phoneNumber = '91XXXXXXXX'; // Without + sign for WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const quickLinks = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'About Us', href: '/about', isRoute: true },
    { name: 'Services', href: '/services', isRoute: true },
    { name: 'Portfolio', href: '/portfolio', isRoute: true },
    { name: 'Courses', href: '/courses', isRoute: true },
    { name: 'Contact', href: '/contact', isRoute: true }
  ];

  const services = [
    { name: 'Web Development', href: '/services#web-dev', isRoute: true },
    { name: 'Mobile Apps', href: '/services#mobile-apps', isRoute: true },
    { name: 'Cloud & DevOps', href: '/services#cloud', isRoute: true },
    { name: 'AI/ML Solutions', href: '/services#ai-ml', isRoute: true },
    { name: 'UI/UX Design', href: '/services#ui-ux', isRoute: true },
    { name: 'Digital Marketing', href: '/services#digital-marketing', isRoute: true }
  ];

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/birdtech', label: 'GitHub' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com/birdtech', label: 'Twitter' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/company/birdtech', label: 'LinkedIn' },
    { icon: <Instagram size={20} />, href: 'https://instagram.com/birdtech', label: 'Instagram' }
  ];

  // Function to render link based on type
  const renderLink = (item) => {
    if (item.isRoute) {
      return (
        <Link 
          to={item.href} 
          className={location.pathname === item.href ? 'active' : ''}
          onClick={() => window.scrollTo(0, 0)}
        >
          {item.name}
        </Link>
      );
    }
    return <a href={item.href}>{item.name}</a>;
  };

  return (
    <footer className="footer">
      <div className="footer-gradient"></div>
      
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              {/* <motion.img 
                src="/logo.jpeg" 
                alt="birdtech" 
                className="footer-logo"
                whileHover={{ scale: 1.05 }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/150x50/6366f1/ffffff?text=birdtech';
                }}
              /> */}

              <motion.img 
  src={require('../../assets/logo.png')}
  alt="Bird Tech"
  className="footer-logo"
  whileHover={{ 
    scale: 1.08,
    rotate: -2
  }}
  transition={{
    type: "spring",
    stiffness: 300
  }}
  onError={(e) => {
    e.target.onerror = null;
    e.target.src =
      "https://via.placeholder.com/180x60/0f172a/38bdf8?text=Bird+Tech";
  }}
/>
            </Link>
            <p className="footer-description">
              Transforming businesses through innovative digital solutions since 2018. 
              We deliver excellence in every project.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {renderLink(link)}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Our Services</h3>
            <ul className="footer-links">
              {services.map((service, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {renderLink(service)}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <ul className="contact-info">
              <li className="contact-item">
                <MapPin size={18} />
                <span>Noida, India</span>
              </li>
              <li className="contact-item">
                <Phone size={18} />
                <div>
                  <motion.a 
                    href="#"
                    onClick={(e) => handleWhatsAppClick(e, "Hi! I have a question about your services.")}
                    whileHover={{ x: 5, color: '#25D366' }}
                  >
                    +91 XXXXXXXXXX (Sales)
                  </motion.a>
                  <motion.a 
                    href="#"
                    onClick={(e) => handleWhatsAppClick(e, "Hi! I need support for my project.")}
                    whileHover={{ x: 5, color: '#25D366' }}
                  >
                    +91 XXXXXXXXXX(Support)
                  </motion.a>
                </div>
              </li>
              <li className="contact-item">
                <Mail size={18} />
                <div>
                  <a href="mailto:info@birdtech.com">info@birdtech.com</a>
                  <a href="mailto:support@birdtech.com">support@birdtech.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* WhatsApp Chat Button */}
        <motion.div 
          className="whatsapp-chat-button"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.button
            onClick={(e) => handleWhatsAppClick(e, "Hi! I'd like to chat about your services.")}
            className="whatsapp-button"
            animate={{
              boxShadow: ['0 5px 15px #25D366', '0 10px 30px #25D366', '0 5px 15px #25D366']
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <MessageCircle size={30} />
            <span>Chat with us</span>
          </motion.button>
        </motion.div>

        <div className="footer-bottom">
          <p>© {currentYear} birdtech Innovations. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)}>Privacy Policy</Link>
            <span className="separator">|</span>
            <Link to="/terms-of-service" onClick={() => window.scrollTo(0, 0)}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;