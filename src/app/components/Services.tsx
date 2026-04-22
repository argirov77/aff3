'use client'

import { motion } from 'framer-motion'
import {
  HiOutlineChartBar,
  HiOutlineMagnifyingGlass,
  HiOutlineShieldCheck,
  HiOutlineUsers,
} from 'react-icons/hi2'

const services = [
  {
    icon: <HiOutlineMagnifyingGlass />,
    title: 'Acquisition diagnostics',
    desc: 'Audit attribution, funnel breakpoints, and partner quality before scaling a single pound.',
  },
  {
    icon: <HiOutlineUsers />,
    title: 'Partner sourcing & onboarding',
    desc: 'Curated affiliate recruitment with compliance checks, activation playbooks, and launch QA.',
  },
  {
    icon: <HiOutlineChartBar />,
    title: 'Incremental media scale',
    desc: 'Performance-led budget expansion across search, social, and owned review inventory.',
  },
  {
    icon: <HiOutlineShieldCheck />,
    title: 'Governance & quality control',
    desc: 'Fraud screening, creative guardrails, and weekly executive reporting built for finance teams.',
  },
]

const process = [
  'Week 1: Tracking + baseline alignment',
  'Week 2-3: Partner test waves',
  'Week 4+: Scale only validated cohorts',
]

export default function Services() {
  return (
    <section id="services" className="section section--alt">
      <div className="container">
        <motion.div
          className="services-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <div className="eyebrow">Capabilities</div>
          <h2>A structured operating model for high-stakes growth.</h2>
          <p>
            We operate like an extension of your growth and finance teams: clear targets, transparent logic,
            and disciplined scaling.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="service-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1] as const,
                delay: i * 0.08,
              }}
            >
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="process-strip"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: 0.08 }}
        >
          {process.map((item) => (
            <div key={item} className="process-step">
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
