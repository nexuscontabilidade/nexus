import * as Accordion from '@radix-ui/react-accordion'
import { Plus, Minus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { faqs } from '../../data/content'
import ScrollReveal from '../ui/ScrollReveal'

export default function FAQSection() {
  const [value, setValue] = useState('')

  return (
    <section className="relative pb-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          <ScrollReveal>
            <div className="lg:sticky lg:top-32">
              <p className="font-mono text-xs text-signal uppercase tracking-widest mb-4">Tire suas dúvidas</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold">Perguntas <span className="text-signal">Frequentes</span></h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="relative z-10 w-full mt-10 lg:mt-24">
            <Accordion.Root
              type="single"
              collapsible
              className="w-full flex flex-col gap-3"
              value={value}
              onValueChange={setValue}
            >
              {faqs.map((faq, index) => (
                <Accordion.Item
                  key={index}
                  value={`item-${index}`}
                  className={`bg-ink-800 border rounded-[14px] px-6 overflow-hidden transition-colors duration-300 ${value === `item-${index}` ? 'border-signal/40' : 'border-cream/10'}`}
                >
                  <Accordion.Header className="flex">
                    <Accordion.Trigger
                      className="group font-display font-semibold text-base md:text-lg py-5 flex justify-between items-center w-full text-left focus:outline-none transition-colors"
                      data-cursor="hover"
                    >
                      <span className={`tracking-tight pr-8 transition-colors duration-300 ${value === `item-${index}` ? 'text-signal' : 'text-mist-100 group-hover:text-cream'}`}>
                        {faq.q}
                      </span>
                      <div className="shrink-0 text-mist-700 transition-transform duration-300 group-hover:text-cream">
                        {value === `item-${index}` ? <Minus size={20} className="text-signal" /> : <Plus size={20} />}
                      </div>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content asChild forceMount>
                    <AnimatePresence initial={false}>
                      {value === `item-${index}` && (
                        <motion.div
                          initial="collapsed"
                          animate="open"
                          exit="collapsed"
                          variants={{
                            open: { opacity: 1, height: 'auto', marginBottom: 24, marginTop: -8 },
                            collapsed: { opacity: 0, height: 0, marginBottom: 0, marginTop: 0 },
                          }}
                          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="overflow-hidden"
                        >
                          <p className="text-mist-700 text-sm md:text-base leading-relaxed pr-8">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
