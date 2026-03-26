"use client"

import { useId, useState } from "react"

export default function GridBackground() {
  const patternId = useId()
  const maskId = useId()
  const [pos, setPos] = useState({ x: 0, y: 0 })

  return (
    <div
      onMouseMove={(e) =>
        setPos({ x: e.clientX, y: e.clientY })
      }
      className="absolute inset-0 -z-10 overflow-hidden bg-black"
    >
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <pattern
            id={patternId}
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M.5 40V.5H40"
              fill="none"
              stroke="currentColor"
              className="text-neutral-400/15 dark:text-neutral-700/20"
            />
          </pattern>

          {/* fade edge */}
          <radialGradient id={maskId}>
            <stop offset="40%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </radialGradient>

          <mask id="fade-mask">
            <rect width="100%" height="100%" fill={`url(#${maskId})`} />
          </mask>
        </defs>

        <rect
          width="100%"
          height="100%"
          fill={`url(#${patternId})`}
          mask="url(#fade-mask)"
        />
      </svg>

      {/* glow hover */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          maskImage: `radial-gradient(
            300px at ${pos.x}px ${pos.y}px,
            white,
            transparent
          )`,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.15), transparent 40%)",
        }}
      />
    </div>
  )
}