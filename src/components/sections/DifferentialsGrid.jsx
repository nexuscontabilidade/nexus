import { motion } from 'framer-motion'
import ScrollReveal from '../ui/ScrollReveal'
import AmbientBackground from '../ui/AmbientBackground'

export default function DifferentialsGrid({ eyebrow, title, items, bg = 'bg-ink-900' }) {
  return (
    <section className={`${bg} py-32 relative overflow-hidden`}>
      <AmbientBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="font-mono text-xs text-signal uppercase tracking-widest mb-4">{eyebrow}</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-16">{title}</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="pt-6 relative"
            >
              <div className="absolute top-0 left-0 w-full border-t border-cream/10"></div>
              <motion.div
                className="h-[2px] w-full bg-gradient-to-r from-signal to-ember absolute top-0 left-0 origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.12 + 0.2, ease: 'easeOut' }}
              />
              <motion.span
                className="block font-display text-4xl font-bold text-signal/50 drop-shadow-[0_0_14px_rgba(247,81,31,0.65)] mb-4"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.25 }}
              >
                {item.num}
              </motion.span>
              <h3 className="font-display text-xl font-semibold mb-3 text-cream">{item.title}</h3>
              <p className="text-mist-900 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
