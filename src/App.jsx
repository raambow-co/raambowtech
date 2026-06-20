import React, { useState } from 'react';
import StaggeredMenu from './components/StaggeredMenu';
import Dock from './components/Dock';
import Hero from './components/Hero';
import { About, Services } from './components/AboutServices';
import Projects from './components/Projects';
import { Workflow, TechStack } from './components/WorkflowTech';
import Clients from './components/Clients';
import Roadmap from './components/Roadmap';
import EnquirySection from './components/EnquirySection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import { Home, Briefcase, Layers, Cpu, Mail, X, Linkedin, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [showLinkedInModal, setShowLinkedInModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const menuItems = [
    { label: 'About', ariaLabel: 'Learn about us', link: '#about' },
    { label: 'Services', ariaLabel: 'View our services', link: '#services' },
    { label: 'Projects', ariaLabel: 'View our projects', link: '#projects' },
    { label: 'Workflow', ariaLabel: 'Our workflow', link: '#workflow' },
    { label: 'Tech Stack', ariaLabel: 'Our technology stack', link: '#stack' },
  ];

  const socialItems = [
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/raambow-technologies-316084418' },
    { label: 'WhatsApp', link: 'https://wa.me/919490543499' },
    { label: 'Instagram', link: 'https://www.instagram.com/raambow_technologies/' },
    { label: 'Twitter', link: 'https://twitter.com' }
  ];

  const dockItems = [
    { icon: <Home size={24} />, label: 'Home', onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { icon: <Briefcase size={24} />, label: 'Services', onClick: () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }) },
    { icon: <Layers size={24} />, label: 'Projects', onClick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) },
    { icon: <Cpu size={24} />, label: 'Workflow', onClick: () => document.getElementById('workflow')?.scrollIntoView({ behavior: 'smooth' }) },
    { icon: <Mail size={24} />, label: 'Contact', onClick: () => setShowContactModal(true) },
  ];

  return (
    <div className="App">
      <StaggeredMenu 
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        isFixed={true}
        accentColor="#930500"
        colors={['#930500', '#1A1C2C', '#95BBEA']}
        onLinkedInClick={() => setShowLinkedInModal(true)}
      />
      <main>
        <Hero onContactClick={() => setShowContactModal(true)} />
        <Clients />
        <About />
        <Services onContactClick={() => setShowContactModal(true)} />
        <Projects />
        <Workflow />
        <TechStack />
        <Roadmap />
        <EnquirySection />
      </main>
      <Footer onLinkedInClick={() => setShowLinkedInModal(true)} />
      <Dock items={dockItems} />

      {/* Premium LinkedIn Coming Soon Modal */}
      <LinkedInComingSoonModal isOpen={showLinkedInModal} onClose={() => setShowLinkedInModal(false)} />

      {/* Premium Contact Modal */}
      <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
    </div>
  );
}

const LinkedInComingSoonModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="linkedin-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="linkedin-modal-content"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <button className="linkedin-modal-close" onClick={onClose} aria-label="Close modal">
              <X size={20} />
            </button>

            {/* Glowing LinkedIn Icon */}
            <div className="linkedin-icon-container">
              <div className="linkedin-icon-glow"></div>
              <Linkedin className="linkedin-modal-icon" size={44} />
            </div>

            {/* Badge */}
            <span className="linkedin-modal-badge">PROFESSIONAL NETWORK</span>

            {/* Heading & Text */}
            <h3 className="linkedin-modal-title">LinkedIn Coming Soon</h3>
            <p className="linkedin-modal-description">
              We are currently establishing our professional presence on LinkedIn to bring you industry insights, company milestones, and team updates. Stay tuned!
            </p>

            <div className="linkedin-modal-divider"></div>

            {/* Sub-text */}
            <p className="linkedin-modal-subtext">In the meantime, connect with us directly:</p>

            {/* Quick Actions */}
            <div className="linkedin-modal-actions">
              <a href="mailto:raambowtech@gmail.com" className="linkedin-action-btn email">
                <Mail size={16} />
                <span>Email Us</span>
              </a>
              <a href="https://wa.me/919490543499" target="_blank" rel="noopener noreferrer" className="linkedin-action-btn whatsapp">
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default App;
