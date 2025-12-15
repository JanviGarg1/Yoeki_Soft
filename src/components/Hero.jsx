import { useMemo, useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react'
import Container from './Container'
import { easeOut } from '../lib/motion'

export default function Hero() {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const panelY = useTransform(scrollYProgress, [0, 1], [0, -90])
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -45])
  const cubeRotate = useTransform(scrollYProgress, [0, 1], [0, 18])

  const shapes = useMemo(
    () => [
      { cls: 'absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl', y: bgY },
      { cls: 'absolute top-44 -left-24 h-72 w-72 rounded-full bg-white/6 blur-3xl', y: bgY },
      { cls: 'absolute top-72 -right-24 h-72 w-72 rounded-full bg-white/6 blur-3xl', y: bgY },
    ],
    [bgY]
  )

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {shapes.map((s, i) => (
          <motion.div key={i} className={s.cls} style={reduceMotion ? undefined : { y: s.y }} />
        ))}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-10 top-24 h-10 w-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
          animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: easeOut }}
          style={reduceMotion ? undefined : { rotate: cubeRotate }}
        />
        <motion.div
          className="absolute right-16 top-28 h-14 w-14 rounded-3xl border border-white/10 bg-white/5 backdrop-blur"
          animate={reduceMotion ? undefined : { y: [0, 12, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: easeOut }}
        />
        <motion.div
          className="absolute right-10 bottom-32 h-24 w-24 rounded-full border border-white/10 bg-white/5 blur-[0.2px]"
          animate={reduceMotion ? undefined : { y: [0, -14, 0] }}
          transition={{ duration: 7.2, repeat: Infinity, ease: easeOut }}
          style={reduceMotion ? undefined : { rotate: cubeRotate }}
        />
      </div>

      <Container className="relative py-16 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            <motion.p
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70"
              whileHover={{ scale: 1.02 }}
            >
              <Sparkles size={14} className="text-white/70" />
              Product design & engineering studio for modern brands
            </motion.p>

            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Bring your digital presence to light.
              <span className="text-white/70"> With scroll storytelling that feels premium.</span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
              Reveal-on-scroll sections, scroll-linked card motion, subtle parallax decor, and rotating social proof —
              all implemented with Framer Motion.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
              >
                Start a project <ArrowRight size={16} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10"
              >
                Explore services
              </a>
            </div>
          </motion.div>

          <motion.div
            style={reduceMotion ? undefined : { y: panelY }}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: easeOut, delay: 0.05 }}
            className="relative"
          >
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-white/10 to-transparent blur-2xl" />
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-glow sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/60">Scroll-linked card</p>

              <div className="mt-5 grid gap-4">
                <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                  <p className="text-sm font-semibold text-white">Conversion uplift</p>
                  <p className="mt-1 text-3xl font-semibold text-white">+32%</p>
                  <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '72%' }}
                      transition={{ duration: 1.1, delay: 0.3, ease: easeOut }}
                      className="h-2 rounded-full bg-white/70"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/60">Traffic</p>
                    <p className="mt-2 text-2xl font-semibold text-white">84k</p>
                    <p className="mt-1 text-xs text-white/60">Last 30 days</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/60">Retention</p>
                    <p className="mt-2 text-2xl font-semibold text-white">68%</p>
                    <p className="mt-1 text-xs text-white/60">Quarterly</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator loop */}
        <div className="mt-12 flex justify-center">
          <motion.a
            href="#services"
            className="inline-flex flex-col items-center gap-1 text-xs font-semibold uppercase tracking-widest text-white/60"
            whileHover={{ scale: 1.03 }}
          >
            <motion.span
              animate={reduceMotion ? undefined : { opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: easeOut }}
            >
              scroll to know more
            </motion.span>

            <motion.div
              className="flex flex-col items-center"
              animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: easeOut }}
            >
              <ChevronDown size={16} />
              <ChevronDown size={16} className="-mt-2 opacity-70" />
            </motion.div>
          </motion.a>
        </div>
      </Container>
    </section>
  )
}
