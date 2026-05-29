import { useState, useEffect } from 'react'
import './App.css'

import Splash        from './components/Splash'
import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import Stats         from './components/Stats'
import Specialties   from './components/Specialties'
import Services      from './components/Services'
import WhyUs         from './components/WhyUs'
import LogoTicker    from './components/LogoTicker'
import Testimonials  from './components/Testimonials'
import Cases         from './components/Cases'
import Contact       from './components/Contact'
import Footer          from './components/Footer'
import WhatsAppButton  from './components/WhatsAppButton'
import { useReveal }   from './hooks/useReveal'

export default function App() {
  const [splashDone, setSplashDone]       = useState(false)
  const [splashVisible, setSplashVisible] = useState(true)

  useEffect(() => {
    const t1 = setTimeout(() => setSplashDone(true), 2200)
    const t2 = setTimeout(() => setSplashVisible(false), 3000)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  useReveal()

  return (
    <div className="page">
      {splashVisible && <Splash done={splashDone} />}

      <Navbar />
      <Hero />
      <Stats />
      <Specialties />
      <Services />
      <WhyUs />
      <LogoTicker />
      <Testimonials />
      <Cases />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
