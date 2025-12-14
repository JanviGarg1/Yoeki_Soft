import Container from './Container'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950">
      <Container className="py-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} NovaSphere Studio. Concept landing page built with React, Tailwind CSS &amp; Framer Motion.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#services" className="text-sm text-white/60 transition hover:text-white">Services</a>
            <a href="#values" className="text-sm text-white/60 transition hover:text-white">Values</a>
            <a href="#contact" className="text-sm text-white/60 transition hover:text-white">Contact</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
