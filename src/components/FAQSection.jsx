import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Do you provide web development and digital solutions in Eluru, Tadepalligudem, and Rajahmundry?",
    answer: "Yes! RaamBow Technologies is headquartered in Andhra Pradesh and provides cutting-edge website development, custom software, UI/UX design, and SEO services to businesses in Eluru, Tadepalligudem, Rajahmundry, West Godavari, across AP, and globally."
  },
  {
    question: "What digital services does RaamBow Technologies offer?",
    answer: "We provide comprehensive digital solutions including responsive website development, custom web applications, UI/UX design, Core Web Vitals performance optimization, and search engine optimization (SEO)."
  },
  {
    question: "How long does it take to design and launch a website?",
    answer: "A standard business website typically takes 1 to 3 weeks from concept to deployment. Custom web applications and enterprise platforms usually require 4 to 8 weeks depending on complexity and features."
  },
  {
    question: "Is RaamBow Technologies a registered business?",
    answer: "Yes, RaamBow Technologies is an officially registered MSME (Micro, Small & Medium Enterprises) enterprise with the Ministry of MSME, Government of India."
  },
  {
    question: "How do you optimize websites for SEO and speed?",
    answer: "We build using modern mobile-first architecture, clean semantic HTML5, schema.org structured data, optimized modern image formats (WebP), lean code splitting, and CDN delivery to achieve 90+ Google PageSpeed and Core Web Vitals scores."
  },
  {
    question: "What technologies and frameworks do you specialize in?",
    answer: "Our core tech stack includes React, Vite, Node.js, Next.js, Three.js, GSAP, Tailwind CSS, Python, PostgreSQL, and modern cloud deployment platforms."
  },
  {
    question: "How can I start a project with RaamBow Technologies?",
    answer: "You can reach out through our online contact form, email us directly at raambowtech@gmail.com, or message us on WhatsApp at +91 94905 43499. We respond within 24 hours to arrange a free consultation."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section section" id="faq" aria-label="Frequently Asked Questions">
      <div className="container">
        <motion.div 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label-center">Got Questions?</span>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about our web development, pricing, and process.</p>
        </motion.div>

        <div className="faq-accordion-wrapper" style={{ maxWidth: '850px', margin: '2.5rem auto 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={faq.question}
                className="faq-item glass-card"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                style={{
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: isOpen ? '1px solid rgba(147, 5, 0, 0.4)' : '1px solid rgba(255, 255, 255, 0.06)',
                  overflow: 'hidden',
                  transition: 'border-color 0.3s ease, background 0.3s ease',
                  boxShadow: isOpen ? '0 10px 30px rgba(147, 5, 0, 0.1)' : 'none'
                }}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    padding: '1.25rem 1.5rem',
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--clr-text-main)',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '1.05rem',
                    fontWeight: '600'
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <HelpCircle size={18} style={{ color: isOpen ? 'var(--clr-accent-primary)' : 'var(--clr-text-muted)', flexShrink: 0 }} />
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ flexShrink: 0 }}
                  >
                    <ChevronDown size={20} style={{ color: 'var(--clr-text-muted)' }} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ padding: '0 1.5rem 1.35rem 3rem', color: 'var(--clr-text-muted)', fontSize: '0.96rem', lineHeight: '1.65' }}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

