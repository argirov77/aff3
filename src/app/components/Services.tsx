'use client'

import { motion } from 'framer-motion'
import {
  HiOutlineShare,
  HiOutlineMagnifyingGlass,
  HiOutlineUsers,
  HiOutlineDevicePhoneMobile,
} from 'react-icons/hi2'

const services = [
  {
    icon: <HiOutlineShare />,
    title: 'Affiliate network',
    desc: 'A curated partner ecosystem driving performance-based clicks and conversions.',
  },
  {
    icon: <HiOutlineMagnifyingGlass />,
    title: 'Google Ads',
    desc: 'Scale search and display at razor-sharp ROI — capture users at peak purchase intent.',
  },
  {
    icon: <HiOutlineUsers />,
    title: 'Meta & social ads',
    desc: 'High-impact Facebook, Instagram and LinkedIn buys to engage and convert.',
  },
  {
    icon: <HiOutlineDevicePhoneMobile />,
    title: 'Emerging platforms',
    desc: 'TikTok, Snapchat and more — tap tomorrow’s audiences before everyone else.',
  },
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
          <div className="eyebrow">What we do</div>
          <h2>Channels built for measurable outcomes.</h2>
          <p>
            Four focused practices, one performance mandate: every click, lead and
            conversion is tracked, attributed and optimised for ROI.
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
      </div>
    </section>
  )
}
