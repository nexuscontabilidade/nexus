import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, MapPin, Send } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'
import InstagramIcon from '../ui/InstagramIcon'
import ScrollReveal from '../ui/ScrollReveal'
import AmbientBackground from '../ui/AmbientBackground'
import { contactInfo, serviceOptions } from '../../data/content'

function formatPhone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  return digits
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
}

function FormField({ label, children }) {
  const [focused, setFocused] = useState(false)

  return (
    <div onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}>
      <motion.span
        className="block mb-2 text-sm"
        animate={{ color: focused ? '#f7511f' : '#9a938e', y: focused ? -2 : 0 }}
        transition={{ duration: 0.25 }}
      >
        {label}
      </motion.span>
      <div className="relative">
        {children}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-signal to-ember"
          initial={false}
          animate={{ scaleX: focused ? 1 : 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          style={{ transformOrigin: 'left', width: '100%' }}
        />
      </div>
    </div>
  )
}

const fieldInputClass = 'w-full bg-ink-900 border border-cream/10 rounded-lg px-4 py-3 text-cream outline-none transition-colors focus:border-signal focus:ring-2 focus:ring-signal/10'

export default function ContactSection() {
  const [phone, setPhone] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = () => {
    setSubmitting(true)
  }

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
            Vamos <span className="text-signal">Crescer Juntos?</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-mist-900 text-lg md:text-xl"
          >
            Transforme sua empresa com uma contabilidade que realmente funciona
          </motion.p>
        </div>
      </section>

      <section className="relative bg-ink-950 pb-32 overflow-hidden">
        <AmbientBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

            <ScrollReveal className="lg:col-span-3">
              <div className="bg-ink-800 border border-cream/5 rounded-2xl p-8 md:p-10">
                <h2 className="font-display text-2xl md:text-3xl font-semibold mb-2">Fale com Nossos Especialistas</h2>
                <p className="text-mist-900 text-sm mb-8">Conte-nos sobre seu negócio e vamos criar a estratégia perfeita para você</p>

                <form
                  action={`https://formsubmit.co/${contactInfo.email}`}
                  method="POST"
                  className="flex flex-col gap-6"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="_subject" value="Novo Contato - Nexus" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField label="Nome Completo">
                      <input name="nome" type="text" required className={fieldInputClass} data-cursor="text" />
                    </FormField>
                    <FormField label="Empresa">
                      <input name="empresa" type="text" required className={fieldInputClass} data-cursor="text" />
                    </FormField>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField label="E-mail">
                      <input name="email" type="email" required className={fieldInputClass} data-cursor="text" />
                    </FormField>
                    <FormField label="Telefone">
                      <input
                        name="telefone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(formatPhone(e.target.value))}
                        className={fieldInputClass}
                        data-cursor="text"
                      />
                    </FormField>
                  </div>

                  <FormField label="Serviço de Interesse">
                    <select name="servico" required defaultValue="" className={fieldInputClass} data-cursor="hover">
                      <option value="" disabled>Selecione um serviço</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </FormField>

                  <FormField label="Mensagem">
                    <textarea
                      name="mensagem"
                      rows={5}
                      placeholder="Descreva seus desafios e objetivos. Vamos encontrar a melhor solução juntos..."
                      className={`${fieldInputClass} resize-none`}
                      data-cursor="text"
                    />
                  </FormField>

                  <MagneticButton
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center gap-3 bg-gradient-to-br from-signal to-ember text-ink-950 font-display font-medium px-8 py-4 rounded-full text-lg shadow-[0_0_20px_rgba(247,81,31,0.3)] hover:shadow-[0_0_30px_rgba(247,81,31,0.5)] transition-all disabled:opacity-60 mt-2"
                  >
                    {submitting ? 'Enviando...' : 'Quero Crescer Agora'}
                    <Send size={18} />
                  </MagneticButton>
                </form>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="lg:col-span-2">
              <div className="bg-ink-800 border border-cream/5 rounded-2xl p-8 md:p-10 h-full flex flex-col">
                <h3 className="font-display text-xl font-semibold mb-8">Fale Conosco</h3>

                <div className="flex flex-col gap-5 mb-10">
                  <a href={`mailto:${contactInfo.email}`} className="flex items-start gap-4 group" data-cursor="hover">
                    <div className="w-11 h-11 rounded-full bg-ink-900 border border-cream/10 flex items-center justify-center shrink-0 group-hover:border-signal/40 transition-colors">
                      <Mail size={18} className="text-signal" />
                    </div>
                    <div>
                      <p className="text-cream text-sm font-medium">E-mail</p>
                      <p className="text-mist-900 text-sm">{contactInfo.email}</p>
                    </div>
                  </a>

                  <a href={`https://wa.me/${contactInfo.whatsappNumber}`} target="_blank" rel="noreferrer" className="flex items-start gap-4 group" data-cursor="hover">
                    <div className="w-11 h-11 rounded-full bg-ink-900 border border-cream/10 flex items-center justify-center shrink-0 group-hover:border-signal/40 transition-colors">
                      <MessageCircle size={18} className="text-signal" />
                    </div>
                    <div>
                      <p className="text-cream text-sm font-medium">WhatsApp</p>
                      <p className="text-mist-900 text-sm">{contactInfo.whatsappDisplay}</p>
                      <p className="text-mist-700 text-xs mt-0.5">Atendimento imediato</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-ink-900 border border-cream/10 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-signal" />
                    </div>
                    <div>
                      <p className="text-cream text-sm font-medium">Endereço</p>
                      <p className="text-mist-900 text-sm">{contactInfo.address}</p>
                      <p className="text-mist-700 text-xs mt-0.5">{contactInfo.city}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-cream/5">
                  <p className="font-mono text-xs text-signal uppercase tracking-widest mb-4">Siga-nos</p>
                  <a href={contactInfo.instagram} target="_blank" rel="noreferrer" className="inline-flex w-11 h-11 rounded-full bg-ink-900 border border-cream/10 items-center justify-center hover:border-signal/40 transition-colors" data-cursor="hover">
                    <InstagramIcon size={18} className="text-signal" />
                  </a>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </>
  )
}
