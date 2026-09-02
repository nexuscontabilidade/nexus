import { useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'
import { contactInfo } from '../../data/content'

const navLinks = [
  { label: 'Início', to: '#inicio' },
  { label: 'Serviços', to: '#servicos' },
  { label: 'Sobre nós', to: '#sobre' },
  { label: 'Contato', to: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 80)
  })

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'backdrop-blur-xl bg-ink-950/80 border-b border-cream/5 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#inicio" className="flex items-center gap-2 z-50">
            <img src="/images/Logo-Pequena.png" alt="Nexus" className="h-10 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.to}
                href={link.to}
                className="font-body text-sm text-mist-900 hover:text-cream transition-colors relative group"
                data-cursor="hover"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[1px] bg-signal transition-all duration-300 w-0 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <MagneticButton
              href={`https://wa.me/${contactInfo.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-6 py-2.5 rounded-full border border-ember text-ember text-sm shadow-[0_0_14px_rgba(255,114,40,0.25)] hover:bg-ember hover:text-cream hover:shadow-[0_0_22px_rgba(255,114,40,0.45)] transition-colors"
              data-cursor="hover"
            >
              Falar no WhatsApp
            </MagneticButton>
          </div>

          <button
            className="md:hidden z-50 text-cream p-2"
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
                  <a
                    href={link.to}
                    className="font-display text-6xl text-cream hover:text-signal transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
