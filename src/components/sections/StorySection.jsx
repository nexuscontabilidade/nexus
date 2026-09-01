import { motion } from 'framer-motion'
import { storyChapters } from '../../data/content'

function Art01() {
  return (
    <div className="relative w-full aspect-square md:aspect-[4/3] flex items-center justify-center pointer-events-none">
      <div className="absolute w-64 h-64 bg-signal mix-blend-difference rounded-full blur-2xl opacity-40 animate-pulse-slow"></div>
      <div className="relative" style={{ perspective: 800 }}>
        <motion.img
          src="/images/Logo-Pequena.png"
          alt=""
          className="w-40 h-40 object-contain drop-shadow-[0_0_25px_rgba(247,81,31,0.5)]"
          animate={{ rotateY: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        />
      </div>
      <div className="absolute inset-0 border-[1px] border-cream/10" style={{ backgroundImage: 'linear-gradient(rgba(250,237,229,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(250,237,229,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
    </div>
  )
}

function Art02() {
  return (
    <div className="relative w-full aspect-square md:aspect-[4/3] flex items-center justify-center pointer-events-none group">
      <div className="w-1 h-3/4 bg-cream/20 mx-4"></div>
      <div className="w-16 h-1/2 bg-signal/80 mx-4 transition-transform group-hover:scale-y-110"></div>
      <div className="w-1 h-2/3 bg-cream/20 mx-4"></div>
      <div className="w-1 h-1/4 bg-cream/10 mx-4"></div>
      <div className="w-8 h-8 bg-ember rounded-full mx-4 absolute right-1/4 top-1/4 animate-bounce"></div>
    </div>
  )
}

export default function StorySection() {
  return (
    <section className="bg-ink-950 py-32 md:py-40 relative overflow-hidden text-mist-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col pt-12">
        {storyChapters.map((chapter, i) => (
          <div key={i} className="mb-24 md:mb-32 relative last:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center`}
            >
              <div className={`relative z-10 ${chapter.align === 'right' ? 'md:col-start-2 md:row-start-1' : ''}`}>
                <div className="absolute -top-16 md:-top-24 -left-8 md:-left-16 font-display text-[10rem] md:text-[14rem] text-cream/[0.03] leading-none select-none pointer-events-none font-bold">
                  {chapter.num}
                </div>

                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight mb-8">
                  {chapter.title}
                </h2>

                <div className="flex flex-col gap-6 text-mist-900 text-lg leading-relaxed">
                  <p>{chapter.p1}</p>
                  <p>{chapter.p2}</p>
                </div>
              </div>

              <div className={`relative z-0 ${chapter.align === 'right' ? 'md:col-start-1 md:row-start-1' : ''}`}>
                {i === 0 ? <Art01 /> : <Art02 />}
              </div>
            </motion.div>

            {i < storyChapters.length - 1 && (
              <div className="my-24 md:my-32 relative flex justify-center items-center">
                <hr className="w-full border-cream/5 absolute" />
                <span className="bg-ink-950 px-4 font-mono text-xs text-cream/20 relative">Capítulo {storyChapters[i + 1].num}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
