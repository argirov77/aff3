'use client'

import { motion } from 'framer-motion'
import { HiCheck } from 'react-icons/hi2'
import CountUp from './ui/CountUp'
import { trackPointer } from './ui/spotlight'

const EASE = [0.22, 1, 0.36, 1] as const

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

const operatingModel = [
  'Weekly performance war-room with clear owners.',
  'Single source of truth for media, affiliate, and finance.',
  'Scenario planning for aggressive and conservative growth.',
]

export default function About() {
  return (
    <section id="about" className="section section--about">
      <div className="section-glow section-glow--cyan" aria-hidden="true" />
      <div className="container">
        <div className="about-shell">
          <motion.div
            className="about-copy"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="eyebrow">About Kiklamino</div>
            <h2>
              We run affiliate as a <span className="text-gradient">strategic investment</span>, not just another
              acquisition channel.
            </h2>
            <p className="about-lead">
              Our team combines operators, analysts, and strategists so each move has clear impact on CAC, ROAS,
              and LTV. That is how growth stays controlled—even at high volume.
            </p>

            <ul className="about-principles">
              {principles.map((item, i) => (
                <motion.li
                  className="about-principle"
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.2 + i * 0.1 }}
                >
                  <span className="check" aria-hidden="true">
                    <HiCheck />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="about-panel"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.12 }}
          >
            <div className="about-stats">
              {stats.map((s) => (
                <div key={s.label} className="stat spot" onMouseMove={trackPointer}>
                  <CountUp value={s.value} className="stat-value" />
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="about-ops">
              <h3>How we operate</h3>
              <ul>
                {operatingModel.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <figure className="about-quote">
              <span className="quote-mark" aria-hidden="true">“</span>
              <blockquote>Kiklamino gave us a board-level growth process, not just media buying.</blockquote>
              <figcaption>Client feedback</figcaption>
            </figure>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
