import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'
import { contactInfo } from '../../data/content'

export default function Hero() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9])
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])

  return (
    <section id="inicio" ref={containerRef} className="relative min-h-screen overflow-hidden flex flex-col justify-center pt-20 pb-20">

      <motion.div style={{ opacity, scale, y }} className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start mt-4 sm:mt-10">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tight mb-8 w-full text-cream"
          data-cursor="hover"
        >
          O braço direito do <span className="text-signal">empreendedor</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-body text-mist-900 text-lg md:text-xl max-w-lg mb-12 leading-relaxed"
          data-cursor="text"
        >
          Contabilidade completa — fiscal, trabalhista, contábil e certificado digital — com
          respostas em tempo recorde e um contador de verdade acompanhando o seu negócio de perto.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-wrap items-center gap-6"
        >
          <MagneticButton
            href={`https://wa.me/${contactInfo.whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-gradient-to-br from-signal to-ember text-cream font-display font-medium px-8 py-4 rounded-full text-lg shadow-[0_0_22px_rgba(247,81,31,0.35)] hover:shadow-[0_0_30px_rgba(247,81,31,0.55)] transition-all"
          >
            Falar no WhatsApp
          </MagneticButton>
          <MagneticButton href="#sobre" className="inline-block border border-cream/20 text-mist-900 hover:text-cream hover:border-cream/40 hover:bg-cream/5 font-display font-medium px-8 py-4 rounded-full text-lg transition-all" data-cursor="hover">
            Conheça o escritório
          </MagneticButton>
        </motion.div>

      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/30 z-20"
      >
        <ChevronDown size={24} />
      </motion.div>

      <div className="absolute top-1/2 right-1/4 z-0 opacity-20 pointer-events-none">
        <motion.div animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} className="w-64 h-64 border border-signal rounded-full" />
      </div>

    </section>
  )
}
