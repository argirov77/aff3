'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '91%', unit: '', label: 'Traffic quality pass rate' },
  { value: '7', unit: 'd', label: 'Average first optimisation loop' },
  { value: '3.4x', unit: '', label: 'Median partner productivity lift' },
  { value: '24', unit: 'h', label: 'Strategy response SLA' },
]

const highlights = [
  {
    title: 'Fintech lead-gen',
    result: 'CPA down 38% in 9 weeks',
    copy: 'Rebuilt partner mix and excluded low-intent placements using first-party conversion signals.',
  },
  {
    title: 'E-commerce subscriptions',
    result: 'ROAS up 2.1x QoQ',
    copy: 'Combined affiliate prospecting with branded search defence to reduce overlap and leakage.',
  },
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
            <div className="eyebrow">Why teams choose us</div>
            <h2>Operator-grade execution with boardroom-level clarity.</h2>
            <p>
              Kiklamino Limited supports growth teams that are done with guesswork. We combine a vetted partner
              base with a strict measurement framework so every scaling decision is financially defensible.
            </p>
            <p>
              Our model is built for consistency: less channel volatility, better attribution hygiene, and cleaner
              executive communication.
            </p>

            <div className="highlight-grid">
              {highlights.map((item) => (
                <div className="highlight-card" key={item.title}>
                  <p className="highlight-title">{item.title}</p>
                  <p className="highlight-result">{item.result}</p>
                  <p>{item.copy}</p>
                </div>
              ))}
            </div>
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
