'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const stats = [
  { value: '94%', label: 'Validated traffic score' },
  { value: '3.9x', label: 'Median partner efficiency gain' },
  { value: '11 d', label: 'Average time to first uplift' },
  { value: '24 h', label: 'Executive response SLA' },
]

const principles = [
  'No black boxes: every decision is tied to measurable drivers.',
  'Faster execution without sacrificing brand safety or quality control.',
  'Long-term unit economics over short-term spikes.',
]

export default function About() {
  return (
    <section id="about" className="section section--about">
      <div className="container">
        <div className="about-shell">
          <motion.div
            className="about-copy"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <div className="eyebrow">About Kiklamino</div>
            <h2>We run affiliate as a strategic investment, not just another acquisition channel.</h2>
            <p>
              Our team combines operators, analysts, and strategists so each move has clear impact on CAC, ROAS,
              and LTV. That is how growth stays controlled—even at high volume.
            </p>

            <div className="about-principles">
              {principles.map((item) => (
                <div className="about-principle" key={item}>
                  {item}
                </div>
              ))}
            </div>

            <blockquote className="about-quote">
              “Kiklamino gave us a board-level growth process, not just media buying.”
            </blockquote>
          </motion.div>

          <motion.div
            className="about-panel"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: 0.12 }}
          >
            <div className="about-image-wrap">
              <Image src="/images/about-us1.jpg" alt="Kiklamino team" width={900} height={620} />
            </div>
            <div className="about-stats">
              {stats.map((s) => (
                <div key={s.label} className="stat">
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
