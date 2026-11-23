// src/app/page.tsx
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <About />
      <Contact />
    </>
  )
}
