import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      {/* Glow pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_600px_at_10%_10%,rgba(59,130,246,0.08),transparent),radial-gradient(800px_500px_at_90%_20%,rgba(168,85,247,0.06),transparent)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <About />

        {/* Callout */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-2xl font-semibold text-white">You are early</h3>
            <p className="mt-2 text-blue-200/90">
              The beacon above the apex glows brighter as momentum builds. Stake your spot while there\'s room at the base.
            </p>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-blue-300/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>Concept page for a pyramid strategy game.</p>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#pyramid" className="hover:text-white">Pyramid</a>
            <a href="/test" className="hover:text-white">Backend Test</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
