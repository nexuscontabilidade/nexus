import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'
import { testimonials } from '../../data/content'
import AmbientBackground from '../ui/AmbientBackground'

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="bg-ink-950 py-32 overflow-hidden relative">
      <AmbientBackground />
      {/* Depoimentos de exemplo — substitua pelos depoimentos reais dos seus clientes */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 min-h-[380px] flex flex-col justify-center">

        <div className="absolute top-0 left-4 font-display text-[10rem] md:text-[18rem] text-signal/5 leading-none pointer-events-none select-none -translate-y-12">
          "
        </div>

        <div className="relative z-10 w-full md:w-4/5 mx-auto text-center" data-cursor="text">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <h3 className="font-display text-2xl md:text-4xl leading-tight mb-10">
                "{testimonials[currentIndex].quote}"
              </h3>

              <div>
                <p className="font-mono text-signal uppercase tracking-widest text-sm mb-1">
                  {testimonials[currentIndex].author}
                </p>
                <p className="font-body text-mist-700">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-8 relative z-10">
          <div className="flex gap-4">
            <MagneticButton onClick={prev} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-white/30 transition-colors" aria-label="Depoimento anterior">
              <ChevronLeft size={20} />
            </MagneticButton>
            <MagneticButton onClick={next} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-white/30 transition-colors" aria-label="Próximo depoimento">
              <ChevronRight size={20} />
            </MagneticButton>
          </div>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-signal w-6' : 'bg-white/20 hover:bg-white/40 w-2'}`}
                aria-label={`Ir para depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
