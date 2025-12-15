import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Values from './components/Values'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Values />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
