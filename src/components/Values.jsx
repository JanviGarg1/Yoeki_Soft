import { motion } from 'framer-motion'
import { CheckCircle2, Fingerprint, Layers3, Zap } from 'lucide-react'
import Container from './Container'
import SectionHeading from './SectionHeading'
import { fadeUp, stagger } from '../lib/motion'

const values = [
  {
    icon: Zap,
    title: 'Crafted, not cluttered',
    desc: 'Clear hierarchy, generous spacing, and copy-first layouts that keep the focus on your product.',
  },
  {
    icon: Layers3,
    title: 'Performance by default',
    desc: 'Responsive, accessible, and production-ready experiences that feel fast on any device.',
  },
  {
    icon: Fingerprint,
    title: 'Partnership mindset',
    desc: 'We plug into your team, align on goals, and treat your launch as if it were our own.',
  },
  {
    icon: CheckCircle2,
    title: 'Reliable delivery',
    desc: 'Thoughtful handoff, clear documentation, and maintainable code so iteration stays easy.',
  },
]

export default function Values() {
  return (
    <section id="values" className="relative border-t border-white/5">
      <Container className="py-16 sm:py-24">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <SectionHeading
              kicker="How we work"
              title="Principles behind every project"
              description="Straightforward foundations—clear content hierarchy, accessible patterns, and layouts that scale with your product."
            />


            <motion.div variants={fadeUp} className="grid gap-4">
              {values.map((v, idx) => {
                const Icon = v.icon
                return (
                  <motion.div
                    key={v.title}
                    whileHover={{ y: -2 }}
                    transition={{ type: 'spring', stiffness: 250, damping: 22 }}
                    className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-slate-950/30">
                        <Icon size={20} className="text-white/80" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          <span className="mr-2 text-white/40">0{idx + 1}.</span>
                          {v.title}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-white/70">{v.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
