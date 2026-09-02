import { motion } from 'framer-motion'

/**
 * Camada de fundo única e fixa para o site inteiro — grade de pontos,
 * três glows laranja à deriva e grain. Espelha o `.bg-deco` do site
 * estático de referência: um único mundo visual por trás de todas as
 * seções, em vez de fundos e brilhos repetidos seção a seção.
 */
export default function BackgroundDecoration() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="absolute -inset-2 opacity-70"
        style={{
          backgroundImage: 'radial-gradient(rgba(250,237,229,0.055) 1px, transparent 1px)',
          backgroundSize: '46px 46px',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 25%, #000 0%, transparent 78%)',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 25%, #000 0%, transparent 78%)',
        }}
      />

      <motion.div
        className="absolute w-[620px] h-[620px] rounded-full blur-[60px]"
        style={{
          top: '-160px',
          right: '-120px',
          background: 'radial-gradient(circle at 60% 40%, rgba(255,114,40,0.34), rgba(247,81,31,0.10) 45%, transparent 72%)',
        }}
        animate={{ x: [0, 30, 0], y: [0, -22, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[520px] h-[520px] rounded-full blur-[60px]"
        style={{
          top: '42%',
          left: '-220px',
          background: 'radial-gradient(circle at 50% 50%, rgba(247,81,31,0.18), transparent 70%)',
        }}
        animate={{ x: [0, 30, 0], y: [0, -22, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut', delay: -6 }}
      />
      <motion.div
        className="absolute w-[460px] h-[460px] rounded-full blur-[60px]"
        style={{
          bottom: '-180px',
          right: '8%',
          background: 'radial-gradient(circle at 50% 50%, rgba(255,162,102,0.14), transparent 70%)',
        }}
        animate={{ x: [0, 30, 0], y: [0, -22, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut', delay: -12 }}
      />

      <div className="grain absolute inset-0 mix-blend-soft-light" />
    </div>
  )
}
