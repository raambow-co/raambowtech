import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, BadgeCheck, MapPin } from 'lucide-react';

const MsmeBadge = () => {
  return (
    <section className="msme-section" id="msme-badge" aria-label="MSME Registration Trust Badge">
      <div className="container">
        <motion.div
          className="msme-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Decorative top tricolor bar */}
          <div className="msme-tricolor-bar" aria-hidden="true">
            <span className="tc-saffron" />
            <span className="tc-white" />
            <span className="tc-green" />
          </div>

          <div className="msme-inner">
            {/* Left — Shield Icon */}
            <motion.div
              className="msme-shield-wrap"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15, type: 'spring', stiffness: 260, damping: 22 }}
            >
              <div className="msme-shield-ring" aria-hidden="true" />
              <ShieldCheck className="msme-shield-icon" size={38} strokeWidth={1.8} aria-hidden="true" />
              <BadgeCheck className="msme-checkmark" size={16} strokeWidth={2.5} aria-hidden="true" />
            </motion.div>

            {/* Center — Text Content */}
            <div className="msme-content">
              <div className="msme-top-row">
                <span className="msme-verified-pill">
                  <BadgeCheck size={12} strokeWidth={2.5} />
                  Verified Business
                </span>
                <span className="msme-india-flag" role="img" aria-label="India flag">🇮🇳</span>
              </div>

              <h3 className="msme-title">MSME Registered Company</h3>

              <p className="msme-desc">
                Registered under the <strong>Ministry of Micro, Small &amp; Medium Enterprises (MSME)</strong>,
                Government of India — a mark of verified compliance and trusted Indian enterprise.
              </p>

              <div className="msme-tag-row">
                <span className="msme-tag">
                  <ShieldCheck size={13} strokeWidth={2} />
                  Govt. Registered
                </span>
                <span className="msme-tag">
                  <MapPin size={13} strokeWidth={2} />
                  Made in India
                </span>
                <span className="msme-tag msme-tag-orange">
                  <BadgeCheck size={13} strokeWidth={2} />
                  Trusted Indian Business
                </span>
              </div>
            </div>

            {/* Right — Decorative stamp */}
            <div className="msme-stamp" aria-hidden="true">
              <div className="msme-stamp-inner">
                <span className="msme-stamp-top">MSME</span>
                <span className="msme-stamp-mid">GOI</span>
                <span className="msme-stamp-bot">CERTIFIED</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MsmeBadge;
