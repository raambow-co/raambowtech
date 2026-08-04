import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './StaggeredMenu.css';
import MagneticWrapper from './MagneticWrapper';
import logo from '../assets/logo.png';

export const StaggeredMenu = ({
  isFixed = true,
  accentColor = '#930500',
  onContactClick
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', link: '#home' },
    { label: 'About us', link: '#about' },
    { label: 'Our works', link: '#projects' },
    { label: 'What we do', link: '#services' },
    { label: 'Our team', link: '#team' },
    { label: 'Contact', action: 'contact' }
  ];

  const handleLinkClick = (item, e) => {
    e.preventDefault();
    setIsOpen(false);
    if (item.action === 'contact') {
      if (onContactClick) onContactClick();
    } else if (item.link) {
      if (item.link === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        document.querySelector(item.link)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div
      className={`staggered-menu-wrapper ${isFixed ? 'fixed-wrapper' : ''}`}
      style={accentColor ? { '--sm-accent': accentColor } : undefined}
      data-scrolled={isScrolled}
    >
      <header className="staggered-menu-header" aria-label="Main navigation header">
        <div className="sm-logo">
           <MagneticWrapper strength={0.1}>
            <a href="#" className="sm-logo-text" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                <img src={logo} alt="RaamBow Logo" />
                <span>
                  <span style={{ color: '#113E78' }}>Raam</span>
                  <span style={{ color: '#F06222' }}>Bow</span>
                  <span className="sm-logo-subtext">TechSolutions</span>
                </span>
            </a>
           </MagneticWrapper>
        </div>

        <div className="sm-actions">
           <MagneticWrapper strength={0.15}>
             <button 
               className="btn btn-primary" 
               style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.2rem', borderRadius: '50px' }}
               onClick={() => setIsOpen(!isOpen)}
             >
               {isOpen ? <X size={20} /> : <Menu size={20} />}
               <span className="desktop-only">{isOpen ? 'Close' : 'Menu'}</span>
             </button>
           </MagneticWrapper>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="staggered-menu-panel"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{ 
              position: 'fixed', top: 0, right: 0, width: 'clamp(300px, 100vw, 500px)', height: '100vh', 
              background: 'rgba(17, 24, 39, 0.95)', // Deep dark blue background
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              zIndex: 15, 
              borderLeft: '1px solid rgba(255, 255, 255, 0.05)',
              display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '4rem 3rem'
            }}
          >
            {/* Ambient glows inside menu */}
            <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', background: 'rgba(147, 5, 0, 0.2)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-100px', left: '-100px', width: '300px', height: '300px', background: 'rgba(240, 98, 34, 0.1)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }} />

            <ul className="sm-panel-list" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', listStyle: 'none', padding: 0, zIndex: 1 }}>
              {menuItems.map((item, i) => (
                <motion.li 
                  key={item.label}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ delay: i * 0.1, type: 'spring', damping: 20 }}
                  className="sm-panel-itemWrap"
                  whileHover={{ x: 10 }}
                >
                  <a 
                    href={item.link || '#'} 
                    onClick={(e) => handleLinkClick(item, e)}
                    className="sm-panel-item"
                    style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', textDecoration: 'none', textTransform: 'uppercase', transition: 'color 0.3s' }}
                    onMouseOver={(e) => e.target.style.color = '#F06222'}
                    onMouseOut={(e) => e.target.style.color = '#ffffff'}
                  >
                    <span className="sm-panel-itemLabel" style={{ pointerEvents: 'none' }}>{item.label}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StaggeredMenu;
