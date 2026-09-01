import { motion } from 'framer-motion'
import StorySection from '../components/sections/StorySection'
import ValuesGrid from '../components/sections/ValuesGrid'
import DifferentialsGrid from '../components/sections/DifferentialsGrid'
import AmbientBackground from '../components/ui/AmbientBackground'
import { aboutDifferentials } from '../data/content'

export default function Sobre() {
  return (
    <>
      <section className="relative bg-ink-950 pt-40 pb-16 overflow-hidden">
        <AmbientBackground />
        <div className="grain absolute inset-0 z-[1]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Sobre a <span className="text-signal">Nexus</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-mist-900 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Contabilidade estratégica e humana para transformar empresas em máquinas de crescimento
          </motion.p>
        </div>
      </section>

      <StorySection />
      <ValuesGrid />
      <DifferentialsGrid
        eyebrow="A Distinção Nexus"
        title="O que nos torna diferentes"
        items={aboutDifferentials}
        bg="bg-ink-900"
      />
    </>
  )
}
