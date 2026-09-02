import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Mail, MapPin, Clock, Send, Check } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'
import ScrollReveal from '../ui/ScrollReveal'
import { contactInfo, regimeOptions } from '../../data/content'

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

const fieldInputClass = 'w-full bg-ink-900 border border-cream/20 rounded-xl px-4 py-3 text-cream outline-none transition-colors focus:border-signal focus:ring-2 focus:ring-signal/10'

const contactItems = [
  { icon: MessageCircle, label: 'WhatsApp', value: contactInfo.whatsappDisplay, href: `https://wa.me/${contactInfo.whatsappNumber}` },
  { icon: Mail, label: 'E-mail', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: MapPin, label: 'Endereço', value: contactInfo.address },
  { icon: Clock, label: 'Horário', value: contactInfo.hours },
]

export default function ContactSection() {
  const [phone, setPhone] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = () => {
    setSubmitting(true)
  }

  return (
    <section id="contato" className="relative pt-40 pb-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          <ScrollReveal className="lg:col-span-2 flex flex-col">
            <p className="font-mono text-xs text-signal uppercase tracking-widest mb-4">Fale com a gente</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Vamos cuidar da <span className="text-signal">sua contabilidade</span>?
            </h2>
            <p className="text-mist-900 text-lg mb-10 max-w-md">
              Conte onde a sua empresa está hoje. Retornamos com um diagnóstico e uma proposta
              fechada em até 1 dia útil.
            </p>

            <ul className="flex flex-col gap-5">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-[11px] bg-signal/10 border border-signal/25 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-ember" />
                  </div>
                  <div>
                    <p className="text-cream text-sm font-medium">{label}</p>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="text-mist-900 text-sm hover:text-cream transition-colors" data-cursor="hover">
                        {value}
                      </a>
                    ) : (
                      <p className="text-mist-900 text-sm">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="lg:col-span-3">
            <div className="bg-ink-800 border border-cream/10 rounded-[18px] p-8 md:p-10">
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
                  <FormField label="Nome">
                    <input name="nome" type="text" placeholder="Seu nome" required className={fieldInputClass} data-cursor="text" />
                  </FormField>
                  <FormField label="Empresa">
                    <input name="empresa" type="text" placeholder="Nome da empresa" className={fieldInputClass} data-cursor="text" />
                  </FormField>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField label="E-mail">
                    <input name="email" type="email" placeholder="voce@empresa.com" required className={fieldInputClass} data-cursor="text" />
                  </FormField>
                  <FormField label="Telefone">
                    <input
                      name="telefone"
                      type="tel"
                      placeholder="(00) 00000-0000"
                      value={phone}
                      onChange={(e) => setPhone(formatPhone(e.target.value))}
                      className={fieldInputClass}
                      data-cursor="text"
                    />
                  </FormField>
                </div>

                <FormField label="Regime atual">
                  <select name="regime" defaultValue="" className={fieldInputClass} data-cursor="hover">
                    {regimeOptions.map((opt) => (
                      <option key={opt.label} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </FormField>

                <FormField label="Como podemos ajudar?">
                  <textarea
                    name="mensagem"
                    rows={5}
                    placeholder="Número de funcionários, volume de notas, principais dúvidas…"
                    required
                    className={`${fieldInputClass} resize-none`}
                    data-cursor="text"
                  />
                </FormField>

                <MagneticButton
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-br from-signal to-ember text-ink-950 font-display font-medium px-8 py-4 rounded-full text-lg shadow-[0_0_20px_rgba(247,81,31,0.3)] hover:shadow-[0_0_30px_rgba(247,81,31,0.5)] transition-all disabled:opacity-60 mt-2"
                >
                  {submitting ? 'Enviando...' : 'Enviar mensagem'}
                  <Send size={18} />
                </MagneticButton>
                <p className="text-mist-700 text-sm flex items-center gap-2">
                  <Check size={14} className="text-signal shrink-0" />
                  Ou chame direto no WhatsApp — respondemos mais rápido por lá.
                </p>
              </form>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
