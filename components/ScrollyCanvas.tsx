'use client'

import { useEffect, useRef, useState } from 'react'
import { useScroll, useMotionValueEvent } from 'framer-motion'

const TOTAL_FRAMES = 120
const FRAME_PATH = (i: number) => {
  const padded = String(i).padStart(3, '0')
  return `/sequence/frame_${padded}_delay-0.066s.webp`
}

export default function ScrollyCanvas({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const currentFrameRef = useRef(0)
  const rafRef = useRef<number | null>(null)
  const [loaded, setLoaded] = useState(false)
  const [loadProgress, setLoadProgress] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Preload all frames
  useEffect(() => {
    let loadedCount = 0
    const images: HTMLImageElement[] = []

    const onLoad = () => {
      loadedCount++
      setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100))
      if (loadedCount === TOTAL_FRAMES) {
        imagesRef.current = images
        setLoaded(true)
        drawFrame(0)
      }
    }

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image()
      img.src = FRAME_PATH(i)
      img.onload = onLoad
      img.onerror = onLoad // count errors so we don't hang
      images[i] = img
    }
  }, [])

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current
    const images = imagesRef.current
    if (!canvas || !images[index]?.complete) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const img = images[index]
    const cw = canvas.width
    const ch = canvas.height
    const iw = img.naturalWidth
    const ih = img.naturalHeight

    if (!iw || !ih) return

    // Cover logic
    const scale = Math.max(cw / iw, ch / ih)
    const nw = iw * scale
    const nh = ih * scale
    const ox = (cw - nw) / 2
    const oy = (ch - nh) / 2

    ctx.clearRect(0, 0, cw, ch)
    ctx.drawImage(img, ox, oy, nw, nh)
  }

  // Resize canvas to viewport
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      if (loaded) drawFrame(currentFrameRef.current)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [loaded])

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const frameIndex = Math.min(
      Math.floor(latest * TOTAL_FRAMES),
      TOTAL_FRAMES - 1
    )

    if (frameIndex === currentFrameRef.current) return
    currentFrameRef.current = frameIndex

    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      drawFrame(frameIndex)
    })
  })

  return (
    <div ref={containerRef} style={{ height: '600vh', position: 'relative' }}>
      {/* Loading screen */}
      {!loaded && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: '#121212',
            zIndex: 50,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
          }}
        >
          <div style={{ color: 'white', fontSize: '14px', letterSpacing: '0.15em', opacity: 0.5 }}>
            LOADING
          </div>
          <div
            style={{
              width: '200px',
              height: '1px',
              background: 'rgba(255,255,255,0.1)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                height: '100%',
                width: `${loadProgress}%`,
                background: '#7c3aed',
                transition: 'width 0.1s ease',
              }}
            />
          </div>
          <div style={{ color: 'white', fontSize: '12px', opacity: 0.3 }}>
            {loadProgress}%
          </div>
        </div>
      )}

      {/* Sticky canvas */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
          }}
        />
        {/* Overlay content on top of canvas */}
        {loaded && children}
      </div>
    </div>
  )
}
