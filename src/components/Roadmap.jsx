import React from 'react';
import { motion } from 'framer-motion';
import MagneticWrapper from './MagneticWrapper';
import roadmapBg from '../assets/roadmap_bg.png';

const Roadmap = () => {
  const goals = [
    { title: "Team Expansion", desc: "We aim to expand our team to tackle larger projects." },
    { title: "SaaS Products", desc: "Plan to design and build our own scalable software solutions." },
    { title: "Global Reach", desc: "Expanding our digital presence and working with international clients." },
    { title: "Advanced Tech", desc: "Continuous improvement of technical capabilities and stack." }
  ];

  return (
    <section className="roadmap section relative overflow-hidden" id="roadmap">
      {/* Background Enhancements */}
      <div className="roadmap-bg-layer">
        <img src={roadmapBg} alt="" className="roadmap-img" aria-hidden="true" />
        <div className="roadmap-overlay"></div>
      </div>

      <div className="container relative z-10">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Future Roadmap</h2>
          <p>Where we are heading next.</p>
        </motion.div>

        <div className="roadmap-grid">
          {goals.map((goal, index) => (
            <MagneticWrapper key={goal.title} strength={0.05}>
              <motion.div 
                className="roadmap-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3>0{index + 1}. {goal.title}</h3>
                <p>{goal.desc}</p>
              </motion.div>
            </MagneticWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
