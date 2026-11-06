import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, FileText } from 'lucide-react';

export const LegalModal = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Privacy Policy' : 'Terms of Service';

  return (
    <AnimatePresence>
      <div 
        className="legal-modal-backdrop"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem'
        }}
        onClick={onClose}
      >
        <motion.div
          className="legal-modal-card glass-card"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '680px',
            maxHeight: '85vh',
            overflowY: 'auto',
            background: 'rgba(17, 24, 39, 0.95)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            padding: '2.5rem 2rem',
            color: 'var(--clr-text-main)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              background: 'rgba(255, 255, 255, 0.08)',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--clr-text-main)',
              cursor: 'pointer'
            }}
          >
            <X size={20} />
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: 'rgba(147, 5, 0, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--clr-accent-primary)'
            }}>
              {isPrivacy ? <ShieldCheck size={24} /> : <FileText size={24} />}
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700 }}>{title}</h3>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--clr-text-muted)' }}>
                RaamBow Technologies &bull; Govt. Registered MSME
              </p>
            </div>
          </div>

          <div style={{ fontSize: '0.92rem', lineHeight: '1.7', color: 'var(--clr-text-muted)', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {isPrivacy ? (
              <>
                <p>
                  At <strong>RaamBow Technologies</strong> (raambow.com), we prioritize the privacy and security of our clients and visitors. This Privacy Policy outlines how we collect, use, and protect your information.
                </p>
                <h4 style={{ color: 'var(--clr-text-main)', margin: '0.5rem 0 0.2rem' }}>1. Information We Collect</h4>
                <p>
                  We only collect personal information that you voluntarily provide when submitting an enquiry, requesting a quote, or contacting us via email or WhatsApp (such as your name, email address, phone number, and project details).
                </p>
                <h4 style={{ color: 'var(--clr-text-main)', margin: '0.5rem 0 0.2rem' }}>2. Use of Information</h4>
                <p>
                  Information collected is used solely to respond to project enquiries, deliver customized proposals, fulfill software contracts, and maintain client communications. We never sell, rent, or trade your data to third parties.
                </p>
                <h4 style={{ color: 'var(--clr-text-main)', margin: '0.5rem 0 0.2rem' }}>3. Analytics &amp; Cookies</h4>
                <p>
                  We utilize standard aggregated web analytics (Google Analytics 4) to monitor website performance and improve user experience. No personally identifiable tracking is stored without consent.
                </p>
                <h4 style={{ color: 'var(--clr-text-main)', margin: '0.5rem 0 0.2rem' }}>4. Contact &amp; Compliance</h4>
                <p>
                  If you have questions regarding this policy or wish to request data deletion, contact us at <a href="mailto:raambowtech@gmail.com" style={{ color: '#F06222' }}>raambowtech@gmail.com</a>.
                </p>
              </>
            ) : (
              <>
                <p>
                  These Terms of Service govern the engagement and delivery of web development and software solutions provided by <strong>RaamBow Technologies</strong>.
                </p>
                <h4 style={{ color: 'var(--clr-text-main)', margin: '0.5rem 0 0.2rem' }}>1. Scope of Work &amp; Delivery</h4>
                <p>
                  All project scopes, deliverables, milestones, and timelines are established in individual client agreements or work orders before project initiation. We strive for delivery excellence, transparent communication, and 90+ PageSpeed standards.
                </p>
                <h4 style={{ color: 'var(--clr-text-main)', margin: '0.5rem 0 0.2rem' }}>2. Intellectual Property</h4>
                <p>
                  Upon complete payment of project invoices, all custom code, assets, and design files produced specifically for the client become the exclusive property of the client, unless otherwise agreed in writing.
                </p>
                <h4 style={{ color: 'var(--clr-text-main)', margin: '0.5rem 0 0.2rem' }}>3. Enterprise Compliance</h4>
                <p>
                  RaamBow Technologies operates under the regulatory guidelines of the Ministry of Micro, Small &amp; Medium Enterprises (MSME), Government of India.
                </p>
                <h4 style={{ color: 'var(--clr-text-main)', margin: '0.5rem 0 0.2rem' }}>4. Inquiries</h4>
                <p>
                  For formal inquiries or contract clarifications, write to <a href="mailto:raambowtech@gmail.com" style={{ color: '#F06222' }}>raambowtech@gmail.com</a>.
                </p>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

