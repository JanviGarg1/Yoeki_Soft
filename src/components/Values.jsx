import { motion } from 'framer-motion'
import { CheckCircle2, Fingerprint, Layers3, Zap } from 'lucide-react'
import Container from './Container'
import SectionHeading from './SectionHeading'
import ScrollCard from './ScrollCard'
import { fadeUp, stagger, staggerTight } from '../lib/motion'

const values = [
  { icon: Zap, title: 'Crafted, not cluttered', desc: 'Clear hierarchy and copy-first layouts that keep attention on the product.' },
  { icon: Layers3, title: 'Performance by default', desc: 'Fast, accessible, production-ready UI that scales across breakpoints.' },
  { icon: Fingerprint, title: 'Partnership mindset', desc: 'We align on goals and deliver like we’re part of your team.' },
  { icon: CheckCircle2, title: 'Reliable delivery', desc: 'Maintainable code + clean handoff so iteration stays easy.' },
]

export default function Values() {
  return (
    <section id="values" className="relative border-t border-white/5">
      <Container className="py-16 sm:py-24">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
          <SectionHeading
            kicker="How we work"
            title="Principles behind every project"
            description="Reveal + scroll-linked transforms make these cards feel alive during reading."
          />

          <motion.div variants={staggerTight} className="mt-10 grid gap-4 lg:grid-cols-2">
            {values.map((v, idx) => {
              const Icon = v.icon
              return (
                <ScrollCard key={v.title} rotateRange={idx % 2 === 0 ? [-1.1, 0] : [1.1, 0]}>
                  <motion.div
                    variants={fadeUp}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.985 }}
                    transition={{ type: 'spring', stiffness: 250, damping: 22 }}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow"
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
                </ScrollCard>
              )
            })}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
