import { MotionConfig } from 'framer-motion'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import ScrollProgressBar from './components/ui/ScrollProgressBar'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import Home from './pages/Home'
import Servicos from './pages/Servicos'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'

function ScrollToTopOrHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <div className="relative bg-ink-950 font-body text-mist-100 overflow-x-hidden selection:bg-signal selection:text-ink-950">
          <ScrollProgressBar />
          <Navbar />
          <ScrollToTopOrHash />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servicos" element={<Servicos />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/contato" element={<Contato />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </MotionConfig>
    </BrowserRouter>
  )
}
