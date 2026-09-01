import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Link } from 'react-router-dom'

const MotionLink = motion.create(Link)

export default function MagneticButton({ children, className, to, href, ...props }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 200, damping: 15 })
  const springY = useSpring(y, { stiffness: 200, damping: 15 })

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.35)
    y.set((e.clientY - centerY) * 0.35)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const sharedProps = {
    ref,
    style: { x: springX, y: springY },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className,
    ...props,
  }

  if (to) {
    return <MotionLink to={to} {...sharedProps}>{children}</MotionLink>
  }

  if (href) {
    return <motion.a href={href} {...sharedProps}>{children}</motion.a>
  }

  return <motion.button {...sharedProps}>{children}</motion.button>
}
