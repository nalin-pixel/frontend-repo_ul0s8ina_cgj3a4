import React from 'react'

export default function About() {
  const features = [
    {
      title: 'Foundations',
      desc: 'Join at the base. Contribute to unlock the next step. Early positions gain visibility as the structure grows.'
    },
    {
      title: 'Tiers & Progression',
      desc: 'Each tier opens after the previous fills. Climb to unlock perks, tools, and bragging rights.'
    },
    {
      title: 'Signals',
      desc: 'Status beacons hover above the apex to show how early the cycle is. When the orb glows bright, momentum is up.'
    },
  ]

  return (
    <section id="about" className="relative py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">How the game works</h2>
          <p className="mt-3 text-blue-200/90">
            Take your place in the structure, bring your circle, and rise together. Rewards scale with your elevation and timing.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white/5 border border-white/10 rounded-xl p-5 text-blue-100 hover:bg-white/10 transition-colors">
              <h3 className="font-semibold text-white text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-blue-200/90">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 rounded-xl p-6 text-center">
          <p className="text-blue-100">
            This is an informational preview page designed to showcase the concept and visuals. Add your own rules, on-chain mechanics, or leaderboards next.
          </p>
        </div>
      </div>
    </section>
  )
}
