import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'

const navLinks = [
  { label: 'Início', to: '/' },
  { label: 'Serviços', to: '/servicos' },
  { label: 'Sobre Nós', to: '/sobre' },
  { label: 'Contato', to: '/contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const location = useLocation()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 80)
  })

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'backdrop-blur-xl bg-ink-950/80 border-b border-white/5 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 z-50">
            <img src="/images/Logo-Pequena.png" alt="Nexus" className="h-10 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-body text-sm transition-colors relative group ${
                  location.pathname === link.to ? 'text-white' : 'text-mist-900 hover:text-white'
                }`}
                data-cursor="hover"
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-signal transition-all duration-300 ${
                  location.pathname === link.to ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <MagneticButton
              to="/contato"
              className="inline-block px-6 py-2.5 rounded-full border border-ember text-ember text-sm hover:bg-ember hover:text-white transition-colors"
              data-cursor="hover"
            >
              Fale Conosco
            </MagneticButton>
          </div>

          <button
            className="md:hidden z-50 text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-ink-900 z-40 flex flex-col justify-center px-6"
          >
            <nav className="flex flex-col gap-6 mt-20">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ x: -60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.07, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Link
                    to={link.to}
                    className="font-display text-6xl text-white hover:text-signal transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
