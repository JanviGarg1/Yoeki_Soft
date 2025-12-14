import { motion } from 'framer-motion'
import { Code2, Megaphone, Palette, BarChart3, Rocket, ShieldCheck } from 'lucide-react'
import Container from './Container'
import SectionHeading from './SectionHeading'
import { fadeUp, stagger } from '../lib/motion'

const services = [
  {
    icon: Palette,
    title: 'Brand & Visual Direction',
    desc: 'Visual identity, color, and type systems that feel cohesive across product and marketing.',
  },
  {
    icon: Code2,
    title: 'Marketing Websites',
    desc: 'Responsive React builds wired for performance, accessibility, and SEO-friendly structure.',
  },
  {
    icon: Megaphone,
    title: 'Launch & Campaign Pages',
    desc: 'Focused landing pages for new features, launches, and paid traffic that are easy to iterate on.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Experimentation',
    desc: 'Clean instrumentation and simple dashboards so you can understand what actually converts.',
  },
  {
    icon: ShieldCheck,
    title: 'UX Review & Polish',
    desc: 'Interaction details, microcopy, and error states that make your experience feel trustworthy.',
  },
  {
    icon: Rocket,
    title: 'Ongoing Iteration',
    desc: 'Retainer-style support to keep your site aligned with a fast-moving product roadmap.',
  },
]


export default function Services() {
  return (
    <section id="services" className="relative border-t border-white/5 bg-slate-950">
      <Container className="py-16 sm:py-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <SectionHeading
            kicker="Services"
            title="A focused set of services for modern product teams"
            description="From first impression to final CTA, we design and ship the pieces that make your product story clear."
          />


          <motion.div variants={fadeUp} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.title}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-slate-950/30">
                      <Icon size={20} className="text-white/80" />
                    </span>
                    <p className="text-base font-semibold text-white">{s.title}</p>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-white/70">{s.desc}</p>
                  <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                  <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-white/50">
                    Learn more
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
