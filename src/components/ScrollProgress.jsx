import { motion, useReducedMotion, useScroll } from 'framer-motion'

export default function ScrollProgress() {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()

  if (reduceMotion) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute left-0 right-0 top-0 h-0.5 origin-left bg-white/60"
      style={{ scaleX: scrollYProgress }}
    />
  )
}
