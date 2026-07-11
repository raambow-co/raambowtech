import React, { useState } from 'react';
import StaggeredMenu from './components/StaggeredMenu';
import Dock from './components/Dock';
import Hero from './components/Hero';
import { About, Services, TeamSection } from './components/AboutServices';
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
        <TeamSection />
        <EnquirySection />
      </main>
      <Footer onLinkedInClick={() => setShowLinkedInModal(true)} />
      <Dock items={dockItems} />

      {/* Premium LinkedIn Coming Soon Modal */}
      <LinkedInComingSoonModal isOpen={showLinkedInModal} onClose={() => setShowLinkedInModal(false)} />

      {/* Premium Contact Modal */}
      <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />

      {/* Floating WhatsApp Button */}
      <motion.a 
        href="https://wa.me/919490543499" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-float-btn"
        aria-label="Contact us on WhatsApp"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1, translateY: -5 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </motion.a>
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
