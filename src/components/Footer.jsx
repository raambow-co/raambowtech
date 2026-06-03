import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Mail, ArrowRight, MessageCircle } from 'lucide-react';
import MagneticWrapper from './MagneticWrapper';
import logo from '../assets/logo.png';

const Footer = ({ onLinkedInClick }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: 'Home', href: '#' },
      { name: 'About', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' },
    ],
    explore: [
      { name: 'Web Design', href: '#services' },
      { name: 'Web Development', href: '#services' },
      { name: 'UI/UX Design', href: '#services' },
      { name: 'Branding', href: '#services' },
      { name: 'Price Brochure', href: '#' },
    ]
  };

  const socialLinks = [
    { icon: <Linkedin size={18} />, href: '#', name: 'LinkedIn' },
    { icon: <MessageCircle size={18} />, href: 'https://wa.me/919490543499', name: 'WhatsApp' },
    { icon: <Instagram size={18} />, href: 'https://www.instagram.com/raambow_technologies/', name: 'Instagram' },
    { icon: <Mail size={18} />, href: 'mailto:raambowtech@gmail.com', name: 'Email' },
  ];

  return (
    <footer className="footer" id="contact">
      {/* Cinematic Background Glows & Floating Particles */}
      <div className="footer-glow-left"></div>
      <div className="footer-glow-right"></div>
      <div className="footer-blob-float"></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        <div className="footer-grid">
          
          {/* Brand & Narrative Column */}
          <div className="footer-column">
            <a href="#" className="logo" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <img src={logo} alt="RaamBow Logo" style={{ height: '65px', width: 'auto' }} />
              <span>
                <span style={{ color: '#113E78' }}>Raam</span>
                <span style={{ color: '#F06222' }}>Bow</span>
                <span style={{ fontWeight: '400', fontSize: '1rem', marginLeft: '0.4rem', color: 'var(--clr-text-muted)' }}>TechSolutions</span>
              </span>
            </a>
            
            <motion.h2 
              className="footer-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Let’s Build <br />
              <span className="orange-highlight">Something Amazing</span>
            </motion.h2>
            
            <p className="footer-subtitle">
              We craft fast, scalable, and visually stunning digital experiences for modern businesses.
            </p>
            
            <div className="footer-accent-line"></div>
            
            <div className="social-links">
              {socialLinks.map((social) => (
                <MagneticWrapper key={social.name} strength={0.2}>
                  <a 
                    href={social.href} 
                    className="footer-social-glass" 
                    aria-label={social.name} 
                    target={social.name === 'LinkedIn' ? undefined : "_blank"} 
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (social.name === 'LinkedIn') {
                        e.preventDefault();
                        onLinkedInClick?.();
                      }
                    }}
                  >
                    {social.icon}
                  </a>
                </MagneticWrapper>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-nav-list">
              {footerLinks.quickLinks.map((link, idx) => (
                <li key={link.name}>
                  <motion.a 
                    href={link.href} 
                    className="footer-link-premium"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Column */}
          <div className="footer-column">
            <h3>Explore</h3>
            <ul className="footer-nav-list">
              {footerLinks.explore.map((link, idx) => (
                <li key={link.name}>
                  <motion.a 
                    href={link.href} 
                    className="footer-link-premium"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch - Floating Glass Card Column */}
          <div className="footer-column">
            <h3>Get In Touch</h3>
            <motion.div 
              className="footer-contact-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="footer-card-glow-backdrop"></div>
              
              <p className="card-info-text">
                Ready to take your digital presence to the next level? Contact us and we will reply shortly.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <MagneticWrapper strength={0.15}>
                  <a href="mailto:raambowtech@gmail.com" className="footer-btn-glass btn-email-grad">
                    <Mail size={18} />
                    <span>Email Us</span>
                  </a>
                </MagneticWrapper>
                
                <MagneticWrapper strength={0.15}>
                  <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); onLinkedInClick?.(); }}
                    className="footer-btn-glass btn-linkedin-grad"
                  >
                    <Linkedin size={18} />
                    <span>LinkedIn</span>
                  </a>
                </MagneticWrapper>
                
                <MagneticWrapper strength={0.15}>
                  <a href="https://wa.me/919490543499" target="_blank" rel="noopener noreferrer" className="footer-btn-glass btn-whatsapp-grad">
                    <MessageCircle size={18} />
                    <span>WhatsApp</span>
                  </a>
                </MagneticWrapper>
                
                <MagneticWrapper strength={0.15}>
                  <a href="https://www.instagram.com/raambow_technologies/" target="_blank" rel="noopener noreferrer" className="footer-btn-glass btn-instagram-grad">
                    <Instagram size={18} />
                    <span>Instagram</span>
                  </a>
                </MagneticWrapper>
              </div>
              
              <div className="footer-card-bottom" style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <a 
                  href="mailto:raambowtech@gmail.com" 
                  style={{ color: 'inherit', textDecoration: 'none', fontWeight: '700', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.target.style.color = '#F06222'} 
                  onMouseLeave={(e) => e.target.style.color = 'inherit'}
                >
                  raambowtech@gmail.com
                </a>
                <a 
                  href="https://wa.me/919490543499" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: 'inherit', textDecoration: 'none', fontWeight: '700', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.target.style.color = '#25D366'} 
                  onMouseLeave={(e) => e.target.style.color = 'inherit'}
                >
                  +91 94905 43499
                </a>
                <div style={{ marginTop: '0.2rem', opacity: 0.8, fontSize: '0.8rem' }}>Based in Andhra Pradesh, India</div>
              </div>
            </motion.div>
          </div>

        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} RaamBow TechSolutions. All rights reserved.
          </p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
