import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { iconMap, FallbackIcon } from '../../data/icons'
import { values } from '../../data/content'

export default function ValuesGrid() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((item, i) => {
            const Icon = iconMap[item.icon] || FallbackIcon
            return (
              <motion.div
                key={item.eyebrow}
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group bg-ink-800 border border-cream/10 rounded-[18px] p-10 h-full hover:border-signal/50 hover:shadow-[0_0_46px_rgba(247,81,31,0.35)] transition-all duration-300"
              >
                <div className="w-[52px] h-[52px] rounded-[14px] bg-signal/10 border border-signal/30 flex items-center justify-center mb-5 group-hover:animate-float">
                  <Icon size={26} className="text-ember" />
                </div>
                <p className="font-mono text-xs text-signal uppercase tracking-widest mb-3">{item.eyebrow}</p>
                <h3 className="font-display text-2xl font-semibold mb-4 text-cream">{item.title}</h3>
                {item.list ? (
                  <ul className="flex flex-col gap-3 mb-6">
                    {item.list.map((entry) => (
                      <li key={entry.title} className="flex items-start gap-3 text-mist-500 text-sm">
                        <Check size={16} className="text-signal shrink-0 mt-0.5" />
                        <span><b className="text-cream font-medium">{entry.title}</b> — {entry.desc}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-mist-900 text-sm leading-relaxed mb-6">{item.desc}</p>
                )}
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
