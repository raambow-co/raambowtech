import React, { useState, useEffect } from 'react';
import './StaggeredMenu.css';
import MagneticWrapper from './MagneticWrapper';
import logo from '../assets/logo.png';

export const StaggeredMenu = ({
  isFixed = true,
  accentColor = '#930500'
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`staggered-menu-wrapper ${isFixed ? 'fixed-wrapper' : ''}`}
      style={accentColor ? { '--sm-accent': accentColor } : undefined}
      data-scrolled={isScrolled}
    >
      <header className="staggered-menu-header" aria-label="Main navigation header">
        <div className="sm-logo">
           <MagneticWrapper strength={0.1}>
            <a href="#" className="sm-logo-text">
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
             <a href="#services" className="btn btn-primary nav-cta">Services</a>
           </MagneticWrapper>
        </div>
      </header>
    </div>
  );
};

export default StaggeredMenu;
