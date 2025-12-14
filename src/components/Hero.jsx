import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Container from './Container'
import { fadeUp, stagger } from '../lib/motion'

const stats = [
  { value: '24h', label: 'Avg. response time' },
  { value: '50+', label: 'Web experiences shipped' },
  { value: '100%', label: 'Remote-friendly collaboration' },
]


export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -left-24 top-56 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -right-24 top-72 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <Container className="relative py-16 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.p
              variants={fadeUp}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70"
            >
              <Sparkles size={14} className="text-white/70" />
              Product design & engineering studio for modern brands
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-4xl font-semibold tracking-tight text-white sm:text-5xl"
            >
              Launch a polished product site in weeks, not months.
              <span className="text-white/70"> Without fighting the frontend details.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base"
            >
              Opinionated dark UI, clear hierarchy, and copy-first sections -
              designed to feel premium and intuitive on every screen size.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
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
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 grid grid-cols-3 gap-3 max-w-lg">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-glow"
                >
                  <p className="text-lg font-semibold text-white sm:text-xl">{s.value}</p>
                  <p className="mt-1 text-xs text-white/60">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            className="relative"
          >
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-white/10 to-transparent blur-2xl" />

            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-glow sm:p-6">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
                  Growth dashboard
                </p>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                  Live
                </span>
              </div>

              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                  <p className="text-sm font-semibold text-white">Conversion uplift</p>
                  <p className="mt-1 text-3xl font-semibold text-white">+32%</p>
                  <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '72%' }}
                      transition={{ duration: 1.1, delay: 0.4 }}
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

                <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                  <p className="text-sm font-semibold text-white">Activity</p>
                  <ul className="mt-3 space-y-2 text-xs text-white/70">
                    {[
                      'New brand system delivered',
                      'Landing page shipped to production',
                      'Campaign creatives approved',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-6 -left-6 hidden w-56 rotate-[-6deg] rounded-3xl border border-white/10 bg-white/5 p-4 shadow-glow sm:block animate-floaty">
              <p className="text-xs font-semibold text-white">“Best site refresh we’ve had in years.”</p>
              <p className="mt-2 text-xs text-white/60">— Product Lead</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
