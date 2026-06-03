import React, { useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

/**
 * Magnetic component: Pulls children toward the cursor when nearby.
 */
const MagneticWrapper = ({ children, strength = 0.35, triggerPadding = 20 }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for premium 'soft' movement
  const springConfig = { damping: 20, stiffness: 150, mass: 0.6 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Calculate center point of the trigger area
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Distance from center to mouse
    const distX = clientX - centerX;
    const distY = clientY - centerY;
    
    // Interaction: Magnetic pull
    x.set(distX * strength);
    y.set(distY * strength);
  };

  const handleMouseLeave = () => {
    // Reset to center smoothly
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        position: 'relative', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: `${triggerPadding}px`,
        margin: `-${triggerPadding}px`,
        zIndex: 10
      }}
    >
      <motion.div style={{ x: springX, y: springY, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {children}
      </motion.div>
    </div>
  );
};

export default MagneticWrapper;
