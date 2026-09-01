import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Wrench } from 'lucide-react';
import MagneticWrapper from './MagneticWrapper';
import stepAnalysis from '../assets/step_analysis.webp';
import stepDesign from '../assets/step_design.webp';
import stepDev from '../assets/step_dev.webp';
import stepTesting from '../assets/step_testing.webp';
import stepLaunch from '../assets/step_launch.webp';
import stepMaintenance from '../assets/step_maintenance.webp';
import workflowBg from '../assets/approach_navigation_map_bg_1776528696281.webp';

const Workflow = () => {
  const steps = [
    { 
      title: "Requirement Analysis", 
      desc: "Deep dive into project goals and user needs to build a solid foundation.",
      img: stepAnalysis 
    },
    { 
      title: "UI/UX Planning & Design", 
      desc: "Crafting intuitive layouts and modern visuals tailored to your unique brand.",
      img: stepDesign 
    },
    { 
      title: "Development Phase", 
      desc: "Building high-performance, scalable web systems with clean, reliable code.",
      img: stepDev 
    },
    { 
      title: "Testing & Optimization", 
      desc: "Rigorous quality checks and performance tuning for a smooth, stable experience.",
      img: stepTesting 
    },
    { 
      title: "Deployment & Launch", 
      desc: "Precise rollout and production verification to ensure a perfect live debut.",
      img: stepLaunch 
    },
    { 
      title: "Support & Growth", 
      desc: "Ongoing maintenance and iterative improvements to support long-term success.",
      img: stepMaintenance 
    }
  ];

  return (
    <section className="workflow section relative overflow-hidden" id="workflow">
      {/* Background Enhancements */}
      <div 
        className="workflow-bg-layer" 
        style={{ backgroundImage: `url(${workflowBg})` }}
      >
        <div className="workflow-overlay"></div>
      </div>

      <div className="container relative z-10">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Approach</h2>
          <p>A proven, transparent step-by-step process.</p>
        </motion.div>

        <div className="workflow-timeline">
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-dot">{index + 1}</div>
              
              <div className="timeline-side-content">
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  <MagneticWrapper strength={0.05}>
                    <div className="timeline-content glass-card">
                      <h3>{step.title}</h3>
                      <p>{step.desc}</p>
                    </div>
                  </MagneticWrapper>
                </motion.div>
              </div>

              <div className="timeline-side-image">
                <motion.div 
                  className="timeline-image-wrap"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                >
                  <img src={step.img} alt={step.title} loading="lazy" decoding="async" />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechStack = () => {
  const stack = [
    { icon: <Code />, title: "Frontend", desc: "Semantic HTML5. Responsive CSS3. Interactive JS. Future Ready (React/Next.js)." },
    { icon: <Server />, title: "Backend", desc: "High-performance Node.js logic. Structured REST APIs. Data management." },
    { icon: <Wrench />, title: "Tools", desc: "Version control via Git/GitHub. Prototyping in Figma. Netlify & Vercel deployment." }
  ];

  const duplicatedStack = [...stack, ...stack, ...stack, ...stack, ...stack, ...stack];

  return (
    <section className="stack section bg-darker" id="stack" style={{ overflow: 'hidden', position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Technical Stack</h2>
          <p>Modern tools for reliable, scalable output.</p>
        </motion.div>
      </div>

      <div className="stack-marquee-container" style={{ 
        position: 'relative', 
        width: '100%', 
        overflow: 'hidden', 
        padding: '2rem 0',
        marginTop: '1rem'
      }}>
        {/* Left and Right Fade overlays for high-end look - using percentages for mobile responsiveness */}
        <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '10%', background: 'linear-gradient(to right, var(--clr-bg-darker), transparent)', zIndex: 10, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '10%', background: 'linear-gradient(to left, var(--clr-bg-darker), transparent)', zIndex: 10, pointerEvents: 'none' }} />

        <motion.div 
          className="stack-marquee-track"
          style={{ display: 'flex', gap: '3rem', width: 'max-content', padding: '0 2rem' }}
          animate={{ x: ["-50%", "0%"] }} // Left to right scrolling!
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {duplicatedStack.map((item, index) => (
            <motion.div 
              key={`${item.title}-${index}`}
              className="stack-category glass-card"
              style={{ width: 'min(85vw, 350px)', flexShrink: 0, position: 'relative', overflow: 'hidden' }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: "0 20px 40px rgba(147, 5, 0, 0.2)",
                borderColor: "rgba(147, 5, 0, 0.5)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '100px', height: '100px', background: 'rgba(147, 5, 0, 0.15)', borderRadius: '50%', filter: 'blur(30px)', zIndex: 0 }}></div>
              <h3 style={{ position: 'relative', zIndex: 1 }}><span className="icon-span">{item.icon}</span> {item.title}</h3>
              <p style={{ position: 'relative', zIndex: 1 }}>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export { Workflow, TechStack };
