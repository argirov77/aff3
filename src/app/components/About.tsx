'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '100', unit: '%', label: 'Performance-based partnerships' },
  { value: '24', unit: 'h', label: 'Average strategist response time' },
  { value: 'CPA', unit: '/CPS', label: 'Native pricing models' },
  { value: 'ROI', unit: '', label: 'Transparent and measurable' },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-copy"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <div className="eyebrow">About Kiklamino</div>
            <h2>A performance-powered affiliate agency.</h2>
            <p>
              Kiklamino Limited specialises in CPA/CPS partnerships. We pair our
              in-house review platforms with a vetted network of top affiliates to
              deliver purchase-ready traffic and transparent, measurable ROI.
            </p>
            <p>
              No guesswork, no vanity metrics — only channels that move your bottom
              line.
            </p>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: 0.12 }}
          >
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <div className="stat-value">
                  {s.value}
                  {s.unit && <span className="unit">{s.unit}</span>}
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
