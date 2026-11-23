'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useSpring } from 'framer-motion';
import { HiArrowRight, HiBars3, HiXMark } from 'react-icons/hi2';

const NAV = [
  { href: '#hero',    label: 'Home' },
  { href: '#services',label: 'Services' },
  { href: '#about',   label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [active, setActive] = useState(NAV[0].href);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 180, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const scrollPos = window.scrollY + 160;
      let current = NAV[0].href;
      NAV.forEach(item => {
        const el = document.querySelector(item.href);
        if (el && el.getBoundingClientRect().top + window.scrollY <= scrollPos) {
          current = item.href;
        }
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled || open ? 'is-scrolled' : ''}`}>
      <div className="header__inner container">
        <Link href="#hero" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark" aria-hidden="true" />
          <span>Kiklamino</span>
        </Link>

        <nav>
          <ul className="nav-list">
            {NAV.map(item => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`nav-link ${active === item.href ? 'nav-link--active' : ''}`}
                >
                  {active === item.href && (
                    <motion.span
                      layoutId="nav-pill"
                      className="nav-pill"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="nav-label">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <Link href="#contact" className="btn btn--primary header-cta">
            Get in touch <HiArrowRight aria-hidden="true" />
          </Link>

          <button
            className="mobile-toggle"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <HiXMark /> : <HiBars3 />}
          </button>

          <div className={`mobile-menu ${open ? 'open' : ''}`}>
            <ul>
              {NAV.map(item => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={active === item.href ? 'is-active' : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#contact"
                  className="btn btn--primary"
                  onClick={() => setOpen(false)}
                >
                  Get in touch <HiArrowRight aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <motion.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />
    </header>
  );
}
