import React from 'react'

/*
  Simple 3D-ish pyramid built with CSS transforms.
  - Rotates slowly to give a 3D vibe
  - Glowing "early" orb hovering above the apex
*/
export default function Pyramid({ size = 260 }) {
  const faceSize = size
  const half = faceSize / 2

  return (
    <div className="relative flex items-center justify-center" style={{ perspective: 900 }}>
      {/* Hovering orb signaling "You're early" */}
      <div
        className="absolute -top-10 z-20 flex items-center justify-center"
        style={{
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <div className="relative">
          <div
            className="w-6 h-6 rounded-full bg-blue-400 shadow-[0_0_25px_rgba(59,130,246,0.8)] animate-pulse"
            aria-hidden
          />
          <span className="absolute left-1/2 -translate-x-1/2 mt-2 text-xs text-blue-200 whitespace-nowrap">
            You\'re early
          </span>
        </div>
      </div>

      {/* Base shadow */}
      <div
        className="absolute rounded-full bg-blue-500/20 blur-2xl"
        style={{ width: faceSize * 0.9, height: faceSize * 0.18, bottom: -20 }}
      />

      {/* Pyramid wrapper */}
      <div
        className="relative"
        style={{
          width: faceSize,
          height: faceSize,
          transformStyle: 'preserve-3d',
          animation: 'spinY 18s linear infinite',
        }}
      >
        {/* 4 triangular faces */}
        <div
          className="absolute"
          style={{
            width: faceSize,
            height: faceSize,
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            background:
              'linear-gradient(to bottom, rgba(59,130,246,0.9), rgba(59,130,246,0.2))',
            transform: `rotateY(0deg) rotateX(60deg) translateZ(${half}px)`,
            transformOrigin: '50% 50%',
            border: '1px solid rgba(59,130,246,0.35)',
            boxShadow: 'inset 0 0 20px rgba(59,130,246,0.35)',
          }}
        />
        <div
          className="absolute"
          style={{
            width: faceSize,
            height: faceSize,
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            background:
              'linear-gradient(to bottom, rgba(124,58,237,0.9), rgba(124,58,237,0.2))',
            transform: `rotateY(90deg) rotateX(60deg) translateZ(${half}px)`,
            transformOrigin: '50% 50%',
            border: '1px solid rgba(124,58,237,0.35)',
            boxShadow: 'inset 0 0 20px rgba(124,58,237,0.35)',
          }}
        />
        <div
          className="absolute"
          style={{
            width: faceSize,
            height: faceSize,
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            background:
              'linear-gradient(to bottom, rgba(16,185,129,0.9), rgba(16,185,129,0.2))',
            transform: `rotateY(180deg) rotateX(60deg) translateZ(${half}px)`,
            transformOrigin: '50% 50%',
            border: '1px solid rgba(16,185,129,0.35)',
            boxShadow: 'inset 0 0 20px rgba(16,185,129,0.35)',
          }}
        />
        <div
          className="absolute"
          style={{
            width: faceSize,
            height: faceSize,
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            background:
              'linear-gradient(to bottom, rgba(234,179,8,0.9), rgba(234,179,8,0.2))',
            transform: `rotateY(270deg) rotateX(60deg) translateZ(${half}px)`,
            transformOrigin: '50% 50%',
            border: '1px solid rgba(234,179,8,0.35)',
            boxShadow: 'inset 0 0 20px rgba(234,179,8,0.35)',
          }}
        />
      </div>

      {/* Keyframes for rotation */}
      <style>{`
        @keyframes spinY {
          0% { transform: rotateX(0deg) rotateY(0deg); }
          100% { transform: rotateX(0deg) rotateY(360deg); }
        }
      `}</style>
    </div>
  )
}
