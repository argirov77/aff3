'use client'

import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay: i * 0.08 },
  }),
}

const proofPoints = [
  { value: '£4.8M+', label: 'Managed media spend' },
  { value: '42%', label: 'Average CPA reduction' },
  { value: '17', label: 'Core verticals covered' },
]

export default function Hero() {
  return (
    <section id="hero" className="section section--hero hero">
      <div className="container">
        <div className="hero-inner">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="eyebrow"
          >
            Independent performance partner
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
          >
            Affiliate growth that looks <span className="accent">enterprise-ready</span>, not experimental.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="hero-sub"
          >
            We build scalable acquisition systems for brands that need predictable CAC, transparent reporting,
            and serious channel control. No random traffic bundles, no vanity dashboards.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="hero-cta"
          >
            <Link href="#contact" className="btn btn--primary">
              Get strategic audit
            </Link>
            <Link href="#services" className="btn btn--ghost">
              See capabilities
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="hero-proof"
          >
            {proofPoints.map((item) => (
              <div key={item.label} className="proof-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
            className="hero-chips"
          >
            <span>CPA / CPS programs</span>
            <span>Weekly executive reporting</span>
            <span>Fraud-control workflow</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
