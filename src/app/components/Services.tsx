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
    title: 'Диагностика и аналитика',
    desc: 'Проверяем атрибуцию, LTV-сегменты, фрод-риски и факторы, которые реально двигают CAC.',
    points: ['Аудит трекинга', 'Карта потерь в воронке', 'Финмодель канала'],
  },
  {
    icon: <HiOutlineUsers />,
    title: 'Партнёрская экосистема',
    desc: 'Собираем пул аффилиатов под вашу вертикаль: от отбора до безопасного масштабирования.',
    points: ['Онбординг партнёров', 'Compliance и quality score', 'Договорённости по KPI'],
  },
  {
    icon: <HiOutlineChartBarSquare />,
    title: 'Управляемый scale',
    desc: 'Увеличиваем объёмы по validated cohorts, не ломая юнит-экономику и маржинальность.',
    points: ['Пошаговые тесты', 'Сценарии масштабирования', 'Бюджетные лимиты'],
  },
  {
    icon: <HiOutlineShieldCheck />,
    title: 'Контроль и отчётность',
    desc: 'Еженедельные executive-отчёты и прозрачная логика решений для C-level и finance.',
    points: ['Риски и отклонения', 'План действий на неделю', 'Прогноз по KPI'],
  },
]

const methodology = [
  { stage: '01', title: 'Discovery', copy: 'Фиксируем цели, baseline и ограничения.' },
  { stage: '02', title: 'Pilot', copy: 'Запускаем тестовые волны и отсекаем шум.' },
  { stage: '03', title: 'Scale', copy: 'Масштабируем только подтверждённые связки.' },
  { stage: '04', title: 'Govern', copy: 'Поддерживаем стабильность и рост рентабельности.' },
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
          <h2>Каждая секция работы построена как управляемая система, а не набор гипотез.</h2>
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
