import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Utensils, Box, User, ArrowRight, Zap, Target, Award, Code, X, ExternalLink, BookOpen, ChevronLeft, ChevronRight, Sun, Leaf, Cpu } from 'lucide-react';
import MagneticWrapper from './MagneticWrapper';
import studycatImg from '../assets/studycat.png';
import suhanaImg from '../assets/suhana.jpg';
import desimartImg from '../assets/desimart.jpg';
import gothamosImg from '../assets/gothamos.jpg';
import srimaaanImg from '../assets/project_srimaan.jpeg';
import srisaiImg from '../assets/project_srisai.jpeg';
import mirrorsolarImg from '../assets/project_mirrorsolar.jpeg';

const projectsData = [
  {
    id: 1,
    title: "Suhana Solar",
    tagline: "Andhra's most trusted renewable energy partner.",
    description: "A premium digital platform built for Suhana Natural Power Systems — one of Andhra Pradesh's leading solar solution providers. The site showcases their full range of on-grid, off-grid, and hybrid solar systems with a conversion-focused design.",
    image: suhanaImg,
    problem: "The existing digital presence failed to communicate trust and authority in a competitive solar market, causing potential customers to drop off without enquiring.",
    approach: "We built a clean, authoritative website with clear solution categories, ROI-driven messaging, and a seamless Get Quote flow to reduce friction for prospective customers.",
    solution: "A responsive, mobile-first website featuring animated hero sections, brand credibility signals, and a streamlined contact system integrated with WhatsApp.",
    results: "Increased qualified lead volume by 30% within the first two months of launch, with improved average session duration across mobile users.",
    liveLink: "#",
    caseStudyLink: "#"
  },
  {
    id: 2,
    title: "Srimaan Solar",
    tagline: "Telangana & AP's leading solar energy partner.",
    description: "A high-performance business website for Srimaan Solar Solutions, designed to establish authority across Telangana and Andhra Pradesh. Features an ROI calculator, PM Surya Ghar subsidy guide, and comprehensive project portfolio.",
    image: srimaaanImg,
    problem: "Srimaan Solar needed a digital platform that could communicate scale — over 10 MW solar yield and 200+ installations — while making it easy for new customers to understand government subsidy benefits.",
    approach: "Designed a data-driven homepage with live metric callouts (Solar Yield, Active Installs, Total Savings), a subsidy guide section, and a free quote CTA that significantly reduces conversion friction.",
    solution: "A full-featured website with a dynamic hero, animated statistics, structured service pages, and a testimonials section — purpose-built to convert solar enquiries at scale.",
    results: "Achieved a significant increase in free quote requests and improved brand recall in Hyderabad and Vijayawada markets within the first quarter post-launch.",
    liveLink: "#",
    caseStudyLink: "#"
  },
  {
    id: 3,
    title: "Sri Sai Manjunadha",
    tagline: "Trusted solar, water & appliance solutions for West Godavari.",
    description: "A comprehensive digital platform for Sri Sai Manjunadha Enterprises — an authorized service and installation partner serving Eluru and West Godavari District. The site covers Solar Rooftop Systems, Water Purifiers, Water Softeners, and home appliance services.",
    image: srisaiImg,
    problem: "Operating across multiple service verticals — solar, water, and appliances — the business needed a unified digital presence that clearly communicated its breadth of expertise without overwhelming visitors.",
    approach: "Structured the website around distinct service pillars with dedicated pages, trust-building statistics (160+ solar systems, 1000+ water purifiers), and a bold, high-conversion design with dual CTAs.",
    solution: "A vibrant green-themed website reflecting brand identity, with animated metric cards, a brand showcase section, and deep regional coverage area mapping for West Godavari.",
    results: "Delivered a 45% increase in direct call volume from the website, with the 'Call Now' CTA becoming the primary lead channel within weeks of launch.",
    liveLink: "#",
    caseStudyLink: "#"
  },
  {
    id: 4,
    title: "Mirror Solar Vision",
    tagline: "Switch to solar & reduce your electricity bill by up to 90%.",
    description: "A bold, dark-themed website for Mirror Solar Vision — a solar energy company helping homes, businesses, schools, and industries in Eluru & Andhra Pradesh slash electricity bills through customized solar solutions and PM Surya Ghar subsidies.",
    image: mirrorsolarImg,
    problem: "Mirror Solar needed a modern, technically credible website that stood out in a crowded market and clearly communicated the financial benefits of going solar, while making it effortless for users to book a free survey.",
    approach: "Built a dark, tech-forward design with animated hero stats (₹8,500+/month average savings, 90% bill reduction), subsidy availability banners, and a smart power grid visual to build product confidence.",
    solution: "A feature-rich dark-mode website with a WhatsApp-first CTA strategy, structured subsidy guide, project portfolio, and a multi-option conversion flow offering Survey, Shop, and WhatsApp entry points.",
    results: "Achieved a strong WhatsApp enquiry rate, with users spending significantly more time on the savings calculator and subsidy guide pages — demonstrating high intent engagement.",
    liveLink: "#",
    caseStudyLink: "#"
  },
  {
    id: 5,
    title: "StudyCat AI",
    tagline: "Smart student productivity and focus companion.",
    description: "StudyCat AI is an intelligent web application designed to help students optimize their study habits, track progress, and maintain focus using advanced AI integration.",
    image: studycatImg,
    problem: "Students often struggle with maintaining focus, organizing study materials, and accessing quick help, leading to procrastination and burnout.",
    approach: "We designed an all-in-one workspace combining a smart Pomodoro timer, AI-driven study assistance, and a seamless flashcard generation system.",
    solution: "A unified, highly responsive dashboard that gamifies productivity while providing intelligent tools that adapt to individual learning styles.",
    results: "Users reported a 40% increase in study session completion rates and significantly reduced time spent organizing materials.",
    liveLink: "#",
    caseStudyLink: "#"
  },
  {
    id: 6,
    title: "Gotham OS",
    tagline: "Cinematic productivity and mission-control hub.",
    description: "A high-performance task management system featuring a dark, immersive interface designed for professionals who demand maximum focus.",
    image: gothamosImg,
    problem: "Standard productivity apps feel sterile and fail to provide the psychological 'flow state' needed for deep, uninterrupted work.",
    approach: "Crafted a cinematic, mission-driven UX that treats daily tasks as tactical objectives, utilizing aggressive focus modes.",
    solution: "An immersive, low-latency productivity environment that blends habit tracking with dynamic performance metrics.",
    results: "Cultivated a highly engaged user base with active daily usage exceeding industry standards by 35%.",
    liveLink: "#",
    caseStudyLink: "#"
  },
  {
    id: 7,
    title: "Desi Mart",
    tagline: "AI-powered inventory and workflow automation.",
    description: "A robust management dashboard tailored for local retailers, integrating real-time stock tracking, sales analytics, and digital ledger systems.",
    image: desimartImg,
    problem: "Small-scale retailers often rely on manual bookkeeping and inventory checks, leading to stock discrepancies and financial leakage.",
    approach: "Developed an intuitive mobile-first interface connected to an AI engine that predicts demand and automates ledger updates.",
    solution: "A comprehensive digital ecosystem that simplifies daily operations, offering predictive stock alerts and automated financial summaries.",
    results: "Helped store owners reclaim an average of 10 hours per week and reduced inventory discrepancies by over 80%.",
    liveLink: "#",
    caseStudyLink: "#"
  }
];

const Projects = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  const active = projectsData[currentIdx];

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIdx((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = projectsData.length - 1;
      if (next >= projectsData.length) next = 0;
      return next;
    });
  };

  const createRipple = (event) => {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : direction < 0 ? '-100%' : 0,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : direction > 0 ? '-100%' : 0,
      opacity: 0
    })
  };

  return (
    <section className="premium-projects-section" id="projects">
      {/* Section Header */}
      <div className="projects-section-header">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label-center">Portfolio</span>
          <h2 className="projects-section-title">Our Works</h2>
          <p className="projects-section-subtitle">
            Real projects. Measurable results. Delivered with precision.
          </p>
        </motion.div>
      </div>

      {/* Subtle Background Animation */}
      <div className="premium-bg-blobs">
        <div className="bg-blob blob-1"></div>
        <div className="bg-blob blob-2"></div>
      </div>

      <div className="projects-showcase-container">
        {/* Side Arrow Buttons */}
        <button className="slider-arrow left" onClick={() => paginate(-1)} aria-label="Previous Project">
          <ChevronLeft size={24} />
        </button>
        <button className="slider-arrow right" onClick={() => paginate(1)} aria-label="Next Project">
          <ChevronRight size={24} />
        </button>

        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIdx}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = offset.x;
              if (swipe < -50) {
                paginate(1);
              } else if (swipe > 50) {
                paginate(-1);
              }
            }}
            className="project-showcase-grid"
          >
            {/* Left Side: Visual */}
            <div className="project-visual-side">
              <div className="image-glow-backdrop-premium"></div>
              <div className="image-frame-premium-new">
                <img src={active.image} alt={active.title} className="showcase-image" />
              </div>
            </div>

            {/* Right Side: Details */}
            <div className="project-details-side">
              <div className="project-details-card glass-card-premium">
                {/* Project number badge */}
                <span className="project-number-badge">{String(currentIdx + 1).padStart(2, '0')} / {String(projectsData.length).padStart(2, '0')}</span>
                <h2 className="project-title-premium">{active.title}</h2>
                <p className="project-tagline-premium">{active.tagline}</p>
                <p className="project-desc-premium">{active.description}</p>

                <div className="project-buttons-premium">
                  <MagneticWrapper strength={0.1}>
                    <a 
                      href={active.liveLink} 
                      className="btn-premium primary"
                      onClick={(e) => {
                        createRipple(e);
                        if (active.liveLink === '#') e.preventDefault();
                      }}
                    >
                      View Live
                      <ExternalLink size={18} style={{ marginLeft: '8px' }} />
                    </a>
                  </MagneticWrapper>

                  <MagneticWrapper strength={0.1}>
                    <button 
                      className="btn-premium secondary"
                      onClick={(e) => {
                        createRipple(e);
                        setActiveCaseStudy(active);
                      }}
                    >
                      Case Study
                      <BookOpen size={18} style={{ marginLeft: '8px' }} />
                    </button>
                  </MagneticWrapper>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Navigation Indicators */}
        <div className="bottom-nav-indicators">
          {projectsData.map((p, i) => (
            <button
              key={i}
              className={`nav-indicator ${i === currentIdx ? 'active' : ''}`}
              onClick={() => {
                setDirection(i > currentIdx ? 1 : -1);
                setCurrentIdx(i);
              }}
              aria-label={`Go to project ${i + 1}`}
              title={p.title}
            />
          ))}
        </div>
      </div>

      {/* Case Study Full Screen Section */}
      <AnimatePresence>
        {activeCaseStudy && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="case-study-overlay"
          >
            <div className="case-study-container glass-card-premium">
              <button 
                onClick={() => setActiveCaseStudy(null)} 
                className="close-case-study"
                aria-label="Close Case Study"
              >
                <X size={24} />
              </button>
              
              <div className="case-study-header">
                <h2>{activeCaseStudy.title}</h2>
                <p>{activeCaseStudy.tagline}</p>
              </div>

              <div className="case-study-content-grid">
                <div className="cs-section">
                  <h3>Problem</h3>
                  <p>{activeCaseStudy.problem}</p>
                </div>
                <div className="cs-section">
                  <h3>Approach</h3>
                  <p>{activeCaseStudy.approach}</p>
                </div>
                <div className="cs-section">
                  <h3>Solution</h3>
                  <p>{activeCaseStudy.solution}</p>
                </div>
                <div className="cs-section">
                  <h3>Results</h3>
                  <p>{activeCaseStudy.results}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
