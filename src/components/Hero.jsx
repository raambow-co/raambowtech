import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import MagneticWrapper from './MagneticWrapper';
import Hero3DBackground from './Hero3DBackground';

const Hero = ({ onContactClick }) => {
  // 1. All Hooks at the top
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const parallaxX = useMotionValue(0);
  const parallaxY = useMotionValue(0);
  const [isGlowVisible, setIsGlowVisible] = useState(false);

  const springConfig = { damping: 25, stiffness: 100 };
  const glowSpringConfig = { damping: 40, stiffness: 60 };

  const springGlowX = useSpring(glowX, glowSpringConfig);
  const springGlowY = useSpring(glowY, glowSpringConfig);
  const mouseX = useSpring(parallaxX, springConfig);
  const mouseY = useSpring(parallaxY, springConfig);

  const shape1X = useTransform(mouseX, [-0.5, 0.5], [50, -50]);
  const shape1Y = useTransform(mouseY, [-0.5, 0.5], [50, -50]);
  const shape2X = useTransform(mouseX, [-0.5, 0.5], [-60, 60]);
  const shape2Y = useTransform(mouseY, [-0.5, 0.5], [-60, 60]);

  const handleMouseMove = (e) => {
    // Parallax logic
    const normX = (e.clientX / window.innerWidth) - 0.5;
    const normY = (e.clientY / window.innerHeight) - 0.5;
    parallaxX.set(normX);
    parallaxY.set(normY);

    // Glow logic (centered)
    glowX.set(e.clientX - 350); // Centered on 700px width
    glowY.set(e.clientY - 350); // Centered on 700px height
  };

  return (
    <header 
      className="hero" 
      id="home"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsGlowVisible(true)}
      onMouseLeave={() => setIsGlowVisible(false)}
    >
      {/* Subtle Ambient Cursor Glow */}
      <motion.div 
        className="hero-cursor-glow"
        style={{ 
          x: springGlowX, 
          y: springGlowY,
          opacity: isGlowVisible ? 1 : 0
        }}
        transition={{ opacity: { duration: 0.8 } }}
      />

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        <Hero3DBackground />
      </motion.div>

      <div className="container hero-container">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Modern solutions.<br/><span className="text-glow">Clean execution.</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Building fast, modern, and scalable web experiences for startups and businesses worldwide.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <MagneticWrapper strength={0.15}>
              <motion.button 
                onClick={onContactClick}
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk
              </motion.button>
            </MagneticWrapper>

            <MagneticWrapper strength={0.15}>
              <motion.a 
                href="#workflow" 
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Approach
              </motion.a>
            </MagneticWrapper>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
