import { motion } from 'framer-motion'
import MagneticButton from '../ui/MagneticButton'
import { contactInfo } from '../../data/content'

export default function CTASection({ variant = 'home' }) {
  const isHome = variant === 'home'

  const whatsappGeneric = `https://wa.me/${contactInfo.whatsappNumber}`
  const whatsappSpecialist = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
    'Olá! Gostaria de falar com um especialista sobre os serviços da Nexus.'
  )}`

  return (
    <section className="relative min-h-[80vh] bg-ink-950 flex flex-col justify-center items-center overflow-hidden py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-ink-700 via-ink-900 to-ink-950 opacity-50 z-0"></div>
      <div className="grain absolute inset-0 z-0 mix-blend-overlay opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(255,165,0,0.08),transparent)] z-0 rounded-full blur-[50px] pointer-events-none"></div>

      <motion.div
        animate={{ y: [0, -60, 0], x: [0, 30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-20 left-[10%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-signal rounded-full opacity-[0.03] blur-3xl z-0"
      />
      <motion.div
        animate={{ y: [0, 60, 0], x: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute -bottom-32 right-[10%] w-[40vw] h-[40vw] max-w-[650px] max-h-[650px] bg-ember rounded-full opacity-[0.03] blur-3xl z-0"
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 flex flex-col items-center text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-mist-900 uppercase tracking-widest mb-8"
        >
          {isHome ? 'Transforme seu negócio' : 'Fale com um especialista'}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-6xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.9] mb-10 flex flex-col"
          data-cursor="hover"
        >
          {isHome ? (
            <>
              <span className="text-white">Pronto para</span>
              <span className="text-stroke">crescer?</span>
            </>
          ) : (
            <>
              <span className="text-white">Pronto para</span>
              <span className="text-stroke">transformar seu negócio?</span>
            </>
          )}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-mist-500 font-body text-lg md:text-xl mb-12 max-w-xl"
        >
          {isHome
            ? 'Junte-se às empresas que já transformaram seus resultados com a Nexus!'
            : 'Entre em contato e descubra como a contabilidade estratégica pode acelerar seu crescimento.'}
        </motion.p>

        {isHome && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {['Resultados em 30 dias', 'Estratégias personalizadas', 'Crescimento garantido'].map((b) => (
              <span key={b} className="font-mono text-xs px-4 py-2 rounded-full bg-signal/10 border border-signal/20 text-signal">
                {b}
              </span>
            ))}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center gap-6 w-full"
        >
          {isHome ? (
            <div className="flex flex-wrap justify-center gap-4">
              <MagneticButton to="/contato" className="inline-flex items-center gap-3 px-10 py-5 text-lg font-display font-medium bg-signal text-ink-950 rounded-full hover:shadow-[0_0_40px_rgba(255,165,0,0.35)] transition-all">
                Começar Agora
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>&rarr;</motion.span>
              </MagneticButton>
              <MagneticButton href={whatsappGeneric} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-10 py-5 text-lg font-display font-medium border border-white/20 text-white rounded-full hover:border-white/40 hover:bg-white/5 transition-all">
                WhatsApp
              </MagneticButton>
            </div>
          ) : (
            <MagneticButton href={whatsappSpecialist} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-10 py-5 text-lg font-display font-medium bg-signal text-ink-950 rounded-full hover:shadow-[0_0_40px_rgba(255,165,0,0.35)] transition-all">
              Falar com Especialista
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>&rarr;</motion.span>
            </MagneticButton>
          )}
        </motion.div>

      </div>
    </section>
  )
}
