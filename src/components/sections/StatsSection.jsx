import AnimatedCounter from '../ui/AnimatedCounter'
import ScrollReveal from '../ui/ScrollReveal'
import { stats } from '../../data/content'

export default function StatsSection() {
  return (
    <section className="bg-signal py-24 md:py-32 w-full text-ink-950 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Números de exemplo — substitua pelos números reais da Nexus */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-y-20">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className="flex flex-col items-start xl:items-center">
              <div className="font-display text-5xl md:text-7xl font-bold tracking-tighter tabular-nums">
                <AnimatedCounter end={stat.num} suffix={stat.suffix} />
              </div>
              <p className="font-mono text-xs md:text-sm uppercase tracking-widest mt-2 md:mt-4 opacity-80 font-semibold">
                {stat.label}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
