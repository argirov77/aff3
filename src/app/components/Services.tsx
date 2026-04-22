'use client'

import { motion } from 'framer-motion'
import {
  HiOutlineChartBarSquare,
  HiOutlineMagnifyingGlass,
  HiOutlineShieldCheck,
  HiOutlineUsers,
} from 'react-icons/hi2'

const services = [
  {
    icon: <HiOutlineMagnifyingGlass />,
    title: 'Diagnostics & analytics',
    desc: 'We audit attribution, LTV segments, fraud exposure, and the variables that materially impact CAC.',
    points: ['Tracking audit', 'Funnel leakage map', 'Channel financial model'],
  },
  {
    icon: <HiOutlineUsers />,
    title: 'Partner ecosystem',
    desc: 'We build a vetted affiliate pool for your vertical—from onboarding to safe scaling frameworks.',
    points: ['Partner onboarding', 'Compliance & quality score', 'KPI-aligned agreements'],
  },
  {
    icon: <HiOutlineChartBarSquare />,
    title: 'Controlled scale',
    desc: 'We expand volume only through validated cohorts while preserving contribution margin.',
    points: ['Step-by-step testing', 'Scale scenarios', 'Budget safety thresholds'],
  },
  {
    icon: <HiOutlineShieldCheck />,
    title: 'Governance & reporting',
    desc: 'Weekly executive reports with fully transparent decision logic for C-level and finance.',
    points: ['Risk & variance tracking', 'Weekly action plan', 'KPI forecasting'],
  },
]

const methodology = [
  { stage: '01', title: 'Discovery', copy: 'Align goals, baseline metrics, and risk boundaries.' },
  { stage: '02', title: 'Pilot', copy: 'Launch test waves and remove low-quality traffic.' },
  { stage: '03', title: 'Scale', copy: 'Scale only proven combinations and placements.' },
  { stage: '04', title: 'Govern', copy: 'Maintain stability and continuous margin growth.' },
]

export default function Services() {
  return (
    <section id="services" className="section section--alt section--services">
      <div className="container">
        <motion.div
          className="services-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <div className="eyebrow">Capabilities</div>
          <h2>Every part of delivery is designed as a system, not a collection of guesses.</h2>
        </motion.div>

        <div className="services-grid">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              className="service-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1] as const,
                delay: i * 0.07,
              }}
            >
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <ul className="service-points">
                {s.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="methodology"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          {methodology.map((item) => (
            <div key={item.stage} className="methodology-step">
              <span>{item.stage}</span>
              <h4>{item.title}</h4>
              <p>{item.copy}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
