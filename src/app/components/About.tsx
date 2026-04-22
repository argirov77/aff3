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
  'Никаких «чёрных ящиков»: все решения объяснимы цифрами.',
  'Скорость без потери контроля качества и бренда.',
  'Фокус на долгосрочной экономике, не на временных всплесках.',
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
            <h2>Мы ведём affiliate как инвестиционный актив, а не как «ещё один канал».</h2>
            <p>
              Наша команда объединяет performance-операторов, аналитиков и стратегов, чтобы каждый шаг был
              предсказуем по влиянию на CAC, ROAS и LTV. Поэтому рост не выглядит хаотичным даже на высоких объёмах.
            </p>

            <div className="about-principles">
              {principles.map((item) => (
                <div className="about-principle" key={item}>
                  {item}
                </div>
              ))}
            </div>
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
