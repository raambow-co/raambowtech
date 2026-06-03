import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Utensils, Box, User, ArrowRight, Zap, Target, Award, Code, X, ExternalLink, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import MagneticWrapper from './MagneticWrapper';
import studycatImg from '../assets/studycat.png';
import suhanaImg from '../assets/suhana.jpg';
import desimartImg from '../assets/desimart.jpg';
import gothamosImg from '../assets/gothamos.jpg';

const projectsData = [
  {
    id: 1,
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
    id: 2,
    title: "Suhana Solar",
    tagline: "Renewable energy solutions for a sustainable future.",
    description: "A premium business platform for a leading solar solutions provider, focusing on clean presentation, interactive quotes, and customer conversion.",
    image: suhanaImg,
    problem: "The traditional solar acquisition process is confusing and opaque, causing potential customers to drop off early in the sales funnel.",
    approach: "Streamlined the user journey with an interactive ROI calculator, clear benefit breakdowns, and a frictionless quote request system.",
    solution: "A modern, trust-focused digital experience that educates users on solar benefits while simplifying the path to installation.",
    results: "Generated a 25% increase in qualified leads within the first three months of launch and improved average session duration.",
    liveLink: "#",
    caseStudyLink: "#"
  },
  {
    id: 3,
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
  },
  {
    id: 4,
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
          {projectsData.map((_, i) => (
            <button
              key={i}
              className={`nav-indicator ${i === currentIdx ? 'active' : ''}`}
              onClick={() => {
                setDirection(i > currentIdx ? 1 : -1);
                setCurrentIdx(i);
              }}
              aria-label={`Go to project ${i + 1}`}
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
