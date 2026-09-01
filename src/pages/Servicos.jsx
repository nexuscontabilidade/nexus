import { motion } from 'framer-motion'
import ServicesGrid from '../components/sections/ServicesGrid'
import ProcessTimeline from '../components/sections/ProcessTimeline'
import CTASection from '../components/sections/CTASection'
import AmbientBackground from '../components/ui/AmbientBackground'

export default function Servicos() {
  return (
    <>
      <section className="relative bg-ink-950 pt-40 pb-24 overflow-hidden">
        <AmbientBackground />
        <div className="grain absolute inset-0 z-[1]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Nossos <span className="text-signal">Serviços</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-mist-900 text-lg md:text-xl"
          >
            Soluções completas em contabilidade estratégica para impulsionar seu negócio
          </motion.p>
        </div>
      </section>

      <ServicesGrid variant="full" />
      <ProcessTimeline />
      <CTASection variant="services" />
    </>
  )
}
