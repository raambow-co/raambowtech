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

const clientLogos = [
  { name: 'Mirror Aqua', img: logoMirrorAqua },
  { name: 'Suhana Solar', img: logoSuhana },
  { name: 'Sushma', img: logoSushma },
  { name: 'Sri Sai Manjunadha', img: logoSriSai },
  { name: 'Mirror Solar', img: logoMirrorSolar },
  { name: 'Build Bharath', img: logoBuildBharath },
  { name: 'Srimaan Solar', img: logoSrimaan },
  { name: 'Solar 6', img: logoSolar6 }
];

const Clients = () => {
  // We duplicate the list to make the scrolling loop truly infinite
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

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
      <div className="clients-marquee-container">
        <div className="clients-marquee-fade left"></div>
        <div className="clients-marquee-track">
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
