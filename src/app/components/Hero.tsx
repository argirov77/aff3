'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE, delay: i * 0.08 },
  }),
}

const stats = [
  { value: '£8.2M', label: 'Managed annual spend' },
  { value: '47%', label: 'Average CPA improvement' },
  { value: '12', label: 'Weeks to full scale' },
]

const trustTags = ['Fintech', 'iGaming', 'E-commerce', 'SaaS']

export default function Hero() {
  return (
    <section id="hero" className="section section--hero hero">
      <div className="container">
        <div className="hero-layout">
          <div className="hero-content">
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0} className="eyebrow">
              Performance marketing partner
            </motion.div>

            <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}>
              Turn affiliate traffic into a <span className="accent">predictable growth engine</span>.
            </motion.h1>

            <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2} className="hero-sub">
              We design a disciplined affiliate system with transparent attribution, vetted partners, strict quality
              controls, and executive-ready reporting your leadership team can trust.
            </motion.p>

            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3} className="hero-cta">
              <Link href="#contact" className="btn btn--primary">
                Get a growth audit
              </Link>
              <Link href="#services" className="btn btn--ghost">
                Explore our approach
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={4} className="hero-stats">
              {stats.map((item) => (
                <div key={item.label} className="hero-stat-card">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={5} className="hero-trust">
              <span>Trusted across:</span>
              <ul>
                {trustTags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={6}
          >
            <div className="hero-visual-main">
              <Image src="/images/hero.png" alt="Growth dashboard" width={860} height={640} priority />
              <div className="hero-floating hero-floating--one">
                <p>Weekly board report</p>
                <strong>+31% Qualified leads</strong>
              </div>
              <div className="hero-floating hero-floating--two">
                <p>Fraud detection</p>
                <strong>99.2% traffic validity</strong>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
