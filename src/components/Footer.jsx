import Container from './Container'
import { motion } from 'framer-motion'
import { fadeUp } from '../lib/motion'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950">
      <Container className="py-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} NovaSphere Studio. Concept landing page
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#services" className="text-sm text-white/60 transition hover:text-white">Services</a>
            <a href="#values" className="text-sm text-white/60 transition hover:text-white">Values</a>
            <a href="#contact" className="text-sm text-white/60 transition hover:text-white">Contact</a>
          </div>
        </motion.div>
      </Container>
    </footer>
  )
}
