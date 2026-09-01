import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const MotionLink = motion.create(Link)

export default function MagneticButton({ children, className, to, href, ...props }) {
  const sharedProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
    transition: { type: 'spring', stiffness: 400, damping: 25 },
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
