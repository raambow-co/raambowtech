import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Phone, Mail, Briefcase, MessageSquare, AlertCircle, Loader2, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './ContactModal.css';

const servicesList = [
  'Website Development',
  'Web Applications',
  'UI/UX Design',
  'Digital Marketing',
  'SEO Optimization',
  'Social Media Handling',
  'Meta Ads Management',
  'Google Ads',
  'Branding & Identity',
  'Hosting & Domain Setup',
  'Technical Support',
  'Custom Software Solutions'
];

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    from_name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', isError: false });
  
  const formRef = useRef(null);
  const modalRef = useRef(null);

  // Initialize EmailJS public key on mount to prevent initialization issues
  useEffect(() => {
    emailjs.init('SvZiGfn-bn_cM3q6x');
  }, []);

  // Close modal on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Auto-dismiss toast notification
  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast((prev) => ({ ...prev, show: false }));
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.from_name.trim()) {
      tempErrors.from_name = 'Full Name is required';
    }
    
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone Number is required';
    } else {
      const phoneDigits = formData.phone.replace(/[^0-9]/g, '');
      if (phoneDigits.length < 10) {
        tempErrors.phone = 'Valid 10-digit number required';
      }
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        tempErrors.email = 'Enter a valid email address';
      }
    }

    if (!formData.service) {
      tempErrors.service = 'Service is required';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!validate()) {
      console.log('Validation failed:', errors);
      return;
    }

    setIsSubmitting(true);
    console.log('Sending email using emailjs.sendForm()...');
    console.log('Form data state:', formData);

    try {
      // Use emailjs.sendForm() as required, passing the form ref/element directly
      const result = await emailjs.sendForm(
        'service_dtmb3hd',
        'template_6upw1xk',
        formRef.current,
        'SvZiGfn-bn_cM3q6x'
      );

      console.log('EmailJS Success Response:', result.text, result.status);

      if (result.status === 200 || result.text === 'OK') {
        setToast({
          show: true,
          message: 'Thank you for contacting RaamBow TechSolutions. We’ll contact you shortly.',
          isError: false
        });
        setFormData({
          from_name: '',
          phone: '',
          email: '',
          service: '',
          message: ''
        });
        setErrors({});
        // Auto-close modal after successful send
        setTimeout(() => {
          onClose();
        }, 1800);
      } else {
        throw new Error(`Invalid response status: ${result.status}`);
      }
    } catch (err) {
      console.error('Detailed EmailJS error object:', err);
      setToast({
        show: true,
        message: err.text || err.message || 'Submission failed. Please check your network and try again.',
        isError: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  // Framer Motion Animation Variants
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.94, y: 15 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: 'spring',
        damping: 26,
        stiffness: 380,
        staggerChildren: 0.04,
        delayChildren: 0.02
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.96, 
      y: 10,
      transition: { duration: 0.18, ease: 'easeInOut' }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 350, damping: 26 }
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="contact-modal-overlay"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayVariants}
            onClick={handleBackdropClick}
          >
            <motion.div
              className="contact-modal-card"
              variants={modalVariants}
              ref={modalRef}
              onClick={(e) => e.stopPropagation()}
              layout
            >
              {/* Close Icon Button */}
              <button className="contact-modal-close-btn" onClick={onClose} aria-label="Close modal">
                <X size={16} />
              </button>

              {/* Form Header */}
              <motion.div className="contact-modal-header" variants={itemVariants}>
                <h2>Let’s Build Something Great Together</h2>
                <p>Tell us about your project and we’ll contact you shortly.</p>
              </motion.div>

              {/* Compact 2-Column Grid Form */}
              <form 
                ref={formRef} 
                onSubmit={sendEmail} 
                className="contact-form" 
                noValidate
              >
                {/* Full Name (from_name) */}
                <motion.div 
                  className={`contact-form-group ${errors.from_name ? 'has-error' : ''}`}
                  variants={itemVariants}
                >
                  <label htmlFor="modal-name">Full Name *</label>
                  <div className="contact-input-wrapper">
                    <div className="contact-input-icon"><User size={14} /></div>
                    <input
                      type="text"
                      id="modal-name"
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                  {errors.from_name && (
                    <span className="contact-error-msg">
                      <AlertCircle size={11} /> {errors.from_name}
                    </span>
                  )}
                </motion.div>

                {/* Phone Number (phone) */}
                <motion.div 
                  className={`contact-form-group ${errors.phone ? 'has-error' : ''}`}
                  variants={itemVariants}
                >
                  <label htmlFor="modal-phone">Phone Number *</label>
                  <div className="contact-input-wrapper">
                    <div className="contact-input-icon"><Phone size={14} /></div>
                    <input
                      type="tel"
                      id="modal-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 94905 43499"
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                  {errors.phone && (
                    <span className="contact-error-msg">
                      <AlertCircle size={11} /> {errors.phone}
                    </span>
                  )}
                </motion.div>

                {/* Email Address (email) */}
                <motion.div 
                  className={`contact-form-group ${errors.email ? 'has-error' : ''}`}
                  variants={itemVariants}
                >
                  <label htmlFor="modal-email">Email Address (Optional)</label>
                  <div className="contact-input-wrapper">
                    <div className="contact-input-icon"><Mail size={14} /></div>
                    <input
                      type="email"
                      id="modal-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="johndoe@example.com"
                      disabled={isSubmitting}
                    />
                  </div>
                  {errors.email && (
                    <span className="contact-error-msg">
                      <AlertCircle size={11} /> {errors.email}
                    </span>
                  )}
                </motion.div>

                {/* Service Requirement Dropdown (service) */}
                <motion.div 
                  className={`contact-form-group ${errors.service ? 'has-error' : ''}`}
                  variants={itemVariants}
                >
                  <label htmlFor="modal-service">Service Required *</label>
                  <div className="contact-input-wrapper">
                    <div className="contact-input-icon"><Briefcase size={14} /></div>
                    <select
                      id="modal-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      required
                    >
                      <option value="" disabled hidden>Select a Service</option>
                      {servicesList.map((serviceOption) => (
                        <option key={serviceOption} value={serviceOption}>
                          {serviceOption}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.service && (
                    <span className="contact-error-msg">
                      <AlertCircle size={11} /> {errors.service}
                    </span>
                  )}
                </motion.div>

                {/* Textarea spans both columns (message) */}
                <motion.div className="contact-form-group span-2" variants={itemVariants}>
                  <label htmlFor="modal-message">Project Details (Optional)</label>
                  <div className="contact-input-wrapper">
                    <div className="contact-input-icon" style={{ top: '0.85rem' }}><MessageSquare size={14} /></div>
                    <textarea
                      id="modal-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your timeline, specs, or project vision..."
                      disabled={isSubmitting}
                    />
                  </div>
                </motion.div>

                {/* Actions span both columns */}
                <motion.div className="contact-form-actions" variants={itemVariants}>
                  <button
                    type="submit"
                    className="contact-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="contact-spinner" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <span>Submit Inquiry</span>
                    )}
                  </button>
                  <button
                    type="button"
                    className="contact-cancel-btn"
                    onClick={onClose}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success/Error Toast Notifications */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            className={`contact-toast ${toast.isError ? 'error' : 'success'}`}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          >
            <div className={`contact-toast-icon ${toast.isError ? 'error' : 'success'}`}>
              {toast.isError ? <AlertCircle size={18} /> : <CheckCircle2 size={18} />}
            </div>
            <span className="contact-toast-text">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
