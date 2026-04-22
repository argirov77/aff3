'use client'

import { motion } from 'framer-motion'

const checklist = [
  'Ваш текущий CAC/CPA и целевой диапазон',
  'Основные гео, офферы и приоритетные сегменты',
  'Ожидаемый горизонт и желаемый объём scale',
]

export default function Contact() {
  return (
    <section id="contact" className="section section--alt section--contact">
      <div className="container">
        <motion.div
          className="contact-shell"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <div className="contact-main">
            <div className="eyebrow">Start partnership</div>
            <h2>Давайте соберём roadmap роста под ваши KPI.</h2>
            <p>
              Отправьте вводные — вернёмся с планом действий, рисками и приоритетами по запуску в течение 24 часов.
            </p>

            <div className="contact-details">
              <div className="contact-row">
                <span className="contact-label">Email</span>
                <span className="contact-value">
                  <a href="mailto:main@kiklaminoadv.com">main@kiklaminoadv.com</a>
                </span>
              </div>
              <div className="contact-row">
                <span className="contact-label">Phone</span>
                <span className="contact-value">
                  <a href="tel:+441234567890">+44 1234 567890</a>
                </span>
              </div>
            </div>
          </div>

          <div className="contact-card">
            <h3>Что отправить в первом письме</h3>
            <ul className="contact-checklist">
              {checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="contact-mini-form" aria-hidden="true">
              <div>
                <label>Business email</label>
                <input value="team@company.com" readOnly />
              </div>
              <div>
                <label>Monthly budget</label>
                <input value="£50,000+" readOnly />
              </div>
            </div>

            <a href="mailto:main@kiklaminoadv.com?subject=Kiklamino%20%E2%80%94%20new%20enquiry" className="btn btn--primary">
              Отправить запрос
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
