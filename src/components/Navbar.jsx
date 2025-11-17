import React from 'react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.9)]" />
          <span className="text-white font-semibold">Pyramid</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#about" className="text-blue-200 hover:text-white">About</a>
          <a href="#pyramid" className="text-blue-200 hover:text-white">Pyramid</a>
          <a href="/test" className="text-blue-200 hover:text-white">Backend Test</a>
        </nav>
      </div>
    </header>
  )
}
