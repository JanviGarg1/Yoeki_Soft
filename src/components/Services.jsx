import { useRef, useState } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useSpring,
} from 'framer-motion'
import { Code2, Megaphone, Palette, BarChart3, Rocket, ShieldCheck } from 'lucide-react'
import Container from './Container'
import SectionHeading from './SectionHeading'

const services = [
  { icon: Palette, title: 'Brand & Visual Direction', desc: 'Visual identity, color, and type systems that feel cohesive across product and marketing.' },
  { icon: Code2, title: 'Marketing Websites', desc: 'Responsive React builds wired for performance, accessibility, and SEO-friendly structure.' },
  { icon: Megaphone, title: 'Launch & Campaign Pages', desc: 'Focused landing pages for new features, launches, and paid traffic that are easy to iterate on.' },
  { icon: BarChart3, title: 'Analytics & Experimentation', desc: 'Clean instrumentation and simple dashboards so you can understand what actually converts.' },
  { icon: ShieldCheck, title: 'UX Review & Polish', desc: 'Interaction details, microcopy, and error states that make your experience feel trustworthy.' },
  { icon: Rocket, title: 'Ongoing Iteration', desc: 'Retainer-style support to keep your site aligned with a fast-moving product roadmap.' },
]

function StoryCard({ item, index, total, progress }) {
  const pad = 0.06
  const baseStart = index / total
  const baseEnd = (index + 1) / total
  const start = Math.max(0, baseStart - pad)
  const end = Math.min(1, baseEnd + pad)
  const mid = (baseStart + baseEnd) / 2

  const sign = index % 2 === 0 ? -1 : 1

  // Smooth transforms based on SMOOTH progress
  const y = useTransform(progress, [start, mid, end], [88, 0, -88])
  const opacity = useTransform(progress, [start, mid, end], [0, 1, 0])
  const scale = useTransform(progress, [start, mid, end], [0.94, 1, 0.96])
  const rotate = useTransform(progress, [start, mid, end], [2.4 * sign, 0, -2.4 * sign])

  const Icon = item.icon
  const zIndex = total - index

  return (
    <motion.div
      className="absolute left-0 right-0 top-0 will-change-transform"
      style={{ y, opacity, scale, rotate, zIndex, transformOrigin: 'center' }}
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur">
        {/* decorative blobs */}
        <div className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-white/5 blur-2xl" />

        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-slate-950/30">
            <Icon size={20} className="text-white/80" />
          </span>
          <p className="text-base font-semibold text-white">{item.title}</p>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-white/70">{item.desc}</p>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="h-10 rounded-2xl border border-white/10 bg-slate-950/30"
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 3.2 + i * 0.35,
                repeat: Infinity,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          ))}
        </div>

        <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-white/50">
          Step {index + 1} of {total}
        </p>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const sectionRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const total = services.length

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200, 
    damping: 90,    
    mass: 1,
  })

  const [active, setActive] = useState(0)
  useMotionValueEvent(smoothProgress, 'change', (v) => {
    const idx = Math.min(total - 1, Math.max(0, Math.floor(v * total)))
    setActive(idx)
  })

  // progress fill
  const fillH = useTransform(smoothProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="services" ref={sectionRef} className="relative border-t border-white/5 bg-slate-950">
      <Container className="py-16 sm:py-24">
        <SectionHeading
          kicker="Services"
          title="Scrollbar-driven storytelling"
          description="This section pins a stage and binds the scrollbar to a cards array (smooth Framer Motion spring)."
        />

        <div className="relative mt-10 h-[300vh]">
          {/* sticky stage */}
          <div className="sticky top-20">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-glow">
              <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
                {/* steps list */}
                <div className="relative rounded-3xl border border-white/10 bg-slate-950/30 p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
                    Scroll steps
                  </p>

                  <div className="mt-4 flex gap-4">
                    {/* progress bar */}
                    <div className="relative w-2 shrink-0 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="absolute left-0 top-0 w-full bg-white/60"
                        style={reduceMotion ? undefined : { height: fillH }}
                      />
                    </div>

                    <div className="flex-1 space-y-2">
                      {services.map((s, idx) => (
                        <div
                          key={s.title}
                          className={`rounded-2xl border px-4 py-3 transition ${idx === active
                              ? 'border-white/20 bg-white/10 text-white'
                              : 'border-white/10 bg-white/5 text-white/70'
                            }`}
                        >
                          <p className="text-sm font-semibold">{s.title}</p>
                          <p className="mt-1 text-xs leading-relaxed opacity-80">{s.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute -right-6 -top-6 h-12 w-12 rounded-2xl border border-white/10 bg-white/5 will-change-transform"
                    animate={reduceMotion ? undefined : { y: [0, -10, 0], rotate: [0, 8, 0] }}
                    transition={{ duration: 5.8, repeat: Infinity, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>

                {/* smoothProgress */}
                <div className="relative min-h-[420px] rounded-3xl border border-white/10 bg-slate-950/30 p-5 overflow-hidden">
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
                    Services offered
                  </p>

                  <div className="relative mt-4 h-[520px]">
                    {reduceMotion ? (
                      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                        <p className="text-sm text-white/70">
                          Motion reduced: service cards static.
                        </p>
                      </div>
                    ) : (
                      services.map((s, idx) => (
                        <StoryCard
                          key={s.title}
                          item={s}
                          index={idx}
                          total={total}
                          progress={smoothProgress}
                        />
                      ))
                    )}
                  </div>

                  <p className="mt-3 text-xs text-white/50">
                    Scroll to explore <span className="text-white/70">({services.length} steps)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
