import { motion } from 'framer-motion'
import { fadeUp } from '../lib/motion'

export default function SectionHeading({ kicker, title, description, align = 'left' }) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : ''

  return (
    <motion.div variants={fadeUp} className={`${alignCls} max-w-2xl`}
      initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }}>
      {kicker ? (
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
          {kicker}
        </p>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
          {description}
        </p>
      ) : null}
    </motion.div>
  )
}
