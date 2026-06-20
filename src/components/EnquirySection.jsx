import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import HeroEnquiryForm from './HeroEnquiryForm';

export default function EnquirySection() {
  return (
    <section className="enquiry-section section" id="enquiry">
      <div className="container enquiry-container">
        <motion.div 
          className="enquiry-info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="section-label">Get in Touch</span>
          <h2>Start a Project</h2>
          <p className="subtitle">Let's build something exceptional together.</p>
          <p className="enquiry-desc">
            Have an idea or a project in mind? Fill out the form, and we'll get back to you within 24 hours to discuss how we can turn your vision into reality.
          </p>
          
          <div className="enquiry-details">
            <div className="enquiry-detail-item">
              <div className="icon-wrap-enquiry">
                <Mail size={18} />
              </div>
              <div>
                <h4>Email Us</h4>
                <a href="mailto:raambowtech@gmail.com" className="enquiry-link">raambowtech@gmail.com</a>
              </div>
            </div>

            <div className="enquiry-detail-item">
              <div className="icon-wrap-enquiry">
                <Phone size={18} />
              </div>
              <div>
                <h4>Call or WhatsApp</h4>
                <a href="tel:+919490543499" className="enquiry-link">+91 94905 43499</a>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="enquiry-form-container"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <HeroEnquiryForm />
        </motion.div>
      </div>
    </section>
  );
}
