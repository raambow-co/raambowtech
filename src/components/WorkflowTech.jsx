import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Wrench } from 'lucide-react';
import MagneticWrapper from './MagneticWrapper';
import stepAnalysis from '../assets/step_analysis.png';
import stepDesign from '../assets/step_design.png';
import stepDev from '../assets/step_dev.png';
import stepTesting from '../assets/step_testing.png';
import stepLaunch from '../assets/step_launch.png';
import stepMaintenance from '../assets/step_maintenance.png';
import workflowBg from '../assets/approach_navigation_map_bg_1776528696281.png';

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
                  <img src={step.img} alt={step.title} />
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

  return (
    <section className="stack section bg-darker" id="stack">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Technical Stack</h2>
          <p>Modern tools for reliable, scalable output.</p>
        </motion.div>

        <div className="stack-showcase">
          {stack.map((item, index) => (
            <MagneticWrapper key={item.title} strength={0.08}>
              <motion.div 
                className="stack-category glass-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3><span className="icon-span">{item.icon}</span> {item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            </MagneticWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Workflow, TechStack };
