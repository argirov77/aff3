// src/app/components/Services.tsx
'use client'

import {
  HiOutlineShare,
  HiOutlineMagnifyingGlass,
  HiOutlineUsers,
  HiOutlineDevicePhoneMobile
} from 'react-icons/hi2'

const services = [
  {
    icon: <HiOutlineShare />,
    title: 'Affiliate Network',
    desc: 'A curated partner ecosystem driving performance-based clicks & conversions.',
  },
  {
    icon: <HiOutlineMagnifyingGlass />,
    title: 'Google Ads',
    desc: 'Scale search & display at razor-sharp ROI—capture users at peak purchase intent.',
  },
  {
    icon: <HiOutlineUsers />,
    title: 'Meta & Social Ads',
    desc: 'High-impact Facebook, Instagram & LinkedIn buys to engage & convert.',
  },
  {
    icon: <HiOutlineDevicePhoneMobile />,
    title: 'Emerging Platforms',
    desc: 'TikTok, Snapchat & more—tap tomorrow’s audiences before everyone else.',
  },
]

export default function Services() {
  return (
    <section id="services" className="section section--services">
      <div className="container">
        <h2 className="section-heading">Our Services</h2>
        <div className="services-grid">
          {services.map(s => (
            <div key={s.title} className="card">
              <div className="card-icon">{s.icon}</div>
              <h3 className="card-title">{s.title}</h3>
              <p className="card-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
