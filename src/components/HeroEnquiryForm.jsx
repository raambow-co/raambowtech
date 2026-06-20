import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Phone, Mail, Briefcase, MessageSquare, AlertCircle, Loader2, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const servicesList = [
  'Website Development',
  'Web Applications',
  'UI/UX Design',
  'Digital Marketing',
  'SEO Optimization',
  'Branding & Identity',
  'Technical Support',
  'Custom Software Solutions'
];

export default function HeroEnquiryForm() {
  const [formData, setFormData] = useState({
    from_name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', isError: false });
  
  const formRef = useRef(null);

  useEffect(() => {
    emailjs.init('SvZiGfn-bn_cM3q6x');
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const result = await emailjs.sendForm(
        'service_dtmb3hd',
        'template_6upw1xk',
        formRef.current,
        'SvZiGfn-bn_cM3q6x'
      );

      if (result.status === 200 || result.text === 'OK') {
        setSubmitted(true);
        setFormData({
          from_name: '',
          phone: '',
          email: '',
          service: '',
          message: ''
        });
        setErrors({});
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        throw new Error(`Error: ${result.status}`);
      }
    } catch (err) {
      setToast({
        show: true,
        message: err.text || err.message || 'Submission failed. Please try again.',
        isError: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="hero-enquiry-card glass-card">
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.div
            key="form-view"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="hero-form-header">
              <h3>Quick Inquiry</h3>
              <p>Get a response within 24 hours.</p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="hero-enquiry-form" noValidate>
              
              {/* Full Name */}
              <div className={`hero-form-group ${errors.from_name ? 'has-error' : ''}`}>
                <div className="hero-input-wrapper">
                  <div className="hero-input-icon"><User size={13} /></div>
                  <input
                    type="text"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    disabled={isSubmitting}
                    required
                  />
                </div>
                {errors.from_name && <span className="hero-error-text"><AlertCircle size={10} /> {errors.from_name}</span>}
              </div>

              {/* Phone */}
              <div className={`hero-form-group ${errors.phone ? 'has-error' : ''}`}>
                <div className="hero-input-wrapper">
                  <div className="hero-input-icon"><Phone size={13} /></div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number *"
                    disabled={isSubmitting}
                    required
                  />
                </div>
                {errors.phone && <span className="hero-error-text"><AlertCircle size={10} /> {errors.phone}</span>}
              </div>

              {/* Email */}
              <div className={`hero-form-group ${errors.email ? 'has-error' : ''}`}>
                <div className="hero-input-wrapper">
                  <div className="hero-input-icon"><Mail size={13} /></div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address (Optional)"
                    disabled={isSubmitting}
                  />
                </div>
                {errors.email && <span className="hero-error-text"><AlertCircle size={10} /> {errors.email}</span>}
              </div>

              {/* Service Selection */}
              <div className={`hero-form-group ${errors.service ? 'has-error' : ''}`}>
                <div className="hero-input-wrapper">
                  <div className="hero-input-icon"><Briefcase size={13} /></div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                  >
                    <option value="" disabled hidden>Select a Service *</option>
                    {servicesList.map((serviceOption) => (
                      <option key={serviceOption} value={serviceOption}>
                        {serviceOption}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.service && <span className="hero-error-text"><AlertCircle size={10} /> {errors.service}</span>}
              </div>

              {/* Project Details */}
              <div className="hero-form-group">
                <div className="hero-input-wrapper">
                  <div className="hero-input-icon" style={{ top: '0.75rem' }}><MessageSquare size={13} /></div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us briefly about your project..."
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Submit button */}
              <button type="submit" className="hero-form-submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="hero-form-spinner" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <span>Send Inquiry</span>
                )}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success-view"
            className="hero-form-success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <div className="hero-success-icon-wrap">
              <CheckCircle2 size={32} />
            </div>
            <h4>Inquiry Received!</h4>
            <p>Thank you. We will review your project details and contact you shortly.</p>
            <button onClick={() => setSubmitted(false)} className="hero-success-reset-btn">
              Send another inquiry
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Local Toast Alert */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            className="hero-form-toast"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <AlertCircle size={14} />
            <span>{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
