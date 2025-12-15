import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

export default function ScrollCard({
  children,
  className = '',
  yRange = [16, 0],
  scaleRange = [0.98, 1],
  rotateRange = [-1.2, 0],
}) {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.92', 'start 0.35'],
  })

  const y = useTransform(scrollYProgress, [0, 1], yRange)
  const scale = useTransform(scrollYProgress, [0, 1], scaleRange)
  const rotate = useTransform(scrollYProgress, [0, 1], rotateRange)
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.div
      ref={ref}
      style={reduceMotion ? undefined : { y, scale, rotate, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
