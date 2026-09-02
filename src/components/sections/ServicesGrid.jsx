import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { services, moreServices } from '../../data/content'
import { iconMap, FallbackIcon } from '../../data/icons'
import ScrollReveal from '../ui/ScrollReveal'

export default function ServicesGrid() {
  return (
    <section className="py-32 relative overflow-hidden" id="servicos">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

        <ScrollReveal delay={0.1}>
          <p className="font-mono text-xs text-signal uppercase tracking-widest mb-4">O que fazemos</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 tracking-tight max-w-3xl">
            Tudo o que a sua empresa precisa entregar <span className="text-signal">sob um mesmo teto</span>.
          </h2>
          <p className="text-mist-900 text-lg max-w-2xl mb-16">
            Da apuração de impostos à folha de pagamento, do balanço ao certificado digital.
            Uma equipe multidisciplinar cuidando de cada obrigação e de cada prazo.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {services.map((service, i) => {
            const IconComponent = iconMap[service.icon] || FallbackIcon

            return (
              <motion.div
                key={service.anchor}
                id={service.anchor}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="bg-ink-800 border border-cream/10 rounded-[18px] p-8 relative overflow-hidden group hover:-translate-y-1.5 hover:border-signal/50 hover:shadow-[0_0_46px_rgba(247,81,31,0.35)] transition-all duration-300 flex flex-col scroll-mt-32"
              >
                <div className="relative z-10 mb-6">
                  <div className="w-12 h-12 rounded-[13px] bg-signal/10 border border-signal/30 flex items-center justify-center mb-5">
                    <IconComponent size={24} strokeWidth={1.6} className="text-ember" />
                  </div>

                  <h3 className="font-display font-medium text-2xl md:text-3xl mb-3">
                    {service.title}
                  </h3>
                  <p className="text-mist-900 text-sm leading-relaxed max-w-sm">
                    {service.desc}
                  </p>
                </div>

                <ul className="relative z-10 flex flex-col gap-2 mt-auto">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-mist-700 text-sm">
                      <Check size={16} className="text-signal shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        <ScrollReveal delay={0.15}>
          <div className="bg-ink-800/60 border border-cream/10 rounded-[18px] p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:border-signal/50 hover:shadow-[0_0_46px_rgba(247,81,31,0.35)]">
            <h3 className="font-display text-xl font-semibold mb-6">Também cuidamos de</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {moreServices.map((item) => (
                <li key={item} className="flex items-start gap-3 text-mist-500 text-sm">
                  <Check size={16} className="text-signal shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
