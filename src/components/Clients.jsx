import React from 'react';
import { motion } from 'framer-motion';
import logoSriSai from '../assets/client_srisai.jpg';
import logoSuhana from '../assets/client_suhana.jpg';
import logoMA from '../assets/client_ma.png';
import logoMSV from '../assets/client_msv.png';
import logoSushma from '../assets/client_sushma.jpg';

const clientLogos = [
  { name: 'Sri Sai Manjunadha Enterprises', img: logoSriSai },
  { name: 'Suhana Natural Power Systems', img: logoSuhana },
  { name: 'MA Group', img: logoMA },
  { name: 'MSV Group', img: logoMSV },
  { name: 'Sushma Boutique', img: logoSushma }
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
          <h2>Trusted by Innovators</h2>
          <p>We partner with ambitious teams to deliver exceptional digital platforms.</p>
        </motion.div>
      </div>

      {/* Infinite Horizontal Auto-Scrolling Marquee Wrapper */}
      <div className="clients-marquee-container">
        <div className="clients-marquee-fade left"></div>
        <div className="clients-marquee-track">
          {duplicatedLogos.map((logo, idx) => (
            <div className="client-logo-card glass-card" key={`${logo.name}-${idx}`}>
              <img 
                src={logo.img} 
                alt={logo.name} 
                className="client-logo-img" 
                style={{ 
                  maxWidth: '100%', 
                  maxHeight: '100%', 
                  objectFit: 'contain',
                  mixBlendMode: 'multiply' 
                }} 
              />
            </div>
          ))}
        </div>
        <div className="clients-marquee-fade right"></div>
      </div>
    </section>
  );
};

export default Clients;
