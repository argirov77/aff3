'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <div className="contact-grid">
          <motion.div
            className="contact-head"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <div className="eyebrow">Get in touch</div>
            <h2>Let&rsquo;s unlock higher-quality affiliate leads.</h2>
            <p>
              Drop us a line and one of our strategists will respond within 24 hours.
            </p>

            <div className="contact-details">
              <div className="contact-row">
                <span className="contact-label">Email</span>
                <span className="contact-value">
                  <a href="mailto:main@kiklaminoadv.com">main@kiklaminoadv.com</a>
                </span>
              </div>
              <div className="contact-row">
                <span className="contact-label">Phone</span>
                <span className="contact-value">
                  <a href="tel:+441234567890">+44 1234 567890</a>
                </span>
              </div>
              <div className="contact-row">
                <span className="contact-label">Office</span>
                <address className="contact-value" style={{ fontStyle: 'normal' }}>
                  Kiklamino Limited<br />
                  1st Floor 415 High Street, Suite 1038<br />
                  Stratford, London, E15 4QZ
                </address>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: 0.12 }}
          >
            <h3>Ready to talk numbers?</h3>
            <p>
              Send us your goals and current CPA targets — we&rsquo;ll come back with
              a tailored plan.
            </p>
            <a
              href="mailto:main@kiklaminoadv.com?subject=Kiklamino%20%E2%80%94%20new%20enquiry"
              className="btn btn--primary"
            >
              Send us an email
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
