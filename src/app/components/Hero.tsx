'use client'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="hero" className="section section--hero">
      <div className="section-content">
        <h1>Eager to Supercharge Your Affiliate Revenue?</h1>
        <p>
          You’ve tested every ad hack in the book—yet your CPA still won’t budge.
          At Teletron Media, we combine data-driven affiliate partnerships with
          proprietary review sites to finally move the needle on your bottom line.
        </p>
        <div className="hero-cta">
          <Link href="#services" className="btn">
            Explore Our Services
          </Link>
          <Link href="#contact" className="btn btn--outline">
            Request a Free Guide
          </Link>
        </div>
      </div>
    </section>
  )
}
