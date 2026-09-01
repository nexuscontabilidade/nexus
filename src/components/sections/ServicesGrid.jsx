import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { services, contactInfo } from '../../data/content'
import { iconMap, FallbackIcon } from '../../data/icons'
import ScrollReveal from '../ui/ScrollReveal'
import AmbientBackground from '../ui/AmbientBackground'

export default function ServicesGrid({ variant = 'full' }) {
  const isPreview = variant === 'preview'

  return (
    <section className="bg-ink-900 py-32 relative overflow-hidden" id="services">
      <AmbientBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

        <ScrollReveal delay={0.1}>
          <p className="font-mono text-xs text-signal uppercase tracking-widest mb-4">Nossas Soluções</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-16 tracking-tight">
            Contabilidade pensada<br />para o crescimento.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, i) => {
            const IconComponent = iconMap[service.icon] || FallbackIcon
            const whatsappHref = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
              `Olá! Tenho interesse em contratar o serviço de ${service.title}. Podem entrar em contato comigo?`
            )}`

            return (
              <motion.div
                key={service.id}
                id={service.anchor}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="bg-ink-800 border border-cream/5 p-8 relative overflow-hidden group hover:border-signal/40 hover:scale-[1.01] transition-all duration-500 hover:bg-ink-800/80 flex flex-col justify-between scroll-mt-32"
                data-cursor="hover"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cream/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 mb-8">
                  <div className="flex justify-between items-start w-full mb-8">
                    <span className="font-mono text-xs text-mist-900">{service.number}</span>
                    <div className="flex items-center gap-3">
                      {service.badge && (
                        <span className="font-mono text-[10px] uppercase tracking-widest bg-gradient-to-r from-signal to-ember text-ink-950 px-3 py-1 rounded-full font-bold shadow-[0_0_14px_rgba(247,81,31,0.5)]">
                          {service.badge}
                        </span>
                      )}
                      <div className="text-cream/60 group-hover:text-cream group-hover:scale-110 transition-all duration-300">
                        <IconComponent size={28} strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>

                  <h3 className="font-display font-medium text-2xl md:text-3xl mb-3">
                    {service.title}
                  </h3>
                  <p className="text-mist-900 text-sm leading-relaxed max-w-sm">
                    {service.desc}
                  </p>
                </div>

                {!isPreview && (
                  <div className="relative z-10 flex flex-wrap gap-2 mt-auto mb-6">
                    {service.tags.map((tag) => (
                      <span key={tag} className="font-mono text-[10px] md:text-xs text-mist-700 bg-ink-900 border border-cream/10 px-3 py-1.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="relative z-10">
                  {isPreview ? (
                    <Link
                      to={`/servicos#${service.anchor}`}
                      className="inline-flex items-center gap-2 text-signal font-mono text-sm hover:gap-3 transition-all"
                      data-cursor="hover"
                    >
                      Saiba mais &rarr;
                    </Link>
                  ) : (
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-br from-signal to-ember text-ink-950 font-display font-medium px-6 py-2.5 rounded-full text-sm shadow-[0_0_16px_rgba(247,81,31,0.3)] hover:shadow-[0_0_26px_rgba(247,81,31,0.5)] transition-all"
                      data-cursor="hover"
                    >
                      Contratar
                    </a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
