import { motion } from 'framer-motion'

/**
 * Camada de fundo com orbs de gradiente que flutuam lentamente.
 * Sempre absolute/inset-0/pointer-events-none — o pai precisa de
 * `relative overflow-hidden` e o conteúdo real precisa de `relative z-10`.
 */
export default function AmbientBackground({ className = '' }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
      <motion.div
        className="absolute w-[450px] h-[450px] bg-signal rounded-full opacity-[0.05] blur-[110px]"
        style={{ top: '-10%', left: '-8%' }}
        animate={{ x: [0, 50, 0], y: [0, 35, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] bg-ember rounded-full opacity-[0.05] blur-[100px]"
        style={{ bottom: '-12%', right: '-6%' }}
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" />
    </div>
  )
}
