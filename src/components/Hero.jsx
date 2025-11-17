import React from 'react'
import Pyramid from './Pyramid'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-purple-600/20 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-200 px-3 py-1 text-xs tracking-wide">
            EARLY ACCESS
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Ascend the Pyramid. Start at the Foundation.
          </h1>
          <p className="mt-4 text-blue-200/90 text-lg leading-relaxed">
            Welcome to a bold social strategy experience. Build your tier, invite others, and climb together. The higher you go, the more exclusive the rewards — and you\'re still early.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#about" className="px-5 py-2.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors">
              Learn how it works
            </a>
            <a href="#pyramid" className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur-sm transition-colors">
              See the pyramid
            </a>
          </div>

          <div className="mt-6 text-sm text-blue-300/80">
            Transparent mechanics • Community-driven • Invite-only tiers
          </div>
        </div>

        <div id="pyramid" className="flex items-center justify-center">
          <Pyramid size={300} />
        </div>
      </div>
    </section>
  )
}
