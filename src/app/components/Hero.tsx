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
            Affiliate marketing, performance-first
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
          >
            Eager to <span className="accent">supercharge</span> your affiliate revenue?
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="hero-sub"
          >
            You&rsquo;ve tested every ad hack in the book &mdash; yet your CPA still won&rsquo;t budge.
            At Kiklamino Limited, we combine data-driven affiliate partnerships with proprietary
            review sites to finally move the needle on your bottom line.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="hero-cta"
          >
            <Link href="#services" className="btn btn--primary">
              Explore our services
            </Link>
            <Link href="#contact" className="btn btn--ghost">
              Request a free guide
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="hero-chips"
          >
            <span>CPA &amp; CPS partnerships</span>
            <span>Vetted affiliate network</span>
            <span>Transparent ROI</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
