'use client'

import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { HiArrowRight, HiArrowTrendingDown, HiOutlineShieldCheck } from 'react-icons/hi2'
import CountUp from './ui/CountUp'

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
  { value: '47%', label: 'Average CPA reduction' },
  { value: '3.4x', label: 'Median partner efficiency lift' },
]

const meters = [
  { label: 'Partner quality score', value: '94/100', fill: 0.94 },
  { label: 'Fraud-filtered traffic', value: '99.2%', fill: 0.992 },
]

/* Illustrative blended-CAC trend over the last eight weeks, ending at the £32.40 shown on the card. */
const CAC_TREND = [41.2, 40.4, 38.9, 39.3, 36.8, 35.6, 34.1, 32.4]
const CHART = { w: 300, h: 84, top: 10, bottom: 8, min: 30, max: 42 }

function chartPoints() {
  const { w, h, top, bottom, min, max } = CHART
  const step = w / (CAC_TREND.length - 1)
  return CAC_TREND.map((v, i) => ({
    x: i * step,
    y: top + ((max - v) / (max - min)) * (h - top - bottom),
  }))
}

/** Smooth line through the points (Catmull-Rom converted to cubic Béziers). */
function smoothPath(pts: { x: number; y: number }[]) {
  let d = `M ${pts[0].x} ${pts[0].y}`
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i]
    const p1 = pts[i]
    const p2 = pts[i + 1]
    const p3 = pts[i + 2] ?? p2
    const c1 = { x: p1.x + (p2.x - p0.x) / 6, y: p1.y + (p2.y - p0.y) / 6 }
    const c2 = { x: p2.x - (p3.x - p1.x) / 6, y: p2.y - (p3.y - p1.y) / 6 }
    d += ` C ${c1.x.toFixed(1)} ${c1.y.toFixed(1)}, ${c2.x.toFixed(1)} ${c2.y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`
  }
  return d
}

const POINTS = chartPoints()
const LINE = smoothPath(POINTS)
const AREA = `${LINE} L ${CHART.w} ${CHART.h} L 0 ${CHART.h} Z`
const LAST = POINTS[POINTS.length - 1]

export default function Hero() {
  return (
    <section id="hero" className="section section--hero hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="aurora aurora--1" />
        <div className="aurora aurora--2" />
        <div className="aurora aurora--3" />
      </div>

      <div className="container">
        <div className="hero-layout">
          <div className="hero-content">
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0} className="eyebrow">
              Performance marketing partner
            </motion.div>

            <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}>
              Turn affiliate traffic into a <span className="text-gradient">predictable growth engine</span>.
            </motion.h1>

            <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2} className="hero-sub">
              We design a disciplined affiliate system with transparent attribution, vetted partners, strict quality
              controls, and executive-ready reporting your leadership team can trust.
            </motion.p>

            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3} className="hero-cta">
              <Link href="#contact" className="btn btn--primary btn--lg">
                Get a growth audit <HiArrowRight aria-hidden="true" />
              </Link>
              <Link href="#services" className="btn btn--ghost btn--lg">
                Explore our approach
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={4} className="hero-stats">
              {stats.map((item) => (
                <div key={item.label} className="hero-stat-card">
                  <CountUp value={item.value} className="hero-stat-value" />
                  <span>{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div className="hero-visual" variants={fadeUp} initial="hidden" animate="show" custom={5}>
            <div className="hero-visual-glow" aria-hidden="true" />

            <div className="command">
              <div className="command-head">
                <div>
                  <p className="command-kicker">Command center</p>
                  <strong className="command-title">Live acquisition control</strong>
                </div>
                <span className="live-pill">
                  <span className="live-dot" aria-hidden="true" />
                  Live
                </span>
              </div>

              <div className="command-chart">
                <div className="command-chart-top">
                  <div>
                    <p>Current blended CAC</p>
                    <CountUp value="£32.40" className="command-chart-value" duration={1.8} />
                  </div>
                  <span className="delta-badge">
                    <HiArrowTrendingDown aria-hidden="true" />
                    -18% vs last quarter
                  </span>
                </div>

                <svg
                  className="sparkline"
                  viewBox={`0 0 ${CHART.w} ${CHART.h}`}
                  role="img"
                  aria-label="Blended CAC trending down over the last eight weeks"
                >
                  <defs>
                    <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#7de3f6" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#7de3f6" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="spark-stroke" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#8b6bff" />
                      <stop offset="100%" stopColor="#7de3f6" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d={AREA}
                    fill="url(#spark-fill)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.9 }}
                  />
                  <motion.path
                    d={LINE}
                    fill="none"
                    stroke="url(#spark-stroke)"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.6, duration: 1.6, ease: EASE }}
                  />
                  <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
                    <circle className="spark-ping" cx={LAST.x} cy={LAST.y} r={9} />
                    <circle cx={LAST.x} cy={LAST.y} r={4} fill="#7de3f6" />
                  </motion.g>
                </svg>
              </div>

              {meters.map((m, i) => (
                <div key={m.label} className="command-row">
                  <div className="command-row-top">
                    <span>{m.label}</span>
                    <strong>{m.value}</strong>
                  </div>
                  <div className="meter">
                    <motion.span
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: m.fill }}
                      transition={{ delay: 0.9 + i * 0.15, duration: 1.3, ease: EASE }}
                    />
                  </div>
                </div>
              ))}

              <div className="command-row command-row--inline">
                <span>Weekly variance report</span>
                <strong>Every Monday</strong>
              </div>
            </div>

            <div className="float-chip float-chip--a">
              <span className="chip-icon chip-icon--mint">
                <HiOutlineShieldCheck aria-hidden="true" />
              </span>
              <div>
                <strong>Fraud check passed</strong>
                <small>Every click verified</small>
              </div>
            </div>

            <div className="float-chip float-chip--b">
              <span className="chip-icon">
                <HiArrowTrendingDown aria-hidden="true" />
              </span>
              <div>
                <strong>-47% CPA</strong>
                <small>Average reduction</small>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
