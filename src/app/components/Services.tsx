'use client'

import { useState, type CSSProperties } from 'react'
import { motion } from 'framer-motion'
import {
  HiOutlineChartBarSquare,
  HiOutlineMagnifyingGlass,
  HiOutlineShieldCheck,
  HiOutlineUsers,
} from 'react-icons/hi2'
import { trackPointer } from './ui/spotlight'

const EASE = [0.22, 1, 0.36, 1] as const

const services = [
  {
    icon: <HiOutlineMagnifyingGlass />,
    accent: '#6fa4ff',
    title: 'Diagnostics & analytics',
    desc: 'We audit attribution, LTV segments, fraud exposure, and the variables that materially impact CAC.',
    points: ['Tracking audit', 'Funnel leakage map', 'Channel financial model'],
  },
  {
    icon: <HiOutlineUsers />,
    accent: '#7de3f6',
    title: 'Partner ecosystem',
    desc: 'We build a vetted affiliate pool for your vertical—from onboarding to safe scaling frameworks.',
    points: ['Partner onboarding', 'Compliance & quality score', 'KPI-aligned agreements'],
  },
  {
    icon: <HiOutlineChartBarSquare />,
    accent: '#a78bfa',
    title: 'Controlled scale',
    desc: 'We expand volume only through validated cohorts while preserving contribution margin.',
    points: ['Step-by-step testing', 'Scale scenarios', 'Budget safety thresholds'],
  },
  {
    icon: <HiOutlineShieldCheck />,
    accent: '#5eead4',
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
  const [processVisible, setProcessVisible] = useState(false)

  return (
    <section id="services" className="section section--services">
      <div className="section-glow section-glow--violet" aria-hidden="true" />
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <div className="eyebrow">Capabilities</div>
          <h2>
            A high-performance operating stack built for brands that <span className="text-gradient">hate mediocrity</span>.
          </h2>
          <p>From the first audit to the weekly board report, one team owns the whole affiliate lifecycle.</p>
        </motion.div>

        <div className="services-grid">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              className="service-card spot"
              style={{ '--card-accent': s.accent } as CSSProperties}
              onMouseMove={trackPointer}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
            >
              <div className="service-top">
                <div className="service-icon">{s.icon}</div>
                <span className="service-num">0{i + 1}</span>
              </div>
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
          className={`process ${processVisible ? 'is-visible' : ''}`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          onViewportEnter={() => setProcessVisible(true)}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <h3 className="process-title">How an engagement runs</h3>
          <div className="process-track">
            <span className="process-line" aria-hidden="true">
              <span />
            </span>
            <ol className="process-steps">
              {methodology.map((item, i) => (
                <li key={item.stage} className="process-step" style={{ '--i': i } as CSSProperties}>
                  <span className="step-dot">{item.stage}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
