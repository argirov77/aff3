'use client'

import { motion } from 'framer-motion'

const checklist = [
  'Current CPA / ROAS benchmark',
  'Top-priority geo and offer',
  'Main scaling blockers',
]

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
            <div className="eyebrow">Start a conversation</div>
            <h2>Bring us your targets — we will map the path to profitable scale.</h2>
            <p>Typical first response time: under 24 hours on business days.</p>

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
            <h3>What to include in your brief</h3>
            <ul className="contact-checklist">
              {checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
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
