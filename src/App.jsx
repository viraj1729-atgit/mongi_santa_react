import { useState, useEffect } from 'react'
import Header       from './components/Header'
import Hero         from './components/Hero'
import InfoCards    from './components/InfoCards'
import ProductGrid  from './components/ProductGrid'
import Countdown    from './components/Countdown'
import PromoBanner  from './components/PromoBanner'
import Testimonials from './components/Testimonials'
import Newsletter   from './components/Newsletter'
import Speciality   from './components/Speciality'
import Footer       from './components/Footer'
import ScrollToTop  from './components/ScrollToTop'
import { CAKE_PRODUCTS, PASTRY_PRODUCTS, TESTIMONIALS } from './constants/data'

export default function App() {
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem('ms-theme') === 'dark' }
    catch { return false }
  })
  const [active, setActive] = useState('Home')

  useEffect(() => {
    document.body.style.background = dark ? '#12122a' : '#ffffff'
  }, [dark])

  const toggleDark = () => {
    const next = !dark
    setDark(next)
    try { localStorage.setItem('ms-theme', next ? 'dark' : 'light') }
    catch { /* no-op */ }
  }

  return (
    <div style={{ minHeight: '100vh', transition: 'background 0.3s' }}>
      <Header dark={dark} toggleDark={toggleDark} active={active} setActive={setActive} />
      <Hero />
      <InfoCards dark={dark} />
      <ProductGrid highlight="3D Cakes" products={CAKE_PRODUCTS} dark={dark} />
      <Countdown />
      <ProductGrid highlight="Pastry" products={PASTRY_PRODUCTS} dark={dark} />
      <PromoBanner />
      <Testimonials testimonials={TESTIMONIALS} dark={dark} />
      <Newsletter dark={dark} />
      <Speciality dark={dark} />
      <Footer dark={dark} />
      <ScrollToTop />
    </div>
  )
}
