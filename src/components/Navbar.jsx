import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Container from './Container'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Values', href: '#values' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <motion.a href="#" whileHover={{ scale: 1.05 }} className="group inline-flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold shadow-glow">
            N
          </span>
          
          <span className="text-sm font-semibold tracking-wide text-white">
            NovaSphere<span className="text-white/50">.studio</span>
          </span>
        </motion.a>


        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <motion.a
              key={l.href}
              href={l.href}
              whileHover={{ scale: 1.05 }}
              className="text-sm font-medium text-white/70 transition hover:text-white"
            >
              {l.label}
            </motion.a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:opacity-90"
          >
            Let&apos;s talk
          </a>
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-white/5 bg-slate-950 md:hidden"
          >
            <Container className="py-4">
              <div className="flex flex-col gap-3">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/80"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-slate-950"
                >
                  Let&apos;s talk
                </a>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
