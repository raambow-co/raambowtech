import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Laptop, Palette, Layers, Gauge, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import MagneticWrapper from './MagneticWrapper';
import founder1 from '../assets/founder_1.jpg';
import founder2 from '../assets/founder_2.jpg';
import alisha from '../assets/alisha.jpeg';
import logoImg from '../assets/logo.png';
import kheerthanaImg from '../assets/Kheerthana Nambu.jpeg';
import kesavanImg from '../assets/Kesavan P.jpeg';
import manaswiniImg from '../assets/Manaswini I.jpeg';
import charanImg from '../assets/Charan J.jpeg';
import tejaImg from '../assets/teja.jpeg';

const About = () => {
  const checklist = [
    "Agile & Flexible Workflow",
    "Direct Client Communication",
    "Mobile-First Approach"
  ];

  const founders = [
    { name: "Yuvan Datti", role: "CTO & MD", degree: "B.Tech (CSE)", img: founder1, objectPosition: "center 15%", accent: true },
    { name: "Aditya Sai Nandyala", role: "CEO & Founder", degree: "B.Tech (CSE)", img: founder2, objectPosition: "center 20%", accent: true },
    { name: "Alisha Ahmad", role: "Digital Marketing Head", degree: "B.Tech (CSE)", img: alisha, objectPosition: "center 20%", accent: false }
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        {/* Top block: About Text and Founders Photos */}
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              className="section-label"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Who We Are
            </motion.span>
            <h2>The Team Behind the Tech</h2>
            <p className="subtitle">Execution-driven digital solutions.</p>
            
            <p className="about-statement">
              A compact team building modern, scalable web products with speed, precision, and purpose.
            </p>
            
            <p className="about-description">
              We are a team-driven tech solutions startup focused on deep-level engineering and elegant visual presence. We specialize in transforming complex problems into fluid digital experiences.
            </p>

            <ul className="about-list">
              {checklist.map((item, i) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                >
                  <div className="icon-wrap">
                    <CheckCircle />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Founders Photos — Triangle Layout */}
          <motion.div
            className="about-brand-card-wrap"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="profiles-triangle-wrap">
              {/* Top row: Aditya & Yuvan */}
              <div className="profiles-triangle-top">
                {[founders[1], founders[0]].map((founder, i) => (
                  <motion.div
                    key={founder.name}
                    className="profile-frame-wrap profile-side"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + (i * 0.15) }}
                  >
                    <div className="profile-frame">
                      <img src={founder.img} alt={founder.name} style={{ objectPosition: founder.objectPosition }} />
                    </div>
                    <div className="profile-info">
                      <h4>{founder.name}</h4>
                      <p className="profile-degree">{founder.degree}</p>
                      <span className={`profile-badge-pill${founder.accent ? ' profile-badge-accent' : ''}`}>{founder.role}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* Bottom center: Alisha */}
              <div className="profiles-triangle-bottom">
                <motion.div
                  className="profile-frame-wrap profile-side"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <div className="profile-frame">
                    <img src={founders[2].img} alt={founders[2].name} style={{ objectPosition: founders[2].objectPosition }} />
                  </div>
                  <div className="profile-info">
                    <h4>{founders[2].name}</h4>
                    <p className="profile-degree">{founders[2].degree}</p>
                    <span className={`profile-badge-pill${founders[2].accent ? ' profile-badge-accent' : ''}`}>{founders[2].role}</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const TeamSection = () => {
  const founders = [
    { name: "Yuvan Datti", role: "CTO & MD", degree: "B.Tech (CSE)", img: founder1, objectPosition: "center 15%", accent: true },
    { name: "Aditya Sai Nandyala", role: "CEO & Founder", degree: "B.Tech (CSE)", img: founder2, objectPosition: "center 20%", accent: true },
    { name: "Alisha Ahmad", role: "Digital Marketing Head", degree: "B.Tech (CSE)", img: alisha, objectPosition: "center 20%", accent: true }
  ];

  const scrollMembers = [
    { name: "Charan J.", role: "Full Stack Developer", degree: "B.Tech (CSE)", img: charanImg },
    { name: "Manaswini I.", role: "Front End & Marketing", degree: "B.Tech (CSM)", img: manaswiniImg },
    { name: "Kheerthana Nambu", role: "Front End & Marketing", degree: "B.Tech (AIML)", img: kheerthanaImg },
    { name: "Madhu", role: "UI/UX Designer & Editor", degree: "B.Tech (CSE)", img: kesavanImg },
    { name: "Teja Dumpa", role: "Photo & Videographer", degree: "B.Tech (ECE)", img: tejaImg },
  ];

  return (
    <section className="about section" id="team">
      <div className="container">
        <div className="about-team-section">
          <div className="team-glow-bg"></div>
          
          <motion.div 
            className="team-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label-center">Our Team</span>
            <h3>Meet the Experts</h3>
            <p className="team-subtitle">
              The brilliant minds driving the technology forward with decades of combined experience.
            </p>
          </motion.div>

          <div className="profiles-main-row">
            {founders.map((founder, index) => {
              const isMiddle = index === 1;
              return (
                <motion.div 
                  key={founder.name}
                  className={`profile-frame-wrap ${isMiddle ? 'profile-middle' : 'profile-side'}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + (index * 0.15) }}
                >
                  <div className="profile-frame">
                    <img src={founder.img} alt={founder.name} style={{ objectPosition: founder.objectPosition }} />
                  </div>
                  <div className="profile-info">
                    <h4>{founder.name}</h4>
                    <p className="profile-degree">{founder.degree}</p>
                    <span className={`profile-badge-pill${founder.accent ? ' profile-badge-accent' : ''}`}>{founder.role}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="marquee-section">
            <div className="marquee-title-wrap">
              <h4>Associate Engineers &amp; Designers</h4>
              <div className="title-divider"></div>
            </div>
            
            <div className="team-marquee-container">
              <div className="team-marquee-track">
                {[...scrollMembers, ...scrollMembers].map((member, index) => (
                  <div key={index} className="marquee-profile-card">
                    <div className="marquee-profile-frame">
                      <img src={member.img} alt={member.name} />
                    </div>
                    <div className="marquee-profile-info">
                      <h5>{member.name}</h5>
                      <span className="marquee-profile-degree">{member.degree}</span>
                      <span className="marquee-profile-badge">{member.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import serviceWebDev from '../assets/service_web_dev.png';
import serviceUIUX from '../assets/service_uiux.png';
import serviceWebApps from '../assets/service_web_apps.png';
import servicePerfOpt from '../assets/service_perf_opt.png';

import servicesBg from '../assets/services_bg.png';

const Services = ({ onContactClick }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef(null);

  const services = [
    { 
      icon: <Laptop />, 
      title: "Website Development", 
      desc: "Responsive, modern websites optimized for speed. Clean structure built for all devices.",
      img: serviceWebDev,
      badge: "Web Development",
      features: [
        "Responsive, mobile-first design",
        "SEO optimized page structures",
        "Fast loading speed (PageSpeed 90+)",
        "Clean, maintainable codebase"
      ]
    },
    { 
      icon: <Palette />, 
      title: "UI/UX Design", 
      desc: "Intuitive, user-focused interfaces prioritizing clarity. Consistency aligned with brand goals.",
      img: serviceUIUX,
      badge: "UI/UX Design",
      features: [
        "User research & user journeys",
        "High-fidelity visual mockups",
        "Interactive clickable prototypes",
        "Consistent brand design systems"
      ]
    },
    { 
      icon: <Layers />, 
      title: "Custom Web Apps", 
      desc: "Scalable, functional applications tailored to solve specific operational challenges.",
      img: serviceWebApps,
      badge: "Web Applications",
      features: [
        "Custom database & API structure",
        "Secure user authentication",
        "Real-time details & dashboards",
        "Scalable cloud architecture"
      ]
    },
    { 
      icon: <Gauge />, 
      title: "Performance Optimization", 
      desc: "Optimize assets and code to deliver lightning-fast load times and smooth UX.",
      img: servicePerfOpt,
      badge: "Optimization",
      features: [
        "Core Web Vitals audit & report",
        "Asset & image optimization",
        "JS/CSS code splitting & bundling",
        "CDN & advanced caching setup"
      ]
    }
  ];

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % services.length);
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % services.length);
    resetTimer();
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + services.length) % services.length);
    resetTimer();
  };

  const handleIndicatorClick = (idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
    resetTimer();
  };

  const active = services[current];

  // Animation variants
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 280, damping: 28 },
        opacity: { duration: 0.3 }
      }
    },
    exit: (dir) => ({
      x: dir < 0 ? 120 : -120,
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 280, damping: 28 },
        opacity: { duration: 0.3 }
      }
    })
  };

  return (
    <section className="services section relative overflow-hidden" id="services">
      {/* Background Enhancements */}
      <div className="services-bg-layer">
        <img src={servicesBg} alt="" className="services-img" aria-hidden="true" />
        <div className="services-overlay"></div>
      </div>

      <div className="container relative z-10">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>What We Do</h2>
          <p>Our core expertise across the digital landscape.</p>
        </motion.div>

        <div className="services-slider-container">
          {/* Left Arrow */}
          <button 
            className="services-nav-arrow left" 
            onClick={handlePrev}
            aria-label="Previous service"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Slider Card */}
          <div className="services-slider-card">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset }) => {
                  const swipe = offset.x;
                  if (swipe < -50) {
                    handleNext();
                  } else if (swipe > 50) {
                    handlePrev();
                  }
                }}
                style={{ cursor: 'grab' }}
                whileTap={{ cursor: 'grabbing' }}
                className="services-slide-layout"
              >
                {/* Left Side: Image */}
                <div className="services-slide-image-side">
                  <motion.img 
                    src={active.img} 
                    alt={active.title}
                    initial={{ scale: 1.06, opacity: 0.8 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                </div>

                {/* Right Side: Details */}
                <div className="services-slide-content-side">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#F06222' }}>
                    <div style={{ width: '28px', height: '28px' }}>
                      {active.icon}
                    </div>
                  </div>
                  <h3>{active.title}</h3>
                  <p className="service-desc">{active.desc}</p>
                  
                  {/* Feature checklist */}
                  <ul className="services-feature-list">
                    {active.features.map((feature, i) => (
                      <li className="services-feature-item" key={i}>
                        <CheckCircle />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button 
                    onClick={onContactClick} 
                    className="services-cta-btn"
                  >
                    <span>Get Started</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Navigation Row */}
            <div className="services-slide-footer">
              {/* Badge */}
              <div className="services-slide-badge">
                {active.badge}
              </div>

              {/* Slider Dots */}
              <div className="services-slider-indicators">
                {services.map((_, idx) => (
                  <button
                    key={idx}
                    className={`services-indicator-dot ${idx === current ? 'active' : ''}`}
                    onClick={() => handleIndicatorClick(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* "Our Works →" Link */}
              <a href="#projects" className="services-works-btn">
                <span>Our Works</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Right Arrow */}
          <button 
            className="services-nav-arrow right" 
            onClick={handleNext}
            aria-label="Next service"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export { About, Services };
