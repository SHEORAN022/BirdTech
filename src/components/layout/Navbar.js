// // src/components/layout/Navbar.js (Fixed with correct logo import)
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';
// import Button from '../common/Button';
// import './Navbar.css';

// // Import logo
// import logoImage from '../../assets/lofo-removebg-preview.png';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'About Us', path: '/about' },
//     { name: 'Services', path: '/services' },
//     { name: 'Courses', path: '/courses' },
//     { name: 'Contact', path: '/contact' }
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close mobile menu when route changes
//   useEffect(() => {
//     setIsOpen(false);
//   }, [location]);

//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isOpen]);

//   return (
//     <>
//       <motion.nav 
//         className={`navbar ${scrolled ? 'scrolled' : ''}`}
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="nav-container">
//           <motion.div 
//             className="logo-container"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Link to="/">
//               <img src={logoImage} alt="birdtech" className="logo" />
//             </Link>
//           </motion.div>

//           {/* Desktop Navigation */}
//           <div className="nav-links-desktop">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           <div className="nav-buttons">
//             <Button variant="outline" size="small">Call Now</Button>
//             <Button variant="primary" size="small">Get Started</Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <motion.button 
//             className="mobile-menu-btn"
//             onClick={() => setIsOpen(true)}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             aria-label="Toggle menu"
//           >
//             <Menu size={24} />
//           </motion.button>
//         </div>
//       </motion.nav>

//       {/* Mobile Menu Overlay */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div 
//             className="mobile-menu-overlay"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setIsOpen(false)}
//           >
//             <motion.div 
//               className="mobile-menu"
//               initial={{ x: '100%' }}
//               animate={{ x: 0 }}
//               exit={{ x: '100%' }}
//               transition={{ type: 'spring', damping: 25, stiffness: 200 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="mobile-menu-header">
//                 <Link to="/" onClick={() => setIsOpen(false)}>
//                   <img src={logoImage} alt="birdtech" className="logo" />
//                 </Link>
//                 <motion.button 
//                   className="close-btn"
//                   onClick={() => setIsOpen(false)}
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   aria-label="Close menu"
//                 >
//                   <X size={24} />
//                 </motion.button>
//               </div>

//               <div className="mobile-nav-links">
//                 {navLinks.map((link, index) => (
//                   <motion.div
//                     key={link.path}
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                   >
//                     <Link
//                       to={link.path}
//                       className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
//                       onClick={() => setIsOpen(false)}
//                     >
//                       {link.name}
//                     </Link>
//                   </motion.div>
//                 ))}
//               </div>

//               <div className="mobile-menu-buttons">
//                 <Button variant="outline" fullWidth>Call Now</Button>
//                 <Button variant="primary" fullWidth>Get Started</Button>
//               </div>

//               <div className="mobile-menu-footer">
//                 <p>© 2026 birdtech</p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;
// src/components/layout/Navbar.js (Fixed with correct logo import and call functionality)
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Button from '../common/Button';
import './Navbar.css';

// Import logo
import logoImage from '../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Courses', path: '/courses' },
    { name: 'Contact', path: '/contact' }
  ];

  // Phone number constant
  const phoneNumber = '+91XXXXXXXXXX';

  // Function to handle call
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  // Function to handle WhatsApp (for Get Started)
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in your services. Can we discuss?");
    window.open(`https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav 
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="nav-container">
          <motion.div 
            className="logo-container"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={logoImage} alt="birdtech" className="logo" />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="nav-links-desktop">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={() => window.scrollTo(0, 0)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="nav-buttons">
            <Button 
              variant="outline" 
              size="small"
              onClick={handleCall}
              icon={<Phone size={16} />}
            >
              Call Now
            </Button>
            <Button 
              variant="primary" 
              size="small"
              onClick={handleWhatsApp}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="mobile-menu-btn"
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div 
              className="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mobile-menu-header">
                <Link to="/" onClick={() => {
                  setIsOpen(false);
                  window.scrollTo(0, 0);
                }}>
                  <img src={logoImage} alt="birdtech" className="logo" />
                </Link>
                <motion.button 
                  className="close-btn"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </motion.button>
              </div>

              <div className="mobile-nav-links">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                      onClick={() => {
                        setIsOpen(false);
                        window.scrollTo(0, 0);
                      }}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mobile-menu-buttons">
                <Button 
                  variant="outline" 
                  fullWidth
                  onClick={handleCall}
                  icon={<Phone size={16} />}
                >
                  Call Now
                </Button>
                <Button 
                  variant="primary" 
                  fullWidth
                  onClick={handleWhatsApp}
                >
                  Get Started
                </Button>
              </div>

              <div className="mobile-menu-footer">
                <p>© 2026 birdtech</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;