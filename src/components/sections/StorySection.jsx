import { motion } from 'framer-motion'
import { aboutIntro } from '../../data/content'

function RichText({ text }) {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="text-cream font-semibold">{part}</strong> : part
  )
}

export default function StorySection() {
  return (
    <section id="sobre" className="pt-40 pb-24 relative overflow-hidden text-mist-100">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-signal uppercase tracking-widest mb-4">Sobre nós</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
            Um escritório construído para andar <span className="text-signal">no ritmo de quem empreende</span>.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col gap-6 max-w-3xl text-mist-900 text-lg leading-relaxed"
        >
          <p className="text-xl md:text-2xl text-cream font-medium leading-snug">
            <RichText text={aboutIntro.lead} />
          </p>
          <p>{aboutIntro.body}</p>
        </motion.div>
      </div>
    </section>
  )
}
