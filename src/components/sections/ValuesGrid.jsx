import { motion } from 'framer-motion'
import { iconMap, FallbackIcon } from '../../data/icons'
import { values } from '../../data/content'
import AmbientBackground from '../ui/AmbientBackground'

export default function ValuesGrid() {
  return (
    <section className="relative bg-ink-950 py-32 border-t border-white/5 overflow-hidden">
      <AmbientBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((item, i) => {
            const Icon = iconMap[item.icon] || FallbackIcon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group bg-ink-800 border border-white/5 rounded-2xl p-10 h-full hover:border-signal/30 transition-colors duration-500"
              >
                <div className="w-14 h-14 rounded-full bg-signal flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,165,0,0.35)] group-hover:animate-float">
                  <Icon size={24} className="text-ink-950" />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-4 text-white">{item.title}</h3>
                <p className="text-mist-900 text-sm leading-relaxed mb-6">{item.desc}</p>
                <motion.div
                  className="h-[2px] bg-gradient-to-r from-signal to-transparent origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.12 + 0.3, ease: 'easeOut' }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
