import React from 'react';
import { motion } from 'framer-motion';
import logoMirrorAqua from '../assets/client_mirroraqua.png';
import logoSuhana from '../assets/client_suhana.jpg';
import logoSushma from '../assets/client_sushma.jpg';
import logoSriSai from '../assets/client_srisai.jpg';
import logoMirrorSolar from '../assets/client_mirrorsolar.png';
import logoBuildBharath from '../assets/client_buildbharath.png';
import logoSrimaan from '../assets/client_srimaan.jpeg';
import logoSolar6 from '../assets/client_solar6.jpeg';
import logoJayarams from '../assets/jayarams-emblem-alpha.png';

const clientLogos = [
  { name: 'Mirror Aqua', img: logoMirrorAqua },
  { name: 'Suhana Solar', img: logoSuhana },
  { name: 'Sushma', img: logoSushma },
  { name: 'Sri Sai Manjunadha', img: logoSriSai },
  { name: 'Mirror Solar', img: logoMirrorSolar },
  { name: 'Build Bharath', img: logoBuildBharath },
  { name: 'Srimaan Solar', img: logoSrimaan },
  { name: 'Solar 6', img: logoSolar6 },
  { name: 'Jayarams Bharat', img: logoJayarams }
];

const Clients = () => {
  const marqueeRef = React.useRef(null);
  let animationRef = React.useRef(null);
  const isDragging = React.useRef(false);
  const startX = React.useRef(0);
  const scrollLeft = React.useRef(0);
  
  // We duplicate the list to make the scrolling loop truly infinite
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

  React.useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const scroll = () => {
      if (!isDragging.current) {
        marquee.scrollLeft += 1.5; // Adjust speed here, 1.5 is pretty fast
        if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
          marquee.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(scroll);
    };
    
    animationRef.current = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - marqueeRef.current.offsetLeft;
    scrollLeft.current = marqueeRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - marqueeRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // Scroll-fast
    marqueeRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX - marqueeRef.current.offsetLeft;
    scrollLeft.current = marqueeRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const x = e.touches[0].pageX - marqueeRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    marqueeRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  return (
    <section className="clients section bg-darker" id="clients" style={{ borderTop: '1px solid rgba(147, 5, 0, 0.04)' }}>
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Trusted by</h2>
          <p>We partner with ambitious teams to deliver exceptional digital platforms.</p>
        </motion.div>
      </div>

      {/* Infinite Horizontal Auto-Scrolling Marquee Wrapper */}
      <div 
        className="clients-marquee-container"
        ref={marqueeRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="clients-marquee-fade left"></div>
        <div className="clients-marquee-track custom-marquee">
          {duplicatedLogos.map((logo, idx) => (
            <div className="client-logo-card glass-card" key={`${logo.name}-${idx}`}>
              {logo.img ? (
                <img 
                  src={logo.img} 
                  alt={logo.name} 
                  className="client-logo-img" 
                  style={{ 
                    maxWidth: '100%', 
                    maxHeight: '100%', 
                    objectFit: 'contain',
                    mixBlendMode: 'multiply',
                    ...(logo.name === 'Solar 6' ? {
                      borderRadius: '50%',
                      width: '80px',
                      height: '80px',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      mixBlendMode: 'normal',
                    } : {})
                  }} 
                  draggable="false"
                />
              ) : (
                <div className="client-text-logo">
                  <span className="client-text-badge">{logo.name}</span>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="clients-marquee-fade right"></div>
      </div>
    </section>
  );
};

export default Clients;
