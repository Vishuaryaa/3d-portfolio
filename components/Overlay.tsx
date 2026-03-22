'use client'

import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

interface OverlaySectionProps {
  children: React.ReactNode
  startPct: number
  endPct: number
  align?: 'left' | 'center' | 'right'
}

function OverlaySection({ children, startPct, endPct, align = 'center' }: OverlaySectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  // We use a single scroll container ref - get scrollYProgress from parent
  // Instead, compute scroll offsets manually using window scroll vs container
  // Using a shared approach: listen to document scroll

  const midPct = (startPct + endPct) / 2
  const fadeDuration = (endPct - startPct) * 0.3

  // scrollYProgress of the 600vh container maps 0->1 across 600vh
  // We'll use a workaround: animate based on CSS custom properties via JS
  // But for simplicity, use useScroll on the scrolly container via a passed ref
  // We handle it via a simpler approach: use useScroll on window

  const { scrollYProgress } = useScroll()

  const opacity = useTransform(
    scrollYProgress,
    [
      startPct - fadeDuration,
      startPct,
      midPct,
      endPct,
      endPct + fadeDuration,
    ],
    [0, 1, 1, 1, 0]
  )

  const y = useTransform(
    scrollYProgress,
    [startPct - fadeDuration, startPct],
    [30, 0]
  )

  const alignClass =
    align === 'left'
      ? 'items-start text-left pl-10 md:pl-20'
      : align === 'right'
      ? 'items-end text-right pr-10 md:pr-20'
      : 'items-center text-center'

  return (
    <motion.div
      style={{ opacity, y }}
      className={`absolute inset-0 flex flex-col justify-center ${alignClass} pointer-events-none`}
    >
      {children}
    </motion.div>
  )
}

export default function Overlay() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 10,
        pointerEvents: 'none',
      }}
    >
      {/* Section 1: 0-20% - Hero intro */}
      <OverlaySection startPct={0} endPct={0.2} align="center">
        <h1
          className="font-black tracking-tight text-white"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', lineHeight: 1.1 }}
        >
          Vishvendra Arya
        </h1>
        <p
          className="font-black tracking-tight mt-4"
          style={{
            fontSize: 'clamp(1rem, 3vw, 2rem)',
            color: 'rgba(255,255,255,0.55)',
          }}
        >
          Software Engineer. AI Engineer.
        </p>
      </OverlaySection>

      {/* Section 2: 25-45% - What I build */}
      <OverlaySection startPct={0.25} endPct={0.45} align="left">
        <span
          className="font-black tracking-tight text-white block"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', lineHeight: 1.05 }}
        >
          I build AI products
        </span>
        <span
          className="font-black tracking-tight block"
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
            lineHeight: 1.05,
            color: '#a78bfa',
          }}
        >
          that solve real problems.
        </span>
      </OverlaySection>

      {/* Section 3: 50-70% - Track record */}
      <OverlaySection startPct={0.5} endPct={0.7} align="right">
        <span
          className="font-black tracking-tight text-white block"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', lineHeight: 1.05 }}
        >
          3 years. 6 products.
        </span>
        <span
          className="font-black tracking-tight block"
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
            lineHeight: 1.05,
            color: 'rgba(255,255,255,0.45)',
          }}
        >
          shipped and live.
        </span>
      </OverlaySection>

      {/* Section 4: 75-90% - Current role */}
      <OverlaySection startPct={0.75} endPct={0.92} align="center">
        <span
          className="font-black tracking-tight text-white block"
          style={{ fontSize: 'clamp(2rem, 5.5vw, 4.5rem)', lineHeight: 1.1 }}
        >
          Currently at MoonDive.
        </span>
        <span
          className="font-black tracking-tight block mt-2"
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.75rem)',
            color: 'rgba(255,255,255,0.4)',
          }}
        >
          Noida, India.
        </span>
      </OverlaySection>

      {/* Scroll hint at very bottom */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.3)' }}>
          SCROLL
        </span>
        <motion.div
          style={{
            width: 1,
            height: 40,
            background: 'rgba(255,255,255,0.2)',
          }}
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        />
      </motion.div>
    </div>
  )
}
