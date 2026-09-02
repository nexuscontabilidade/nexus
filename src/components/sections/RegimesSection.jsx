import { motion } from 'framer-motion'
import { taxRegimes } from '../../data/content'
import ScrollReveal from '../ui/ScrollReveal'

export default function RegimesSection() {
  return (
    <section className="pt-24 pb-32 relative overflow-hidden border-t border-cream/10">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal delay={0.1}>
          <p className="font-mono text-xs text-signal uppercase tracking-widest mb-4">Planejamento tributário</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 tracking-tight max-w-3xl">
            Qual regime deixa <span className="text-signal">mais dinheiro</span> no seu caixa?
          </h2>
          <p className="text-mist-900 text-lg max-w-2xl mb-16">
            Todo ano revisamos o enquadramento dos nossos clientes. A diferença entre Simples,
            Presumido e Real pode representar dezenas de milhares de reais — e a escolha certa
            depende da sua margem, da folha e do faturamento.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {taxRegimes.map((regime, i) => (
            <motion.article
              key={regime.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="bg-gradient-to-b from-ink-800 to-ink-900 border border-cream/10 rounded-[18px] p-6 hover:-translate-y-1.5 hover:border-signal/50 hover:shadow-[0_0_24px_rgba(255,114,40,0.28)] transition-all duration-300"
            >
              <span className="font-mono text-[10px] uppercase tracking-widest text-signal border border-signal/30 rounded-full px-3 py-1 inline-block mb-4">
                {regime.tag}
              </span>
              <h3 className="font-display text-xl font-semibold mb-3 text-cream">{regime.title}</h3>
              <p className="text-mist-900 text-sm leading-relaxed">{regime.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
