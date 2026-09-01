import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'
import AnimatedCounter from '../ui/AnimatedCounter'

export default function Hero() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9])
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])

  const line1 = 'O poder da'.split(' ')
  const line2 = 'contabilidade estratégica.'.split(' ')
  const highlightWord = 'contabilidade'

  let wordIndex = 0

  const renderWords = (words) => {
    return words.map((word, i) => {
      const currentDelay = (wordIndex++) * 0.08
      const isHighlight = word === highlightWord
      return (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 60, rotateX: -40 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: currentDelay, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`inline-block mr-[2vw] ${isHighlight ? 'text-signal' : 'text-cream'}`}
          style={{ transformOrigin: 'bottom center' }}
        >
          {word}
        </motion.span>
      )
    })
  }

  return (
    <section ref={containerRef} className="relative min-h-screen bg-ink-950 overflow-hidden flex flex-col justify-center pt-20 pb-20">

      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-signal/15 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-ember/15 rounded-full blur-[130px] pointer-events-none z-0" />
      <img
        src="/images/Logo-Pequena.png"
        alt=""
        aria-hidden="true"
        className="absolute -top-10 right-0 md:right-16 w-[300px] md:w-[420px] opacity-[0.09] grayscale pointer-events-none select-none z-0"
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(250,237,229,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(250,237,229,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none z-0"></div>
      <div className="grain absolute inset-0 z-[1]"></div>

      <motion.div style={{ opacity, scale, y }} className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start mt-4 sm:mt-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-ink-800 border border-cream/10 text-mist-900 font-mono text-xs px-4 py-2 rounded-full mb-12 flex items-center gap-2"
        >
          <div className="w-1.5 h-1.5 bg-signal rounded-full shadow-[0_0_8px_rgba(247,81,31,0.9)] animate-pulse-slow"></div>
          Contabilidade estratégica para o seu negócio &rarr;
        </motion.div>

        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tight mb-8 w-full" data-cursor="hover">
          <div className="overflow-visible pb-1 sm:pb-2">{renderWords(line1)}</div>
          <div className="overflow-visible pb-1 sm:pb-2">{renderWords(line2)}</div>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="font-body text-mist-900 text-lg md:text-xl max-w-lg mb-12 leading-relaxed"
          data-cursor="text"
        >
          Gestão contábil e tributária de precisão para fazer sua empresa crescer com segurança.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-wrap items-center gap-6"
        >
          <MagneticButton to="/contato" className="inline-block bg-gradient-to-br from-signal to-ember text-cream font-display font-medium px-8 py-4 rounded-full text-lg shadow-[0_0_22px_rgba(247,81,31,0.35)] hover:shadow-[0_0_30px_rgba(247,81,31,0.55)] transition-all">
            Começar Agora
          </MagneticButton>
          <MagneticButton to="/servicos" className="inline-block border border-cream/20 text-mist-900 hover:text-cream hover:border-cream/40 hover:bg-cream/5 font-display font-medium px-8 py-4 rounded-full text-lg transition-all" data-cursor="hover">
            Nossos Serviços
          </MagneticButton>
        </motion.div>

      </motion.div>

      {/* Selo rotativo */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-32 right-12 md:right-32 w-32 h-32 hidden md:flex items-center justify-center opacity-60 z-10"
      >
        <svg viewBox="0 0 100 100" width="100" height="100">
          <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
          <text className="font-mono text-[9.5px] fill-cream tracking-widest uppercase">
            <textPath href="#circlePath">Nexus · Contabilidade Digital ·</textPath>
          </text>
        </svg>
      </motion.div>

      <div className="absolute bottom-8 left-6 md:left-12 z-20 hidden sm:block">
        <div className="font-display flex flex-col gap-1 items-start text-cream/80">
          <span className="text-3xl text-signal"><AnimatedCounter end={10} suffix="+" /></span>
          <span className="font-mono text-xs text-mist-900 tracking-wider">Anos de Experiência</span>
        </div>
      </div>

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
      <div className="absolute bottom-1/4 right-[10%] z-0 text-cream/5 pointer-events-none">
        <motion.div animate={{ y: [0, 40, 0], rotate: [0, -15, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}>
          <svg width="200" height="200" viewBox="0 0 100 100" fill="currentColor"><rect width="100" height="100" className="clip-diagonal" /></svg>
        </motion.div>
      </div>

    </section>
  )
}
