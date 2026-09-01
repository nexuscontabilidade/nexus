import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ScrollReveal from '../ui/ScrollReveal'
import { processSteps } from '../../data/content'

function StepItem({ step, index }) {
  const { ref, inView } = useInView({ threshold: 0.5 })

  return (
    <div ref={ref} className="min-h-[70vh] flex items-center relative py-20">
      <div className="absolute left-0 w-8 h-8 -translate-x-1/2 flex items-center justify-center z-10">
        <motion.div
          className="w-4 h-4 rounded-full border-2 transition-colors duration-500"
          animate={{
            borderColor: inView ? '#f7511f' : 'rgba(250,237,229,0.2)',
            backgroundColor: inView ? '#f7511f' : '#242424',
          }}
        />
      </div>

      <motion.div
        initial={{ x: 60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ margin: '-20%' }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="pl-16 md:pl-24 relative w-full max-w-2xl"
      >
        <div className="absolute -top-10 md:-top-16 left-12 md:left-16 font-display text-[6rem] md:text-[9rem] text-cream/5 font-bold leading-none select-none pointer-events-none">
          0{index + 1}
        </div>

        <div className="relative z-10">
          <span className="inline-block border border-cream/10 text-mist-900 bg-ink-950 font-mono text-xs px-3 py-1 rounded-full mb-6">
            {step.duration}
          </span>
          <h3 className={`font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 tracking-tight transition-colors duration-500 ${inView ? 'text-cream' : 'text-mist-500'}`}>
            {step.title}
          </h3>
          <p className={`font-body text-lg md:text-xl mb-6 transition-colors duration-500 ${inView ? 'text-signal' : 'text-mist-700'}`}>
            "{step.tagline}"
          </p>
          <p className="text-mist-900 text-base leading-relaxed max-w-lg">
            {step.desc}
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProcessTimeline() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end end'],
  })
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section ref={containerRef} className="bg-ink-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-16">
        <ScrollReveal>
          <p className="font-mono text-xs text-signal uppercase tracking-widest mb-4">Como Trabalhamos</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">Do diagnóstico ao resultado.</h2>
        </ScrollReveal>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative w-full">
        <div className="w-px bg-cream/5 absolute top-0 bottom-0 left-6 md:left-12 opacity-50"></div>

        <motion.div
          className="w-[3px] -ml-[1px] absolute top-0 bottom-0 left-6 md:left-12 bg-gradient-to-b from-signal/10 via-signal to-signal/10 origin-top shadow-[0_0_15px_rgba(247,81,31,0.5)] z-0"
          style={{ scaleY }}
        />

        <div className="pb-32">
          {processSteps.map((step, index) => (
            <StepItem key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
