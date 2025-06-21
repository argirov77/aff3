// src/app/components/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const NAV = [
  { href: '#hero',    label: 'Home' },
  { href: '#services',label: 'Services' },
  { href: '#about',   label: 'About Us' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [active, setActive] = useState(NAV[0].href);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + 200;
      NAV.forEach(item => {
        const el = document.querySelector(item.href);
        if (el && el.getBoundingClientRect().top + window.scrollY <= scrollPos) {
          setActive(item.href);
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header>
      <div className="header__inner container">
        <Link href="#hero" className="logo">Teletron Media</Link>
        <nav>
          <ul className="nav-list">
            {NAV.map(item => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`nav-link ${active === item.href ? 'nav-link--active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            className="mobile-toggle"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
          {open && (
            <div className="mobile-menu">
              <ul>
                {NAV.map(item => (
                  <li key={item.href}>
                    <Link href={item.href} onClick={() => setOpen(false)}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
