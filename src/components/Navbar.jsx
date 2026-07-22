import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import MagneticWrapper from './MagneticWrapper';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Tech Stack', href: '#stack' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-wrapper">
        <MagneticWrapper strength={0.1}>
          <a href="#" className="logo" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
            <img src={logo} alt="RaamBow Logo" style={{ height: '35px', width: 'auto' }} />
            <span><span style={{ color: '#113E78' }}>Raam</span><span style={{ color: '#F06222' }}>Bow</span><span style={{ fontWeight: '400', fontSize: '0.9rem', marginLeft: '0.3rem', color: 'var(--clr-text-muted)' }}>TechSolutions</span></span>
          </a>
        </MagneticWrapper>

        {/* Desktop Links */}
        <ul className="nav-links desktop-only">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        <div className="nav-actions desktop-only">
          <MagneticWrapper strength={0.15}>
            <a href="#contact" className="btn btn-primary nav-cta">Let's Talk</a>
          </MagneticWrapper>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="menu-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={() => setIsMobileMenuOpen(false)}>{link.name}</a>
                </li>
              ))}
              <li>
                <a href="#contact" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>Let's Talk</a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default Navbar;
